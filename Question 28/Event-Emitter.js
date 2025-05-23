class EventEmitter{
  
    eventMap={}; 
subscribe(eventName, callback) {

  if(!this.eventMap.hasOwnProperty(eventName)) {
    this.eventMap[eventName]=new Set();
  }
  this.eventMap[eventName].add(callback);
  
  return {
  unsubscribe: () => {
  this.eventMap[eventName].delete(callback);
    }
        };
    }
  
  emit(eventName,args=[]){
    const res=[];
    (this.eventMap[eventName] ?? []).forEach((cb)=>{res.push(cb(...args))
    })
    return res;
  }
} 



const emitter = new EventEmitter();

//  Subscribe to the onClick event with onClickCallback
function onClickCallback() { return 99 }
const sub = emitter.subscribe('onClick', onClickCallback);

emitter.emit('onClick'); // [99]
sub.unsubscribe(); // undefined
emitter.emit('onClick'); // []

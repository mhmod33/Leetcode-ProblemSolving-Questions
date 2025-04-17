
async function sleep(millis) { 

    await new Promise((resolve)=>{

      setTimeout(()=>{
         resolve(millis)
      }, millis )
      
    })
}
// the result may differs based on the the cpu , Event loop delay or the browser secheduling

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
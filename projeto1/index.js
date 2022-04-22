import { MQTT } from  "./src/api/mqtt/subscribe.js"
async function loadData(){
    setInterval(function(){
        MQTT().then(msg =>{
            console.log(msg.toString())

        })
    }, 3000)

        

}

loadData()







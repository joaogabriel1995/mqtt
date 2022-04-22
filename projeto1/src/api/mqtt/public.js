import * as mqtt from "mqtt"


const client = mqtt.connect("http://test.mosquitto.org")
client.on("connect", function (){
    console.log("Conexão Realizada com sucesso!")
    setInterval(function(){
        var random = Math.random()
        console.log(random)
        client.publish("/mqtt/nodejs/joao", random.toString())
    },3000)
})





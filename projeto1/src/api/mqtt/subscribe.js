import * as mqtt from "mqtt"



export async function MQTT() {
    let msg = await mensagem()
    return msg
    
}


const client = mqtt.connect("mqtt://test.mosquitto.org ")

client.on("connect", () => {
    console.log("Conexão foi realizada com sucesso!")
    client.subscribe("/mqtt/nodejs/joao", function (error) {
        if (!error) {
            console.log("conectado")
        }
    })
})


const mensagem = () => {
    return new Promise(resolve => {
        client.on("message", (topic, message) => {
            resolve(message)
        })
    })
}




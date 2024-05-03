import { io } from "socket.io-client"
import { v4 as uuidv4 } from "uuid"

const sock = io("http://localhost:3000")
const deviceId = uuidv4()

sock.on("connect",  () => {
  console.log("Connected to server.")

  sock.on("PHOTO", (meta, buffer) => {
    console.log(`PHOTO:\n${JSON.stringify(meta, null, 2)}`)
  })

  sock.emit("TAKE_PHOTO", { message_id: uuidv4() })
})
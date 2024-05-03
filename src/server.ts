import { createServer } from "node:http"
import { Server } from "socket.io"

const PORT = 3000

const io = new Server(createServer())

io.on("connection", sock => {
  console.log(`Client Connected: ${sock.id}`)

  sock.on("disconnect", reason => {
    console.log(`Client Disconnected: ${sock.id}, Reason: ${reason}`)
  })

  sock.on("TAKE_PHOTO", (meta) => {
    console.log(`TAKE_PHOTO:\n${JSON.stringify(meta, null, 2)}`)
    sock.broadcast.emit("TAKE_PHOTO", meta)
  })

  sock.on("PHOTO", (meta, buffer) => {
    console.log(`PHOTO:\n${JSON.stringify(meta, null, 2)}`)
    sock.broadcast.emit("PHOTO", meta)
  })

})

io.listen(PORT)
console.log(`SockHydra: Listening on port ${PORT}`)
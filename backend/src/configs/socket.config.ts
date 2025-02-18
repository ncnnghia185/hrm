import { Server as HttpServer } from "http";
import { Server as SocketIOServer, Socket } from "socket.io";

export function setupSocket(server: HttpServer) {
    const io = new SocketIOServer(server, {
        cors: {},
    });

    io.on("connection", (socket: Socket) => {
        console.log(`User connected: ${socket.id}`);

        socket.on("sendMessage", (data) => {
            console.log(`Message from ${data.user}: ${data.message}`);
            io.emit("receiveMessage", data);
        });

        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });

    return io;
}

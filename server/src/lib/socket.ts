
import { Server } from "socket.io";
import http from "http";
import express from "express";
import app from "../app";

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
      origin: ["http://localhost:5173"],
    },
});

export const getReceiverSocketId = (userId : string) => {
  return userSocketMap[userId];
}

const userSocketMap: { [key: string]: string } = {};

io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;

    console.log("useridd", userId);

    if (typeof userId === 'string') {
      userSocketMap[userId] = socket.id;
    }


    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("A user disconnected", socket.id);
        console.log("userSocketmap", userSocketMap);
        if (typeof userId === 'string') {
          delete userSocketMap[userId];
        }
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})

export {io, server};
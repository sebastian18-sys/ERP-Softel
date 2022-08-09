import { useState, useEffect } from "react";
import { io } from "socket.io-client"

// parametro  { usuarioSender, }

export const useNotification = () => {

  const [socket, setSocket] = useState(null)
  // const [notifications, setNotifications] = useState([])

  useEffect(() => {
    const socket = io("http://localhost:8000");
    console.log(socket)
    setSocket(socket)
  }, [])

  // Function to Send Notification
  // parametro { type: 1 = proyecto, type: 2 = solicitud, type: 3 = actividad}
  const handleNotification = () => {
    socket.emit("sendNotification", {
      senderName: "pato",
      receiverName: "miguel",
      type: 1
    })
  }

  // useEffect(() => {
  //   socket?.emit("newUser")
  // }, [socket, user])


  // Another effect to getNotification
  // useEffect(() => {
  //   socket.on("getNotification", data => {
  //     setNotifications(prev => [...prev, data])
  //   })
  // }, [socket])

  return {
    socket,
    // notifications,
    handleNotification
  }


}
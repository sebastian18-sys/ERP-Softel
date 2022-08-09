import { useState } from "react"

export const useModal = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    return setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return {
    showModal,
    handleClick,
    handleClose
  }
} 
import Modal from "../components/Modal"
import Button from "../components/Button"
import { useState } from "react"

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  }
  const handleClose = () => {
    setShowModal(false);
  }
  const actionBar = <div>
    <Button onClick={handleClose} primary>I accept</Button>
  </div>
  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>Please accept the agreement</p>
  </Modal>
  return (
    <div>
    <Button onClick={handleClick} primary>Open Modal</Button>
    {showModal && modal}
    </div>
  )
}

export default ModalPage
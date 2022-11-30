import React, {useState} from 'react'

const useControlModal = () => {
    const [isOpen, setOpen] = useState(false)
   
    const openModal = () => {
        setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
    }

    return {isOpen, openModal, closeModal}
}

export default useControlModal

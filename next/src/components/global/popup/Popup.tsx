import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

interface DataOutput {
    behavior: 'Good' | 'Bad' | 'Neutrality'
    setTime?: number
    show: boolean
    onClose: () => void

}

function Popup({ behavior, setTime = 511000, show, onClose }: DataOutput) {
    useEffect(() => {
        if (show && setTime) {
            const timer = setTimeout(() => {
                onClose()
            }, setTime);
            return () => clearTimeout(timer)
        }
    }, [show, setTime, onClose]);


    return (

        <div className={`${show ? 'visible' : 'hidden'
            } fixed right-0 top-0
        z-50 w-45 h-25 rounded flex items-center justify-center
        ${behavior === 'Good' ? 'bg-green-600' : behavior === 'Bad' ? 'bg-red-600' : "bg-gray-600"} `}>
            <div className='flex justify-between '>
                <button className="cursor-pointer  absolute right-0 top-0" onClick={onClose} >
                    <FontAwesomeIcon icon={faClose} />
                </button>
                <span >Popup</span>

            </div>


        </div >
    )
}

export default Popup
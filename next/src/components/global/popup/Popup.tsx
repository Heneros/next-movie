import React from 'react'

interface DataOutput {
    behavior: 'Good' | 'Bad' | 'Neutrality'
    setTime?: number
}

function Popup({ behavior, setTime = 5000 }: DataOutput) {
    return (

        <div className={`fixed right-0 top-0
        z-50 w-45 h-25 rounded flex items-center justify-center
        ${behavior === 'Good' ? 'bg-green-600' : behavior === 'Bad' ? 'bg-red-600' : "bg-gray-600"} `}>

            <span className='justify-center items-center  flex self-center
'>Popup</span>


        </div>
    )
}

export default Popup
"use client"

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Popup from '@/components/global/popup/Popup'

export default function pageMovie() {
    const params = useParams()
    const userId = parseInt(params.id as string, 10);
    const [open, setOpen] = useState(false)


    return (
        <div>pageMovie {userId}
            <button onClick={() => setOpen(true)}>Open</button>
            <Popup behavior={'Good'} setTime={111000} show={open} onClose={() => setOpen(false)} />

        </div>
    )
}

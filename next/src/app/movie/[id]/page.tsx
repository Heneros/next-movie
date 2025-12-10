"use client"

import { useParams } from 'next/navigation'
import React from 'react'
import Popup from '../../../components/global/popup/Popup';

export default function pageMovie() {
    const params = useParams()
    const userId = parseInt(params.id as string, 10);
    return (
        <div>pageMovie {userId}
            <Popup behavior={'Good'} setTime={5000} />

        </div>
    )
}

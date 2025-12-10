"use client"

import { useParams } from 'next/navigation'
import React from 'react'

export default function pageMovie() {
    const params = useParams()
    const userId = parseInt(params.id as string, 10);
    return (
        <div>pageMovie {userId} </div>
    )
}

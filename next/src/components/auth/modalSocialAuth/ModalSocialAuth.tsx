"use client"

import { BASE_URL, DOMAIN_BACKEND } from '@/_data/constants'
import { useGithubAuthQuery } from '@/redux/auth/authApiSlice'
import Link from 'next/link'
import React, { useState } from 'react'

export default function ModalSocialAuth() {

    const gitHub = () => {
        window.open()
    }
    return (
        <div>
            <Link href={`${DOMAIN_BACKEND}/auth/github/callback`}>Github</Link>
            <Link href={`${DOMAIN_BACKEND}/auth/google/callback`}>Google</Link>
        </div>
    )
}

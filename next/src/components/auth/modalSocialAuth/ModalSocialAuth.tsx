"use client"

import { BASE_URL, DOMAIN_BACKEND } from '@/_data/constants'
import Link from 'next/link'
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGithubAuthQuery } from '@/redux/auth/authApiSlice'

export default function ModalSocialAuth() {
    // const { data } = useGithubAuthQuery(undefined)
    // const gitHub = () => {
    //     window.open()
    // // }
    // console.log(data)
    const frontendAuthUrl = 'http://localhost:3000'
    return (
        <div className='flex items-center flex-col gap-3'>

            <Link href={`${frontendAuthUrl}/auth/github/callback`}
                className='flex items-center justify-between gap-3'
            >
                <FontAwesomeIcon icon={faGithub} size="2x" />
                <span className="font-medium">GitHub</span>
            </Link>

            <Link href={`${frontendAuthUrl}/auth/google/callback`} className='flex items-center justify-between gap-3 '
            >
                <FontAwesomeIcon icon={faGoogle} size="2x" />
                <span className="font-medium">Google</span>
            </Link>
        </div>
    )
}

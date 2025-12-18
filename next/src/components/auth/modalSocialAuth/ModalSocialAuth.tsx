"use client"

import { BASE_URL, DOMAIN_BACKEND } from '@/_data/constants'
import Link from 'next/link'
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGithubAuthQuery } from '@/redux/auth/authApiSlice'

export default function ModalSocialAuth() {
    const { data } = useGithubAuthQuery(undefined)
    // const gitHub = () => {
    //     window.open()
    // }
    console.log(data)
    return (
        <div className='flex items-center flex-col gap-3'>

            <Link href={`${data}`}
                className='flex items-center justify-between gap-3'
            >
                <FontAwesomeIcon icon={faGithub} size="2x" />
                <span className="font-medium">GitHub</span>
            </Link>

            <Link href={`${DOMAIN_BACKEND}/auth/google/callback`} className='flex items-center justify-between gap-3 '
            >
                <FontAwesomeIcon icon={faGoogle} size="2x" />
                <span className="font-medium">Google</span>
            </Link>
        </div>
    )
}

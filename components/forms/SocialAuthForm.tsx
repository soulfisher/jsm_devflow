'use client'

import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { signIn } from "next-auth/react"
import { Toaster as toast } from '../ui/sonner'
import ROUTES from '@/constants//routes'

const SocialAuthForm = () => {
    const buttonClass = "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 pv-3.5";

    const handleSignIn = async (provider:"github" | "google") => {
        try {
            await signIn (provider, {redirectTo: ROUTES.HOME, redirect: false});
        } catch(error) {
            console.log(error);

            toast ({
                title: "Sign-in failed",
                description: 
                    error instanceof Error ? error.message : "An error occured during sign-in",
                variant: "destructive"
            })
        }
    }
  return (
    <div className='mt-10 flex flex-wrap gap-2.5'>
        <Button className={buttonClass} onClick={() => handleSignIn("github")}>
            <Image src="/icons/github.svg" alt="GitHub Logo" width={20} height={20} className="invert-colors mr-2.5 object-contain" />
            <span>Log in with GitHub</span>
        </Button>
        <Button className={buttonClass} onClick={() => handleSignIn("google")}>
            <Image src="/icons/google.svg" alt="Google Logo" width={20} height={20} className="mr-2.5 object-contain" />
            <span>Log in with Google</span>
        </Button>
    </div>
  )
}

export default SocialAuthForm
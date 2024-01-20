"use client"
import Reference from "@/components/Reference"
import logo from "../public/images/desktop/logo.svg"
import Image from "next/image"
import applePodcast from "../public/images/desktop/apple-podcast.svg"
import googlePodcast from "../public/images/desktop/google-podcasts.svg"
import pocketCast from "../public/images/desktop/pocket-casts.svg"
import spotify from "../public/images/desktop/spotify.svg"
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { useState } from "react"
import { Input } from "@/components/ui/input"

const emailSchema = z.object({
  email: z
    .string()
    .min(1, "Oops! Please add your email")
    .email("Oops! Please check your email"),
})

export default function Home() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSuccess(false)
    setEmail(e.target.value)
    if (error) setError("")
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const result = emailSchema.safeParse({ email })
    if (!result.success) {
      setError(result.error.errors[0].message)
      setSuccess(false)
      return
    } else {
      setSuccess(true)
      setEmail("")
    }
  }

  return (
    <main className="relative flex h-full min-h-screen w-full max-w-6xl flex-col items-center px-6 md:min-h-0">
      <div className="absolute inset-0 z-[-1] bg-opacity-50 bg-[url('../public/images/mobile/image-host.jpg')] bg-cover bg-no-repeat"></div>
      <div className="bg-neutral-dark absolute inset-0 z-[-1] bg-opacity-90"></div>
      <Image src={logo} alt="logo" className="my-12" />
      <h1 className="text-light mb-4 text-center text-[1.625rem] uppercase leading-[2.375rem]">
        <span className="block text-primary-green">Publish your podcasts</span>{" "}
        everywhere.
      </h1>
      <p className="text-neutral-gray-100 mb-8 text-center text-[0.9375rem] leading-[1.5625rem]">
        Upload your audio to Pod with a single click. We&apos;ll then distribute
        your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
        and more!
      </p>
      <div className="mb-12 flex items-center gap-6">
        <Image src={spotify} alt="spotify" className="w-[3.5rem]" />
        <Image
          src={applePodcast}
          alt="apple podcast"
          className="w-[2.8125rem]"
        />
        <Image
          src={googlePodcast}
          alt="google podcast"
          className="w-[4.5625rem]"
        />
        <Image src={pocketCast} alt="pocket cast" className="w-[4.8125rem]" />
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <Input
          name="email"
          placeholder="Email Address"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        {error && (
          <p className="ml-8 mt-2 text-xs italic leading-normal text-primary-red">
            {error}
          </p>
        )}
        <Button type="submit" className="mt-4" variant="default">
          Request Access
        </Button>
        {success && (
          <p className="ml-6 mt-4 text-center leading-normal text-primary-green md:text-base">
            Thank you for requesting access!
          </p>
        )}
      </form>
      <Reference />
    </main>
  )
}

"use client"
import Reference from "@/components/Reference"
import logo from "../public/images/desktop/logo.svg"
import Image from "next/image"
import applePodcast from "../public/images/desktop/apple-podcast.svg"
import googlePodcast from "../public/images/desktop/google-podcasts.svg"
import pocketCast from "../public/images/desktop/pocket-casts.svg"
import spotify from "../public/images/desktop/spotify.svg"
import bgPatternDots from "../public/images/desktop/bg-pattern-dots.svg"
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
    <main className="flex h-full min-h-screen w-full max-w-7xl flex-col items-center lg:min-h-0 lg:pt-32">
      <div className="relative flex w-full flex-col items-center sm:items-start">
        <div className="absolute inset-0 z-[-1] bg-opacity-50 bg-[url('../public/images/mobile/image-host.jpg')] bg-cover bg-no-repeat sm:inset-auto sm:bottom-0 sm:right-0 sm:top-0 sm:w-2/3 sm:bg-[url('../public/images/tablet/image-host.jpg')] lg:top-20 lg:w-3/5 lg:bg-[url('../public/images/desktop/image-host.jpg')] lg:bg-center"></div>
        <div className="bg-neutral-dark absolute inset-0 z-[-1] bg-opacity-90 sm:hidden"></div>
        <Image
          src={logo}
          alt="logo"
          className="my-12 sm:mb-72 sm:ml-12 lg:mb-28 lg:mt-0"
        />
        <div className="sm:bg-neutral-dark flex flex-col px-6 sm:w-5/6 sm:max-w-[50rem] sm:pt-16">
          <h1 className="order-1 mb-4 text-center text-[1.625rem] uppercase leading-[2.375rem] sm:text-left sm:text-[3rem] sm:leading-[3.5rem] lg:text-[3.25rem] lg:leading-[3.875rem]">
            <span className="block text-primary-green">
              Publish your podcasts
            </span>{" "}
            everywhere.
          </h1>
          <p className="text-neutral-gray-100 order-2 mb-8 text-center text-[0.9375rem] leading-[1.5625rem] sm:pr-4 sm:text-left sm:text-lg sm:leading-7 md:pr-52">
            Upload your audio to Pod with a single click. We&apos;ll then
            distribute your podcast to Spotify, Apple Podcasts, Google Podcasts,
            Pocket Casts and more!
          </p>
          <div className="order-3 mb-12 flex w-full items-center justify-between gap-6 sm:order-4 sm:mb-0 sm:mt-16 sm:justify-start">
            <Image src={spotify} alt="spotify" className="w-[3.5rem] sm:w-24" />
            <Image
              src={applePodcast}
              alt="apple podcast"
              className="w-[2.8125rem] sm:w-[4.875rem]"
            />
            <Image
              src={googlePodcast}
              alt="google podcast"
              className="w-[4.5625rem] sm:w-[7.8125rem]"
            />
            <Image
              src={pocketCast}
              alt="pocket cast"
              className="w-[4.8125rem] sm:w-[8.0625rem]"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="order-4 w-full sm:relative sm:order-3 sm:w-[27rem]"
          >
            <Input
              name="email"
              placeholder="Email Address"
              type="text"
              value={email}
              onChange={handleEmailChange}
              className="w-full"
            />
            {error && (
              <p className="ml-8 mt-2 text-xs italic leading-normal text-primary-red">
                {error}
              </p>
            )}
            <Button
              type="submit"
              className="mt-4 w-full sm:absolute sm:right-0 sm:top-1 sm:mr-1 sm:mt-0 sm:w-40"
              variant="default"
            >
              Request Access
            </Button>
            {success && (
              <p className="ml-6 mt-4 text-center leading-normal text-primary-green sm:text-left md:text-base">
                Thank you for requesting access!
              </p>
            )}
          </form>
          <Image
            src={bgPatternDots}
            alt="background pattern"
            className="absolute -bottom-[14rem] left-0 order-last ml-8 hidden self-start sm:block lg:-bottom-[3rem] lg:left-auto lg:right-0"
          />
        </div>
      </div>
      <Reference />
    </main>
  )
}

import type { Metadata } from "next"
import { Chivo } from "next/font/google"
import "./globals.css"

const chivo = Chivo({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Pod Request Access Landing Page",
  description: "A Challenge from Frontend Mentor!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${chivo.className} bg-neutral-dark flex min-h-screen flex-col items-center justify-center text-white`}
      >
        {children}
      </body>
    </html>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Messenger Clone',
  description: 'The Messenger Clone project is a next-generation messaging application built using React, Next.js, TypeScript, Tailwind CSS, MongoDB with Mongoose, Prisma, react-hook-form, and NextAuth. With a strong emphasis on interface design, the project aims to recreate the user experience of Facebook Messenger. It leverages the latest and best tools available in the Next.js ecosystem to provide a sleek and modern messaging interface. The project also prioritizes security and authentication, ensuring that user data and interactions remain protected. Overall, the Messenger Clone project strives to deliver a visually appealing and reliable messaging platform with a seamless user experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

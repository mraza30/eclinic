import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

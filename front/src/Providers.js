import React from 'react'
import { Toaster } from 'react-hot-toast'


"use client"
function Providers({children}) {
      return (
            <>
                  <Toaster />
                  {children}
            </>
      )
}

export default Providers
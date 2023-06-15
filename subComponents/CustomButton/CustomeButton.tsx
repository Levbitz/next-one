"use client"
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

function CustomeButton({title ,containerStyles , handleClick ,btnType}: CustomButtonProps) {
  return (
    <div>
<button
 disabled={false}
 type={btnType||'button'}
 className={`custom btn ${containerStyles} cursor-pointer`}
 onClick={handleClick}
 >
 <span className={`flex-1`}>
   {title}
 </span>
</button>
    </div>
  )
}

export default CustomeButton

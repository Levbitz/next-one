"use client"
import CustomeButton from '@/subComponents/CustomButton/CustomeButton'
import React from 'react'
import Image from 'next/image'

function Hero() {
    const handleScroll = ()=>{

    }
  return (
    <div className='hero'>

        <div className='flex-1 pt-36 padding-x'>
 <h1 className='hero__title' > 
 Find , book  or rent a car - quickly and easily !
 </h1>

 <p className='hero__subtitle'>
    Streamline you car rental exprience with oure effortless booking process
 </p>
 <CustomeButton
 title="Explore Cars"
 containerStyles ="bg-primary-blue text-white rounded-full mt-10 px-5 py-2"
 handleClick={handleScroll}
 />
        </div>

        <div className='hero__image-container'>
            <div className="hero__image">
                <Image
               src={'/hero.png'}
               alt='hero'
               fill
               className='object-contain'
                />

                
            </div>
<div className='hero__image-overlay'/>
        </div>
    </div>
  )
}

export default Hero

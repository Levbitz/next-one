import Hero from '@/components/Hero/Hero'
import React from 'react'
import SearchBar from '@/components/SearchBar/SearchBar'
import CustomFilter from '@/subComponents/CustomFilter/CustomFilter'

function Home() {
  return (
    <main className='overflow-hidden'>

      <Hero/> 

      <div className="mt-12
      padding-x padding-y max-width 
      "
      id='discover'
      >
        <div className="home__text-container">
          <h1 className='text-4xl font-extrabold'> Car Catalogue</h1>
          <p>Expolore the Car You might like</p>


          
        </div>
        
        <div className='home__filters'>
           <SearchBar/> 
           <div className="home__filter-container">
            <CustomFilter title='fuel'/>
            <CustomFilter title='year'/>
           </div>
          </div>
      </div>
    </main>
  
  )
}

export default Home

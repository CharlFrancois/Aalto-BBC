import { React, useState } from 'react'
import FirstSection from '../components/About/FirstSection'
import FourthSection from '../components/About/FourthSection'
import SecondSection from '../components/About/SecondSection'
import ThirdSection from '../components/About/ThirdSection'

function Project() {
    return (
      <div className='h-full w-max-screen'>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </div>
    )
}

export default Project

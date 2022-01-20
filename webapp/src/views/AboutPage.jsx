import React from 'react'
import FirstSection from '../components/About/FirstSection'
import FourthSection from '../components/About/FourthSection'
import SecondSection from '../components/About/SecondSection'
import ThirdSection from '../components/About/ThirdSection'

function AboutPage() {
    return (
        <div className='h-full'>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
        </div>
    )
}

export default AboutPage

import React from 'react'
import Footer from '../base/Footer'
import FifthSection from '../components/FifthSection'
import FirstSection from '../components/FirstSection'
import FourthSection from '../components/FourthSection'
import HorizontalScrollSections from '../components/HorizontalScrollSections'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'

function HomePage() {
    return (
        <div>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <HorizontalScrollSections />
            <Footer />
        </div>
    )
}

export default HomePage

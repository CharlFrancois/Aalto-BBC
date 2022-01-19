import React from 'react'

function FirstSection() {
    return (
            <div className='bg-skin-10 dark:bg-dark dark:text-white'>
                <div className='mx-10 h-screen flex items-center justify-around'>
                    <div className='flex justify-between p-4 absolute w-full top-20'>
                        <p className='uppercase'>Concentrez-vous sur votre metier</p>
                        <p className='uppercase'>Contractant général</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-9xl max-w-3xl'>
                            <p className=''>Nous créons votre espace idéal*</p>
                        </div>
                        <div className='max-w-2xl'>
                            <p>Nous ne réalisons pas des bâtiments professionnels. C’est différent. Nous proposons une experience de création holistique pour des lieux de vie et de travail qui changent tout.</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <img src="img-1-section1.jpg" className='object-cover h-80 w-52 -rotate-12 mb-10' />
                        <img src="img-2-section1.jpg" className='object-cover h-48 w-96 -rotate-6 mb-16' />
                        <img src="img-3-section1.jpg" className='object-cover h-80 w-52 rotate-12' />
                    </div>
                </div>
            </div>
    )
}

export default FirstSection

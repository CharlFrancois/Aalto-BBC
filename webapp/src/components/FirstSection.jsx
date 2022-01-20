import React from 'react'

function FirstSection() {
    return (
            <div className='bg-skin-10 dark:bg-dark dark:text-white'>
<<<<<<< HEAD
                <div className='mx-10 mob:px-10 h-[calc(100vh+104px)] flex mob:flex-col mob:items-start items-center mob:justify-start justify-around'>
                    <div className='flex justify-between pt-12 px-20 mob:px-0 absolute w-full top-20 uppercase mob:text-xs'>
                        <p className=' mob:w-2/5'>Concentrez-vous sur votre metier</p>
                        <p className=' mob:w-2/5'>Contractant général</p>
=======
                <div className=' h-screen flex items-center justify-around w-screen'>
                    <div className='flex justify-between pt-6 px-12 absolute w-full top-20'>
                        <p className='uppercase'>Concentrez-vous sur votre metier</p>
                        <p className='uppercase'>Contractant général</p>
>>>>>>> project page
                    </div>
                    <div className='flex flex-col h-3/4 justify-around mob:mt-48'>
                        <div className='text-9xl mob:text-4xl max-w-3xl'>
                            <span className='font-gallery inline-block'>Nous créons votre espace idéal<span className='text-skin-100'>*</span></span>
                        </div>
                        <div className='max-w-2xl text-lg mob:text-xs'>
                            <span><span className='text-skin-100'>*</span>Nous ne réalisons pas des bâtiments professionnels. C’est différent. Nous proposons une experience de création holistique pour des lieux de vie et de travail qui changent tout.</span>
                        </div>
                    </div>
                    <div className='flex flex-col mob:mt-5'>
                        <img src="img-1-section1.jpg" alt='image1' className='object-cover h-80 w-52 -rotate-12 mb-10' />
                        <img src="img-2-section1.jpg" alt='image2' className='object-cover h-48 w-96 -rotate-6 mb-16' />
                        <img src="img-3-section1.jpg" alt='image3' className='object-cover h-80 w-52 rotate-12' />
                    </div>
                </div>
            </div>
    )
}

export default FirstSection

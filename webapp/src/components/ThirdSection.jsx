import React from 'react'

function ThirdSection() {
    return (
        <div className='bg-skin-10 dark:bg-dark dark:text-white'>
            <div className='mx-10 h-screen flex mob:flex-col items-center justify-around mob:justify-start'>
                <div className='flex flex-col h-full justify-around w-2/5 ml-10 mob:ml-0 mob:w-3/4'>
                    <span className='text-8xl mob:text-4xl font-gallery mob:mt-3'>Nous vous aidons à faire la différence</span>
                    <span className='text-lg mob:text-xs mob:mt-3'><span className='text-skin-100'>*</span>Pour autant que qu’ils soient de ce type :  avoir un lieu qui vous ressemble et dont vous êtes fière, un lieu qui rassemble autour de votre vision et de vos valeurs.</span>
                </div>
                <img className='w-96 h-96 mob:mt-3 mob:w-52' alt='image6' src="img-section3.png" />
                <div className='w-1/3 mob:text-4xl text-8xl font-gallery h-full flex items-end mb-10'>
                    <span className=''>Et faire de vos rêves, une réalité<span className='text-skin-100'>*</span></span>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection

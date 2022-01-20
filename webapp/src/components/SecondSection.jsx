import React from 'react'

function SecondSection() {
    return (
        <div className='bg-white h-screen flex items-center justify-around dark:bg-skin-10 relative z-10 font-gallery text-8xl mob:text-4xl mob:flex-col'>
            <p className='text-brown-dark'> - Comment </p>
            <div className='flex flex-col w-96 h-full justify-between mob:justify-around mob:w-40'>
                <p className='rotate-12'>attirer et retenir les talents ?</p>
                <p>insuffler un état d'esprit ?</p>
                <p className='-rotate-12'>être plus créatif ?</p>
            </div>
        </div>
    )
}

export default SecondSection

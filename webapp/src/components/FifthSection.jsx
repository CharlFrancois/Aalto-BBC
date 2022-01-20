import React from 'react'

function FifthSection() {
    const projects = ["Bureaux", "Restaurants", "Médical", "Industrie"]

    return (
        <div className='bg-white dark:bg-skin-10 h-screen p-10 mob:p-0'>
            <div className='mx-10 flex'>
                <div className='flex flex-col h-full justify-evenly ml-10 w-1/2 mob:w-full self-center'>
                    <p className='uppercase'>nos réalisations</p>
                    <div className='flex flex-col justify-evenly'>
                        {projects.map((project) => <span className="font-normal font-gallery mob:text-6xl text-8xl outline-title my-5" key={project}>{project}</span>)}
                    </div>
                    <div className='flex'>
                        <img src='Arrow.svg' alt='arrow' />
                        <p>Voir tous nos projets</p>
                    </div>
                </div>
                <div className='flex mob:hidden'>
                    <div className='mr-10 mt-10'>
                        <img src='AALTO-AgenceCaisseEpargneLilleNationale-2 9.jpg' alt='image1' className='mb-10' />
                        <img src='AgenceCaisseEpargneLilleNationale.jpg' alt='image2' />
                    </div>
                    <div className=''>
                        <img src='AALTO-AgenceCaisseEpargneLilleNationale-2 11.jpg' alt='image3' className='mb-10' />
                        <img src='AALTO-AgenceCaisseEpargneLilleNationale-2 6.jpg' alt='image4' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FifthSection

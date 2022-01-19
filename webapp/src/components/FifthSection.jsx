import React from 'react'

function FifthSection() {
    const projects = ["Bureaux", "Restaurants", "Médical", "Industrie"]

    return (
        <div className='bg-white dark:bg-skin-10 h-screen p-10'>
            <div className='mx-10 flex'>
                <div className='flex flex-col h-full justify-evenly ml-10 w-1/2'>
                    <p className='uppercase'>nos réalisations</p>
                    <div className='flex flex-col h-80 justify-evenly'>
                        {projects.map((project) => <a className="projectWigetLink" key={project}>{project}</a>)}
                    </div>
                    <div className='flex'>
                        <img src='Arrow.svg' />
                        <p>Voir tous nos projets</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='mr-10 mt-10'>
                        <img src='AALTO-AgenceCaisseEpargneLilleNationale-2 9.jpg' className='mb-10' />
                        <img src='AgenceCaisseEpargneLilleNationale.jpg' />
                    </div>
                    <div className=''>
                        <img src='AALTO-AgenceCaisseEpargneLilleNationale-2 11.jpg' className='mb-10' />
                        <img src='AALTO-AgenceCaisseEpargneLilleNationale-2 6.jpg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FifthSection

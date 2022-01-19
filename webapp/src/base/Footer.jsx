import React from 'react'

function Footer() {
    const projects = ["Bureaux / Co-working", "Restaurants", "Banques", "Médical", "Industrie"]
    const cities = ["Lille", "Amiens", "Le Touquet", "Villeneuve d'Ascq", "Calais", "Dunkerque", "Tourcoing", "Lens", "Compiègne", "Arras", "Valenciennes", "Cergy"]
    const prestations = ["Construction", "Extension", "Rénovation", "Cabinet d'architecture", "Conseil en aménagement"]
    const bottom = ["Plan du site", "Mentions légales", "Recrutement", "A propos", "Contact", "©Aalto Group"]
    
    return (
        <div className='bg-dark'>
            <div className='mx-10 text-white'>
                <div className='grid grid-cols-4 gap-y-4 p-4 mob:flex mob:flex-col'>
                        <div className=''>
                            <img src='aalto-group.png' alt='aalto-group' />
                            <p>3 Rue du docteur Huart, 59298 Lille</p>
                            <p>03 03 03 03 03  | contact@alto.fr</p>
                        </div>
                        <div className='col-span-2 justify-self-center'>
                            <p>Recevoir notre newsletters</p>
                            <div className="flex items-center border-b border-grey-light py-2">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:text-white" type="text" placeholder="Votre email" />
                                <button className="flex-shrink-0 border-transparent border-4 text-grey-light hover:text-white text-sm py-1 px-2 rounded" type="button">
                                    Envoyer
                                </button>
                            </div>
                        </div>
                        <div className='ml-8'>
                            <p className='uppercase mb-5'>réseaux sociaux</p>
                            <div className='flex'>
                                <div className='relative flex items-center justify-center mr-3'>
                                    <img className='absolute' src='linkedin.png' alt='linkedin' />
                                    <img src='round.png' alt='round' />
                                </div>
                                <div className='relative flex items-center justify-center'>
                                    <img className='absolute' src='insta.png' alt='insta' />
                                    <img src='round.png' alt='round' />
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <p className='uppercase my-5'>projets</p>
                            <div className='mob:grid mob:grid-cols-2'>
                                {projects.map((project) => <p className='text-grey-light' key={project}>{project}</p>)}
                            </div>
                        </div>
                        <div className='flex flex-col items-center col-span-2'>
                            <p className='uppercase my-5'>Nous intervenons à</p>
                            <div className='grid grid-cols-4 gap-1 mob:grid-cols-2'>
                                {cities.map((city) => <p className='text-grey-light' key={city}>{city}</p>)}
                            </div>
                        </div>
                        <div className='ml-8'>
                            <p className='uppercase my-5'>prestations</p>
                            <div className=''>
                                {prestations.map((prestation) => <p className='text-grey-light' key={prestation}>{prestation}</p>)}
                            </div>
                        </div>
                </div>
                <div className='w-full flex justify-center border-t py-4'>
                    <div className='w-1/2 flex justify-evenly self-center text-grey-light mob:grid mob:grid-cols-3 mob:w-full'>
                        {bottom.map((el) => <p key={el}>{el}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

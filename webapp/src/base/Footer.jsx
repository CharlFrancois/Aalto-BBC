import React from 'react'

function Footer() {
    const projects = ["Bureaux / Co-working", "Restaurants", "Banques", "Médical", "Industrie"]
    const cities = ["Lille", "Amiens", "Le Touquet", "Villeneuve d'Ascq", "Calais", "Dunkerque", "Tourcoing", "Lens", "Compiègne", "Arras", "Valenciennes", "Cergy"]
    const prestations = ["Construction", "Extension", "Rénovation", "Cabinet d'architecture", "Conseil en aménagement"]
    const bottom = ["Plan du site", "Mentions légales", "Recrutement", "A propos", "Contact", "©Aalto Group"]
    
    return (
        <div className='bg-dark'>
            <div className='mx-10 text-white'>
                <div className='grid grid-cols-4 gap-y-4 p-4'>
                        <div className=''>
                            <p>IMAGE</p>
                            <p>3 Rue du docteur Huart, 59298 Lille</p>
                            <p>03 03 03 03 03  | contact@alto.fr</p>
                        </div>
                        <div className='col-span-2 justify-self-center'>
                            <p>Recevoir notre newsletters</p>
                            <input type="text"></input>
                        </div>
                        <div className='ml-8'>
                            <p className='uppercase'>réseaux sociaux</p>
                            <div className='flex'>
                                <p>Image1</p>
                                <p>Image2</p>
                            </div>
                        </div>
                        <div className=''>
                            <p className='uppercase'>projets</p>
                            <div className=''>
                                {projects.map((project) => <p key={project}>{project}</p>)}
                            </div>
                        </div>
                        <div className='flex flex-col items-center col-span-2'>
                            <p className='uppercase'>Nous intervenons à</p>
                            <div className='grid grid-cols-4 gap-1'>
                                {cities.map((city) => <p key={city}>{city}</p>)}
                            </div>
                        </div>
                        <div className='ml-8'>
                            <p className='uppercase'>prestations</p>
                            <div className=''>
                                {prestations.map((prestation) => <p key={prestation}>{prestation}</p>)}
                            </div>
                        </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-1/2 flex justify-evenly self-center'>
                        {bottom.map((el) => <p key={el}>{el}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

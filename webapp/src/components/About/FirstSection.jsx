import React from 'react'
import '../../about.css'

function FirstSection() {
    return (
        <div>
            <div className='mx-10 bg-skin-10 dark:bg-dark dark:text-white'>
                <div className='mx-10 h-screen flex items-center justify-around'>
                    <div className='mx-10 flex justify-between pt-6 px-12 absolute w-full top-20'>
                        <p className='uppercase'>ARCHITECTE contractant général</p>
                        <p className='uppercase'>basé près de lille</p>
                    </div>
                    <div>
                        <div className='zone1'>
                            <h1 className='font-gallery'>Nous créons des espaces <br/>et des environnements <br/>dédiés à <span className='gold'> l’épanouissement </span> professionnels de nos clients </h1>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <img src="test3.png" className='object-cover h-100 w-100 mb-10' />
                       
                    </div>
                </div>
                <div className='imagezone1'>
                <img src="test3.png" className='object-cover h-100 w-100 mt-10' />
                
                </div>
            </div>
        </div>
    )
}

export default FirstSection

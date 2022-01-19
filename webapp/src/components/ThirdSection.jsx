import React from 'react'

function ThirdSection() {
    return (
        <div className='bg-skin-10 dark:bg-dark dark:text-white'>
            <div className='mx-10 h-screen flex items-center justify-around'>
                <div className='flex flex-col h-full justify-around w-1/3'>
                    <p className='text-6xl'>Nous vous aidons à faire la différence</p>
                    <p>Pour autant que qu’ils soient de ce type :  avoir un lieu qui vous ressemble et dont vous êtes fière, un lieu qui rassemble autour de votre vision et de vos valeurs.</p>
                </div>
                <img className='w-96 h-96' src="img-section3.png" />
                <p className='w-1/3 text-end text-6x'>Et faire de vos rêves, une réalité*</p>
            </div>
        </div>
    )
}

export default ThirdSection

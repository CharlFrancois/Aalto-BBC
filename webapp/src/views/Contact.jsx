import React from 'react';

function Contact() {
  return (
    <div className='bg-skin-10 dark:bg-dark dark:text-white h-[calc(100vh-104px)] mob:h-full mt-[104px]'>
        <div className='mx-10 h-full flex p-10 mob:flex mob:flex-col'>
            <div className='w-1/2 mob:w-full h-full flex flex-col justify-between'>
                <div className='text-8xl mob:text-4xl font-gallery'>
                    <span>Une idée de projet à réaliser ?</span>
                    <span className='text-skin-100'>Contactez-nous</span>
                </div>
                <div className='flex justify-between h-40 mob:hidden'>
                    <div className='flex flex-col justify-around'>
                        <span className='uppercase'>addresse</span>
                        <div className='flex flex-col'>
                            <span>14 Place Clovis Tiers</span>
                            <span>59700, Marcq-en-baroeul</span>
                        </div>
                        <span className='uppercase'>instagram</span>
                    </div>
                    <div className='flex flex-col justify-around'>
                        <span className='uppercase'>appelez-nous</span>
                        <span>+33 20 51 80 36</span>
                        <span className='uppercase'>linkedin</span>
                    </div>
                </div>
            </div>
            <div className='ml-20 mob:ml-0 mob:mt-5'>
                <div className='mb-10'>
                    <span className='uppercase'>prénom et nom</span>
                    <div className="flex w-96 mob:w-48 items-center border-b-2 border-skin-20 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-skin-20 mr-3 py-1 px-2 leading-tight focus:outline-none focus:text-skin-100" type="text" placeholder="Votre prénom et nom" />
                    </div>
                </div>
                <div className='mb-10'>
                    <span className='uppercase'>email</span>
                    <div className="flex w-96 mob:w-48 items-center border-b-2 border-skin-20 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-skin-20 mr-3 py-1 px-2 leading-tight focus:outline-none focus:text-skin-100" type="text" placeholder="Votre email" />
                    </div>
                </div>
                <div className='mb-10'>
                    <span className='uppercase'>société</span>
                    <div className="flex w-96 mob:w-48 items-center border-b-2 border-skin-20 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-skin-20 mr-3 py-1 px-2 leading-tight focus:outline-none focus:text-skin-100" type="text" placeholder="Nom de la société" />
                    </div>
                </div>
                <div className='mb-10'>
                    <span className='uppercase'>téléphone</span>
                    <div className="flex w-96 mob:w-48 items-center border-b-2 border-skin-20 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-skin-20 mr-3 py-1 px-2 leading-tight focus:outline-none focus:text-skin-100" type="text" placeholder="Votre téléphone" />
                    </div>
                </div>
                <div>
                    <span className='uppercase'>message</span>
                    <div className="flex w-96 mob:w-48 items-center border-b-2 border-skin-20 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-skin-20 mr-3 py-1 px-2 leading-tight focus:outline-none focus:text-skin-100" type="text" placeholder="Entrez votre description" />
                    </div>
                </div>
            </div>
        </div>
        <div className='absolute mob:relative flex mob:right-auto items-center justify-center bottom-5 right-60 cursor-pointer'>
            <img alt="send-btn" className='absolute' src='send-button.png' />
            <img alt="message-send" src='message-send.png' />
        </div>
    </div>
    );
}

export default Contact;

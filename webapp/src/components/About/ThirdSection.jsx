import React from 'react'
import '../../about.css'

function ThirdSection() {
    return (
        <div className='h-screen w-screen'>
            <div className='mx-10 bg-skin-10 h-screen dark:bg-dark dark:text-white'>
                <div class="flex flex-row mid w-100">
                    <div class="basis-1/2 img1"></div>
                    <div class="basis-1/2 self-center text-center">
                        <div className="p-4 card-cat "><span>Description</span></div>
                        <div className="p-4"> <p className='text-8xl font-gallery'>Title section </p></div>
                        <div className='card-body'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mid w-100">
                    <div class="basis-1/2 self-center text-center">
                        <div className="p-4 card-cat "><span>Description</span></div>
                        <div className="p-4"> <p className='text-8xl font-gallery'>Title section </p></div>
                        <div className='card-body'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <div className="basis-1/2 img1"></div>
                </div>
            </div>
        </div>
        
    )
}

export default ThirdSection

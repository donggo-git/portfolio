import React from 'react'
import "./Home.css"
import { BsChevronDoubleDown } from 'react-icons/bs'
import { AiOutlineFile } from 'react-icons/ai'

function Home() {
    const handleScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }
    return (
        <div className='Home page'>
            {/*full name */}
            <div className='header'>
                <div className='avatar'>
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQGRDruucqyDKg/profile-displayphoto-shrink_400_400/0/1648146065805?e=1653523200&v=beta&t=iHAAanNmzSERWPKI3DI9Zvm06TNec4_bNixp4ZrTfYo" />

                </div>
                <div className='name_description'>
                    <h1>Dong Giang Nguyen</h1>
                    {/*description */}
                    <p className='description'>
                        Hi there. I’m Dong, a CSC student who passionate with building website.
                        Lack of experience, but work hard and enthusiatic.
                        Looking for internship position.
                    </p>
                    <button>RESUME <AiOutlineFile /></button>
                </div>
            </div>
            <div
                className='scrollDown_btn'
                onClick={() => handleScrollDown()}
            >
                <BsChevronDoubleDown className='scrollDown_icon scrollDown_iconDouble' />

            </div>
        </div >
    )
}

export default Home
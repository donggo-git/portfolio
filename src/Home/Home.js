import React from 'react'
import "./Home.css"
import { BsChevronDoubleDown } from 'react-icons/bs'
import { AiOutlineFile } from 'react-icons/ai'
import { Link } from 'react-scroll'

function Home() {

    return (
        <div className='Home page' name="HOME">
            {/*full name */}
            <div className='header'>
                <div className='avatar'>
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQGRDruucqyDKg/profile-displayphoto-shrink_400_400/0/1648146065805?e=1653523200&v=beta&t=iHAAanNmzSERWPKI3DI9Zvm06TNec4_bNixp4ZrTfYo" />
                </div>
                <div className='name_description'>
                    <h1>Dong Giang Nguyen</h1>
                    <div className='contactInfo'>
                        <a href='tel:206-306-5818'>Phone |</a>
                        <a href="mailto:donggnguyen12@gmail.com"> Email |</a>
                        <a href="https://github.com/donggo-git"> Github</a>
                    </div>
                    {/*description */}
                    <p className='description'>
                        Hi there. I’m Dong, a CSC student who passionate with building website.
                        Lack of experience, but work hard and enthusiatic.
                        Looking for internship position.
                    </p>
                    <button><a href='https://filepost.io/d/SC7nmTGqPY' target="blank" download='Resume.pdf'>RESUME <AiOutlineFile /></a></button>
                </div>
            </div>
            <Link
                className='scrollDown_btn'
                to="ABOUT ME"
                duration={400}
                smooth={true}
            >
                <BsChevronDoubleDown className='scrollDown_icon scrollDown_iconDouble' />

            </Link>
        </div >
    )
}

export default Home
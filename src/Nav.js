import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import './Nav.css'

function Nav({ scrollPosition }) {
    const links = ['HOME', 'ABOUT ME', 'PROJECTS', 'CONTACT']
    //check nav burger
    const [isNavOn, setIsNavOn] = useState(false);
    const setNav = () => {
        setIsNavOn(pre => !pre)
    }
    //check scroll
    /*
    window height each link will change its style when user scroll within
    [link index]*window height to [link index +1]*window height
    */
    let windowHeight = window.innerHeight
    //handle when user click in one of the links
    return (
        <div>
            <div
                className={`Nav ${isNavOn ? "" : 'NavOff'}`}
                style={scrollPosition >= windowHeight ?
                    { backgroundColor: 'rgba(39, 39, 39, 1)' } :
                    {}
                }
            >

                <div
                    className={`burger__container ${isNavOn ? "" : 'burger__container_On'}`}
                    onClick={() => setNav()}
                >
                    {/*When user open the nav bar the burger will change color and form into a left arrow */}
                    <div className={`burger ${isNavOn ? 'burger__first' : ' burger_On'}`} />
                    <div className={`burger burger__second ${isNavOn ? '' : 'burger_On'}`} />
                    <div className={`burger ${isNavOn ? 'burger__third ' : 'burger_On'}`} />
                </div>
                <ul className='links'>
                    {links.map((link, index) => (
                        <Link
                            to={link}
                            smooth={true}
                            duration={400}
                            activeClass='link_located'
                            className={`link `}
                            spy={true}
                            key={link}

                        >
                            <div>
                                {link}
                            </div>
                        </Link>
                    ))}
                </ul>

            </div>
            <div
                className={`modal ${isNavOn ? 'modalOn' : ""}`}
                onClick={() => setNav()}
            ></div>
        </div>
    )
}

export default Nav
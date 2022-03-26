import React from 'react'
import { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {
    const links = ['HOME', 'ABOUT ME', 'PROJECTS', 'CONTACT']
    //check nav burger
    const [isNavOn, setIsNavOn] = useState(false);
    const setNav = () => {
        setIsNavOn(pre => !pre)
    }
    //check scroll
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        //console.log(position)
        setScrollPosition(position);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    //window height
    let windowHeight = window.innerHeight
    return (
        <div>
            <div className={`Nav ${isNavOn ? "" : 'NavOff'}`}>

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
                        <div
                            key={link}
                            className={`link ${scrollPosition >= index * windowHeight &&
                                scrollPosition <= (index + 1) * windowHeight ?
                                'link_located' : ""
                                }`}
                            style={{ 'animationDelay': `${index * 0.1}s` }}
                        >
                            {link}
                        </div>
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
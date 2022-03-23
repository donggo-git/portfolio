import React from 'react'
import { useState } from 'react'
import './Nav.css'

function Nav() {
    const [IsburgerActive, setBurgerIsActive] = useState(true);
    const links = ['BASIC INFORMATION', 'PROJECTS', 'CONTACT']
    const setBurger = () => {
        setBurgerIsActive(pre => !pre)
    }

    return (
        <div className={`Nav ${IsburgerActive ? "" : 'NavOff'}`}>
            <div
                className={`burger__container ${IsburgerActive ? "" : 'burger__container_On'}`}
                onClick={() => setBurger()}
            >
                {/*When user open the nav bar the burger will change color and form into a left arrow */}
                <div className={`burger ${IsburgerActive ? 'burger__first' : ' burger_On'}`} />
                <div className={`burger burger__second ${IsburgerActive ? '' : 'burger_On'}`} />
                <div className={`burger ${IsburgerActive ? 'burger__third ' : 'burger_On'}`} />
            </div>
            <div className='avatar'>
                <img src="file:///C:/project/portfolio/src/avatar.jpg" />
            </div>
            <ul className='links'>
                {links.map((link, index) => (
                    <div
                        className='link'
                        style={{ 'animationDelay': `${index * 0.1}s` }}
                    >
                        {link}
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Nav
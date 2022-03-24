import React from 'react'
import { useState } from 'react'
import './Nav.css'

function Nav({ isNavOn, setNav }) {
    const links = ['BASIC INFORMATION', 'PROJECTS', 'CONTACT']

    return (
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
            <div className='avatar'>
                <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-1/72273935_717823455309357_3014640130632712192_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=0JZGQBIaaFMAX9WqPFv&_nc_ht=scontent-sea1-1.xx&oh=00_AT8AWUDen430IXkxYl7vizcHtMZZqsmPoRjEHV5ovLoWBA&oe=625EF13E" />
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
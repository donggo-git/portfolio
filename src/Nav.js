import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import './Nav.css'

function Nav() {
    const links = ['HOME', 'ABOUT ME', 'PROJECTS', 'CONTACT']
    //check nav burger
    const [isNavOn, setIsNavOn] = useState(true);
    const setNav = () => {
        setIsNavOn(pre => !pre)
    }
    //check scroll
    /*
    window height each link will change its style when user scroll within
    [link index]*window height to [link index +1]*window height
    */
    //handle when user click in one of the links
    return (
        <div>
            <NavContainer isNavOn={isNavOn}>

                <BurgerContainer
                    isNavOn={isNavOn}
                    onClick={() => setNav()}
                >
                    {/*When user open the nav bar the burger will change color and form into a left arrow */}
                    <Burger className={isNavOn ? 'burger__first' : ' burger_On'} />
                    <Burger className={isNavOn ? 'burger__second' : 'burger_On'} />
                    <Burger className={isNavOn ? 'burger__third ' : 'burger_On'} />
                </BurgerContainer>
                <Links className='links'>
                    {links.map((link) => (
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
                </Links>

            </NavContainer>
            <Modal
                isNavOn={isNavOn}
                onClick={() => setNav()}
            ></Modal>
        </div>
    )
}
const NavContainer = styled.div`
    width: 100%;
    height: 50px;
    min-height: fit-content;
    background-color: none;
    display: flex;
    flex-direction: row;
    position: fixed;
    z-index: 10;
    padding: 10px 0;
    color:  rgba(0, 0, 0, 0.69);
    background-color: white;
    @media screen and (max-width: 1000px){
        min-width: 200px;
        width: 15%;
        height: 100vh;
        background-color: rgba(89, 41, 248, 1);
        flex-direction: column;
        transition: all 0.6s;
        padding: 0;
        transform: translateX(${props => props.isNavOn ? '0px' : '-100%'})
    }
`
const Links = styled.ul`
    margin-left: 100px;
    width: auto;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1000px){
        margin-left: 30px;
        flex-direction: column;
        position: fixed;
        top: 200px;
    }
`
const BurgerContainer = styled.div`
    display: none;
    @media screen and (max-width: 1000px){
    height: 30px;
    width: 30px;
    position: absolute;
    top: 20px;
    left: ${props => props.isNavOn ? '20px' : '110%'};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    cursor: pointer;
    transition: all 0.6s;
    }
`
const Modal = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(39, 39, 39, 0.5);
    transition: all 0.6s;
    opacity: 0;
    position: fixed;
    z-index: -1;
    @media screen and (max-width: 1000px){
        opacity: ${props => props.isNavOn ? '1' : '0'};
        z-index: ${props => props.isNavOn ? '5' : -1}
    }
`
const Burger = styled.div`
    height: 2px;
    width: 100%;
    background-color: rgba(39, 39, 39, 0.5);
    transition: all 0.6s;
`
export default Nav
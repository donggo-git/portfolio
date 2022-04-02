import React, { useState } from 'react'
import './Projects.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

function Projects() {
    const imgSlide = [
        //last slide clone
        {
            name: 'Weather App',
            demoImgLink: 'https://i.postimg.cc/y6vZqYYD/2022-03-28-7.png',
            link: ' https://donggo-git.github.io/weather-app/',
            codeLink: 'https://github.com/donggo-git/weather-app',
            description: 'A simple weather app that can show the weather in a many specific places using data weatherapi'
        },
        //first slide
        {
            name: 'Commercial website',
            demoImgLink: 'https://i.postimg.cc/nzKq94J2/2022-03-28-5.png',
            link: 'https://donggo-git.github.io/shoes-selling/',
            codeLink: 'https://github.com/donggo-git/shoes-selling',
            description: 'A commercial website that can add to cart, search, filter. Using firebase to store product and items in cart'
        },
        {
            name: 'Netflix Clone App',
            demoImgLink: 'https://i.postimg.cc/MpzXPC1W/2022-03-28-6.png',
            link: 'https://donggo-git.github.io/netflix-clone-app/',
            codeLink: 'https://github.com/donggo-git/netflix-clone-app',
            description: 'A Netflix clone that can get data movie from tmdb, play trailer by react-youtube, store favorite by firebase'
        },
        //last slide
        {
            name: 'Weather App',
            demoImgLink: 'https://i.postimg.cc/y6vZqYYD/2022-03-28-7.png',
            link: ' https://donggo-git.github.io/weather-app/',
            codeLink: 'https://github.com/donggo-git/weather-app',
            description: 'A simple weather app that can show the weather in a many specific places using data weatherapi'
        },
        //first slide clone
        {
            name: 'Commercial website',
            demoImgLink: 'https://i.postimg.cc/nzKq94J2/2022-03-28-5.png',
            link: 'https://donggo-git.github.io/shoes-selling/',
            codeLink: 'https://github.com/donggo-git/shoes-selling',
            description: 'A commercial website that can add to cart, search, filter. Using firebase to store product and items in cart'
        }
    ]
    const [isTransition, setIsTransition] = useState()
    const [mainSlideIndex, setMainSlideIndex] = useState(0)
    const windowWidth = window.innerWidth;

    const handlePre = () => {
        setIsTransition(true)
        //when user go into the first slide it will change back to last slide
        if (mainSlideIndex == 0) {
            setIsTransition(false)
            setMainSlideIndex(imgSlide.length - 1)
            setTimeout(() => {
                setIsTransition(true)
                setMainSlideIndex(pre => pre - 1)
            }, 0.01)

        };
        setMainSlideIndex(pre => pre - 1)
    }
    const handleNext = () => {
        setIsTransition(true)
        //when user go into the first slide it will change back to last slide
        //when user use website on the computer
        if (windowWidth > 1000) {
            if (mainSlideIndex == imgSlide.length - 3) {
                setIsTransition(false)
                setMainSlideIndex(-1)
                setTimeout(() => {
                    setIsTransition(true)
                    setMainSlideIndex(pre => pre + 1)
                }, 0.01)

            }
            else setMainSlideIndex(pre => pre + 1)
        }
        //when user use website on the phone or ipad
        else {
            if (mainSlideIndex == imgSlide.length - 1) {
                setIsTransition(false)
                setMainSlideIndex(1)
                setTimeout(() => {
                    setIsTransition(true)
                    setMainSlideIndex(pre => pre + 1)
                }, 0.01)
            }
            else setMainSlideIndex(pre => pre + 1)
        }
    }

    const handleDot = (index) => {
        setIsTransition(true)
        if (windowWidth > 1000) {
            setMainSlideIndex(index - 1)
        }
        else setMainSlideIndex(index)
    }
    return (
        <div className='page Projects' name="PROJECTS">
            <div
                className=' Projects__btn__container Projects__btn__container--Pre'
                onClick={() => handlePre()}
            >
                <AiOutlineLeft />
            </div>
            <div
                className=' Projects__btn__container Projects__btn__container--Next'
                onClick={() => handleNext()}
            >
                <AiOutlineRight />
            </div>
            <div className='slider__container'>
                <div
                    className='slider'
                    style={{
                        transform: `translate(${
                            //for pc or laptop
                            windowWidth > 1000 ?
                                -mainSlideIndex * (80 / 3) :
                                //for tablet
                                windowWidth > 800 ?
                                    -mainSlideIndex * 50 :
                                    //for phone
                                    -mainSlideIndex * (80)
                            }vw,0%)`,
                        transition: isTransition ? 'all 0.4s' : ''
                    }}
                >
                    {imgSlide.map((project, index) => (
                        (
                            <div
                                className='project__container'

                            >
                                <div
                                    className='project'
                                    style={
                                        index != mainSlideIndex + 1 && windowWidth > 1000 ?
                                            { transform: 'scale(0.7)' } : {}
                                    }
                                >

                                    <a href={project.link} target='blank'>
                                        <img src={project.demoImgLink} height='100%' width='100%' />
                                    </a>
                                    <div className='project__content'>
                                        <p className='project__content--name'>{project.name}</p>
                                        <p> {project.description}</p>
                                        <div className='project__buttons'>
                                            <a href={project.codeLink} target='blank'>
                                                view source
                                            </a>
                                            <a href={project.link} target='blank'>
                                                visit website
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>

            </div>
            <div className='slider__dots'>
                {imgSlide.slice(1, imgSlide.length - 1).map((dot, index) => (
                    <div
                        className='slider__dot'
                        style={
                            //dot active when user click on the same slide with the dot
                            index == mainSlideIndex ||
                                (index == 0 && mainSlideIndex == 3) ||
                                (index == 1 && mainSlideIndex == imgSlide.length - 1)
                                ? { backgroundColor: 'rgba(243, 243, 243, 1)' } : {}
                        }
                        onClick={() => handleDot(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects
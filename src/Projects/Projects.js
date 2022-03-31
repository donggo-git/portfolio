import React, { useState } from 'react'
import './Projects.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

function Projects() {
    const imgSlide = [
        //last slide clone
        {
            name: 'Weather App',
            demoImgLink: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/277554360_1441152686316701_8630898754858162703_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=cYxylNY9QIUAX_ybogZ&_nc_ht=scontent-sea1-1.xx&oh=00_AT-6cg2i5INe3yVPa5LEw9jvf6m-gZax41ReNAKikYe8lw&oe=624666A1',
            link: ' https://donggo-git.github.io/weather-app/',
            codeLink: 'https://github.com/donggo-git/weather-app'
        },
        //first slide
        {
            name: 'Commercial website',
            demoImgLink: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/276124445_1441148449650458_4669545148965557671_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=_MISjErgnEIAX-D9FXp&_nc_ht=scontent-sea1-1.xx&oh=00_AT-W7Wei60_BcAEN2bnqQlJslLC0GerO2Ru8AoH8aCN14A&oe=6247E2DA',
            link: 'https://donggo-git.github.io/shoes-selling/',
            codeLink: 'https://github.com/donggo-git/shoes-selling'
        },
        {
            name: 'Netflix Clone App',
            demoImgLink: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/276133909_1441149012983735_4063199915047674009_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=ZkD38YyTRXcAX8nIYEy&_nc_ht=scontent-sea1-1.xx&oh=00_AT972jvQ-jNH6o4WVl_78Gj-aOeCVmTBf_uO1oqdkAPngQ&oe=6247FB5C',
            link: 'https://donggo-git.github.io/netflix-clone-app/',
            codeLink: 'https://github.com/donggo-git/netflix-clone-app'
        },
        //last slide
        {
            name: 'Weather App',
            demoImgLink: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/277554360_1441152686316701_8630898754858162703_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=cYxylNY9QIUAX_ybogZ&_nc_ht=scontent-sea1-1.xx&oh=00_AT-6cg2i5INe3yVPa5LEw9jvf6m-gZax41ReNAKikYe8lw&oe=624666A1',
            link: ' https://donggo-git.github.io/weather-app/',
            codeLink: 'https://github.com/donggo-git/weather-app'
        },
        //first slide clone
        {
            name: 'Commercial website',
            demoImgLink: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/276124445_1441148449650458_4669545148965557671_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=_MISjErgnEIAX-D9FXp&_nc_ht=scontent-sea1-1.xx&oh=00_AT-W7Wei60_BcAEN2bnqQlJslLC0GerO2Ru8AoH8aCN14A&oe=6247E2DA',
            link: 'https://donggo-git.github.io/shoes-selling/',
            codeLink: 'https://github.com/donggo-git/shoes-selling'
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


    return (
        <div className='page Projects'>
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
                        transform: `translate(${windowWidth > 1000 ?
                            -mainSlideIndex * (windowWidth / 3) :
                            -mainSlideIndex * windowWidth
                            }px,0%)`,
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
                                    <a href={project.link} target='blank'>
                                        <p>{project.name}</p>
                                    </a>
                                    <a href={project.codeLink} target='blank'>
                                        <p>Source</p>
                                    </a>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
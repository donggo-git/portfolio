import React, { useState } from 'react'
import './Projects.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

function Projects() {
    const imgSlide = [
        {
            name: 'Commercial website',
            demoImgLink: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/276124445_1441148449650458_4669545148965557671_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=_MISjErgnEIAX-D9FXp&_nc_ht=scontent-sea1-1.xx&oh=00_AT-W7Wei60_BcAEN2bnqQlJslLC0GerO2Ru8AoH8aCN14A&oe=6247E2DA',
            codeImgLink: '',
            link: ''
        },
        {
            name: 'Netflix Clone App',
            demoImgLink: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/276133909_1441149012983735_4063199915047674009_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=ZkD38YyTRXcAX8nIYEy&_nc_ht=scontent-sea1-1.xx&oh=00_AT972jvQ-jNH6o4WVl_78Gj-aOeCVmTBf_uO1oqdkAPngQ&oe=6247FB5C',
            codeImgLink: ''
        },
        {
            name: 'Weather App',
            demoImgLink: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/277554360_1441152686316701_8630898754858162703_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=cYxylNY9QIUAX_ybogZ&_nc_ht=scontent-sea1-1.xx&oh=00_AT-6cg2i5INe3yVPa5LEw9jvf6m-gZax41ReNAKikYe8lw&oe=624666A1',
            codeImgLink: ''
        },
        {
            name: 'Commercial website',
            demoImgLink: 'https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/276124445_1441148449650458_4669545148965557671_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=_MISjErgnEIAX-D9FXp&_nc_ht=scontent-sea1-1.xx&oh=00_AT-W7Wei60_BcAEN2bnqQlJslLC0GerO2Ru8AoH8aCN14A&oe=6247E2DA',
            codeImgLink: ''
        },
    ]
    const handlePre = () => {
        setMainSlideIndex(pre => pre - 1)
    }
    const handleNext = () => {
        setMainSlideIndex(pre => pre + 1)
    }
    const windowWidth = window.innerWidth;
    const [slideTranslateX, setSlideTranslateX] = useState(0)
    const [mainSlideIndex, setMainSlideIndex] = useState(0)
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
            <div
                className='slide_container'
                style={{ transform: `translate(${-mainSlideIndex * (windowWidth / 3)}px,-50%)` }}
            >
                {imgSlide.map((project, index) => (
                    (
                        <div className='project__container'>
                            <div
                                className='project'
                                style={index != mainSlideIndex + 1 ? { transform: 'scale(0.7)' } : {}}
                            >
                                <img src={project.demoImgLink} height='100%' width='100%' />
                                <p>{project.name}</p>
                                <p>Source</p>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}

export default Projects
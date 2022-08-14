import React, { useState } from 'react'
import './Projects.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import styled from 'styled-components'

function Projects() {
    const [projectFullDescription, setProjectFullDescription] = useState([false, false, false])
    class project {
        constructor(name, demoImgLink, link, codeLink, description, technologies_languages) {
            this._name = name;
            this._demoImgLink = demoImgLink;
            this._link = link;
            this._codeLink = codeLink;
            this._description = description;
            this._technologies_languages = technologies_languages;
        }
        getShorterDescription() {
            if (window.innerWidth > 1000)
                return this._description.split(' ').slice(0, 15).join(" ");
            return this._description.split(' ').slice(0, 10).join(" ");
        }
        getFullDescription() {
            return this._description
        }
    }
    const imgSlide = [
        //last slide clone,
        new project(
            'Weather App',
            'https://github.com/donggo-git/portfolio/blob/main/src/Projects/Weather%20app.png?raw=true',
            ' https://donggo-git.github.io/weather-app/',
            'https://github.com/donggo-git/weather-app',
            'A weather app finding user current location and show the weather of that location, showing weather of locations for 2 next days and 24 hours of the current day',
            'HTML, CSS, JavaScript, Reactjs, third party API: weatherapi'
        ),
        new project(
            'Commercial website',
            'https://github.com/donggo-git/portfolio/blob/main/src/Projects/Commercial%20website.png?raw=true',
            'https://donggo-git.github.io/shoes-selling/',
            'https://github.com/donggo-git/shoes-selling',
            'A commercial website that can add to cart, search, filter. Using firebase to store product and items in cart',
            'HTML, CSS, JavaScript, Reactjs, Firebase'
        ),
        //first slide
        new project(
            'Netflix Clone App',
            'https://github.com/donggo-git/portfolio/blob/main/src/Projects/Netlfix%20clone.png?raw=true',
            'https://donggo-git.github.io/netflix-clone-app/',
            'https://github.com/donggo-git/netflix-clone-app',
            'A movie app website showing film by genres, trend, let user search film, add film to favorite, play film trailer using third party API: TMDB and react-youtube (note: because I still working on the loading page so there will be a full green page for 1s before seeing the website)',
            'HTML, CSS, JavaScript, Reactjs, Firebase; API: TMDB, react-youtube'
        ),
        //last slide
        /*
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
        }*/
    ]
    const showMoreHandler = (project_index) => {
        let newProjectFullDescription = [...projectFullDescription]
        newProjectFullDescription[project_index] = !newProjectFullDescription[project_index]
        setProjectFullDescription(newProjectFullDescription)
    }
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
        <ProjectsList className='page' name="PROJECTS">
            {imgSlide.map((project, project_index) => (
                <ProjectContainer key={project._name}>
                    <ProjectImage src={project._demoImgLink} project_index={project_index} />
                    <ProjectContent>
                        <ProjectName>{project._name}</ProjectName>
                        <ProjectDescription>
                            <span>Description: </span>
                            {projectFullDescription[project_index] ? `${project.getFullDescription()} ` : `${project.getShorterDescription()} `}
                            <span
                                className='project__showMore'
                                onClick={() => showMoreHandler(project_index)}
                            >
                                {
                                    projectFullDescription[project_index] ?
                                        'show less' :
                                        '... show more'
                                }
                            </span>
                        </ProjectDescription>
                        <ProjectTechnologies><span>Technologies, languages: </span>{project._technologies_languages}</ProjectTechnologies>
                        <ProjectButtons>
                            <ProjectBtn href={project._link} target='blank'>Demo</ProjectBtn>
                            <ProjectBtn href={project._codeLink} target='blank'>Github</ProjectBtn>
                        </ProjectButtons>
                    </ProjectContent>
                </ProjectContainer>
            ))}
            {/*
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
*/}
        </ProjectsList>
    )
}
const ProjectsList = styled.div`
            background-color: white;
            min-height: 100vh;
            height: auto;
            padding 30px 0;
            `
const ProjectContainer = styled.div`
            margin: 80px auto;
            width: 80%;
            display:flex;
            flex-direction: row;
            height: auto;
            background-color: rgb(89, 41, 248);
            box-shadow: 0 0 10px rgba(0,0,0,0.3);
            transition: height 0.4s;
            @media(max-width:1000px){
                flex-direction: column;
            }
            @media(max-width:1000px) and (min-width:800px){
                width: 60%;
            }
            `
const ProjectImage = styled.img`
            width: 50%;
            order: ${props => Number(props.project_index) % 2 == 0 ? '0' : '1'};
            @media(max-width:1000px){
                order: 0;
                width: 100%;
            }
            `
const ProjectContent = styled.div`
            width: 50%;
            @media(max-width:1000px){
                width: 100%;
            }
            `
const ProjectName = styled.h3`
            margin: 10px auto;
            font-size: 20px;
            width: fit-content;
            `
const ProjectDescription = styled.p`
            width: 80%;
            margin: 0 auto;
            font-size: 18px;
            transition: all 0.4s;
            span{
                font-weight: bold;
            }
            @media(max-width:1000px){
                width: 90%;
            }
            `
const ProjectTechnologies = styled.p`
            width: 80%;
            margin: 10px auto;
            font-size: 18px;
            span{
                font-weight: bold;
            }
            @media(max-width:1000px){
                width: 90%;
            }
            `
const ProjectButtons = styled.div`
            display:flex;
            align-items: center;
            justify-content: space-evenly;
            width: 80%;
            margin: 0 auto;
            `
const ProjectBtn = styled.a`
            text-decoration: none;
            background-color: rgba(255,255,255,0);
            color: white;
            border: 1px solid white;
            padding: 8px 18px;
            border-radius: 10px;
            transition: all 0.4s;
            margin-bottom: 20px;
            :hover{
                background-color: rgba(255,255,255,0.4);
    }
            `

export default Projects
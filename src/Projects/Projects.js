import React, { useState } from 'react'
import './Projects.css'

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
    ]
    const showMoreHandler = (project_index) => {
        let newProjectFullDescription = [...projectFullDescription]
        newProjectFullDescription[project_index] = !newProjectFullDescription[project_index]
        setProjectFullDescription(newProjectFullDescription)
    }


    return (
        <ProjectsList name="PROJECTS">
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
            color:white;
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
            color:white;
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
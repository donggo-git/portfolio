import React, { useState, useEffect } from 'react'
import project from '../project'
import './Projects.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components'
import AWS from 'aws-sdk';

AWS.config.update({
    region: 'us-east-1', // e.g., 'us-west-2'
    accessKeyId: 'AKIATLZD6WJQWZAL4IGO',
    secretAccessKey: '2FYra7W6OuBUwzWW3RCBlDJZS5BMaORHyKZHk6QL',
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const putData = async (tableName, item) => {
    const params = {
        TableName: tableName,
        Item: item,
    };

    try {
        await dynamoDB.put(params).promise();
        console.log('Data added/updated successfully');
    } catch (error) {
        console.error('Error adding/updating data:', error);
    }
};




function Projects() {
    AOS.init();
    const [projectFullDescription, setProjectFullDescription] = useState([false, false, false])
    const [projectList, setProjectList] = useState();

    const getData = async (tableName, key) => {
        const params = {
            TableName: tableName
        };

        try {
            const data = await dynamoDB.scan(params).promise();
            console.log('Data retrieved:', data.Items);
            setProjectList(data.Items);
            return data.Items;
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    };
    useEffect(() => {
        const project = [
            {
                name: 'Affordability college',
                imgLink: 'https://github.com/donggo-git/portfolio/blob/main/src/Projects/college_affordability.png?raw=true',
                demoLink: 'https://college-affordability-estimator.uw.edu/',
                codeLink: null,
                description: "Assisting the WASAC organization in visualizing college affordability for their project by implementing React.js and Django code to develop and manage the primary chart on the website.: https://college-affordability-estimator.uw.edu/, leading to the client deploying a new project for students \nImplement a feature to support saving and sharing user inputs using TypeScript, and Redux to reduce time configuring inputs on each page visit by 20% of the time, leading to reduce analysis data process by 5% \nAssisting new software engineers in comprehending the code base, enabling them to work independently",
                technologies_and_languages: 'Reactjs, Python, Django, SQL, PostgresSQL, HTML, CSS, Typescript'
            }, {
                name: 'Restaurant Review Website',
                imgLink: 'https://github.com/donggo-git/portfolio/blob/main/src/Projects/restaurant_review.png?raw=true',
                demoLink: null,
                codeLink: 'https://github.com/donggo-git/mern-stack-restaurantReview',
                description: "Created API for CRUD operations using Node.js, Express.js, and MongoDB to handle restaurant review database \nEnsure users' personal information security by implementing user authentication flow using JSON web token \nDesign and create a friendly UI/ UX website using React.js, HTML, and CSS",
                technologies_and_languages: 'Nodejs, Express.js, MongoDB, Mongoose, Reactjs, HTML, CSS, Javascript'
            },
            {
                name: 'Text editor',
                imgLink: 'https://github.com/donggo-git/portfolio/blob/main/src/Projects/text_editor.png?raw=true',
                demoLink: null,
                codeLink: 'https://github.com/donggo-git/TextEditor',
                description: "Create API for CRUD operations using .NET and MySQL to handle user's text document \n Design and create a friendly UI/ UX website using Blazor",
                technologies_and_languages: 'C#, .NET, HTML, CSS, Javascript, MySQL, SQL'
            }
        ]

        getData('personal_projects',);
        for (let i = 0; i < project.length; i++) {
            //putData('personal_projects', project[i]);
        }
        //putData('personal_projects', project);
    }, [])
    const imgSlide = [
        //last slide clone,
        new project(
            'Weather App',
            'https://github.com/donggo-git/portfolio/blob/main/src/Projects/Weather%20app.png?raw=true',
            ' https://donggo-git.github.io/weather-app/',
            'https://github.com/donggo-git/weather-app',
            'A weather app finding user current location and show the weather of that location, showing weather of locations for 2 next days and 24 hours of the current day (because it uses free version API so please wait 1.5s when click allow to share your location)',
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
            'A movie app website showing film by genres, trend, let user search film, add film to favorite, \nplay film trailer using third party API: TMDB and react-youtube (note: because I still working on the loading page so there will be a full green page for 1s before seeing the website)',
            'HTML, CSS, JavaScript, Reactjs, Firebase; API: TMDB, react-youtube'
        ),
    ]
    const showMoreHandler = (project_index) => {
        let newProjectFullDescription = [...projectFullDescription]
        newProjectFullDescription[project_index] = !newProjectFullDescription[project_index]
        setProjectFullDescription(newProjectFullDescription)
    }
    const resetShow = () => {
        let newProjectFullDescription = [...projectFullDescription]
        newProjectFullDescription = newProjectFullDescription.map(project => project = false);
        setProjectFullDescription(newProjectFullDescription);
    }
    const projectApearAnimateDirection = (project_index) => {
        if (window.innerWidth > 1000) {
            return 'fade-up'
        }
        //return 'flip-up'
    }

    return (
        <ProjectsList name="PROJECTS">
            <Modal style={
                projectFullDescription.some(project => project === true) && window.innerWidth >= 1000 ?
                    {
                        display: 'block'
                    } : {}
            }
                onClick={resetShow}
            >
            </Modal>
            {projectList?.map((project, project_index) => (
                <ProjectContainer
                    key={project._name}
                    data-aos={projectApearAnimateDirection(project_index)}
                    data-aos-offset="200"
                    data-aos-duration="300"
                    data-aos-easing="ease-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    style={projectFullDescription[project_index] && window.innerWidth >= 1000 ? {
                        flexDirection: 'column',
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -70%)',
                        width: '40%',
                        zIndex: '10',
                        height: '70vh',
                        overflowY: 'scroll',
                        scrollbarWidth: 'thin'
                    } : {}}
                    onClick={() => showMoreHandler(project_index)}
                >
                    <ProjectImage src={project.imgLink} project_index={project_index}
                        style={projectFullDescription[project_index] && window.innerWidth >= 1000 ? {
                            width: '100%'
                        } : {}}
                    />
                    <ProjectContent
                        style={projectFullDescription[project_index] && window.innerWidth >= 1000 ? {
                            width: '100%'
                        } : {}}
                    >
                        <ProjectName>{project.name}</ProjectName>
                        {projectFullDescription[project_index] &&
                            <ProjectDescription>
                                <span>Description: </span>
                                {project.description}
                                {/*projectFullDescription[project_index] ? `${project.getFullDescription()} ` : `${project.getShorterDescription()} `*/}
                            </ProjectDescription>}
                        <ProjectTechnologies><span>Technologies, languages: </span>{project.technologies_and_languages}</ProjectTechnologies>
                        {
                            projectFullDescription[project_index] &&
                            <ProjectButtons>
                                <ProjectBtn href={project.demoLink} target='blank'>Demo</ProjectBtn>
                                <ProjectBtn href={project.codeLink} target='blank'>Github</ProjectBtn>
                            </ProjectButtons>
                        }

                    </ProjectContent>
                </ProjectContainer>
            ))
            }
        </ProjectsList >
    )
}
const ProjectsList = styled.div`
            background-color: white;
            min-height: 100vh;
            height: auto;
            padding 30px 0;
            display: grid;
            grid-template-columns: 30% 30% 30%;
            @media(max-width:1000px){
                grid-template-columns: 50% 50%;
            }
            @media(max-width:500px){
                grid-template-columns: 90%;
            }
            justify-content: space-evenly;
            align-items: center;
            `
const Modal = styled.div`
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
`
const ProjectContainer = styled.div`
            margin: 80px auto;
            display:flex;
            flex-direction: column;
            height: 350px;
            background-color: rgb(89, 41, 248);
            box-shadow: 0 0 10px rgba(0,0,0,0.3);
            @media(max-width:1000px){
                flex-direction: column;
            }
            @media(max-width:1000px) and (min-width:800px){
                width: 60%;
            }
            `
const ProjectImage = styled.img`
            width: 100%;
            
            @media(max-width:1000px){
                order: 0;
                width: 100%;
            }
            `
const ProjectContent = styled.div`
            width: 100%;
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
            white-space: pre-line;
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
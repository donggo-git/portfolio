import React from 'react'
import './AboutMe.css'

function AboutMe() {
    const skills = [
        {
            imgLink: 'https://code.broker/wp-content/uploads/html-5-icon.png',
            name: 'HTML'
        },
        {
            imgLink: 'https://cdn.iconscout.com/icon/free/png-256/css-118-569410.png',
            name: "CSS"
        },
        {
            imgLink: 'https://www.britefish.net/wp-content/uploads/2019/06/logo-javascript-2.png',
            name: 'JAVASCRIPT'
        },
        {
            imgLink: 'https://th.bing.com/th/id/OIP.t_Vqx3X2XolxOeHSoOwoNAHaFD?w=238&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            name: 'PYTHON'
        },
        {
            imgLink: "https://th.bing.com/th/id/R.45e2fa4e6eb0070f5e4ac8ad4883179f?rik=U1EM3MNAJh4L3g&riu=http%3a%2f%2flh3.googleusercontent.com%2f-19-pEa2WYkA%2fTu4MlsmBD2I%2fAAAAAAAAA1E%2f3V9LJoQgTSA%2fw1200-h630-p-k-no-nu%2fjavalogo.jpg&ehk=Ai0pd%2fOR5ftGIl8ej%2bDhrb%2blrP6B9%2b2CgCqoPbcsRsg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
            name: 'JAVA'
        },
        {
            imgLink: 'https://th.bing.com/th/id/OIP.d2_YJpQXd074spMEeB5SdwHaGb?w=215&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            name: 'REACTJS'
        },
        {
            imgLink: 'https://th.bing.com/th/id/OIP.cFEq9XS7SeBjfTsjvLGzPgHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            name: 'GITHUB'
        },
        {
            imgLink: 'https://th.bing.com/th/id/OIP.riAj889ZOePSATbx-bXnUQHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            name: 'FIREBASE'
        },
        {
            imgLink: 'https://th.bing.com/th/id/OIP.FHfPLk9nqLO0Gp2-dmOU-QHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            name: 'VISUAL STUDIO CODE'
        }
    ]
    return (
        <div>
            <ul className='contactInfo'>
                <li><a href="tel:+2063065818">Phone number</a>|</li>
                <li><a href="mailto:donggnguyen12@gmail.com">Email</a>|</li>
                <li><a href="https://github.com/donggo-git">Github</a></li>
            </ul>
            <div className='skills_education'>
                <div className='skill_container'>
                    <p>MY SKILL</p>
                    <div className='skills'>
                        <p>LANGUAGE</p>
                        <div className='skills_content'>
                            {skills.slice(0, 5).map(skill => (
                                <div className='skill' key={skill.name}>
                                    <img src={skill.imgLink} className="skill__img" />
                                    <p className='skill__name'>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='skills'>
                        <p>FRAME WORK & TECHNOLOGY</p>
                        <div className='skills_content'>
                            {skills.slice(5).map(skill => (
                                <div className='skill'>
                                    <img src={skill.imgLink} className="skill__img" />
                                    <div className='skill__name'>{skill.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/*education */}
                <div className='education_container'>
                    <p>EDUCATION</p>
                    <div className='education'>
                        <img src="https://th.bing.com/th/id/OIP.OHErfLyQ6xZB8xhFGAllWgAAAA?w=168&h=169&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
                        <div className='education_content'>
                            <h5>SOUTH SEATTLE COLLEGE</h5>
                            <p>degree: Associate of Science</p>
                            <p>from: 01/2020  graduate: 10/2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
import React from 'react'

function AboutMe() {
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
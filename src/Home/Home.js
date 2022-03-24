import React from 'react'
import "./Home.css"

function Home() {
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
        <div className='Home page'>
            {/*full name */}
            <div className='header'>
                <div className='avatar'>
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQGRDruucqyDKg/profile-displayphoto-shrink_400_400/0/1648146065805?e=1653523200&v=beta&t=iHAAanNmzSERWPKI3DI9Zvm06TNec4_bNixp4ZrTfYo" />

                </div>
                <div className='name_description'>
                    <h1>Dong Giang Nguyen</h1>
                    {/*description */}
                    <p className='description'>
                        Hi there. I’m Dong, a CSC student who passionate with building website.
                        Lack of experience, but work hard and enthusiatic.
                        Looking for internship position.
                    </p>
                    <button>RESUME</button>
                </div>
            </div>

            {/*skill */}

        </div >
    )
}

export default Home
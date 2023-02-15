import React from 'react';

function About(e) {

    return(
    <div className='p-5'>
      <div className='container'>
        <div className='p-5 text-center'>
            <h1>Xiaojing Deng</h1>
            <b>
                A full stack web Developer
            </b>
           <img alt="" id="curve" src='https://avatars.githubusercontent.com/u/110792983?v=4'/>
            
            <div className='col-lg mx-auto'>
                <p className='lead m-4' id='my-info'>
                Hi, I'm Xiaojing Deng, a Full Stack Web-Developer.

                I recently completed the Case Western Reserve University Full-Stack coding bootcamp.<br></br>
                Part of my developing coding skills includes an understanding of current technologies 
                which includes JavaScript, NodeJs, PWA, ReactJS, MERN Stack Development, responsive web design and Git.
                Also posess working experience with automated testing of complex web applications. Independent and Organized.
                I am known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. With each project,
				my aim is to best engage my audience for an impactful user experience.
                </p>

            </div>

        </div>
    </div>
</div>
    )
}

export default About;
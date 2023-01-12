import React from 'react';

function About() {
   

    return(
        <div className='p-5 text-center border-bottom about'>
            <h1>Xiaojing Deng</h1>
            <b>
                A full stack web Developer
            </b>
           <img alt="" id="curve" src='https://avatars.githubusercontent.com/u/110792983?v=4'/>
            
            <div className='col-lg-6 mx-auto'>
                <p className='lead m-4' id='my-info'>
                Hi, I'm Xiaojing Deng, Full Stack Web-Developer.

                I am currently taking part in a full Stack Web Development course at the Case Western Reserve University.
                Understanding technologies including JavaScript, Node Js, Git,is desirable
                Can write CSS from scratch. Creates solid page layout and ReactJS components with vanilla CSS without relying on CSS libraries or frameworks.
                Familiar with the latest CSS specifications like CSS Grid, CSS Flexbox, etc.
                Working experience with automated testing of complex web applications.Independent and self-organized.
                </p>
                <button className='btn btn-primary btn-lg'>contact me</button>
            </div>

        </div>
    )
}

export default About;
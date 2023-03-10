import React from 'react'; 
import ProjectCards from '../../components/Project'
import portfolio from '../../portfolio.json'

function Portfolio () {  
    return (
        <div className='p-5'>
            <div className='container'>
                <h2 className='top-title font-weight-bold'>My Projects</h2>
                <div id="card-data" className='row'>
                    {portfolio.map((project) =>
                         <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
                    )}
                </div>
            </div>
        </div>
    );
  }

export default Portfolio;
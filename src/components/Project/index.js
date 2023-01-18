function ProjectCards(props) {
    return (
      <div className='col-lg-4'>
      <div className="card shadow-lg h-75"> 
      <div className="img-container">
        <img src={props.image} alt={props.name}/>
      </div>
      <div className="content">
            <p className="card-title">{props.name}</p>
            <p class="proj-link-container">     
            <a href={props.github} class="card-link" alt="GitHub Repo">GitHub</a>
            <a href={props.deploy} class="card-link" alt="Live Application">Live Application</a>
            </p>
            <p class="topics">
            ({props.topics})
              </p>
      </div>
    </div>
    </div>
    );
}
  
  export default ProjectCards;
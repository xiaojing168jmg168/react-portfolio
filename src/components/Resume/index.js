function Resume() {

    // Function will execute on click of button
    const onButtonClick = () => {
      // using JavaScript method to get PDF file
      fetch('xiaojing-deng-resume.pdf').then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'xiaojing-deng-resume2.pdf';
              alink.click();
          })
      })
  }
	return (
			<div className="container">
				<h2 className='mt-5 mb-5'>My Resume</h2>
     
          <div className="bottom-spacing mb-5">

              <h4>Download my Resume</h4>
              <button onClick={onButtonClick}>
                    Download PDF
                </button>
        
          </div>
          <div>
            <h5>Front-End Proficiencies</h5>
            <ol>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>React</li>
              <li>version control/Git</li> 
              <li>responsive design</li>
            </ol>
            <br></br>
            <h5>Back-End Proficiencies</h5>
            <ol>
              <li>APIs</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>Model View Controller (MVC)</li>
              <li>REST</li>
              <li>Progressive Web Applications (PWA)</li>
            </ol>
            <br></br>
            <h5>Dev Tool Proficiencies</h5>
            <ol>
              <li>Git</li>
              <li>npm</li>
              <li>Jest</li>
              <li>Webpack</li>
            </ol>
            <br></br>
            <h5>Database Proficiencies</h5>
            <ol>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>NoSQL</li>
              <li>SQLite</li>
              <li>GraphQL</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
            </ol>
			</div>
      </div>
	
	);
}

export default Resume;
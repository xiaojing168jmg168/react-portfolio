
function Navigation(props) {
    return (
      <div>
        <nav className="navbar bg-dark navbar-dark p-3 navbar-expand-lg">
            <div className="container">
                <a href="/about-me" className="navbar-brand">Xiaojing Deng</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="about-me" className="nav-link">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a href="portfolio" className="nav-link">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="/resume" className="nav-link">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    );
  }
  
  export default Navigation;
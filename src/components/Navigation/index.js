
function Navigation(props) {
    const tabs = ["About", "Portfolio", "Contact", "Resume"];
    return (
        <div>
            <nav className="navbar bg-dark navbar-dark p-3 navbar-expand-lg">
                <div className="container">
                    <a href="#about" className="navbar-brand">Xiaojing Deng</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            {tabs.map((tab) => (
                                <li
                                    className={
                                        props.currentPage === tab ? "nav-item is-active" : "nav-item"
                                    }
                                    key={tab}
                                >
                                    <a
                                        href={"#" + tab.toLowerCase()}
                                        // Whenever a tab is clicked on,
                                        // the current page is set through the setCurrentPage props.
                                        onClick={() => props.setCurrentPage(tab)}
                                        className={
                                            props.currentPage === tab ? "nav-link active" : "nav-link"
                                        }
                                    >
                                        {tab}
                                    </a>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
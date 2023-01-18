function Footer() {   
    return (
    <footer className="p-4 border-top text-bg-light">
        <div className="container align-items-center justify-content-between d-flex">
            <p className="mb-0 text-muted">
                &copy; 2023 xjd. All rights reserved
            </p>
            <ul className="nav">
                <li className="nav-item">
                <a href="https://github.com/xiaojing168jmg168/" className="nav-link text-muted"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon"/></a> 
                </li>
                <li className="nav-item">
                <a href="https://www.linkedin.com/in/xiaojing-deng-b04160248/" className="nav-link text-muted"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="Linkedin" className="icon"/></a> 
                </li>
                <li className="nav-item">
                <a href="https://stackoverflow.com/users/19713911/xiaojing-deng" className="nav-link text-muted"><img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg" alt="stack overflow" className="icon"/></a> 
                </li>
            </ul>
       </div>
    </footer>
    )
}

export default Footer;
import React, { useState } from 'react';
import Navigation from "../Navigation";
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import Resume from "../Resume";
import { useEffect } from "react";
function Header() {
  const [currentPage, setCurrentPage] = useState("About");
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);
  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  };

  return (
    <div>
    
      {/* Pass the state value and the setter as props to NavTabs */}
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {/* Call the renderPage function passing in the currentPage */}
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;
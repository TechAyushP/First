// import React from 'react'
// import { Link } from 'react-router-dom'

// const NavBar = () => {
//   return (
//     <div>
//         <ul style={{display:'flex', justifyContent:"space-evenly", height:'10 vh', backgroundColor:'red', color:'white'}}>
//             <li> <Link to="/"  style={{color:"white"}}>Home</Link> </li>
//             <li> <Link to="/About" style={{color:"white"}}>About</Link> </li>
//             <li> <Link to="/service" style={{color:"white"}}>Service</Link> </li>
//             <li> <Link to="/register" style={{color:"white"}}>Register</Link> </li>
//             <li> <Link to="/login" style={{color:"white"}}>Login</Link> </li>
//             <li> <Link to="/alluser" style={{color:"white"}}>All user</Link> </li>
//         </ul>
      
//     </div>
//   )
// }

// export default NavBar


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <div style={styles.container}>
      <ul style={styles.navList}>
        {['/', '/About', '/service', '/register', '/login', '/alluser'].map((path, index) => {
          const linkText = path.substring(1) || 'Home';
          return (
            <li key={index} style={styles.navItem}>
              <Link
                to={path}
                style={{
                  ...styles.navLink,
                  ...(hoveredLink === path ? styles.navLinkHover : {})
                }}
                onMouseEnter={() => handleMouseEnter(path)}
                onMouseLeave={handleMouseLeave}
              >
                {linkText.charAt(0).toUpperCase() + linkText.slice(1)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    backgroundColor: '#333', // Dark background color for the navbar
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add shadow for better separation
  },
  navList: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '60px', // Adjusted height for better appearance
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    color: '#fff', // White color for the links
    textDecoration: 'none',
    fontSize: '16px',
    padding: '10px 15px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    borderRadius: '4px', // Rounded corners for the links
  },
  navLinkHover: {
    backgroundColor: '#575757', // Darker background on hover
    color: '#fff', // White text on hover
  },
};

export default NavBar;


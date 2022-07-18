import { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import myLogo from '../assets/images/Developers_2.svg';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';
import git_icon from '../assets/images/git_4.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  };
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container >
        <Navbar.Brand href="#home">
          <img
            style={{
              width: 300,
              height: 95,
              paddingBottom: 0,
              paddingTop: 0,
              paddingRight: 120,
              objectFit: 'cover',
            }}
            src={myLogo}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toogler-icon">MENU</span> 
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/marcelo-batista-fajardo-3a068416a">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://github.com/javaPhpMyAdmin">
                <img src={git_icon} alt="github" />
              </a>
              <a href="https://www.instagram.com/chelitooo_bati/">
                <img src={navIcon3} alt="instagram" />
              </a>
            </div>
            <a href="#connect" className='buttonConnect'>
              <button className="vvd" >
                <span>Let's Connect</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

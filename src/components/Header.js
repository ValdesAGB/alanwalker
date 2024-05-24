import React, { useEffect, useState } from 'react'
import { headerElements, logo } from '../data'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  left: 0px;
  right: 0px;
  position: fixed;
  z-index: 10;
  padding: ${({ isAtTop }) => (isAtTop ? '30px 0px' : '25px 0px')};
  background-color: ${({ isAtTop }) => (isAtTop ? 'transparent' : '#fff')};
  transition: all 0.5s ease;

  @media (max-width: 1199px) {
    padding: 10px 0;
    background-color: #fff;
    position: relative;
  }

  .container {
    padding: 0;
  }

  .logo {
    display: block;

    @media (min-width: 1200px) {
      display: none;
    }
  }

  .logo-xl {
    display: none;

    @media (min-width: 1200px) {
      display: block;
    }
  }
`

const Logo = styled.img`
  max-width: 100px;

  @media (max-width: 1199px) {
    max-width: 70px;
  }
`

const ToggleBtn = styled.button`
  border: none;
  border-radius: 0;
`

const MenuContainer = styled.ul`
  margin: 0px;
  list-style-type: none;

  @media (max-width: 1199px) {
    padding: 25px 0;
  }

  li {
    margin: 0px 30px 0px 0px;
    display: inline-block;

    @media (max-width: 1199px) {
      margin: 0;
      display: block;
    }

    a {
      text-decoration: none;
      color: ${({ isAtTop }) => (isAtTop ? '#fff' : '#000')};
      font-family: 'Poppins';
      font-weight: 500;
      transition: all 0.3s ease;

      &:hover {
        color: #e54b4b;
      }

      @media (max-width: 1199px) {
        color: #000;
      }
    }
  }
`

function Header() {
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY === 0) {
        setIsAtTop(true)
      } else {
        setIsAtTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [headerHeight, setHeaderHeight] = useState(20) // Hauteur par défaut pour les grands écrans
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    // Fonction pour mettre à jour la hauteur de l'en-tête en fonction de la taille de l'écran
    const updateHeaderHeight = () => {
      const screenWidth = window.innerWidth
      setWindowWidth(screenWidth) // Met à jour la largeur de l'écran dans l'état
    }

    // Ajoutez un écouteur d'événement pour détecter les changements de taille d'écran
    window.addEventListener('resize', updateHeaderHeight)

    // Nettoyage : supprimez l'écouteur lors de la suppression du composant
    return () => {
      window.removeEventListener('resize', updateHeaderHeight)
    }
  }, [])

  useEffect(() => {
    // Met à jour la hauteur de l'en-tête en fonction de la largeur de l'écran actuelle
    if (windowWidth < 992) {
      setHeaderHeight(2)
    } else {
      setHeaderHeight(50)
    }
  }, [windowWidth])

  const handleClick = (event, targetId, targetHref) => {
    event.preventDefault()

    if (targetHref === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition - headerHeight

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <React.Fragment>
      <HeaderContainer className="row" isAtTop={isAtTop}>
        <div>
          <div className="container">
            <nav className="navbar navbar-expand-xl">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <Logo
                    src={isAtTop ? logo.light : logo.dark}
                    alt="logo"
                    className="logo-xl"
                  />
                  <Logo src={logo.dark} alt="logo" className="logo" />
                </a>
                <ToggleBtn
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </ToggleBtn>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav ">
                    <MenuContainer isAtTop={isAtTop}>
                      {headerElements.map(({ id, title, href }) => (
                        <li key={id}>
                          <a
                            className={`nav-link ${id}`}
                            href={href}
                            onClick={(e) => handleClick(e, href, href)}
                          >
                            {title}
                          </a>
                        </li>
                      ))}
                    </MenuContainer>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </HeaderContainer>
    </React.Fragment>
  )
}

export default Header

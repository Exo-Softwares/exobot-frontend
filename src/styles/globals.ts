/* General Imports */
import styled, { createGlobalStyle } from 'styled-components'

/* Theme Import */
import theme from './theme'

/* Assets Imports */
// import discordityBackground from '../assets/discorditybg.png'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    body {
        background-color: ${(props) => theme.colors.background};
        background-repeat: no-repeat;
        background-size: cover;
        color: ${(props) => theme.colors.text};
        font: 400 16px Inter, sans-serif;
        min-height: 100vh;

        main {
          min-height: calc(100vh - 150px);
        }
    }


    /* Change background effect styles */
    .nav-background {
      -webkit-backdrop-filter: blur(8px);
      backdrop-filter: blur(8px);
    }

    .nav-transparent {
      background: transparent;
      box-shadow: none;
    }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0px 15vw;

  main {
    width: 100%;
  }

  @media (max-width: 1100px) {
    padding: 0px 4vw;
  }
`

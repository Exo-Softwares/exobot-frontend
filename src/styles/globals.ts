
/* General Imports */
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

/* Theme Import */
import theme from './theme';

/* Assets Imports */
import discordityBackground from '../assets/discorditybg.png';



export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    #__next {
      height: 100%;
    }

    body {
        background-color: ${props => theme.colors.background};
        background-repeat: no-repeat;
        background-size: cover;
        color: ${props => theme.colors.text};
        font: 400 16px Inter, sans-serif;
        min-height: 100vh;
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
`;

export const Container = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1;
    padding: 0px 15vw;

    main {
      width: 100%;
    }
`;

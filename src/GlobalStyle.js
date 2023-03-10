import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root
    {
        --color-primary: #121214;
        --color-secondary:#4b31b9;
        --color-error:#EA524F;
        --color-text:#E1E1E6;
        --color-backgroundMain: #f8f8f8f8;
        --color-backgroundWindow: #002912;
        --color-border: #7A7A7A;
  }
    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }
    body,html{
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button{
        cursor: pointer;
    }
    body {
        background: var(--color-backgroundMain);
        color: var(--color-text);
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        overflow-y: overlay;
    }
    body, input, button, textarea{
        font-family: 'Roboto';
        //font-size: 1.6rem;
    }
        h1{
            font-size: 35px;
            font-weight: 600;
        }
        h2{
            font-size: 20px;
        }
        h3{
            font-size: min(28px , 1.8vw);
        }
        p{
            font-size: min(20px , 1.5vw);
        }
    h1, h2, h3, h4, h5, h6, p, strong{
        font-weight: 500;
        font-family: 'Poppins';
    }
    
    @media (max-width: 512px) {
        h1{
            font-size: 1.5em;
        }
        h2{
            font-size: 1.2em;
        }
        h3{
            font-size: 1.0em;
            font-weight: normal;
        }
        p{
            font-size: 0.8em;
            font-weight: normal;
        }
    }
`
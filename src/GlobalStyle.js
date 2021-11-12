import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* root here */
:root{
    --green: #689022;
    --blue: #002f64;
    --white: #fff;
    --black: #242624;
    --fontHeader: 'Lora', serif;
    --fontText: 'Sora', sans-serif;
}

* {
    box-sizing: border-box;
    font-size: 14px;

    @media screen and (min-width: 460px){
        font-size: 16px;
    }

    @media screen and (min-width: 720px){
        font-size: 18px;
    }

    @media screen and (min-width: 1024){
        font-size: 20px;
    }
}

ul, li{
    padding: 0;
    margin: 0;
    list-style: none;
}

a{
    text-decoration: none;
}

body{
    background: var(--white);
    margin: 0;

    h1, h2, h3, h4, h5{
    font-family: var(--fontHeader);
    text-transform: capitalize;
    font-weight: 700;
    }
    
    h1{
        font-size: 1.8rem;
    }

    h2{
        font-size: 1.6rem;
    }

    h3{
        font-size: 1.4rem;
    }

    p, span, a, ul, li{
        font-family: var(--fontText);
        font-size: 1rem;
    }

    @media screen and (min-width: 720px){
    }

    .hover{
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }

    .hover:hover{
        color: var(--white) !important;
        transition: all 0.3s ease-in-out;
    }

}






`;

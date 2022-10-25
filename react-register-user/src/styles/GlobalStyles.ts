import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
     :root {
        --dark-jungle-green: #072E23; // text
        --eerie-black: #1A1D1A; //color input
        --morning-blue: #8AB0AB; // strong h1 etc
        --charcoal: #3e505b; //background content
        font-family: 'Oswald', sans-serif;
    }
    body {
        background-color: var(--charcoal)
    }

    * {
        color: var(--dark-jungle-green);
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1 {
        color: var(--morning-blue);
    }

    form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .input-container {
        width: 80%;
        margin-top: 10px; 
        display: flex;
        flex-direction: column;
        text-align:left; 
    }

    label {
        font-size: 20px;
        text-align: left;
    }

    .userData-Container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 10px;
    }

    .userData-Container input {
        cursor: pointer;
    }

    .adminUserData-container {
        display: flex;
        list-style-type: none;
        gap: 1rem; 
    }

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background-color: #fbB099;
        border-radius: 1rem;
    }
`

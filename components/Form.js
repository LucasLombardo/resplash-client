import styled from 'styled-components';

export const Form = styled.form`
    max-width: 480px;
    margin: 0 auto;
    font-size: 1.1em;
    fieldset {
        padding: 3em 5em;
        background: rgba(255,255,255,01);
        border: 2px solid #777;
    }
    h2 {
        text-align: center;
    }
    img {
        display: block;
        max-width: 240px;
        border: 1px solid black;
        margin: 0 auto 1em;
    }
    input {
        width: 100%;
        display: block;
        margin: 0.3em 0 1em;
        height: 36px;
        font-size: 12px;
    }
    button {
        height: 36px;
    }
`;

import styled from 'styled-components'

export const StyledNavContainer = styled.div`
    height: 6vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    list-style-type: none;
    background-color: rgb(16, 19, 64);
`;

export const StyledNavBar = styled.div`
    display: flex;
    width: 30vw;
    justify-content: space-around;
`;

export const StyledHomeButton = styled.div`
    margin-left: 15px;
`;

export const StyledNavList = styled.div`
    color: white;
    background-color: rgb(16, 19, 64);

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        color: lightgray;
    }

    button {
        color: white;
        background: none;
        border: none;
        cursor: pointer;
    }

    button:hover {
        color: lightgray;
    }
`;

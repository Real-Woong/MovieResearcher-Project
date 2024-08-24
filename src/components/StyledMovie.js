import styled from 'styled-components'

export const StyledMovieContainer = styled.div`
    width: 250px;
    height: 460px;
    margin: 16px;
    background-color: rgb(56, 75, 117);
    color: white;
    border-radius: 5px;
    img {
        max-width: 100%;
        border-radius: 5px 5px 0 0;
    }
`;

export const StyledMovieInfo = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    width: 210px;
    padding: 10px 20px 20px 20px;
    color: white;

    h4 {
        margin: 0;
        padding-right: 5px;
        font-size: 16px;
        line-height: 150%;
        font-weight: lighter;
    }

    span {
        margin-left: 3px;
    }
`;

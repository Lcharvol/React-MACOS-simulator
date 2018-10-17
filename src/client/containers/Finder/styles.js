import styled from 'styled-components';

export const Container = styled.div`
    position:absolute;
    z-index:${({ position}) => position};
    display:flex;
    min-width: 200px;
    min-height: 300px;
    background-color:white;
    border-radius:3px;
    overflow:hidden;
`;

export const Content = styled.div`
    position:relative;
    display:flex;
    width:100%;

`;
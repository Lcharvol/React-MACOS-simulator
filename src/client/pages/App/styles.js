import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    width:100vw;
    height:100vh;
    background-color:rgb(10,10,10);
    font-family: monospace;
    overflow:hidden;
    background-image:url('http://i.imgur.com/Z8AyFU8.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Content = styled.div`
    position:relative;  
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;
`;
import styled from 'styled-components';

export const Container = styled.div`
    position:relative;
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

export const Desktops = styled.div`
    position:relative;
    height:100%;
`;

export const DesktopElem = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    width:100vw;
    height:calc(100vh);
`;
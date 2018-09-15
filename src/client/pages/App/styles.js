import styled from 'styled-components';

export const Container = styled.div`
    position:relative;
    display:flex;
    width:100vw;
    height:100vh;
    background-color:rgb(10,10,10);
    font-family: monospace;
    overflow:hidden;
`;

export const Desktops = styled.div`
    position:relative;
    display:flex;
    flex-direction:row;
    flex-wrap:no-wrap;
    height:100%;
    margin-left:${({ activeDesktopPos }) => -activeDesktopPos * 100}vw;
    transition: margin-left 0.3s ease-in-out;
`;

export const DesktopElem = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    width:100vw;
    height:calc(100vh);
    background-image:url('http://i.imgur.com/Z8AyFU8.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
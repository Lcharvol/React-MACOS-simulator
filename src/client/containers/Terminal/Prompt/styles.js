import styled, {keyframes} from 'styled-components';

const blink = keyframes`
    0% {opacity: 0}
    49%{opacity: 0}
    50% {opacity: 0.7}
`;


export const Container = styled.div`
    position:relative;
    display:flex;
    width:8px;
    height:85%;
    background-color:white;
    animation: ${blink} 1.5s infinite;
`;
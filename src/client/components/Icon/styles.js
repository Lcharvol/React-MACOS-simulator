import styled from 'styled-components';

export const Container = styled.div`
    position:relative;
    display:flex;
    width:50px;
    height:50px;
    background-image:${({ icon }) => `url('${icon}')`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left:10px;
    margin-right:10px;
    &:hover{
        transform: scale(1.1);
        margin-bottom:15px;
    };
    transition: all 0.1s ease-in-out;
`;
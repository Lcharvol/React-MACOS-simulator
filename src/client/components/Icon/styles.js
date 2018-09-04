import styled from 'styled-components';

export const Container = styled.div`
    position:relative;
    display:flex;
    height:calc(100% - 20px);
    margin-top:10px;
    margin-bottom:10px;
    width:60px;
    background-image:${({ icon }) => `url('${icon}')`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left:10px;
    margin-right:10px;
    &:hover{
        transform: scale(1.1);
    };
    transition: all 0.1s ease-in-out;
`;
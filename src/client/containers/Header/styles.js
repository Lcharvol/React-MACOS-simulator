import styled from 'styled-components';

export const Container = styled.div`
    position:relative;
    display:flex;
    width:100%;
    height:30px;
    background-color:rgba(255,255,255,0.9);
    -moz-box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.1);
    -webkit-box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.1);
    -o-box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.1);
    box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.1);
`;

export const Content = styled.div`
    flex:4;
`;
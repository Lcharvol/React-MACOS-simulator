import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display:flex;
    flex-direction:column;
    width: 800px;
    height: 500px;
    border-radius:5px;
    background-color:rgb(20,20, 21);
    overflow:hidden;
    -moz-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.2);
    -webkit-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.2);
    -o-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.2);
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.2);
`;

export const LinesContainer = styled.div`
    position:relative;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction:column;
    flex-wrap:wrap;
    width:100%;
    height:calc(100% - 10px);
    padding-bottom:10px;
`;
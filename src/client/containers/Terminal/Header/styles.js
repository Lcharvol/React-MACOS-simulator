import styled from 'styled-components';

export const Container = styled.div`
    position:relative;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    width:calc(100% - 4px);
    padding-left:4px;
    height:25px;
    background:linear-gradient(to bottom, rgba(235,235,235,1) 0%, rgba(211,211,211,1) 100%);
`;

export const ButtonContainer = styled.div`
    position:relative;
    display:flex;
    width:12px;
    height:12px;
    background-color:${({ color }) => color};
    border-radius:100%;
    margin-left:4px;
    margin-right:4px;
    cursor:pointer;
    -moz-box-shadow: inset 0px 0px 1px 2px rgba(0,0,0,0.1);
    -webkit-box-shadow: inset 0px 0px 1px 2px rgba(0,0,0,0.1);
    -o-box-shadow: inset 0px 0px 1px 2px rgba(0,0,0,0.1);
    box-shadow: inset 0px 0px 1px 2px rgba(0,0,0,0.1);
    &:hover {
        box-shadow:none;
    }
`;
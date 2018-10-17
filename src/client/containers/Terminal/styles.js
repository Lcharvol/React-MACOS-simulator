import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    z-index:${({ position}) => position};
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    border-radius:3px;
    background-color:rgba(20,20, 21, 0.8);
    overflow:hidden;
    -moz-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.1);
    -webkit-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.1);
    -o-box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.1);
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.1);
    max-height: 100vh;
    max-width: 100vw;
    
`;

export const LinesContainer = styled.div`
    position:relative;
    display:flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction:column;
    width:100%;
    margin-top:10px;
    max-height:calc(100% - 75px);
    overflow:hidden;
`;

export const InputLineContainer = styled.div`
    position:relative;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    width:calc(100% - 10px);
    min-height:25px;
    color:white;
    font-weight:0;
    padding-left:10px;
    font-size:12px;
    margin-bottom:10px;
`;

export const TextInput = styled.input`
    position:relative;
    background-color:transparent;
    border:none;
    font-size:12px;
    margin-right:10px;
    width:100%;
    color:white;
    &:focus {
        outline:none;
    };
    font-family: monospace;
`;

export const StyledForm = styled.form`
    position:relative;
    width:100%;
`;
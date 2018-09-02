import styled from 'styled-components';

export const Container = styled.div`
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
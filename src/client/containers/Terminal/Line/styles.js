import styled from 'styled-components';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { GREEN_BUTTON } from '../../../constants/colors';

export const Container = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: flex-start;
    width:calc(100% - 10px);
    min-height:${({ nbLines }) => nbLines <= 1 ? 25 : 50}px;
    color:white;
    font-weight:0;
    padding-left:10px;
    font-size:12px;
`;

export const MainContent = styled.div`
    position:relative;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    width:calc(100% - 10px);
    min-height:25px;
    color:white;
    font-weight:0;
`;

export const Location = styled.div`
    font-size:12px;
    margin-right:10px;
    color: rgb(96,253,255);
`;

export const Arrow = styled(FaLongArrowAltRight)`
    font-size:12px;
    margin-right:7px;
    color:${GREEN_BUTTON}
`;

export const Command = styled.div`
    display:flex;
`;

export const Values = styled.div`
    position:relative;
    display:flex;
    width:100%;
`;

export const Value = styled.div`
    position:relative;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    padding-left:10px;
    padding-right:10px;
    flex-wrap: wrap;
    min-height:25px;
    color: ${({ color }) => color};
`;
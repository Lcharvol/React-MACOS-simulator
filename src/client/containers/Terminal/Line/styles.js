import styled from 'styled-components';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { GREEN_BUTTON } from '../../../constants/colors';

export const Container = styled.div`
    position:relative;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    width:calc(100% - 10px);
    height:25px;
    color:white;
    font-weight:0;
    padding-left:10px;
    font-size:12px;
`;

export const Location = styled.div`
    font-size:20px;
    margin-right:10px;
    color: rgb(96,253,255);
`;

export const Text = styled.div`
    font-size:12px;
    margin-right:10px;
`;

export const Arrow = styled(FaLongArrowAltRight)`
    font-size:12px;
    margin-right:7px;
    color:${GREEN_BUTTON}
`;
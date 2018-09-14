import styled from 'styled-components';
import folderIcon from '../../../../public/folder_icon.png';

export const Container = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    height:120px;
    width:120px;
    max-height:120px;
    max-width:120px;
    overflow:hidden;gi
    justify-content: center;
    align-items: center;
    color:white;
    opacity:${({ opacity }) => opacity};
`;

export const FolderIcon = styled.div`
    position:relative;
    display:flex;
    width:60%;
    height:55%;
    margin-bottom:10px;
    background-image:url('${folderIcon}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 70%;
    background-color:${({ selected }) => selected ? 'rgba(25,25,25,0.3)' : 'none'};
    padding:7px;
    border-radius:3px;
`;

export const Foldername = styled.div`
    position:relative;
    display:flex;
    justify-content: center;
    align-items: center;
    width:60%;
    border-radius:3px;
    background-color:${({ selected }) => selected ? 'rgb(17,108,217)' : 'none'};
    padding:2px;
`;
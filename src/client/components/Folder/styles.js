import styled from 'styled-components';
import folderIcon from '../../../../public/folder_icon.png';

export const Container = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    height:120px;
    width:120px;
    justify-content: center;
    align-items: center;
    color:white;
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
    background-size: 100%;
`;
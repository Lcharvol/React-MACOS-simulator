import React from 'react';
import { map, keys } from 'ramda';

import { Container } from './styles';
import Folder from '../../components/Folder';

const Desktop = ({
    desktopFileSys
}) => (
    <Container>
        {map(file => {
            if(file !== 'files')
            {
                return <Folder key={file} name={file}/>
            }
        }, keys(desktopFileSys))}
    </Container>
);

export default Desktop;
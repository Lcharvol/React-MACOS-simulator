import React from 'react';

import { Container, FolderIcon } from './styles';

const Folder = ({
    name
}) => (
    <Container>
        <FolderIcon />
        {name}
    </Container>
);

export default Folder;
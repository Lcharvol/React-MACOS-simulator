import React from 'react';

import { Container } from './styles';

const Icon = ({
    shortcut: {
        name,
        icon
    },
}) => (
    <Container icon={icon}>
    </Container>
);

export default Icon;
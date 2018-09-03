import React from 'react';

import { Container } from './styles';

const Icon = ({
    shortcut: {
        name,
        icon,
        action
    },
    addNewTerm,
}) => (
    <Container
        icon={icon}
        onClick={() => addNewTerm()}
    />
);

export default Icon;
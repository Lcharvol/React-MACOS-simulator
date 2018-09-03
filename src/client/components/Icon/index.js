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
        onClick={addNewTermgit}
    />
);

export default Icon;
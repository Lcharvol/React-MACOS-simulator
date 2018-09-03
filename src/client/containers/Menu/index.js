import React from 'react';
import { compose, withStateHandlers } from 'recompose';

import {
    Container,
    Bar
} from './styles';


const Menu = ({
    displayMenu,
    handleDisplayMenu,
}) => (
    <Container
        onMouseEnter={handleDisplayMenu}
        onMouseLeave={handleDisplayMenu}
    >
        <Bar displayMenu={displayMenu}>

        </Bar>
    </Container>
);

export default compose(
    withStateHandlers(
        ({ initialDisplayMenu = false }) => ({
            displayMenu: initialDisplayMenu,
        }),
        {
            handleDisplayMenu: ({ displayMenu }) => () => ({
                displayMenu: !displayMenu,
            }),
        }
    ),
)(Menu);
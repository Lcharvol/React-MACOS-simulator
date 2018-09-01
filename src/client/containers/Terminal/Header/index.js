import React from 'react';

import {
    RED_BUTTON,
    YELLOW_BUTTON,
    GREEN_BUTTON
} from '../../../constants/colors';
import { Container } from './styles';
import Button from './Button';

const Header = () => (
    <Container>
        <Button color={RED_BUTTON}/>
        <Button color={YELLOW_BUTTON}/>
        <Button color={GREEN_BUTTON}/>
    </Container>
);

export default Header;
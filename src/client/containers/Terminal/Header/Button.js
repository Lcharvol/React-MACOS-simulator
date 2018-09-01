import React from 'react';
import { string } from 'prop-types';

import { ButtonContainer } from './styles';

const propTypes = {
    color: string.isRequired,
}

const Button = ({ color }) => (
    <ButtonContainer color={color}>
    </ButtonContainer>
);

Button.propTypes = propTypes;

export default Button;
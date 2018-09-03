import React from 'react';
import { string } from 'prop-types';

import { ButtonContainer } from './styles';

const propTypes = {
    color: string.isRequired,
}

const Button = ({
    color,
    action,
    termId,
}) => (
    <ButtonContainer
        color={color}
        onClick={() => action(termId)}
    >
    </ButtonContainer>
);

Button.propTypes = propTypes;

export default Button;
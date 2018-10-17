import React from 'react';
import { string } from 'prop-types';

import {
    ButtonContainer,
    IconContainer,
    CloseButtonIcon,
    MinusButtonIcon,
    ExpendButtonIcon
} from './styles';
import { RED_BUTTON, YELLOW_BUTTON, GREEN_BUTTON } from '../../constants/colors';

const propTypes = {
    color: string.isRequired,
};

const getButtonIcon = color => {
    if(color === RED_BUTTON)
        return <CloseButtonIcon />;
    else if(color === YELLOW_BUTTON)
        return <MinusButtonIcon />;
    else if(color === GREEN_BUTTON)
        return <ExpendButtonIcon />;
};

const Button = ({
    color,
    action,
    windowId,
}) => (
    <ButtonContainer
        color={color}
        onClick={() => action(windowId)}
    >
        <IconContainer>
            {getButtonIcon(color)}
        </IconContainer>
    </ButtonContainer>
);

Button.propTypes = propTypes;

export default Button;
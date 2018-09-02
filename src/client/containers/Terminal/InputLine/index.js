import React from 'react';
import {
    compose,
    withStateHandlers,
} from 'recompose';
import { dec, length } from 'ramda';

import {
    Container,
    TextInput,
    StyledForm
} from './styles';
import {
    Arrow,
    Location,
} from '../Line/styles';
import { getCommand } from '../../../inputParcer';

class InputLine extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: '' };
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    focusTextInput() {
        console.log('this.textInput: ', this.textInput.current);
        this.textInput.current.focus();
    }
    handleChangeValue(newValue) {
        this.state = { value: newValue };
    }
    render() {
        const {
            textValue,
            handleChangeValue,
            termId,
            addNewLine,
            path,
            inputRef,
        } = this.props;
        return (
            <Container>
                <Arrow/>
                <Location>{path[dec(length(path))]}</Location>
                <StyledForm onSubmit={e => {
                    e.preventDefault();
                    this.handleChangeValue('');
                    addNewLine(
                        termId,
                        path[dec(length(path))],
                        textValue,
                        getCommand(textValue, termId)
                    );
                }}>
                    <TextInput
                        type="text"
                        value={textValue}
                        onChange={e => handleChangeValue(e.target.value)}
                    />
                </StyledForm>
            </Container>
        );
    }
};

export default InputLine;
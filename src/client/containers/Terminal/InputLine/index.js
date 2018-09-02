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

  

const InputLine = ({
    textValue,
    handleChangeValue,
    termId,
    addNewLine,
    path,
    inputRef,
}) => (
    <Container>
        <Arrow/>
        <Location>{path[dec(length(path))]}</Location>
        <StyledForm onSubmit={e => {
            e.preventDefault();
            handleChangeValue('');
            addNewLine(
                termId,
                path[dec(length(path))],
                textValue,
                getCommand(textValue, termId)
            );
        }}>
            <TextInput
                ref={inputRef}
                value={textValue}
                onChange={e => handleChangeValue(e.target.value)}
            />
        </StyledForm>
    </Container>
);

export default compose(
    withStateHandlers(
        ({ initialValue = '' }) => ({
            textValue: initialValue,
        }),
        {
            handleChangeValue: () => newValue => ({
                textValue: newValue,
            }),
        }
    ),
)(InputLine);
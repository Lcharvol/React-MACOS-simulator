import React from 'react';
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
import {
    compose,
    withStateHandlers,
} from 'recompose';

const InputLine = ({
    textValue,
    handleChangeValue,
    termId,
    addNewLine,
    path
}) => (
    <Container>
        <Arrow/>
        <Location>{path[dec(length(path))]}</Location>
        <StyledForm onSubmit={e => {
            e.preventDefault();
            handleChangeValue('');
            addNewLine(termId);
        }}>
            <TextInput
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
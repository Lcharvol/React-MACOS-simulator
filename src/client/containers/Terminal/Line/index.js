import React from 'react';
import { length } from 'ramda';
import {
    compose,
    withStateHandlers,
} from 'recompose';

import {
    Container,
    Location,
    TextInput,
    Arrow
} from './styles';
import Prompt from '../Prompt';

const Line = ({
    line: {
        value,
        location
    },
    handleChangeValue,
    textValue,
    addNewLine,
    termId
}) => (
    <Container>
        <Arrow/>
        <Location>{location}</Location>
        <form onSubmit={e => {
            e.preventDefault();
            handleChangeValue('');
            addNewLine(termId);
        }}>
            <TextInput
                value={textValue}
                onChange={e => handleChangeValue(e.target.value)}
            />
        </form>
        {/* <Prompt></Prompt> */}
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
)(Line);
import React from 'react';
import { map, equals, length } from 'ramda';
import { array, func } from 'prop-types';

import {
    Container,
    LinesContainer
} from './styles'
import Header from './Header';
import Line from './Line';
import InputLine from './InputLine';

const propTypes = {
    lines: array.isRequired,
    addNewLine: func.isRequired,
    path: array.isRequired,
};

const Terminal = ({
    term: {
        lines,
        id,
        path
    },
    addNewLine
}) => (
    <Container>
        <Header/>
        <LinesContainer fullLine={length(lines) >= 10}>
            {map(line =>
                <Line
                    key={line.id}
                    line={line}
                />
            ,lines)}
        </LinesContainer>
        <InputLine
            termId={id}
            addNewLine={addNewLine}
            path={path}
        />
    </Container>
);

Terminal.propType = propTypes;

export default Terminal;
import React from 'react';
import { map } from 'ramda';
import { array, func } from 'prop-types';

import {
    Container,
    LinesContainer
} from './styles'
import Header from './Header';
import Line from './Line';

const propTypes = {
    lines: array.isRequired,
    addNewLine: func.isRequired,
}

const Terminal = ({
    term: {
        lines,
        id
    },
    addNewLine
}) => (
    <Container>
        <Header/>
        <LinesContainer>
            {map(line =>
                <Line
                    key={line.id}
                    line={line}
                    termId={id}
                    addNewLine={addNewLine}
                />
            ,lines)}
        </LinesContainer>
    </Container>
);

Terminal.propType = propTypes;

export default Terminal;
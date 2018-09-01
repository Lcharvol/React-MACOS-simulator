import React from 'react';
import { map } from 'ramda';
import { array } from 'prop-types';

import {
    Container,
    LinesContainer
} from './styles'
import Header from './Header';
import Line from './Line';

const propTypes = {
    lines: array.isRequired,
}

const Terminal = ({ term: { lines }}) => (
    <Container>
        <Header/>
        <LinesContainer>
            {map(line =>
                <Line
                    key={line.id}
                    line={line}
                />
            ,lines)}
        </LinesContainer>
    </Container>
);

Terminal.propType = propTypes;

export default Terminal;
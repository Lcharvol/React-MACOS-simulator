import React from 'react';
import { length, map, drop } from 'ramda';
import { array, string } from 'prop-types';

import {
    Container,
    MainContent,
    Location,
    Arrow,
    Command,
    Values,
    Value
} from './styles';

const propTypes = {
    values: array,
    location: string,
}

const Line = ({
    line: {
        values,
        location
    },
}) => (
    <Container nbLines={length(values)}>
        <MainContent>
            <Arrow/>
            <Location>{location}</Location>
            <Command>{values[0]}</Command>
        </MainContent>
        {length(values) > 1 && <Values>
            {drop(1, values).map((value, id) =>
                <Value key={id} color={value.color}>{value.value}</Value>
            )}
        </Values>}
    </Container>
);

Line.propTypes = propTypes;

export default Line;
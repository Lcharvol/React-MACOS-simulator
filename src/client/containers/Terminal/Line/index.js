import React from 'react';
import { length } from 'ramda';

import {
    Container,
    Location,
    Arrow
} from './styles';

const Line = ({
    line: {
        value,
        location
    },
}) => (
    <Container>
        <Arrow/>
        <Location>{location}</Location>
        {value}
    </Container>
);

export default Line;
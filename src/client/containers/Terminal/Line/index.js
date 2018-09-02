import React from 'react';
import { length } from 'ramda';

import {
    Container,
    Location,
    Text,
    Arrow
} from './styles';
import Prompt from '../Prompt';

const Line = ({ line: { value, location } }) => (
    <Container>
        <Arrow/>
        <Location>{location}</Location>
        {length(value) > 0 && <Text>{value}</Text>}
        <Prompt></Prompt>
    </Container>
);

export default Line;
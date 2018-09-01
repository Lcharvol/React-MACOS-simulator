import React from 'react';
import {
    Container,
    Location
} from './styles';

const Line = ({ line: { value, location } }) => (
    <Container>
        <Location>{location}</Location>
        {value}
    </Container>
);

export default Line;
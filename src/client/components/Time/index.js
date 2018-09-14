import React from 'react';
import {
    compose,
    lifecycle,
    withStateHandlers,
} from 'recompose';

import { Container, Spacer } from './styles';

const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const Time = ({
    day,
    hours,
    min
}) => (
    <Container>
        {day}
        <Spacer />
        {hours}:
        {min}
        <Spacer />
    </Container>
);
export default compose(
    withStateHandlers(
        ({ initialDate = new Date() }) => ({
            hours: initialDate.getHours(),
            min: initialDate.getMinutes(),
            day: days[initialDate.getDay()]
        }),
        {
            handleChangeDate: ({ date }) => () => {
                console.log('date', date);
            },
        }
    ),
    lifecycle({
        componentDidMount() {
            // setInterval(() => {}, 1000);
        },
    }),
)(Time);
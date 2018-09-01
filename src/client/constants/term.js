import uuidv4 from 'uuid/v4';

const initialLine = {
    id: 0,
    value: 'test',
    location: '~',
}
export const initialTerm = {
    id: uuidv4(),
    env: {},
    lines: [initialLine],
    path: '~',
};
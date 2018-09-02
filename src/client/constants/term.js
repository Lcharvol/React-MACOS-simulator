import uuidv4 from 'uuid/v4';

export const initialLine = {
    id: 0,
    value: '',
    location: '~',
}
export const initialTerm = {
    id: uuidv4(),
    env: {},
    lines: [initialLine],
    path: ['~'],
};
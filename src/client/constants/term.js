import uuidv4 from 'uuid/v4';

const initialTree = {
    files:["HelloWorld.c"],
    Desktop:{
        files:["HelloWorld2.c"],
    },
    Documents: {
        files:[],
    },
    Downloads: {
        files:[],
    }
}

export const initialLine = {
    id: 0,
    values: [],
    location: '~',
}
export const initialTerm = {
    id: uuidv4(),
    env: {},
    lines: [],
    path: ['~'],
    tree: initialTree,
};
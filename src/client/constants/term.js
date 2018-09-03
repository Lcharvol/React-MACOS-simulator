import uuidv4 from 'uuid/v4';

const initialTree = {
    files:["HelloWorld.c", "test", "test2", "test3", "test4", "test5"],
    Desktop:{
        files:["HelloWorld2.c"],
    },
    Documents: {
        files:["HelloWorld3.c"],
    },
    Downloads: {
        files:["HelloWorld4.c"],
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
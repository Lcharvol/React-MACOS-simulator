import { changeLocation } from '../actions/terms';
import { store } from '../index';
export const supportedCommands = [
    {
        name: 'cd',
        action: (termId, dest) => store.dispatch(changeLocation(dest, termId)),
    },
    {
        name: 'ls',
        action: (termId) => console.log("termId: ", termId),
    },
]
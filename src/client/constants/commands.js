import {
    ls,
    cd,
    clear,
    mkdir
} from '../commands'

export const supportedCommands = [
    {
        name: 'cd',
        action: (termId, dest = '~') => cd(termId, dest),
    },
    {
        name: 'ls',
        action: (termId) => ls(termId),
    },
    {
        name: 'clear',
        action: (termId) => clear(termId),
    },
    {
        name: 'mkdir',
        action: (termId, name) => mkdir(termId, name),
    }
]
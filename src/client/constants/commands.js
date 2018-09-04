import {
    ls,
    cd,
    clear,
    mkdir,
    touch,
    rm
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
    },
    {
        name: 'touch',
        action: (termId, name) => touch(termId, name),
    },
    {
        name: 'rm',
        action: (termId, name) => rm(termId, name),
    }
]
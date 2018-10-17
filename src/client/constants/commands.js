import {
    ls,
    cd,
    clear,
    mkdir,
    touch,
    rm,
    exit
} from '../commands'

export const supportedCommands = [
    {
        name: 'cd',
        action: (termId, dest = '~') => cd(termId, dest),
        supportedFlags: []
    },
    {
        name: 'ls',
        action: (termId) => ls(termId),
        supportedFlags: []
    },
    {
        name: 'clear',
        action: (termId) => clear(termId),
        supportedFlags: []
    },
    {
        name: 'mkdir',
        action: (termId, name) => mkdir(termId, name),
        supportedFlags: []
    },
    {
        name: 'touch',
        action: (termId, name) => touch(termId, name),
        supportedFlags: []
    },
    {
        name: 'rm',
        action: (termId, name, flags, supportedFlags) => rm(termId, name, flags, supportedFlags),
        supportedFlags: ['-rf']
    },
    {
        name: 'exit',
        action: (termId) => exit(termId),
        supportedFlags: []
    }
]
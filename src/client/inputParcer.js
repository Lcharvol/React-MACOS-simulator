import {
    find,
    propEq,
    isNil,
    split
} from 'ramda';

import { supportedCommands } from './constants/commands';

const getCommandIfSupported = command => find(propEq('name', command))(supportedCommands)

export const getCommand = (line, termId) => {
    let ret = null;
    const words = split(' ', line);
    const command = getCommandIfSupported(words[0])
    if(!isNil(command)) {
        console.log('words: ', words);
        const { name, action } = command;
        if(name === 'cd')
            action(termId, words[1]);
        else if(name === 'ls')
            ret = action(termId);
        if(!isNil(ret))
            return ret
    }
    else  
        return "Command not found: " + words[0];
};
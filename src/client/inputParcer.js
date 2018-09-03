import {
    find,
    propEq,
    isNil,
    split,
    length
} from 'ramda';

import { supportedCommands } from './constants/commands';

const getCommandIfSupported = command => find(propEq('name', command))(supportedCommands)

export const getCommand = (line, termId) => {
    let ret = null;
    const words = split(' ', line);
    const command = getCommandIfSupported(words[0]);
    if(length((words[0])) === 0)
        return[];
    if(!isNil(command)) {
        const { name, action } = command;
        if(name === 'cd')
            action(termId, words[1]);
        else if(name === 'ls')
            ret = action(termId);
        else if(name === 'clear') {
            action(termId);
            return null;
        };
        if(!isNil(ret))
            return ret
    }
    else  
        return [{
            value: "Command not found: " + words[0],
            color: 'white',
        }];
};
import {
    find,
    propEq,
    isNil,
    split,
    length,
    map,
    contains,
    takeLast,
    match
} from 'ramda';

import { store } from './index';
import { addToCommandsHistory } from './actions/terms';
import { supportedCommands } from './constants/commands';

const getCommandIfSupported = command => find(propEq('name', command))(supportedCommands)

const getFlags = (words) => {
    let flags = [];
    
    map(word => {
        if(length(match(/-/, word)) > 0)
            flags = [...flags, word];
    },words);
    return flags;
}

export const getCommand = (line, termId) => {
    let ret = null;
    const words = split(' ', line);
    const command = getCommandIfSupported(words[0]);
    let flags = [];

    if(length((words[0])) === 0)
        return[];
    if(!isNil(command)) {
        const { name, action, supportedFlags } = command;
        const arg = takeLast(1, words)[0];

        store.dispatch(addToCommandsHistory(termId, line))
        if(name === 'ls')
            ret = action(termId);
        else if(name === 'clear' || name === 'exit') {
            action(termId);
            return null;
        } else if(name === 'mkdir' || name === 'touch' || name === 'rm' || name === 'cd') {
            flags = getFlags(words);
            ret = action(termId, arg, flags, supportedFlags);
        }
        if(!isNil(ret))
            return ret
    }
    else  
        return [{
            value: "Command not found: " + words[0],
            color: 'white',
        }];
};
import {
    find,
    propEq,
    isNil,
    split,
    length
} from 'ramda';

import { store } from './index';
import { addToCommandsHistory } from './actions/terms';
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

        store.dispatch(addToCommandsHistory(termId, line))
        if(name === 'ls')
            ret = action(termId);
        else if(name === 'clear' || name === 'exit') {
            action(termId);
            return null;
        } else if(name === 'mkdir' || name === 'touch' || name === 'rm' || name === 'cd')
            ret = action(termId, words[1]);
        if(!isNil(ret))
            return ret
    }
    else  
        return [{
            value: "Command not found: " + words[0],
            color: 'white',
        }];
};
import {
    find,
    propEq,
    isNil,
    split
} from 'ramda';

import { supportedCommands } from './constants/commands';

const getCommandIfSupported = command => find(propEq('name', command))(supportedCommands)

export const getCommand = (line, termId) => {
    const words = split(' ', line);
    const command = getCommandIfSupported(words[0])
    if(!isNil(command)) {
        command.action(termId, words[1])
    };
};
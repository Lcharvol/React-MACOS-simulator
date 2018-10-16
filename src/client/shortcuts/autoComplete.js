import {
    split,
    takeLast,
    map,
    match,
    length
} from 'ramda';
import { supportedCommands } from '../constants/commands';

const autoComplete = value => {
    const lastWord = takeLast(1 ,split(' ', value))[0];
    let newValue = "";

    map(command => {
        const { name } = command;
        var re = new RegExp(lastWord,"g");
        
        if(length(match(re, name)) > 0 && ((length(name) < length(newValue)) || length(newValue) === 0))
            newValue = name;
    },supportedCommands);
    return newValue;
}

export default autoComplete;
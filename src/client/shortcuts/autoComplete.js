import {
    split,
    takeLast,
    map,
    match,
    length
} from 'ramda';
import { supportedCommands } from '../constants/commands';

const autoCompleteArgs = (words, value, existingArgs) => {
    return `${words[0]} file_name`;
}

const autoCompleteCommand = value => {
    let newValue = "";

    map(command => {
        const { name } = command;
        var re = new RegExp(value,"g");

        if(length(match(re, name)) > 0 && ((length(name) < length(newValue)) || length(newValue) === 0))
            newValue = name;
    },supportedCommands);
    return newValue;
};

const autoComplete = (value, existingArgs) => {
    const words = split(' ', value);
    if(length(words) === 1)
        return autoCompleteCommand(words[0]);
    else if(length(words) === 2)
        return autoCompleteArgs(words, value, existingArgs);
}

export default autoComplete;
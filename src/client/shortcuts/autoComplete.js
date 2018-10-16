import {
    split,
    takeLast,
    map,
    match,
    length
} from 'ramda';
import { supportedCommands } from '../constants/commands';

const autoCompleteArgs = (words, existingArgs) => {
    let newValue = "";

    map(arg => {
        let { value } = arg
        var re = new RegExp(words[1],"g");

        if(length(match(re, value)) > 0 && ((length(value) < length(newValue)) || length(newValue) === 0))
            newValue = value;
    },existingArgs);
    return `${words[0]} ${newValue}`;
}

const autoCompleteCommand = value => {
    let newValue = value;

    map(command => {
        const { name } = command;
        var re = new RegExp(value,"g");

        if(length(match(re, name)) > 0 && ((length(name) < length(newValue)) || value === newValue))
            newValue = name;
    },supportedCommands);
    return `${newValue} `;
};

const autoComplete = (value, existingArgs) => {
    const words = split(' ', value);
    if(length(words) === 1)
        return autoCompleteCommand(words[0]);
    else if(length(words) === 2)
        return autoCompleteArgs(words, existingArgs);
}

export default autoComplete;
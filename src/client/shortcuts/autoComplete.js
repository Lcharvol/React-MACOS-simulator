import {
  split,
  reduce,
  dropLast,
  last,
  map,
  trim,
  match,
  filter,
  isEmpty,
  length
} from "ramda";
import { supportedCommands } from "../constants/commands";

const autoCompleteArgs = (words, existingArgs) => {
  let newValue = last(words);
  map(arg => {
    let { value } = arg;
    var re = new RegExp(last(words), "g");

    if (
      length(match(re, value)) > 0 &&
      (length(value) < length(newValue) || last(words) === newValue)
    )
      newValue = value;
  }, existingArgs);
  if (newValue === last(words) && length(existingArgs) > 0)
    return `${reduce(
      (acc, item) => (length(item) > 0 ? acc.concat(`${trim(item)} `) : acc),
      "",
      words
    )}${existingArgs[0].value}`;
  return `${reduce(
    (acc, item) => (length(item) > 0 ? acc.concat(`${trim(item)} `) : acc),
    "",
    dropLast(1, words)
  )}${newValue}`;
};

const autoCompleteCommand = value => {
  let newValue = value;

  map(command => {
    const { name } = command;
    var re = new RegExp(value, "g");

    if (
      length(match(re, name)) > 0 &&
      (length(name) < length(newValue) || value === newValue)
    )
      newValue = name;
  }, supportedCommands);
  return `${newValue} `;
};

const autoComplete = (value, existingArgs) => {
  const words = filter(str => length(str) > 0, split(" ", value));
  let newLine = reduce((acc, str) => acc.concat(`${str} `), "", words);
  const initialLine = newLine;
  if (length(words) === 1) newLine = autoCompleteCommand(words[0]);
  if (length(words) >= 2 || initialLine === newLine)
    newLine = autoCompleteArgs(words, existingArgs);
  return newLine;
};

export default autoComplete;

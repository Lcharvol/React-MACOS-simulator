import {
    findIndex,
    propEq
} from 'ramda';

export const getTopTermPosition = state => state.app.topTermPosition;

export const getShortcuts = state => state.app.menu.shortcuts;

export const getDesktops = state => state.app.desktops;

export const getActiveDesktopPos = state => {
    const desktops = getDesktops(state);

    return findIndex(propEq('active', true))(desktops);
}
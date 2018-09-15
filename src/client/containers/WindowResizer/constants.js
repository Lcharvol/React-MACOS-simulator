export const MIN_WIDTH = 100;

export const MIN_HEIGHT = 100;

export const corners = [
    {
        id: 0,
        top:0,
        left:0,
        cursor: 'nw-resize'
    },
    {
        id: 1,
        bottom:0,
        left:0,
        cursor: 'sw-resize'
    },
    {
        id: 2,
        top:0,
        right:0,
        cursor: 'ne-resize'
    },
    {
        id: 3,
        bottom:0,
        right:0,
        cursor: 'se-resize'
    }
];

export const sides = [
    {
        id:0,
        width:'5px',
        height:'100%',
        left:0,
        top:0,
        cursor: 'w-resize',
        axe: 'startDragX',
        eventValue: 'screenX',
    },
    {
        id:1,
        width:'5px',
        height:'100%',
        right:0,
        top:0,
        cursor: 'e-resize',
        axe: 'startDragX',
        eventValue: 'screenX',
    },
    {
        id:2,
        width:'100%',
        height:'5px',
        left:0,
        top:0,
        cursor: 'n-resize',
        axe: 'startDragY',
        eventValue: 'screenY',
    },
    {
        id:3,
        width:'100%',
        height:'5px',
        left:0,
        bottom:0,
        cursor: 's-resize',
        axe: 'startDragY',
        eventValue: 'screenY',
    },
]
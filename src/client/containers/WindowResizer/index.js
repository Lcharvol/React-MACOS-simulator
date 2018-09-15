import React from 'react';
import { map, isNil } from 'ramda';

import {
    Container,
    Corner,
    Side
} from './styles';

const corners = [
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

const sides = [
    {
        id:0,
        width:'5px',
        height:'100%',
        left:0,
        top:0,
        cursor: 'w-resize',
    },
    {
        id:1,
        width:'5px',
        height:'100%',
        right:0,
        top:0,
        cursor: 'e-resize',
    },
    {
        id:2,
        width:'100%',
        height:'5px',
        left:0,
        top:0,
        cursor: 'n-resize',
    },
    {
        id:3,
        width:'100%',
        height:'5px',
        left:0,
        bottom:0,
        cursor: 's-resize',
    },
]

const WindowResizer = (props) => (
    <Container>
        {map(corner =>
            <Corner
                top={!isNil(corner.top) ? corner.top : ''}
                bottom={!isNil(corner.bottom) ? corner.bottom : ''}
                left={!isNil(corner.left) ? corner.left : ''}
                right={!isNil(corner.right) ? corner.right : ''}
                cursor={corner.cursor}
                key={corner.id}
            />, corners)}
        {map(side =>
        <Side
            width={side.width}
            height={side.height}
            top={!isNil(side.top) ? side.top : ''}
            bottom={!isNil(side.bottom) ? side.bottom : ''}
            left={!isNil(side.left) ? side.left : ''}
            right={!isNil(side.right) ? side.right : ''}
            cursor={side.cursor}
            key={side.id}
        />, sides)}
        {props.children}
    </Container>
);

export default WindowResizer;
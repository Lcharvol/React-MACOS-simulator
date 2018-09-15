import React from 'react';
import { map, isNil } from 'ramda';

import {
    Container,
    Corner,
    Side
} from './styles';
import {
    corners,
    sides,
    MIN_HEIGHT,
    MIN_WIDTH
} from './constants';

class WindowResizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            wh: 450, 
            ww: 700,
            dragingX: false,
            dragingY: false,
            startDragX: 0,
            startDragY: 0
        };
        this.handleChangeDraging = this.handleChangeDraging.bind(this);
        this.handleChangeWindowSize = this.handleChangeWindowSize.bind(this);
    }

    handleChangeDraging(e, dragingXValue, dragingYValue) {
        this.setState({ dragingX: dragingXValue, dragingY: dragingYValue })
    };

    handleChangeWindowSize(e) {
        if(this.state.dragingX || this.state.dragingY) {
            const diffX = this.state.dragingX ? (2 * (e.screenX - this.state.startDragX)) : 0;
            const diffY = this.state.dragingY ? (2 * (e.screenY - this.state.startDragY)) : 0;
            this.setState({
                ww: this.state.ww + diffX > MIN_WIDTH ? this.state.ww + diffX : this.state.ww,
                wh: this.state.wh + diffY > MIN_HEIGHT ? this.state.wh + diffY : this.state.wh,
                startDragX: e.screenX,
                startDragY: e.screenY,
            })
        }
    }

    componentDidMount = () => {
        window.addEventListener('mousemove', this.handleChangeWindowSize)
        window.addEventListener('mouseup', this.handleChangeDraging, false)
    }
    componentWillUnmount = () => {
        window.removeEventListener('mousemove', this.handleChangeWindowSize)
    }

    render() {
        const {
            ww,
            wh,
            draging,
            startDragX,
            startDragY
        } = this.state;
        const {
            children,
            handleChangeDraging
        } = this.props;
        return (
            <Container width={ww} height={wh}>
                {map(corner =>
                    <Corner
                        onMouseDown={e => {
                            e.stopPropagation();
                            this.handleChangeDraging(e, true, true)
                            this.setState({
                                startDragX: e.screenX,
                                startDragY: e.screenY
                            })
                        }}
                        key={corner.id}
                        top={!isNil(corner.top) ? corner.top : ''}
                        bottom={!isNil(corner.bottom) ? corner.bottom : ''}
                        left={!isNil(corner.left) ? corner.left : ''}
                        right={!isNil(corner.right) ? corner.right : ''}
                        cursor={corner.cursor}
                    />, corners)}
                {map(side =>
                <Side
                    onMouseDown={e => {
                        e.stopPropagation();
                        this.handleChangeDraging(
                            e,
                            side.axe === 'startDragX' ? true : false,
                            side.axe === 'startDragY' ? true : false,
                        )
                        this.setState({
                            [side.axe]: e[side.eventValue],
                        })
                    }}
                    key={side.id}
                    width={side.width}
                    height={side.height}
                    top={!isNil(side.top) ? side.top : ''}
                    bottom={!isNil(side.bottom) ? side.bottom : ''}
                    left={!isNil(side.left) ? side.left : ''}
                    right={!isNil(side.right) ? side.right : ''}
                    cursor={side.cursor}
                />, sides)}
                {children}
            </Container>
        )
    }
}

export default WindowResizer;
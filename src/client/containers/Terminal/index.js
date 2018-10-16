import React from 'react';
import Draggable from 'react-draggable';
import { map, equals, length, dec } from 'ramda';
import { array, func } from 'prop-types';

import {
    Container,
    LinesContainer,
    InputLineContainer,
    TextInput,
    StyledForm,
} from './styles';
import { getCommand } from '../../inputParcer';
import { Arrow, Location } from './Line/styles';
import WindowResizer from '../WindowResizer';
import autoComplete from '../../shortcuts/autoComplete';
import Header from './Header';
import Line from './Line';

const propTypes = {
    lines: array.isRequired,
    addNewLine: func.isRequired,
    path: array.isRequired,
    deleteTerm: func.isRequired,
};

class Terminal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lineValue: '',
            historyCommandPos: 0,
        };
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    handleChangeValue(newValue) {
        this.setState({ lineValue: newValue });
    };
    focusTextInput() {
        this.textInput.current.focus();
    };
    handleSpecificEvents(e, commands) {
        if (e.keyCode == 38) {
            const newHistoryCommandPos = (this.state.historyCommandPos + 1) <= length(commands) ? this.state.historyCommandPos + 1 : this.state.historyCommandPos;
            const newValue = commands[length(commands) - newHistoryCommandPos] || '';

            e.preventDefault();
            this.setState({ lineValue: newValue, historyCommandPos: newHistoryCommandPos });
        } else if (e.keyCode == 9) {
            const oldValue = this.state.lineValue;
            const newValue = autoComplete(oldValue)
            e.preventDefault();
            if(length(newValue) > 0)
                this.setState({ lineValue: newValue });
        }
        else if (this.state.historyCommandPos !== 0) {
            this.setState({ historyCommandPos: 0 });
        }
    }
    render() {
        const {
            term: {
                lines,
                id,
                path,
                history: {
                    commands,
                }
            },
            fileSys,
            addNewLine,
            topTermPosition,
            changeTopTermPosition,
            deleteTerm,
        } = this.props;
        const {
            lineValue,
            deltaPosition,
            controlledPosition,
            position,
            historyCommandPos
        } = this.state;
        
        return (
            <Draggable bounds="body">
                <Container
                    onClick={(e) => {
                            this.focusTextInput(e);
                            this.setState({ position: topTermPosition + 1 });
                            changeTopTermPosition(topTermPosition + 1);
                        }
                    }
                    position={position}
                >
                    <WindowResizer>
                    <Header
                        termId={id}
                        deleteTerm={deleteTerm}
                    />
                    <LinesContainer>
                        {map(line =>
                            <Line
                                key={line.id}
                                line={line}
                            />
                        ,lines)}
                    </LinesContainer>
                    <InputLineContainer>
                        <Arrow/>
                        <Location>{path[dec(length(path))]}</Location>
                        <StyledForm onSubmit={e => {
                            e.preventDefault();
                            this.handleChangeValue('');
                            addNewLine(
                                id,
                                path[dec(length(path))],
                                lineValue,
                                getCommand(lineValue, id)
                            );
                        }}>
                            <TextInput
                                innerRef={this.textInput}
                                value={lineValue}
                                onChange={e => this.handleChangeValue(e.target.value)}
                                onKeyDown={e => this.handleSpecificEvents(e, commands)}
                            />
                        </StyledForm>
                    </InputLineContainer>
                    </WindowResizer>
                </Container>
            </Draggable>
        );
    }
};

Terminal.propType = propTypes;

export default Terminal;
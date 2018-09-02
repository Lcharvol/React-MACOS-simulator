import React from 'react';
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
import Header from './Header';
import Line from './Line';

const propTypes = {
    lines: array.isRequired,
    addNewLine: func.isRequired,
    path: array.isRequired,
};

class Terminal extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lineValue: '' };
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    handleChangeValue(newValue) {
        this.setState({ lineValue: newValue });
    }
    
    focusTextInput() {
        this.textInput.current.focus();
    }
    render() {
        const {
            term: {
                lines,
                id,
                path,
            },
            addNewLine,
        } = this.props;
        const { lineValue } = this.state;
        return (
            <Container onClick={this.focusTextInput}> 
                <Header/>
                <LinesContainer fullLine={length(lines) >= 10}>
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
                        />
                    </StyledForm>
                </InputLineContainer>
            </Container>
        );
    }
};

Terminal.propType = propTypes;

export default Terminal;
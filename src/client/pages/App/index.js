import React from 'react';
import { array, func, number } from 'prop-types';
import { map } from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Container,
    Desktops,
    DesktopElem
} from './styles';
import { addNewLine, deleteTerm } from '../../actions/terms';
import { changeTopTermPosition } from '../../actions/app';
import Terminal from '../../containers/Terminal';
import Menu from '../../containers/Menu';
import Header from '../../containers/Header';
import Desktop from '../../containers/Desktop';
import { getTerms } from '../../selectors/term';
import { getTopTermPosition, getDesktops } from '../../selectors/app';
import { getFileSys, getDesktopFileSys } from '../../selectors/fileSys';

const propTypes = {
    terms: array.isRequired,
    addNewLine: func.isRequired,
    topTermPosition: number,
    changeTopTermPosition: func.isRequired,
    deleteTerm: func.isRequired,
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentWillMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    };
   
   
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    };

    handleKeyPress(e) {
        e.stopPropagation();
        const evtobj = window.event? event : e
        
        if (evtobj.keyCode == 39 && evtobj.metaKey)
            console.log('go right');
        if (evtobj.keyCode == 37 && evtobj.metaKey)
            console.log('go left');
    };

    render() {
    const {
        terms,
        addNewLine,
        changeTopTermPosition,
        topTermPosition,
        deleteTerm,
        fileSys,
        desktopFileSys,
        desktops
    } = this.props;
    return (
        <Container>
            <Desktops>
                {map(desktop => (
                    <DesktopElem key={desktop.id}>
                        <Header />
                        <Desktop desktopFileSys={desktopFileSys}/>
                            {map(term =>
                                <Terminal
                                    key={term.id}
                                    topTermPosition={topTermPosition}
                                    term={term}
                                    fileSys={fileSys}
                                    addNewLine={addNewLine}
                                    changeTopTermPosition={changeTopTermPosition}
                                    deleteTerm={deleteTerm}
                                />
                            ,terms)}
                        <Menu />
                    </DesktopElem>
                ),desktops)}
            </Desktops>
        </Container>
        )
    }
};


App.propTypes = propTypes;

const mapStateToProps = state => ({
    fileSys: getFileSys(state),
    terms: getTerms(state),
    topTermPosition: getTopTermPosition(state),
    desktopFileSys: getDesktopFileSys(state),
    desktops: getDesktops(state)
  });
  
const actions = { addNewLine, changeTopTermPosition, deleteTerm };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)
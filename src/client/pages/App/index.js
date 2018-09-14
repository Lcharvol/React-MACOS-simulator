import React from 'react';
import { array, func, number } from 'prop-types';
import { map } from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Container,
} from './styles';
import { addNewLine, deleteTerm } from '../../actions/terms';
import { changeTopTermPosition } from '../../actions/app';
import Terminal from '../../containers/Terminal';
import Menu from '../../containers/Menu';
import Header from '../../containers/Header';
import Desktop from '../../containers/Desktop';
import { getTerms } from '../../selectors/term';
import { getTopTermPosition } from '../../selectors/app';
import { getFileSys, getDesktopFileSys } from '../../selectors/fileSys';

const propTypes = {
    terms: array.isRequired,
    addNewLine: func.isRequired,
    topTermPosition: number,
    changeTopTermPosition: func.isRequired,
    deleteTerm: func.isRequired,
}

const App = ({
    terms,
    addNewLine,
    changeTopTermPosition,
    topTermPosition,
    deleteTerm,
    fileSys,
    desktopFileSys
}) => (
    <Container>
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
    </Container>
);


App.propTypes = propTypes;

const mapStateToProps = state => ({
    fileSys: getFileSys(state),
    terms: getTerms(state),
    topTermPosition: getTopTermPosition(state),
    desktopFileSys: getDesktopFileSys(state),
  });
  
const actions = { addNewLine, changeTopTermPosition, deleteTerm };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)
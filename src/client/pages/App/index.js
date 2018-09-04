import React from 'react';
import { array, func, number } from 'prop-types';
import { map } from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Container,
    Content
} from './styles';
import { addNewLine, deleteTerm } from '../../actions/terms';
import { changeTopTermPosition } from '../../actions/app';
import Terminal from '../../containers/Terminal';
import Menu from '../../containers/Menu';
import Header from '../../containers/Header';
import { getTerms } from '../../selectors/term';
import { getTopTermPosition } from '../../selectors/app';

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
}) => (
    <Container>
        <Header />
        <Content>
            {map(term =>
                <Terminal
                    key={term.id}
                    topTermPosition={topTermPosition}
                    term={term}
                    addNewLine={addNewLine}
                    changeTopTermPosition={changeTopTermPosition}
                    deleteTerm={deleteTerm}
                />
            ,terms)}
        </Content>
        <Menu />
    </Container>
);


App.propTypes = propTypes;

const mapStateToProps = state => ({
    terms: getTerms(state),
    topTermPosition: getTopTermPosition(state),
  });
  
const actions = { addNewLine, changeTopTermPosition, deleteTerm };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)
import React from 'react';
import { array, func } from 'prop-types';
import { map } from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewLine } from '../../actions/terms';

import {
    Container
} from './styles';
import Terminal from '../../containers/Terminal';
import { getTerms } from '../../selectors/term';

const propTypes = {
    terms: array.isRequired,
    addNewLine: func.isRequired,
}

const App = ({
    terms,
    addNewLine,
}) => (
    <Container>
        {map(term =>
            <Terminal
                key={term.id}
                term={term}
                addNewLine={addNewLine}
            />
        ,terms)}
    </Container>
);

App.propTypes = propTypes;

const mapStateToProps = state => ({
    terms: getTerms(state),
  });
  
const actions = { addNewLine };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)
import React from 'react';
import { array } from 'prop-types';
import { map } from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Container
} from './styles';
import Terminal from '../../containers/Terminal';
import { getTerms } from '../../selectors/term';

const propTypes = {
    terms: array.isRequired,
}

const App = ({
    terms,
}) => (
    <Container>
        {map(term =>
            <Terminal
                key={term.id}
                term={term}
            />
        ,terms)}
    </Container>
);

App.propTypes = propTypes;

const mapStateToProps = state => ({
    terms: getTerms(state),
  });
  
const actions = { };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)
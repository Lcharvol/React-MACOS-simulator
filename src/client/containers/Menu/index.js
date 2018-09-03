import React from 'react';
import { map } from 'ramda';
import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getShortcuts } from '../../selectors/app';
import { supportedShortcuts } from '../../constants/shortcuts';
import Icon from '../../components/Icon';
import {
    Container,
    Bar
} from './styles';

const getIcon = shortcut => {
    let ret = {};
    map(sc => {
        if(sc.name === shortcut)
            ret = sc;
    },supportedShortcuts);
    return ret;
};

const Menu = ({
    displayMenu,
    handleDisplayMenu,
    shortcuts
}) => (
    <Container
        onMouseEnter={handleDisplayMenu}
        onMouseLeave={handleDisplayMenu}
    >
        {console.log('shortcuts: ', shortcuts)}
        <Bar displayMenu={displayMenu}>
            {map(shortcut => 
                <Icon key={shortcut} shortcut={getIcon(shortcut)}/>
            ,shortcuts)}
        </Bar>
    </Container>
);

const mapStateToProps = state => ({
    shortcuts: getShortcuts(state),
  });
  
const actions = { };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStateHandlers(
        ({ initialDisplayMenu = false }) => ({
            displayMenu: initialDisplayMenu,
        }),
        {
            handleDisplayMenu: ({ displayMenu }) => () => ({
                displayMenu: !displayMenu,
            }),
        }
    ),
)(Menu);


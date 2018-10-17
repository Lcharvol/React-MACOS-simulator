import React from "react";
import { map } from "ramda";
import { compose, withStateHandlers } from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getShortcuts } from "../../selectors/app";
import { supportedShortcuts, TERM, FINDER } from "../../constants/shortcuts";
import Icon from "../../components/Icon";
import { addNewTerm } from "../../actions/terms";
import { addNewFinder } from "../../actions/finders";
import { Container, Bar } from "./styles";

const getIcon = shortcut => {
  let ret = {};
  map(sc => {
    if (sc.name === shortcut) ret = sc;
  }, supportedShortcuts);
  return ret;
};

const getIconAction = (shortcut, actions) => {
  if (shortcut === TERM) return actions[0];
  else if (shortcut === FINDER) return actions[1];
  return () => {};
};

const Menu = ({
  displayMenu,
  handleDisplayMenu,
  shortcuts,
  addNewTerm,
  addNewFinder
}) => (
  <Container onMouseEnter={handleDisplayMenu} onMouseLeave={handleDisplayMenu}>
    <Bar displayMenu={displayMenu}>
      {map(
        shortcut => (
          <Icon
            key={shortcut}
            shortcut={getIcon(shortcut)}
            action={getIconAction(shortcut, [addNewTerm, addNewFinder])}
          />
        ),
        shortcuts
      )}
    </Bar>
  </Container>
);

const mapStateToProps = state => ({
  shortcuts: getShortcuts(state)
});

const actions = { addNewTerm, addNewFinder };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStateHandlers(
    ({ initialDisplayMenu = false }) => ({
      displayMenu: initialDisplayMenu
    }),
    {
      handleDisplayMenu: ({ displayMenu }) => () => ({
        displayMenu: !displayMenu
      })
    }
  )
)(Menu);

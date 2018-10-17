import React from "react";
import { array, func, number } from "prop-types";
import { map } from "ramda";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Container, Desktops, DesktopElem } from "./styles";
import { addNewLine, deleteTerm } from "../../actions/terms";
import { deleteFinder } from "../../actions/finders";
import {
  changeTopWindowPosition,
  desktopGoLeft,
  desktopGoRight
} from "../../actions/app";
import Terminal from "../../containers/Terminal";
import Finder from "../../containers/Finder";
import Menu from "../../containers/Menu";
import Header from "../../containers/Header";
import Desktop from "../../containers/Desktop";
import { getTerms } from "../../selectors/term";
import {
  getTopWindowPosition,
  getDesktops,
  getActiveDesktopPos
} from "../../selectors/app";
import { getFileSys, getDesktopFileSys } from "../../selectors/fileSys";
import { getFinders } from "../../selectors/finders";

const propTypes = {
  terms: array.isRequired,
  addNewLine: func.isRequired,
  topWindowPosition: number,
  changeTopWindowPosition: func.isRequired,
  deleteTerm: func.isRequired
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    e.stopPropagation();
    const evtobj = window.event ? event : e;

    if (evtobj.keyCode == 39 && evtobj.metaKey) this.props.desktopGoRight();
    if (evtobj.keyCode == 37 && evtobj.metaKey) this.props.desktopGoLeft();
  }

  render() {
    const {
      terms,
      finders,
      addNewLine,
      changeTopWindowPosition,
      topWindowPosition,
      deleteTerm,
      deleteFinder,
      fileSys,
      desktopFileSys,
      desktops,
      activeDesktopPos
    } = this.props;
    return (
      <Container>
        <Desktops activeDesktopPos={activeDesktopPos}>
          {map(
            desktop => (
              <DesktopElem key={desktop.id}>
                <Header />
                <Desktop desktopFileSys={desktopFileSys} />
                {map(
                  term => (
                    <Terminal
                      key={term.id}
                      term={term}
                      fileSys={fileSys}
                      addNewLine={addNewLine}
                      changeTopWindowPosition={changeTopWindowPosition}
                      topWindowPosition={topWindowPosition}
                      deleteTerm={deleteTerm}
                    />
                  ),
                  terms
                )}
                {map(
                  finder => (
                    <Finder
                      key={finder.id}
                      id={finder.id}
                      changeTopWindowPosition={changeTopWindowPosition}
                      topWindowPosition={topWindowPosition}
                      deleteFinder={deleteFinder}
                    />
                  ),
                  finders
                )}
                <Menu />
              </DesktopElem>
            ),
            desktops
          )}
        </Desktops>
      </Container>
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = state => ({
  fileSys: getFileSys(state),
  terms: getTerms(state),
  finders: getFinders(state),
  topWindowPosition: getTopWindowPosition(state),
  desktopFileSys: getDesktopFileSys(state),
  desktops: getDesktops(state),
  activeDesktopPos: getActiveDesktopPos(state)
});

const actions = {
  addNewLine,
  changeTopWindowPosition,
  deleteTerm,
  deleteFinder,
  desktopGoLeft,
  desktopGoRight
};
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

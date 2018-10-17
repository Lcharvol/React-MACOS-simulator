import React, { Component } from "react";
import Draggable from "react-draggable";

import { Container, Content } from "./styles";
import WindowHeader from "../../components/WindowHeader";
import SideMenu from "./SideMenu";
import WindowResizer from "../WindowResizer";

class Finder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0
    };
  }
  render() {
    const {
      id,
      deleteFinder,
      topWindowPosition,
      changeTopWindowPosition
    } = this.props;

    const { position } = this.state;
    return (
      <Draggable bounds="body">
        <Container
          onClick={e => {
            this.setState({ position: topWindowPosition + 1 });
            changeTopWindowPosition(topWindowPosition + 1);
          }}
          position={position}
        >
          <WindowResizer>
            <WindowHeader windowId={id} deleteWindow={deleteFinder} />
            <Content>
              <SideMenu />
            </Content>
          </WindowResizer>
        </Container>
      </Draggable>
    );
  }
}

export default Finder;

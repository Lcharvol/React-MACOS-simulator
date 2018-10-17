import React from "react";
import Draggable from "react-draggable";

import { Container, FileIcon, FileName } from "./styles";

class File extends React.Component {
  state = {
    opacity: 1
  };
  handleChangeOpacity(newOpacity) {
    this.setState({ opacity: newOpacity });
  }
  render() {
    const { name, selected, selectItem } = this.props;
    const { opacity } = this.state;
    return (
      <Draggable
        bounds="body"
        onDrag={() => this.handleChangeOpacity(0.7)}
        onStop={() => this.handleChangeOpacity(1)}
      >
        <Container
          opacity={opacity}
          onClick={e => {
            e.stopPropagation();
            selectItem(name);
          }}
        >
          <FileIcon selected={selected} />
          <FileName selected={selected}>{name}</FileName>
        </Container>
      </Draggable>
    );
  }
}

export default File;

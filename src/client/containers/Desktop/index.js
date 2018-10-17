import React from "react";
import { map, keys, contains } from "ramda";

import { Container } from "./styles";
import Folder from "../../components/Folder";
import File from "../../components/File";

const isItemSelected = (name, selectedItems) => contains(name, selectedItems);
class Desktop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItems: []
    };
    this.addSelected = this.addSelected.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }
  selectItem(name) {
    this.setState({ selectedItems: [name] });
  }
  addSelected(name) {
    this.setState({ selectedItems: [...this.state.selectedItems, name] });
  }
  render() {
    const { desktopFileSys } = this.props;
    const { selectedItems } = this.state;
    return (
      <Container onClick={() => this.selectItem("")}>
        {console.log("desktopFileSys: ", desktopFileSys)}
        {map(file => {
          if (file !== "files")
            return (
              <Folder
                key={file}
                name={file}
                selected={isItemSelected(file, selectedItems)}
                selectItem={this.selectItem}
              />
            );
        }, keys(desktopFileSys))}
        {map(
          file => (
            <File
              key={file}
              name={file}
              selected={isItemSelected(file, selectedItems)}
              selectItem={this.selectItem}
            />
          ),
          desktopFileSys.files
        )}
      </Container>
    );
  }
}

export default Desktop;

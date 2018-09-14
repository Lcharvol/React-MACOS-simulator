import React from 'react';
import Draggable from 'react-draggable';

import { Container, FolderIcon } from './styles';

class Folder extends React.Component {
      render() {
          const { name } = this.props;
        return (
            <Draggable bounds="body">
            <Container>
                <FolderIcon />
                {name}
            </Container>
            </Draggable>
        );
      }
    }

export default Folder;
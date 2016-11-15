import React from 'react';
import ReactDOM from 'react-dom';
import { readdir } from 'fs';
import File from './file.js';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      workingDirectory: this.props.workingDirectory || process.env.HOME,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(nextDirectory) {
    readdir(nextDirectory, (err, files) => {
      this.setState({
        files: files,
        workingDirectory: nextDirectory,
      });
    });
  }

  componentDidMount() {
    readdir(this.state.workingDirectory, (err, files) => {
      this.setState({
        files: files
      });
    });
  }

  render() {
    return <div style={{
      // width:"100%",
      minHeight:"100%",
      backgroundColor:"#ECEFF1",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignItems: "flex-start",
      alignContent: "flex-start",
    }}>
      {
        this
        .state
        .files
        .map((file) => <File filename={file} path={this.state.workingDirectory} key={file} onChange={this.handleChange}></File>)
      }
    </div>;
  }
}

export default Gallery;

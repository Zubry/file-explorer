import React from 'react';
import ReactDOM from 'react-dom';
import { stat } from 'fs';
import { resolve } from 'path';
import Directory from './directory.js';
import GenericFile from './generic-file.js';

class File extends React.Component {
  constructor(props) {
    super(props);

    this.fullPath = resolve(this.props.path, this.props.filename);

    this.state = {
      isDirectory: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(nextDirectory) {
    this.props.onChange(nextDirectory);
  }

  componentDidMount() {
    stat(this.fullPath, (err, stats) => {
      this.setState({
        isDirectory: stats.isDirectory()
      });
    });
  }

  render() {
    if (this.state.isDirectory) {
      return <Directory filename={this.props.filename} path={this.props.path} onChange={this.handleChange}></Directory>;
    } else {
      return <GenericFile filename={this.props.filename} path={this.props.path}></GenericFile>;
    }
  }
}

export default File;

import React from 'react';
import ReactDOM from 'react-dom';
import { stat } from 'fs';
import { resolve } from 'path';

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.fullPath = resolve(this.props.path, this.props.filename);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onChange(this.fullPath);
  }

  render() {
    const url = resolve(__dirname, '../icons/folder.svg');
    return <div style={{
      fontFamily: 'sans-serif',
      textAlign: 'center',
      margin: '1rem',
      opacity: this.props.filename[0] === '.' ? '0.7' : '1.0',
      cursor: 'pointer',
    }} onClick={this.handleClick}>
      <div style={{
        width: '6rem',
        height: '6rem',
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        margin: 'auto',
      }}></div>
      <div style={{
        maxWidth: '6rem',
        margin: 'auto',
        wordBreak: 'break-all',
        maxHeight: '3.5em',
        overflowY: 'hidden',
      }} title={this.props.filename}>
        {this.props.filename}
      </div>
    </div>
  }
}

export default Directory;

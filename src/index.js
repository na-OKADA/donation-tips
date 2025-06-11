import React from 'react';
import ReactDOM from 'react-dom';
import SignerTest from './SignerTest';
import './index.css';
import { Buffer } from 'buffer';
import process from 'process';

window.Buffer = Buffer;
window.process = process;

ReactDOM.render(
  <React.StrictMode>
    <SignerTest />
  </React.StrictMode>,
  document.getElementById('root')
);
import React from 'react';
import { render } from 'react-dom';
import Layout from './components/Layout';

if (document.getElementById('__react_bind')) {
  render(<Layout />, document.getElementById('__react_bind'));
}

'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {HelloView} from './View';

const mountpoint = document.getElementById('mountpoint');
const view = React.createElement(HelloView, {});

ReactDOM.render(view, mountpoint);

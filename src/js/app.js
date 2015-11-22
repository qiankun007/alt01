import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {TodoView} from 'components/todo';
import TodoActions from 'actions/todo';

import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';

injectTapEventPlugin();



ReactDOM.render(
    <TodoView />,
    document.getElementById('content')
);

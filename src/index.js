import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NotesApp from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';

const jsx = (
    <Provider store={ store }>
        <BrowserRouter>
            <NotesApp />
        </BrowserRouter>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));

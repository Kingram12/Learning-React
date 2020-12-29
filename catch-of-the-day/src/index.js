import React from 'react';
import  { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import App from "./components/App"
import "./css/style.css";



render(<App/>, document.querySelector('#main'));

//the render method takes 2 things: JSX - similar to HTML and Mounting Point - document.querySelector('main');
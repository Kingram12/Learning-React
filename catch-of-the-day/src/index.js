import React from 'react';
import  { render } from 'react-dom';
import App from "./components/App";
import Router from "./components/Router";
import "./css/style.css";



render(<Router/>, document.querySelector('#main'));

//the render method takes 2 things: JSX - similar to HTML and Mounting Point - document.querySelector('main');
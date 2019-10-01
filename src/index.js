import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// ReactDOM.render(
// 	<h1>Hello World</h1>,
// 	document.getElementById('root1')
// 	);

function f1(user)
{
	return user.firstname + '' + user.lastname;
}

const user = 
{
	firstname : 'Vivek ',
	lastname : 'Jha',
};

const element = (
	<h1> Hello, {f1(user)} </h1>
	);
ReactDOM.render(
	element, document.getElementById('firstdiv'));

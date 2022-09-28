// Import stylesheets
import { allPublicApi } from './fetchAsyncAwait';
import './style.css';


const response = allPublicApi();

console.log('response', response);

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

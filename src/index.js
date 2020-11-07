import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Suspense fallback = {(<div> Loading... </div>)}>
        <App /> 
    </Suspense>
,document.getElementById('root'));
registerServiceWorker();
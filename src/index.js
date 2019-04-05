import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from "./containers/blog/posts_index";
import PostsNew from "./containers/blog/posts_new";
import PostsShow from "./containers/blog/posts_show";
import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
           <Switch>
              <Route path="/posts/new" component={PostsNew}/>
              <Route path="/posts/:id" component={PostsShow}/>
              <Route path="/posts" component={PostsIndex}/>
              <Route path="/" component={App}/>
           </Switch>
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container')
);

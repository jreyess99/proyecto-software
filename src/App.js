// src.App.js

import React, { Component } from 'react';

import './App.css';

import Header from './components/header';

import Post from './components/Post';

    class App extends Component {

      render() {

        return (

          <div>

            <Header />

            <div>

              <Post />

            </div>

          </div>

        );

      }

    }

    export default App;
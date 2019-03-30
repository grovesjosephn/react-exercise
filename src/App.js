import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import QuestionsPage from './pages/QuestionsPage'
import QuestionsDetailPage from './pages/QuestionsDetail'
import QuestionsCreatePage from './pages/QuestionsCreatePage'

import './App.css';


class App extends Component {

  render() {
    return (
      <Router>
        <Route exact path='/' component={QuestionsPage} />
        <Route path="/questions/:id" component={QuestionsDetailPage} />
        <Route path="/new-question" component={QuestionsCreatePage} />
      </Router>
    )
  }

}

export default App;

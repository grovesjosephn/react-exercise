import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components'

import QuestionsPage from './pages/QuestionsPage'
import QuestionsDetailPage from './pages/QuestionsDetail'
import QuestionsCreatePage from './pages/QuestionsCreatePage'

import { defaultTheme } from './styles'

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <Route exact path='/' component={QuestionsPage} />
          <Route path="/questions/:id" component={QuestionsDetailPage} />
          <Route path="/new-question" component={QuestionsCreatePage} />
        </Router>
      </ThemeProvider>
    )
  }

}

export default App;

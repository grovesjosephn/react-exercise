import React, { Component } from 'react';
import { get, post } from 'axios'
import './App.css';
import Question from './components/Question';

class App extends Component {

  state = {
    questions: []
  }

  async componentDidMount() {
    const results = await get(`http://private-anon-e71f0eb2a9-pollsapi.apiary-mock.com/questions`)

    this.setState({ questions: results.data })
  }

  render() {
    return (
      <div>
        {this.state.questions.map((question, i) =>
          <Question key={i} {...question} />
        )}
      </div>
    )
  }

}

export default App;

import React, { Component } from 'react';
import { get, post } from 'axios'
import './App.css';

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

        {this.state.questions.map(({ question, published_at, choices }) =>
          <div>
            <div>
              <span class="question__header">{question}</span><span class="question__choice">({choices.length})</span>
            </div>
            <span class="questions__published">{published_at}</span>
          </div>
        )}
      </div>
    )
  }

}

export default App;

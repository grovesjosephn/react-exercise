import React, { Component } from 'react';
import { get, post } from 'axios'
import { Link } from 'react-router-dom'

import Question from '../components/Question';

class QuestionsPage extends Component {

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
                    <Link to={question.url} key={i}>
                        <Question {...question} />
                    </Link>
                )}
            </div>
        )
    }

}

export default QuestionsPage;

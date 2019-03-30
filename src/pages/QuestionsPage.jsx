import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { getQuestions } from '../api'

import Question from '../components/Question';

class QuestionsPage extends Component {

    state = {
        questions: []
    }

    async componentDidMount() {
        const results = await getQuestions()
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

import React, { Component } from 'react';
import { get } from 'axios';

class QuestionsPage extends Component {

    state = {
        question: {},
        allVotes: 0,
        currentVote: null
    }

    async componentDidMount() {
        const result = await get(`http://private-anon-e71f0eb2a9-pollsapi.apiary-mock.com/questions/${this.props.match.params.id}`)
        const allVotes = result.data.choices && result.data.choices.reduce((acm, { votes }) => acm + votes, 0)
        this.setState({ question: result.data, allVotes })
    }

    render() {
        const { question, allVotes } = this.state
        return (
            <div>
                <h1>Question: {question.question && question.question}</h1>
                <div>
                    {
                        question.choices && question.choices.map(({ choice, url, votes }) => (
                            <div
                            >
                                <span>{choice}</span><span>{votes}</span><span>{Math.floor(votes / allVotes * 100)}%</span>
                            </div>
                        ))
                    }
                </div>
                <button>Save vote</button>
            </div>
        )
    }

}

export default QuestionsPage;

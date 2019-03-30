import React, { Component } from 'react';
import { getQuestionById, postChoice } from "../api";

class QuestionsPage extends Component {

    state = {
        question: {},
        allVotes: 0,
        currentVote: null
    }

    async componentDidMount() {
        const result = await getQuestionById(this.props.match.params.id)
        const allVotes = result.data.choices && result.data.choices.reduce((acm, { votes }) => acm + votes, 0)
        this.setState({ question: result.data, allVotes })
    }

    handleChoiceSelection = (i) => {
        this.setState({ currentVote: i })
    }

    handleVote = async () => {
        const { question, currentVote } = this.state
        if (currentVote != null) {
            await postChoice(question.choices[currentVote].url)
            this.props.history.push('/')
        }
    }

    render() {
        const { question, allVotes, currentVote } = this.state
        return (
            <div>
                <h1>Question: {question.question && question.question}</h1>
                <div>
                    {
                        question.choices && question.choices.map(({ choice, url, votes }, i) => (
                            <div key={i} onClick={() => this.handleChoiceSelection(i)} style={{ backgroundColor: i === currentVote ? "grey" : "white" }}>
                                <span>{choice}</span><span>{votes}</span><span>{Math.floor(votes / allVotes * 100)}%</span>
                            </div>
                        ))
                    }
                </div>
                <button onClick={() => this.handleVote()}>Save vote</button>
            </div>
        )
    }

}

export default QuestionsPage;

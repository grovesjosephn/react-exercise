import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Box } from 'rebass'

import { H1 } from '../components/Headings'
import Question from '../components/Question';
import { FloatingButton } from '../components/Buttons'
import { getQuestions } from '../api'

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
            <Box
                m={4}
            >
                <H1
                    fontSize={6}
                    fontWeight={100}
                    color='grey'
                    mb={4}
                >Questions</H1>
                {this.state.questions.map((question, i) =>
                    <Link
                        to={question.url}
                        style={{ textDecoration: 'none' }}
                        key={i}
                    >
                        <Question
                            width={[1, 1 / 2, 1 / 3]}
                            mx={2}
                            {...question}
                        />
                    </Link>
                )}
                <Link to="/new-question">
                    <FloatingButton>
                        +
                    </FloatingButton>
                </Link>
            </Box>
        )
    }

}

export default QuestionsPage;

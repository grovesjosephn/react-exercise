import React, { Component } from 'react';
import { Box, Button, Flex } from 'rebass'

import { getQuestionById, postChoice } from "../api";
import { H1, H2 } from '../components/Headings';
import { Table, TD } from '../components/Table'

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
            <Box mx={4}>
                <H1 mb={2}>Question Details</H1>
                <H2 mb={4}>Question: {question.question && question.question}</H2>
                <Table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <TD as="th" fontWeight="bold">Choice</TD>
                            <TD as="th" fontWeight="bold" textAlign="right">Votes</TD>
                            <TD as="th" fontWeight="bold" textAlign="right">Percentage</TD>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            question.choices && question.choices.map(({ choice, url, votes }, i) => (
                                <tr key={i} onClick={() => this.handleChoiceSelection(i)} style={{ backgroundColor: i === currentVote ? "lightgrey" : "white" }}>
                                    <TD>{choice}</TD>
                                    <TD textAlign="right"><span>{votes}</span></TD>
                                    <TD textAlign="right">{Math.round(votes / allVotes * 100)}%</TD>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <Flex justifyContent="end" mt={4}>
                    <Button bg={currentVote != null ? "grey" : "lightgrey"} borderRadius={1} onClick={() => currentVote != null && this.handleVote()}>Save vote</Button>
                </Flex>
            </Box >
        )
    }

}

export default QuestionsPage;

import React, { useState, useEffect } from 'react';
import { Box, Flex } from 'rebass'

import { getQuestionById, postChoice } from "../api";
import { H1, H2 } from '../components/Headings';
import { Table, TD, TR } from '../components/Table';
import { Button } from '../components/Buttons'

const QuestionsPage = (props) => {
    const [question, setQuestion] = useState({})
    const [allVotes, setAllVotes] = useState(0)
    const [currentVote, setCurrentVote] = useState(null)

    useEffect(() => {
        const fetchQuestion = async () => {
            const { data } = await getQuestionById(props.match.params.id)
            const allVotes = data.choices && data.choices.reduce((acm, { votes }) => acm + votes, 0)
            setQuestion(data)
            setAllVotes(allVotes)
        }

        fetchQuestion()
    }, [])

    const handleChoiceSelection = (i) => {
        setCurrentVote(i)
    }

    const handleVote = async () => {
        if (currentVote != null) {
            await postChoice(question.choices[currentVote].url)
            props.history.push('/')
        }
    }

    return (
        <Box mx={4}>
            <H1 mb={2}>Question Details</H1>
            <H2 mb={4}>Question: {question.question && question.question}</H2>
            <Table>
                <thead>
                    <TR>
                        <TD as="th" fontWeight="bold">Choice</TD>
                        <TD as="th" fontWeight="bold" textAlign="right">Votes</TD>
                        <TD as="th" fontWeight="bold" textAlign="right">Percentage</TD>
                    </TR>
                </thead>
                <tbody>
                    {
                        question.choices && question.choices.map(({ choice, votes }, i) => (
                            <TR key={i} onClick={() => handleChoiceSelection(i)} bg={i === currentVote ? "lightgreen" : "white"}>
                                <TD>{choice}</TD>
                                <TD textAlign="right"><span>{votes}</span></TD>
                                <TD textAlign="right">{Math.round(votes / allVotes * 100)}%</TD>
                            </TR>
                        ))
                    }
                </tbody>
            </Table>
            <Flex justifyContent="end" mt={4}>
                <Button bg={currentVote != null ? "green" : "lightgreen"} borderRadius={1} onClick={() => handleVote()}>Save vote</Button>
            </Flex>
        </Box >
    )
}

export default QuestionsPage;

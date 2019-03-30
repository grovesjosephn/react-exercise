import React, { useState } from 'react'
import { Box, Flex } from 'rebass'

import { H1 } from '../components/Headings'
import { Button } from '../components/Buttons';
import { TextInput } from '../components/Inputs'
import { postQuestion } from '../api';

const QuestionsCreatePage = (props) => {
    const [question, setQuestion] = useState('')
    const [choices, setChoices] = useState([null, null, null, null])

    const handleQuestionInput = ({ target }) => {
        if (target.value.length > 0)
            setQuestion(target.value)
    }

    const handleFormSubmit = async () => {

        const body = {
            question,
            choices: choices.filter(x => x),
        }
        await postQuestion(body)
        props.history.push('/')
    }

    const handleChoiceInput = async ({ target }, i) => {
        if (target.value.length > 0) {
            choices[i] = target.value
        }
        setChoices(choices)
    }

    return (
        <Box m={4}>
            <H1> New Question </H1>
            <Flex flexDirection="column">
                <TextInput placeholder="Question" onInput={(e) => handleQuestionInput(e)} />
                <TextInput placeholder="Choice #1" onInput={(e) => handleChoiceInput(e, 0)} />
                <TextInput placeholder="Choice #2" onInput={(e) => handleChoiceInput(e, 1)} />
                <TextInput placeholder="Choice #3" onInput={(e) => handleChoiceInput(e, 2)} />
                <TextInput placeholder="Choice #4" onInput={(e) => handleChoiceInput(e, 3)} />
            </Flex>

            <Button onClick={() => handleFormSubmit()}>Submit new question</Button>
        </Box >
    )
}

export default QuestionsCreatePage
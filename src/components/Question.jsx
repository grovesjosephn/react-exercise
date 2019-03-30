import React from 'react'
import { Card, Flex, Text } from 'rebass'
import { distanceInWordsToNow } from 'date-fns'

function Question({ question, published_at, choices, ...props }) {
    const formatedDate = distanceInWordsToNow(new Date(published_at))

    return (
        <Card
            p={4}
            borderRadius={[0, 4]}
            boxShadow={['', '0 2px 16px rgba(0, 0, 0, 0.25)']}
            {...props}
        >
            <Flex justifyContent="space-between" >
                <Text
                    fontSize={[2]}
                    fontWeight='bold'
                    style={{ textTransform: "uppercase" }}
                >
                    {question}
                </Text> <Text fontSize={[1]} color="grey" fontWeight="bold">({choices.length})</Text>
            </Flex>
            <Text fontSize={[1]} color="grey">{formatedDate}</Text>
        </Card >
    )
}

export default Question
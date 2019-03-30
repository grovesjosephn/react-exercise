import React from 'react'
import { Card, Text } from 'rebass'

function Question({ question, published_at, choices }) {
    return (
        <Card
            width={[1, 1 / 2, 1 / 3]}
            p={4}
            borderRadius={[0, 4]}
            boxShadow={['', '0 2px 16px rgba(0, 0, 0, 0.25)']}
        >
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }} >
                <Text
                    fontSize={[2]}
                    fontWeight='bold'
                    style={{ textTransform: "uppercase" }}
                >
                    {question}
                </Text> <Text fontSize={[1]} color="grey" fontWeight="bold">({choices.length})</Text>
            </div>
            <Text fontSize={[1]} color="grey">{published_at}</Text>
        </Card >
    )
}

export default Question
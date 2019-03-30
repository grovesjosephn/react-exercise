import React from 'react'

function Question({ question, published_at, choices }) {
    return (
        <div>
            <div>
                <span className="question__header">{question}</span><span className="question__choice">({choices.length})</span>
            </div>
            <span className="questions__published">{published_at}</span>
        </div>
    )
}

export default Question
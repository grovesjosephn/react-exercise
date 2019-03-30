import React from 'react'
import { Button as B } from 'rebass'

export const Button = ({ children, ...props }) => (
    <B bg="grey" {...props}>
        {children}
    </B>
)

export const FloatingButton = ({ children, ...props }) => (
    <B
        bg="grey"
        style={{
            position: "absolute",
            bottom: "48px",
            right: "48px"
        }}
        {...props}
    >
        {children}
    </B>
)
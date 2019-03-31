import React from 'react'
import styled from 'styled-components'
import { buttonStyle, space, fontSize, borderRadius, color, style } from 'styled-system'

const textTransforms = style({
    prop: "tranform",
    cssProperty: "textTransform"
})

export const Button = styled.button(
    {
        appearance: 'button',
        border: 0,
        outline: 0
    },
    buttonStyle,
    space,
    fontSize,
    borderRadius,
    textTransforms,
    color
)
Button.defaultProps = {
    variant: "primary",
    p: 2,
    borderRadius: 1
}

export const FloatingButton = ({ children, ...props }) => (
    <Button
        style={{
            position: "absolute",
            bottom: "48px",
            right: "48px",
            width: "48px",
            height: "48px"
        }}
        {...props}
    >
        {children}
    </Button>
)
FloatingButton.defaultProps = {
    variant: "primary",
    p: 2,
    borderRadius: 6
}
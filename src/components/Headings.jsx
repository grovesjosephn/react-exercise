import React from 'react'
import styled from 'styled-components'
import {
    space,
    fontFamily,
    fontSize,
    textAlign,
    lineHeight,
    fontWeight,
    letterSpacing,
    fontStyle,
    color
} from 'styled-system'

export const Text = styled.p(
    space,
    fontFamily,
    textAlign,
    lineHeight,
    fontWeight,
    letterSpacing,
    fontSize,
    fontStyle,
    color
)
Text.defaultProps = {
    color: 'dark',
    m: 0,
    p: 0,
}

export const H1 = ({ children, ...props }) => <Text
    fontSize={6}
    fontWeight={100}
    {...props}
>
    {children}
</Text >

export const H2 = ({ children, ...props }) => <Text
    fontSize={5}
    fontWeight={600}
    {...props}
>
    {children}
</Text>
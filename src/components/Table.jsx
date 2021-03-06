import React from 'react'
import { Box } from 'rebass'
import { Text } from './Headings'
import styled from 'styled-components'
import { color, space } from 'styled-system'

export const Table = ({ children, ...props }) => (
    <Box {...props}>
        <table style={{ width: "100%" }} >{children}</table>
    </Box>
)

export const TD = ({ children, textAlign, as, ...props }) =>
    as === "th"
        ? <th style={{ textAlign }}>
            <Text {...props}>{children}</Text>
        </th>
        : <td style={{ textAlign }}>
            <Text {...props}>{children}</Text>
        </td>

export const TR = styled.tr(
    color, space
)
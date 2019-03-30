import React from 'react'
import { Text } from 'rebass'

export const H1 = ({ children, ...props }) => <Text
    fontSize={6}
    fontWeight={100}
    color='grey'
    {...props}
>
    {children}
</Text >

export const H2 = ({ children, ...props }) => <Text
    fontSize={3}
    fontWeight={600}
    {...props}
>
    {children}
</Text>
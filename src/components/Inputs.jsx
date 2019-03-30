import React from 'react'
import system from '@rebass/components'

const Input = system(
    {
        is: 'input',
        type: 'text',
    }, 'space', 'color', 'borders', 'borderColor', 'borderRadius', 'fontSize'
)

export const TextInput = (props) => <Input
    border="none" borderBottom="1px solid lightgrey" p={2} mb={2}
    {...props}
/>


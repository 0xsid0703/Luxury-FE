import React from 'react'

type Props = {
    item: any
}

const Test = ({ item }: Props) => {
    console.log({ item })
    return (
        <div>Test</div>
    )
}

export default Test
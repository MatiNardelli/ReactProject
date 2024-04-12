// import { memo } from "react"; -> con esto puedo escribir -> export const Small = memo(({value}) => {

import  React  from 'react';


// desestructuro porque si no, no tendria props

export const Small = React.memo(({value}) => {

    console.log('me volví a dibujar :s')
    return (
        <small>{value}</small>
    )
})

import React,{useContext} from 'react';
import {number1} from './Comp';
import {number2} from './Comp1';
import {number3} from './Comp2';
export default function Comp3()
{
    const value = useContext(number1)
    const value1 = useContext(number2)
    const value2 = useContext(number3)
    return(
        <div>
            <h1>Welcome</h1>
            <h1>Three Values are:</h1>
            <h1>{value}</h1>
            <h1>{value1}</h1>
            <h1>{value2}</h1>
            <h1>Multiplication : {value*value1*value2}</h1>
        </div>
    )

}
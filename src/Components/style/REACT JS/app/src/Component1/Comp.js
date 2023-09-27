import React,{createContext} from 'react';
import Comp1 from './Comp1';
const number1 = createContext();
export default function Comp(){
    const num1=10;
    return(
        <number1.Provider value={num1}>
            <Comp1 />
        
        </number1.Provider>
    )
}
export {number1}
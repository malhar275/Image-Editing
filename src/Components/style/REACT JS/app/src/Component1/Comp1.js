import React,{createContext} from 'react';
import Comp2 from './Comp2';
const number2 = createContext();

 export default function Comp1(){
    const num2=20;
    return(
        <number2.Provider value={num2}>
            <Comp2 />
        </number2.Provider>
    )

}
export {number2}
import React,{createContext} from 'react';
import Comp3 from './Comp3';
const number3 = createContext();

export default function Comp2(){
    const num3=30;
    return(
        <number3.Provider value={num3}>
            <Comp3 />
        </number3.Provider>
    )

}
export {number3}
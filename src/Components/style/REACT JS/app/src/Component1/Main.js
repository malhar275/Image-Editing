import { useContext } from 'react';
import { newContext } from '../App';

export default function Main(){
    const value = useContext(newContext)
    return(
        <h1>{value}</h1>
    )
}

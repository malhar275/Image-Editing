import React from 'react';
export default function Table({data}){
    return(
        <div>
            <table style={{color:'red',fontSize:'18px'}} border={'2px solid'} bgcolor='cyan'>
                <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Branch</th>
                </tr>
                {
                   data.map((i)=>{
                    return (
                        <tr>
                            <td>{i.rollno}</td>
                            <td>{i.Name}</td>
                            <td>{i.Branch}</td>
                        </tr>
                    )
                   })
                }
            </table>
        </div>
    )
}
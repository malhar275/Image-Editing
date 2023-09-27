import React from 'react'
// import banner1 from './assets/banner1.jpg'
// import banner2 from './assets/banner2.jpg'

const Ex3 = () => {
    const arr=[1,2,3,4,5,6,7,8,9];
    const newarr=arr.filter((num)=>{
        if(num===3){
            return false;
        }
        else{
            return true;
        }
    });
  return (
    <div>
        <h1>{arr.join(",")}</h1>
        <h1>{newarr.join(",")}</h1>
    </div>

  
        
  )
}

export default Ex3
//
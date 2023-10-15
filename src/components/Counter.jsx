import React, { useState } from 'react'

function Counter({setprice,price, fixp}) {
  const [qty,setQty]=useState(1);
  const Decrese=()=>{
    if(qty>1){
      setQty(qty-1);
      setprice(fixp*(qty-1));
    }
  }
  const Increse=()=>{
    setQty(qty+1);
    setprice(fixp*(qty+1));
  }
  return (
    <div>
    <div className='counter flex items-center text-2xl justify-start'>
        Quantity
        <div className='ml-5 shadow-md flex'>
        <div className='bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer' onClick={()=>Decrese()}>-</div>
        <div className='w-8 flex items-center justify-center border-[1px] border-[#8a4af3]'>{qty}</div>
        <div className='bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer' onClick={()=>Increse()}>+</div>
      </div>
    </div>
    </div>
  )
}

export default Counter

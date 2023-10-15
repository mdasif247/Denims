import React, { useState } from 'react'

function Counter({citem,citems,setCitems,ind,fixp}) {
  const Decrese=(ind)=>{
    
    if(citem.qty>1){
      citem.qty=citem.qty-1;
      citem.price=citem.price-fixp;
      const nitems=[...citems];
      nitems[ind]=citem;
      setCitems(nitems);
    }
  }
  const Increse=(ind)=>{
      citem.qty=citem.qty+1;
      citem.price=citem.price+fixp;
      const nitems=[...citems];
      nitems[ind]=citem;
      setCitems(nitems);
  }
  return (
    <div>
    <div className='counter flex items-center text-2xl justify-start'>
        Quantity
        <div className='ml-5 shadow-md flex'>
        <div className='bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer' onClick={()=>Decrese(ind)}>-</div>
        <div className='w-8 flex items-center justify-center border-[1px] border-[#8a4af3]'>{citem.qty}</div>
        <div className='bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer' onClick={()=>Increse(ind)}>+</div>
      </div>
    </div>
    </div>
  )
}

export default Counter

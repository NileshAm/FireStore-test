import React, { ReactNode, useContext } from 'react'
import { incompleteContext } from '../Context/FormContext';
import {removeItemAll} from '../helper/removeArrayItem'


const Card = ({children, id}:{children:ReactNode, id:string}) => {
    const {incomplete, setIncomplete} = useContext(incompleteContext);
  return (
    <div
      id={id}
      className={
        "bg-slate-700 rounded-lg w-full py-3 px-5 my-1 border-red-600 " +
        (incomplete.includes(id) && "border-2 shadow shadow-red-600 ")
      }
      onChange={()=>{
        // console.log(incomplete)
        setIncomplete([...removeItemAll(incomplete, id)])
        // console.log(incomplete)
      }}
    >
      {children}
    </div>
  );
}

export default Card
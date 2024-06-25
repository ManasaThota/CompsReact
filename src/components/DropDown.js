import { hover } from "@testing-library/user-event/dist/hover";
import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";
import { click } from "@testing-library/user-event/dist/click";

const DropDown = ({options, value, onChange}) => {
  const [isOpen, setIsOpen] =  useState(false);
  const divEl = useRef();

  useEffect(()=>{
    const handler = (event)=> {
      if(!divEl.current){
        return;
      }
      if(!divEl.current.contains(event.target)){
        setIsOpen(false);
      }
    }
    document.addEventListener('click', handler,true);
    return() =>{
      document.removeEventListener('click', handler);
    }
  },[])
  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  const handleOpenClick = (option) => {
    setIsOpen(false);
    onChange(option);
  }
  const renderedElements = options.map((option) => {
    return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={()=>handleOpenClick(option)} key={option.value}>
      {option.label}
    </div>
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
        {value?.label || "Select..."}
        <GoChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedElements}</Panel>}
    </div>
  )
}

export default DropDown
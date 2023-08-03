import { useSearch } from "@/context/SearchContext";
import { useEffect, useRef, useState } from "react";

export default function FilterDropdown({ label, options }) {
  const containerRef = useRef();
  const {addFilter} = useSearch();
  const [dropdownOpened, setDropdownOpened] = useState(false);

  function onClick(e){
    const key = e.target.dataset.key;
    const value = parseInt(e.target.value);
    const label = options.find(o => o.value === value)?.label;
    addFilter(key, value, label);
    setDropdownOpened(false);
  }

  useEffect(()=>{
    function handleClickOutside(e){
      const clickInside = containerRef?.current?.contains(e.target);
      if (!clickInside) setDropdownOpened(false);
    }

    if (dropdownOpened){
      document.addEventListener('click', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }else{
        document.removeEventListener('click', handleClickOutside)
        document.removeEventListener('touchstart', handleClickOutside)
    }

  return ()=>{
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
  }
  }, [dropdownOpened]);

  return (
    <div ref={containerRef} className='relative text-base text-gray-600 cursor-pointer'>
      <div onClick={()=>setDropdownOpened(opened => !opened)} className="flex flex-row gap-x-1 w-fit h-fit px-1 bg-white hover:bg-gray-200 border-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="aspect-square w-4" fill="currentColor" stroke="none" viewBox="0 96 960 960">
          <path d="M440 896q-17 0-28.5-11.5T400 856V616L161 311q-14-17-4-36t31-19h584q21 0 31 19t-4 36L560 616v240q0 17-11.5 28.5T520 896h-80Zm40-276 240-304H240l240 304Zm0 0Z"/>
        </svg>
        <p>{label}</p>
      </div>
      {dropdownOpened && 
      <ul className="absolute top-full left-0 w-fit max-w-[calc(100vw-5rem)] z-10 bg-white border-gray-300 shadow-md divide-y">
        {options && options.map((option, idx)=>(
        <li key={`option-${idx}`} className="w-full px-1 whitespace-nowrap hover:bg-gray-200">
          <button className="w-full text-start text-ellipsis overflow-hidden" type="button" data-key={option.key} value={option.value} onClick={onClick}>{option.label}</button>
        </li>  
        ))}
      </ul>
      }
    </div>
  )
}

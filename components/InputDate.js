import { useRouter } from "next/router";
import { forwardRef, useEffect, useId, useMemo, useRef, useState } from "react";

function DatePicker({ opened, min, max, value, excluded, onValueChange }){
    const [selected, setSelected] = useState(value)
    useEffect(()=>{ if (!((typeof(min) === 'string' && value < min) || (typeof(max) === 'string' && value > max))) setSelected(value) }, [min, max, value])
    const [month, setMonth] = useState(()=>{
        let date = new Date(value || min || max)
        return (isNaN(date) ? new Date() : date).getMonth()
    })
    const [year, setYear] = useState(()=>{
        let date = new Date(value || min || max)
        return (isNaN(date) ? new Date() : date).getFullYear()
    })
    useEffect(()=>{ 
        if (!opened && selected){
            const [year, month, date] = selected.split('-')
            setMonth(parseInt(month)-1)
            setYear(parseInt(year))
        }
    }, [opened, selected])

    const daysOfWeek = Array.from({ length: 7 }, (_, k)=>(_addDays(new Date(), k-(new Date()).getDay())).toLocaleDateString('zh-hk', { weekday: 'short' }).slice(0, 2))
    const weeks = useMemo(()=>{
        const tmpWeeks = []
        const monthStart = new Date(year, month)
        const monthEnd = new Date(year, month+1, 0)
        for (let weekStart = _addDays(monthStart, -monthStart.getDay()); weekStart <= monthEnd; weekStart.setDate(weekStart.getDate() + 7)){
            const tmpCurrentWeek = []
            for (let i=0; i<7; i++){
                const date = _addDays(weekStart, i)
                tmpCurrentWeek.push({
                    label: date.getDate(),
                    value: `${date.getFullYear().toString().padStart(4, '0')}-${(date.getMonth()+1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
                })
            }
            tmpWeeks.push(tmpCurrentWeek)
        }
        return tmpWeeks
    }, [month, year])

    function changeMonth(delta){
        if (month + delta < 0){
            setMonth(11)
            setYear(current => current-1)
        }else if (month + delta >= 12){
            setMonth(0)
            setYear(current => current+1)
        }else setMonth(current => current + delta)
    }

    function _addDays(date, days){
        const result = new Date(date)
        result.setDate(result.getDate() + days)
        return result
    }

    function onDateClick(event){
        const date = event.target.value
        if ((typeof(min) === 'string' && date < min) || (typeof(max) === 'string' && date > max) || (excluded?.includes(date))) return
        if (selected !== date){
            setSelected(date)
            if (typeof(onValueChange) === 'function') onValueChange(date, event.target)
        }
    }
    

    return (
    <div className={`absolute z-10 top-[calc(100%+0.5rem)] left-4 w-fit h-fit bg-white border border-gray-600 rounded-md ${(opened ? 'flex' : 'hidden')} flex-col gap-y-0`}>
        <div className="absolute -top-4 left-2 border-[0.5rem] border-transparent !border-b-gray-600" >
            <div className="absolute -top-[0.45rem] -left-2 border-[0.5rem] border-transparent !border-b-gray-300"/>
        </div>
        <div className="border-0 rounded-t-md bg-gray-300 flex flex-col gap-y-0 p-3 border-b border-gray-600">
            <div className="w-full h-fit flex flex-row place-content-between items-center">
                <button onClick={()=>changeMonth(-1)} type="button" className="text-gray-400 hover:text-gray-600 w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 48 48" fill="currentColor" stroke="none">
                        <path d="m26.95 34.9-9.9-9.9q-.25-.25-.35-.5-.1-.25-.1-.55 0-.3.1-.55.1-.25.35-.5L27 12.95q.45-.45 1.075-.45t1.075.45q.45.45.425 1.1-.025.65-.475 1.1l-8.8 8.8 8.85 8.85q.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.1.45-.65 0-1.1-.45Z"/>
                    </svg>
                </button>
                <p className="font-medium text-base">{(new Date(year, month)).toLocaleDateString('zh-hk', { year: 'numeric', month: 'long' })}</p>
                <button onClick={()=>changeMonth(1)} type="button" className="text-gray-400 hover:text-gray-600 w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 48 48" fill="currentColor" stroke="none">
                        <path d="M17.7 34.9q-.4-.5-.425-1.1-.025-.6.425-1.05l8.8-8.8-8.85-8.85q-.4-.4-.375-1.075.025-.675.425-1.075.5-.5 1.075-.475.575.025 1.025.475l9.95 9.95q.25.25.35.5.1.25.1.55 0 .3-.1.55-.1.25-.35.5l-9.9 9.9q-.45.45-1.05.425-.6-.025-1.1-.425Z"/>
                    </svg>
                </button>
            </div>
            <div className="w-full h-fit flex flex-row gap-x-2 place-content-evenly items-center text-sm">
                {daysOfWeek.map((dow, idx)=>(
                <p key={`dow-${idx}`} className="w-6 h-fit text-center">{dow}</p>    
                ))}
            </div>
        </div>
        <div className="p-3 bg-transparent flex flex-col gap-y-2 justify-center items-center">
            {weeks.map((week, weekIdx)=>(
            <div key={`week-${weekIdx}`} className="w-full h-fit flex flex-row gap-x-2 place-content-between items-center">
                {week.map(({label, value}, dayIdx)=>(
                <button key={`day-${weekIdx}-${dayIdx}`} disabled={(typeof(min) === 'string' && value < min) || (typeof(max) === 'string' && value > max) || (excluded?.includes(value))} type="button" className={`w-6 h-fit border-0 rounded-md disabled:text-gray-300 text-inherit ${(value === selected ? "bg-blue-300" : "bg-transparent")}`} value={value} onClick={onDateClick}>
                    {label}
                </button>    
                ))}
            </div>    
            ))}
        </div>
    </div>
    )
}

const InputDate = forwardRef(({ name, defaultValue, value, onChange, onBlur, min, max, excluded, className }, ref)=>{
    const isValidDate = str => !isNaN(new Date(str))
    
    const containerRef = useRef()
    const inputId = useId()
    const [datePickerOpened, setDatePickerOpened] = useState(false)
    const [currentDate, setCurrentDate] = useState(()=>{
        console.log('initialize currentDate: ', value, defaultValue, min, max);
        let tmpCurrentDate = null;
        if (isValidDate(value) && (typeof(min) !== 'string' || !isValidDate(min) || value >= min) && (typeof(max) !== 'string' || !isValidDate(max) || value <= max)) tmpCurrentDate = value;
        else if (isValidDate(defaultValue) && (typeof(min) !== 'string' || !isValidDate(min) || defaultValue >= min) && (typeof(max) !== 'string' || !isValidDate(max) || defaultValue <= max)) tmpCurrentDate = defaultValue;
        console.log('tmpCurrentDate: ', tmpCurrentDate);
        onChange(tmpCurrentDate);
        return tmpCurrentDate;
    });
    

    function changeCurrentDate(inputValue){
        const inputRef = document.getElementById(inputId)
        try{
            if (!isValidDate(inputValue)) throw `${inputValue} is not a valid date!`;
            else if ((typeof(min) === 'string' && inputValue < min) || (typeof(max) === 'string' && inputValue > max) || (excluded?.includes(inputValue))) throw "Disabled dates"

            const inputDate = new Date(inputValue)
            const tmpDate = `${inputDate.getFullYear().toString().padStart(4, '0')}-${(inputDate.getMonth()+1).toString().padStart(2, '0')}-${inputDate.getDate().toString().padStart(2, '0')}`
            setCurrentDate(tmpDate)
            onChange(tmpDate);
            
        }catch(error){
            console.error("changeCurrentDate error: ", error)
            inputRef.value = currentDate
        }
        
    }
    function onInputBlur(event){
        changeCurrentDate(event.target.value);
        onBlur();
    }
    function onPickerValueChange(date, element){
        changeCurrentDate(date)
        setDatePickerOpened(false)
        onBlur();
    }

    useEffect(()=>{
        console.log('value changed! ', value, currentDate);
    }, [value, currentDate]);
    useEffect(()=>{
        const inputRef = document.getElementById(inputId)
        if (inputRef) inputRef.value = currentDate
    }, [currentDate, inputId])
    useEffect(()=>{
        function handleClickOutside(event){
            const clickInside = containerRef?.current?.contains(event.target)
            if (!clickInside) setDatePickerOpened(false)
        }
        if (datePickerOpened){
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
    }, [datePickerOpened])

    return (
        <div className="relative" ref={containerRef}>
            <input ref={ref}
               id={inputId}
               type="text"
               name={name}
               defaultValue={currentDate}
               onFocus={()=>setDatePickerOpened(true)}
               onBlur={onInputBlur}
               className={className}
            />

            <DatePicker opened={datePickerOpened} value={currentDate} min={min} max={max} excluded={excluded} onValueChange={onPickerValueChange}/>
        </div>
    )

})
InputDate.displayName = 'InputDate'

export default InputDate
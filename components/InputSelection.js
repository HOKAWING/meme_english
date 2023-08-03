import { forwardRef, useEffect, useState } from "react"

const InputSelection = forwardRef(({ name, label, options, error, defaultValue, ...selectAttr }, ref) => {
    return (
        <div className="w-full">
            <label htmlFor={name} className="m-0 p-0 text-sm font-medium text-gray-900">{label}</label>
            <select ref={ref}
                    name={name} 
                    className="block w-full shadow-sm rounded-md border-gray-300 border px-7 py-1 outline-none focus:border-indigo-500 focus:ring-indigo-500"
                    {...selectAttr}>
                {options.map(({value, label: optionLabel}) => <option key={`option-${optionLabel}`} value={value}>{optionLabel}</option>)}    
            </select> 
            {error && <p className="text-sm mt-2 text-red-500">{error}</p>}
        </div>
    )
})
InputSelection.displayName = 'InputSelection'

export default InputSelection

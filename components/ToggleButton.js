import { useId } from "react"

export default function ToggleButton({ id, offLabel, onLabel, onToggle }) {
    const toggleId = useId();

    function onClick(e) {
        // const inputRef = document.getElementById(id || toggleId);
        const inputRef = e.target;
        console.log('toggle clicked! ', inputRef.checked);
        if (typeof(onToggle) === 'function') onToggle(inputRef.checked, inputRef);
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            {offLabel && <span className="mr-3 text-sm font-medium text-gray-900">{offLabel}</span>}
            <input id={id || toggleId} onClick={onClick} type="checkbox" value="scan-freebie" className="hidden peer" />
            <div className="relative w-11 h-6 rounded-full bg-gray-600 peer-checked:bg-blue-600 before:content-[''] before:absolute before:block before:w-4 before:h-4 before:left-1 before:top-1 before:bg-white before:rounded-full before:transition-all peer-checked:before:translate-x-5"></div>
            {onLabel && <span className="ml-3 text-sm font-medium text-gray-900">{onLabel}</span>}
        </label>
    )
}
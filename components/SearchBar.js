import { useSearch } from "@/context/SearchContext";
import { useRef, useState } from "react";

export default function SearchBar({ }) {
  const containerRef = useRef();
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState();
  const { FILTER_KEYS: filterKeys, activeFilters, addFilter, removeFilter } = useSearch();

  function onFilterClick(e) {
    const target = e.target.nodeName === "BUTTON" ? e.target : e.target.parentElement;
    addFilter(target.dataset.key, target.dataset.value);
    setInputValue(null);
    if (inputRef?.current) inputRef.current.value = null;
  }

  function onKeyDown(e) {
    if (e.key === 'Enter') {
        console.log('Enter pressed!');
        const availableFilterKeys = filterKeys.filter(fk => !fk.hideInSearchBar && !activeFilters.map((af) => af.key).includes(fk.key));
        const targetFilter = (availableFilterKeys.length > 0 && availableFilterKeys[0]) || null;
        if (!targetFilter) return;
        addFilter(targetFilter.key, e.target.value);
        setInputValue(null);
        if (inputRef?.current) inputRef.current.value = null;
    }else if (e.key === 'Backspace' && e.target.value.length <= 0) {
        const cancelableActiveFilters = activeFilters.filter(af => !filterKeys.find(fk => fk.key === af.key)?.uncancelable);
        if (cancelableActiveFilters.length > 0){
            const lastActiveFilter = cancelableActiveFilters[cancelableActiveFilters.length - 1];
            removeFilter(lastActiveFilter.key);
        }
    }
  }

  return (
    <div
      ref={containerRef}
      className="z-50 bg-white relative max-w-full w-full h-fit pb-1 text-sm lg:text-base p-1 text-gray-600 flex flex-row flex-wrap gap-1 border-b border-b-gray-300"
    >
      {activeFilters.map(({ key, value, label }, idx) => (
        <div
          key={`active-filter-${idx}`}
          className="w-fit h-full border border-odoo_dark flex flex-row items-center"
        >
          <p className="w-fit m-0 px-1 bg-odoo_dark text-white self-stretch">
            {filterKeys.find(f => f.key === key).label}
          </p>
          <p className="w-fit h-full px-1">{label || value}</p>
            {!filterKeys.find(fk => fk.key === key)?.uncancelable && 
            <button
                onClick={() => removeFilter(key)}
                type="button"
                className="h-full aspect-square"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    stroke="none"
                    viewBox="0 96 960 960"
                >
                    <path d="M480 618 270 828q-9 9-21 9t-21-9q-9-9-9-21t9-21l210-210-210-210q-9-9-9-21t9-21q9-9 21-9t21 9l210 210 210-210q9-9 21-9t21 9q9 9 9 21t-9 21L522 576l210 210q9 9 9 21t-9 21q-9 9-21 9t-21-9L480 618Z" />
                </svg>
            </button>
            }
        </div>
      ))}
      <div className="flex-1 flex flex-row">
        <input
            ref={inputRef}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={onKeyDown}
            type="text"
            placeholder="Search..."
            className="flex-1 border-none outline-none"
        />
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 lg:h-6 aspect-square"
            fill="currentColor"
            stroke="none"
            viewBox="0 96 960 960"
        >
            <path d="M774 913 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l243 241q9 8.442 9 20.721t-9.913 22.192Q809 922 795.778 922q-13.222 0-21.778-9ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z" />
        </svg>
      </div>        
      {inputValue && inputValue.length > 0 && filterKeys.length > 0 && (
        <ul className="absolute w-full h-fit py-2 top-full left-0 border border-gray-300 list-none shadow-md bg-white z-10">
          {filterKeys
            .filter(fk => !fk.hideInSearchBar && !activeFilters.map((af) => af.key).includes(fk.key))
            .map(({ key, label }, idx) => (
              <li key={`filter-key-${idx}`} className="w-full h-fit">
                <button
                  onClick={onFilterClick}
                  type="button"
                  data-key={key}
                  data-value={inputValue}
                  className="hover:bg-gray-300 px-2 w-full text-start overflow-hidden text-ellipsis"
                >
                  搜尋 {label}:{" "}
                  <span className="text-cyan-500 font-medium italic">
                    {inputValue}
                  </span>
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

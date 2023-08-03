import { forwardRef } from "react";
import InputDate from "./InputDate";
import { Controller } from "react-hook-form";

const InputField = forwardRef(({ type = "text", name, label, error, control, rules, ...inputAttr }, ref) => {
    const onChange = (e) => {
      if (typeof(onValueChange) === 'function') onValueChange(e.target.value, e.target)
    }

    return (
      <div className="w-full">
        <label
          htmlFor={name}
          className="m-0 p-0 block text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        {type === 'date' ? 
        <Controller 
          control={control}
          name={name}
          defaultValue={inputAttr.defaultValue}
          rules={rules}
          shouldUnregister={true}
          render={({
            field: { onChange, onBlur, value, name, ref }
          }) => (
            <InputDate ref={ref}
                       name={name}
                       value={value}
                       onChange={onChange}
                       onBlur={onBlur}
                       className="block w-full shadow-sm rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 outline-none px-7 py-1"
                       {...inputAttr} />
          )}
        />
        :
        <input ref={ref}
               type={type}
               name={name}
               onChange={onChange}
               className="block w-full shadow-sm rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 outline-none px-7 py-1"
               {...inputAttr} />
        }
        {error && <p className="text-sm mt-2 text-red-500">{error}</p>}
      </div>
    );
  }
);

InputField.displayName = "InputField";
export default InputField;

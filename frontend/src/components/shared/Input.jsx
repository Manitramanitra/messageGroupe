import React from "react";

function Input({
  id,
  type,
  label,
  register,
  errors,
  name,
  message,
  required,
  placeholder,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        {...register(name, {
          required: { value: { required }, message: message },
        })}
        type={type}
        name={name}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder ? placeholder : ""}
        required=""
      />
      {errors[`${name}`] && (
        <small className="text-red-600">{errors[`${name}`].message}</small>
      )}
    </div>
  );
}

export default Input;

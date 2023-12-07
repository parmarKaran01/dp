

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  placeholder: string;
  onChange: () => void;
  error?: string;
  required: boolean;
  options: SelectOption[];
  register : {},
};

const Select = ({
  label,
  error = "",
  required,
  options,
  register
}: SelectProps) => {
  return (
    <div className="relative">
      <label
        className={`block mb-1 text-sm font-medium ${
          required ? "after:content-['*'] after:text-red-700" : ""
        } pl-3`}
      >
        {label}
      </label>
      {/* <div
        onClick={() => {
          console.log(isOpen);
          setIsOpen(!isOpen);
        }}
        className={`${
          error
            ? "border-red-500 text-red-900 placeholder-red-700"
            : "border-[#A0A3BD] placeholder-[#A0A3BD]"
        } border text-sm rounded-[16px] block w-full p-4 bg-[#FCFCFC] indent-1 flex items-center`}
      >
        <input
          type="text"
          placeholder="Dropdown button"
          className="w-full"
          disabled
          value={""}
        />

        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>

      {isOpen ? (
        <div className="z-10 bg-[#FCFCFC] w-full absolute">
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {options.map((item, idx) => {
              return (
                <option
                  value={item.value}
                  key={idx}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer "
                >
                  {item.label}
                </option>
              );
            })}
          </ul>
        </div>
      ) : null} */}
      <select
        className={`${
          error
            ? "border-red-500 text-red-900 placeholder-red-700"
            : "border-[#A0A3BD] placeholder-[#A0A3BD]"
        } border text-sm rounded-[16px] block w-full p-4 bg-[#FCFCFC] indent-1 flex items-center`}
        {...register}
      >
        {options.map((item, idx) => {
          return (
            <option
              value={item.value}
              key={idx}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer "
            >
              {item.label}
            </option>
          );
        })}
      </select>
      <p className="mt-0 ml-2 text-sm text-red-600 dark:text-red-500">
        {error ? (
          <span>
           {error}
          </span>
        ) : null}
      </p>
    </div>
  );
};

export default Select;


type TextFieldProps = {
  label: string;
  placeholder: string;
  error?: string;
  required: boolean;
  register: {}
};

const TextField = ({
  label,
  placeholder,
  error = "",
  required,
  register
}: TextFieldProps) => {
  return (
    <div className="h-[100px]">
      <label
        className={`block mb-1 text-sm font-medium ${
          required ? "after:content-['*'] after:text-red-700" : ""
        } pl-3`}
      >
        {label}
      </label>
      <input
        type="text"
        className={`${
          error
            ? "border-red-500 text-red-900 placeholder-red-700"
            : "border-[#A0A3BD] placeholder-[#A0A3BD]"
        } border text-sm rounded-[16px] block w-full p-4 bg-[#FCFCFC] indent-1`}
        placeholder={placeholder}
        {...register}
      />
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

export default TextField;

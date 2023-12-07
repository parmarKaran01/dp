type TextAreaProps = {
  label: string;
  placeholder: string;
  error?: string;
  required: boolean;
  register : {},
};

const TextArea = ({
  label,
  placeholder,
  error = "",
  required,
  register,
}: TextAreaProps) => {
  return (
    <div>
      <label
        className={`block mb-1 text-sm font-medium ${
          required ? "after:content-['*'] after:text-red-700" : ""
        } pl-3`}
      >
        {label}
      </label>
      <textarea
        id="message"
        rows={3}
        className={`${
          error
            ? "border-red-500 text-red-900 placeholder-red-700"
            : "border-[#A0A3BD] placeholder-[#A0A3BD]"
        } border text-sm rounded-[16px] block w-full p-4 bg-[#FCFCFC] indent-1 resize-none`}
        placeholder={placeholder}
        {...register}
      ></textarea>
      <p className="mt-0 ml-2 text-sm text-red-600 dark:text-red-500">
        {error ? <span>Some error message.</span> : null}
      </p>
    </div>
  );
};

export default TextArea;

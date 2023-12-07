const Stepper = () => {
    
  return (
    <div className="w-full h-[100px]  flex items-center justify-center">
      <ol className="flex items-center w-[300px] justify-center">
      <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-300 after:border-1 after:inline-block dark:after:border-gray-700 relative">
          <span className="flex items-center justify-center bg-blue-800 rounded-full h-8 w-8 dark:bg-blue-800 shrink-0 text-white">
            1
          </span>
          <span className="absolute top-[100%] text-[#A0A3BD] text-[14px] -left-[20%]">Choose Plan</span>
        </li>
        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-300 after:border-1 after:inline-block dark:after:border-gray-700 relative">
          <span className="flex items-center justify-center bg-[#FCFCFC] border border-[#A0A3BD]  rounded-full h-8 w-8 dark:bg-blue-800 shrink-0 text-[#A0A3BD]">
            2
          </span>
          <span className="absolute top-[100%] text-[#A0A3BD] text-[14px] -left-[10%]">Address</span>
        </li>
        <li className="flex items-center relative">
          <span className="flex items-center justify-center bg-[#FCFCFC] border border-[#A0A3BD] rounded-full h-8 w-8 dark:bg-blue-800 shrink-0 text-[#A0A3BD] ">
            3
          </span>
          <span className="absolute top-[100%] text-[#A0A3BD] text-[14px] -left-[10%]">Payment</span>
        </li>
      </ol>
    </div>
  );
};

export default Stepper;

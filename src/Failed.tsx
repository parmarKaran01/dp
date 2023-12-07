import { OrderDetails } from "./Success";
import CheckMark from "./assets/check-mark.svg";
import Truck from "./assets/truck-fast.svg";

const FailedBanner = () => {
  return (
    <div className="py-12 px-4 bg-[#FFEEDD] flex flex-col items-center justify-center">
      <img src={CheckMark} alt="check-mark" color="#D86A00" />
      <h2 className="md:text-[32px] text-[16px] text-[#D86A00] font-bold">
        Uh-uh, payment failed
      </h2>
      <p className="md:text-[16px] text-[12px] text-center">
        You will receive an email with invoice and plan details.
      </p>
    </div>
  );
};
const Failed = () => {
  return (
    <div>
      <FailedBanner />
      <div className="py-8 flex flex-col items-center justify-center gap-4">
        <button className="w-[90%] max-w-[350px] md:py-[22px] py-[14px] bg-[#4548B9] rounded-[48px] text-white font-medium md:text-[16px]">
          Retry Payment
        </button>
        <div className="flex items-center gap-1">
          <img src={Truck} alt="" />
          <span className="text-[14px] md:text-[18px] text-[rgba(0, 0, 0, 0.60)] font-medium">
            Book in <span className="text-[#4548B9]">15:00 mins</span> to get{" "}
            <span className="text-[#4548B9]">1 Day delivery</span>
          </span>
        </div>
        <OrderDetails />
      </div>
    </div>
  );
};

export default Failed;

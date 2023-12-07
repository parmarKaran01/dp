import CheckMark from "./assets/check-mark.svg";
import WaterPf from "./assets/waterpf.png";
import Call from "./assets/Call.svg";
import Circle from "./assets/circle.svg";
import Technician from "./assets/technician.svg";
import Drop from "./assets/Drop.svg";
import Stepper from "./Stepper";

// const TimelineComponent = () => {
//   return (
//     // <ol className="relative border-l-2 border-[rgba(0, 0, 0, 0.20)] dark:border-[rgba(0, 0, 0, 0.20)] border-dashed flex flex-col justify-between">
//     //   <li className="mb-10 ms-6 flex relative">
//     //     <span className="absolute flex items-center justify-center w-3 h-3 bg-[#4548B9] rounded-full -start-7.5 dark:bg-[#4548B9]"></span>
//     //     <div className="flex items-center gap-4">
//     //       <div className="w-[64px] h-[64px] bg-[#4548B9] flex items-center justify-center rounded-md">
//     //         <img src={Call} />
//     //       </div>

//     //       <h3 className="text-[24px] text-[#000] font-medium">
//     //         Our team will contact you at the time of delivery
//     //       </h3>
//     //     </div>
//     //   </li>
//     //   <li className="mb-10 ms-6 flex">
//     //     <span className="absolute flex items-center justify-center w-3 h-3 bg-[#4548B9] rounded-full -start-1.5 dark:bg-[#4548B9]"></span>
//     //     <div className="flex items-center gap-4">
//     //       <div className="w-[64px] h-[64px] bg-[#4548B9] flex items-center justify-center rounded-md">
//     //         <img src={Call} />
//     //       </div>

//     //       <h3 className="text-[24px] text-[#000] font-medium">
//     //         Our team will contact you at the time of delivery
//     //       </h3>
//     //     </div>
//     //   </li>
//     //   <li className="mb-10 ms-6 flex">
//     //     <span className="absolute flex items-center justify-center w-3 h-3 bg-[#4548B9] rounded-full -start-1.5 dark:bg-[#4548B9]"></span>
//     //     <div className="flex items-center gap-4">
//     //       <div className="w-[64px] h-[64px] bg-[#4548B9] flex items-center justify-center rounded-md">
//     //         <img src={Call} />
//     //       </div>

//     //       <h3 className="text-[24px] text-[#000] font-medium">
//     //         Our team will contact you at the time of delivery
//     //       </h3>
//     //     </div>
//     //   </li>
//     // </ol>
//     <div className="flex flex-col md:grid grid-cols-12 text-gray-50 gap-4 grow">
//       <div className="flex md:contents items-center">
//         <div className="col-start-2 col-end-4 mr-4 md:mx-auto relative">
//           <div className="h-full w-2 flex items-center justify-center">
//             <div className="h-[50%] bg-[rgba(0, 0, 0, 0.20)] border-2 border-dashed pointer-events-none absolute top-1/2"></div>
//           </div>
//           <div className="w-3 h-3 absolute top-[70%] -mt-[1.3rem] -left-[2px] rounded-full bg-[#4548B9] shadow text-center"></div>
//         </div>
//         <div className="col-span-8 flex items-center gap-4">
//           <div className="w-[64px] h-[64px] bg-[#4548B9] flex items-center justify-center rounded-md">
//             <img src={Call} />
//           </div>

//           <h3 className="text-[24px] text-[#000] font-medium">
//             Our team will contact you at the time of delivery
//           </h3>
//         </div>
//       </div>

//       <div className="flex md:contents items-center">
//         <div className="col-start-2 col-end-4 mr-4 md:mx-auto relative">
//           <div className="h-full w-2 flex items-center justify-center">
//             <div className="h-full bg-[rgba(0, 0, 0, 0.20)] border-2 border-dashed pointer-events-none absolute"></div>
//           </div>
//           <div className="w-3 h-3 absolute top-[70%] -mt-[1.3rem] -left-[2px] rounded-full bg-[#4548B9] shadow text-center"></div>
//         </div>
//         <div className="col-span-8 flex items-center gap-4">
//           <div className="w-[64px] h-[64px] bg-[#4548B9] flex items-center justify-center rounded-md">
//             <img src={Call} />
//           </div>

//           <h3 className="text-[24px] text-[#000] font-medium">
//             Our team will contact you at the time of delivery
//           </h3>
//         </div>
//       </div>

//       <div className="flex md:contents">
//         <div className="col-start-2 col-end-4 mr-4 md:mx-auto relative">
//           <div className="h-full w-2 flex items-center justify-center">
//             <div className="h-[50%] bg-[rgba(0, 0, 0, 0.20)] border-2 border-dashed pointer-events-none absolute -top-[20%]"></div>
//           </div>
//           <div className="w-3 h-3 absolute top-[70%] -mt-[1.3rem] -left-[2px] rounded-full bg-[#4548B9] shadow text-center"></div>
//         </div>
//         <div className="col-span-8 flex items-center gap-4">
//           <div className="w-[64px] h-[64px] bg-[#4548B9] flex items-center justify-center rounded-md">
//             <img src={Call} />
//           </div>

//           <h3 className="text-[24px] text-[#000] font-medium">
//             Our team will contact you at the time of delivery
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

const TimelineComponent = () => {
  return (
    <div className="md:pr-[6rem] md:max-w-[65%] md:border-r-[#E7E8F1] md:border-r md:pl-[6rem] pt-[3rem] px-8">
      <h3 className="md:text-[32px] text-[20px] font-semibold text-[#000]">
        What Happens Next?
      </h3>
      <ul className="md:mt-[4rem] mt-[2rem]">
        <li className="relative flex gap-6 items-center pb-12">
          <div className="before:absolute before:left-[2px] before:h-full before:w-[1px] before:border-[2px] before:border-dashed before:border-[rgba(0, 0, 0, 0.20)]">
            <img src={Circle} className="absolute" />
          </div>
          <div className="flex items-start gap-4">
            <div className="w-[64px] h-[64px] bg-[#4548B9] flex items-center justify-center rounded-[16px] shrink-0">
              <img src={Call} />
            </div>

            <h3 className="md:text-[24px] text-[16px] text-[#000] font-medium">
              Our team will contact you at the time of delivery
            </h3>
          </div>
        </li>
        <li className="relative flex gap-6 items-center pb-12">
          <div className="before:absolute before:left-[2px] before:h-full before:w-[1px] before:border-2 before:border-dashed before:border-[rgba(0, 0, 0, 0.20)] z-0">
            <img src={Circle} className="absolute" />
          </div>
          <div className="flex items-start gap-4">
            <div className="w-[64px] h-[64px] bg-[#4548B9] flex items-center justify-center rounded-[16px] shrink-0">
              <img src={Technician} />
            </div>

            <h3 className="md:text-[24px] text-[16px] text-[#000] font-medium">
              Drink Prime agent will install the Purifier in next 24 - 48 hours.
            </h3>
          </div>
        </li>
        <li className="relative flex gap-6 items-center pb-12">
          <div>
            <img src={Circle} className="absolute" />
          </div>
          <div className="flex items-start gap-4">
            <div className="w-[64px] h-[64px] bg-[#4548B9] flex items-center justify-center rounded-[16px] shrink-0">
              <img src={Drop} />
            </div>

            <h3 className="md:text-[24px] text-[16px] text-[#000] font-medium">
              Install Drink Prime app and start enjoying healthiest water with
              Drink Prime.
            </h3>
          </div>
        </li>
      </ul>
    </div>
  );
};
const ThankyouBanner = () => {
  return (
    <div className="py-12 px-4 bg-[#DBFFDE] flex flex-col items-center justify-center">
      <img src={CheckMark} alt="check-mark" />
      <h2 className="md:text-[32px] text-[16px] text-[#00770C] font-bold text-center">
        Thank you for subscribing to Drink Prime!
      </h2>
      <p className="md:text-[16px] text-[12px] text-[#00770C]">
        You will receive an email with invoice and plan details.
      </p>
    </div>
  );
};

export const OrderDetails = () => {
  return (
    <div className="bg-[#F8F9FF] rounded-[20px] px-[1rem] py-[1.5rem] grow w-[350px] mt-4 mx-auto w-[90%] md:w-[auto] max-w-[400px] md:m-8">
      <h2 className="md:text-[24px] text-[20px] font-semibold pb-4">
        Order Details
      </h2>
      <div className="flex items-start gap-[12px]">
        <div className="p-4 border border-[rgba(0, 0, 0, 0.20)] w-[90px] h-[70px] flex items-center justify-center rounded-md">
          <img src={WaterPf} alt="img" />
        </div>
        <div>
          <h3 className="md:text-[18px] text-[16px] text-[#4548B9] font-bold">
            SOLO 125 Plan
          </h3>
          <p className="md:text-[14px] text-[12px] text-[rgba(0, 0, 0, 0.60)] font-semibold">
            28 days
          </p>
          <p className="md:text-[20px] text-[18px] text-[#000] font-bold">
            ₹1698
          </p>
        </div>
      </div>

      <hr className="bg-[rgba(0, 0, 0, 0.20)] h-px border-1 mt-2" />
      <div className="px-[12px] py-[16px] flex items-center justify-between">
        <h4 className="md:text-[16px] text-[14px] text-[#000] font-semibold">
          Total Amount Paid
        </h4>
        <p className="md:text-[16px] text-[14px] text-[#000]">₹1698</p>
      </div>

      <hr className="bg-[rgba(0, 0, 0, 0.20)] h-px border-1 mt-2" />

      <div className="px-[12px] py-[16px] flex items-center justify-between">
        <h4 className="md:text-[16px] text-[14px] text-[#000] font-semibold">
          Ordered On
        </h4>
        <p className="md:text-[16px] text-[14px] text-[#000]">09-11-23</p>
      </div>

      <hr className="bg-[rgba(0, 0, 0, 0.20)] h-px border-1 mt-2" />

      <div className="px-[12px] py-[16px] flex items-start justify-between">
        <h4 className="md:text-[16px] text-[14px] text-[#000] font-semibold">
          Address
        </h4>
        <p className="md:text-[16px] text-[14px] text-[#000] w-[40%] text-right">
          Praveen G#9/A,
          <br /> Chukki Complex, 19th Main Rd, Sector 3, HSR Layout, Bengaluru,
          Karnataka 560102
        </p>
      </div>

      <p className="md:text-[14px] text-[12px] text-[rgba(0, 0, 0, 0.60)] px-[12px] mt-2">
        *Plan validity will start from the time of installation
      </p>
    </div>
  );
};
const Success = () => {
  return (
    <div>
      <Stepper />
      <ThankyouBanner />
      <div className="flex flex-col md:items-stretch gap-[1rem] md:flex-row justify-around">
        <TimelineComponent />
        <OrderDetails />
      </div>
    </div>
  );
};

export default Success;

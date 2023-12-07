import TextField from "./components/TextField";
import ChildrenImage from "./assets/children.png";
import WaterPf from "./assets/waterpf.png";
import TextArea from "./components/TextArea";
import Select from "./components/Select";
import InfoIcon from "./assets/info.svg";
import GiftBox from "./assets/gift-box 1.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ChildrenEndorsement = () => {
  return (
    <div className="max-w-[380px] w-full bg-[#E7E8F1] rounded-[20px] shrink-0">
      <div className="flex items-center gap-2 p-[8px]">
        <img src={ChildrenImage} alt="" className="w-[98px] h-[68px]" />
        <p className="md:text-[18px] text-[14px] text-[#000] text-left font-semibold">
          With every purchase we give access to free drinking water to{" "}
          <b>5+ children</b>
        </p>
      </div>
      <div className="bg-[#DBFFDE] px-[12px] py-[6px] rounded-b-[20px] text-[14px] text-[#000] text-center font-medium">
        In 2022, we provided safe drinking water to 25+ schools and non-profit
        organisations.
      </div>
    </div>
  );
};

type OrderDetailsProps = {
  register: {};
};

const OrderDetails = ({ register }: OrderDetailsProps) => {
  return (
    <div className="grow w-[350px] mt-4 mx-auto max-w-[380px] w-full md:m-8">
      <div className="bg-[#F8F9FF] rounded-[20px] px-[1rem] py-[1.5rem] ">
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
            Refundable Deposit
          </h4>
          <p className="md:text-[16px] text-[14px] text-[#000]">₹1499</p>
        </div>

        <hr className="bg-[rgba(0, 0, 0, 0.20)] h-px border-1 mt-2" />

        <div className="px-[12px] py-[16px] flex items-center justify-between">
          <h4 className="md:text-[16px] text-[14px] text-[#000] font-semibold">
            Plan Cost
          </h4>
          <p className="md:text-[16px] text-[14px] text-[#000]">₹1499</p>
        </div>

        <hr className="bg-[rgba(0, 0, 0, 0.20)] h-px border-1 mt-2" />
        <div className="px-[12px] py-[16px] flex items-center justify-between">
          <h4 className="md:text-[16px] text-[14px] text-[#000] font-semibold">
            Total
          </h4>
          <p className="md:text-[16px] text-[14px] text-[#000]">₹1698</p>
        </div>

        <p className="md:text-[14px] text-[12px] text-[rgba(0, 0, 0, 0.60)] px-[12px] mt-2">
          *Refundable deposit is payable at the time of delivery
        </p>
      </div>

      <div className="flex items-center gap-2">
        <img src={InfoIcon} />
        <span className="text-[14px] text-[#000]">
          Security deposit of <span className="font-medium">₹1,499</span> will
          be{" "}
          <span className="text-[#00770C] font-semibold">100% refundable</span>
        </span>
      </div>

      <div className="mt-8 flex items-center gap-2 justify-center">
        <img src={GiftBox} />
        <p className="text-[14px] text-[#000] font-semibold">
          Missed adding a referral/coupon code?
        </p>
      </div>

      <div className="mt-8 border text-sm rounded-[16px] block w-full p-4 bg-[#FCFCFC] indent-1 flex items-center justify-between">
        {/* <TextField
          label="Referral Code"
          required={false}
          // error={errors.name?.message}
          placeholder="Enter Coupon Code"
          register={register}
        /> */}
        <input type="text" placeholder="Enter Coupon Code" className="outline-none"/>
        <button>APPLY</button>
      </div>
    </div>
  );
};

type SubmitValues = {
  name: string;
  email: string;
  mobile: string;
  alternativeMobile?: string;
  address: string;
  area: string;
  landmark?: string;
  city: string;
  pincode: number;
  coupon?: string;
};

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    mobile: yup
      .string()
      .matches(/^[6-9]\d{9}$/, {
        message: "Please enter valid number.",
        excludeEmptyString: false,
      })
      .required("Phone Number is required"),
    alternativeMobile: yup.string(),
    address: yup.string().required("Address required"),
    area: yup.string().required("area required"),
    landmark: yup.string(),
    city: yup.string().required("City required"),
    pincode: yup.number().min(6).required("Pincode required"),
    coupon: yup.string(),
  })
  .required();

const AddressPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitValues>({
    resolver: yupResolver(schema),
  });
  //   const onSubmit = (data: SubmitValues) => {
  //     console.log("jeas")
  //     console.log(data);
  //     console.log("error", errors);
  //   };
  const onSubmit = handleSubmit((data) => console.log("data", data));

  console.log("erros", errors);
  return (
    <div className="flex flex-col items-start gap-8 md:flex-row">
      <div className="w-full md:border-r-2 md:border-slate-[#E7E8F1] py-4 px-12 md:pl-20">
        <div className="md:hidden flex items-center justify-center">
          <ChildrenEndorsement />
        </div>
        <div className="">
            <h2 className="md:text-center md:text-[32px] font-semibold py-8">Address Details</h2>
          <div className="grow grid md:grid-cols-2 gap-4 ">
            {/* <Input className="border text-sm rounded-[16px] block w-full p-4 bg-[#FCFCFC] indent-1 border-[#A0A3BD] placeholder-[#A0A3BD]"/> */}
            <TextField
              label="Your Name"
              required={true}
              error={errors.name?.message}
              placeholder="Enter Your Name"
              register={register("name")}
            />
            <TextField
              label="Email Address"
              required={true}
              error={errors.email?.message}
              placeholder="example@gmail.com"
              register={register("email")}
            />

            <TextField
              label="Mobile Number"
              required={true}
              error={errors.mobile?.message}
              placeholder="999999999"
              register={register("mobile")}
            />
            <TextField
              label="Alternate Mobile Number"
              required={false}
              error=""
              placeholder="Name"
              register={register("alternativeMobile")}
            />
            <TextArea
              label="Flat no/House no, Building, Company"
              required={true}
              placeholder="Enter flat/apartment name & number"
              register={register("address")}
              error={errors.address?.message}
            />
            <TextArea
              label="Area, Locality, Road Name"
              required={true}
              placeholder="Enter street and area address"
              register={register("area")}
              error={errors.area?.message}
            />

            <TextField
              label="Landmark"
              required={false}
              error=""
              placeholder="Enter your nearest landmark"
              register={register("landmark")}
            />

            <Select
              label="City/Town"
              required={true}
              error={errors.city?.message}
              placeholder="Choose your City/Town"
              onChange={() => {}}
              register={register("city")}
              options={[
                { label: "India", value: "India" },
                { label: "Australia", value: "Aus" },
                { label: "Canada", value: "Can" },
                { label: "New Zealand", value: "NZ" },
              ]}
            />
            <TextField
              label="Pin Code"
              required={true}
              error={errors.pincode?.message}
              placeholder="Pin Code"
              register={register("pincode")}
            />
          </div>
        </div>
        <button onClick={onSubmit}>Submit</button>
      </div>

      <div className="w-full lg:w-[35%] flex flex-col items-center p-4">
        <div className="hidden md:block">
          <ChildrenEndorsement />
        </div>
        <OrderDetails register={register("coupon")} />
      </div>
    </div>
  );
};

export default AddressPage;

import "./App.css";
// import Success from "./Success";
// import Failed from "./Failed";
import AddressPage from "./AddressPage";
import Stepper from "./Stepper";

function App() {

  return (
    <>
      <div className="">
        <div className="border-b-2 border-[#E7E8F1]">
          <Stepper />
        </div>
        <AddressPage />

        {/* <Success />
        <Failed /> */}
      </div>
    </>
  );
}

export default App;

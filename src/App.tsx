import CustomDownPayment from './components/CustomDownPayment/CustomDownPayment.tsx';
import FormInput from './components/FormInput.tsx';

function App() {
  return (
    <>
      {/* <div className="max-w-sm mx-auto">
        <select
          placeholder="Input Total Price"
          className="border-2 border-slate-700 py-[0.5em] px-[1em] rounded-md "
        >
          <option disabled>Year Model</option>
          <option>30-70</option>
          <option>Custom Down</option>
        </select> */}
      <FormInput />
      <CustomDownPayment />
      {/* </div> */}
    </>
  );
}

export default App;

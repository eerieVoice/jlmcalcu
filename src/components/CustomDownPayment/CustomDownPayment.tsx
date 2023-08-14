import { useState } from 'react';
import CustomDownPaymentOutput from './CustomDownPaymentOutput';
const CustomDownPayment = () => {
  const options = [
    { value: 0.0125 * 12, text: '2018 - 2023' },
    { value: 0.0128 * 12, text: '2013 - 2017' },
    { value: 0.015 * 12, text: '2008 - 2012' },
  ];
  const [enteredTotalPrice, setEnteredTotalPrice] = useState<string>('');
  const [enteredDownPayment, setEnteredDownPaymente] = useState<string>('');
  const [selected, setSelected] = useState<number>(options[1].value);
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const num = Number(e.target.value);
    setSelected(num);
  };
  const [onSaveValue, setOnSaveValue] = useState({
    totalPrice: '',
    select: 0,
    downPayment: '',
  });
  const totalPrice = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setEnteredTotalPrice(value);
  };
  const downPayment = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setEnteredDownPaymente(value);
  };
  const formHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const estimatedValue = {
      totalPrice: enteredTotalPrice,
      select: selected,
      downPayment: enteredDownPayment,
    };
    setOnSaveValue(estimatedValue);
    console.log(estimatedValue);
    setEnteredTotalPrice('');
    setEnteredDownPaymente('');
    setSelected(options[1].value);
  };
  return (
    <div className="max-w-sm mx-auto text-lg">
      <form onSubmit={formHandler} className="flex flex-col gap-[1em]">
        <input
          type="number"
          placeholder="Input Total Price"
          className="border-2 border-slate-700 py-[0.5em] px-[1em] rounded-md"
          onChange={totalPrice}
          value={enteredTotalPrice}
        />
        <input
          type="number"
          placeholder="Input Down Payment"
          className="border-2 border-slate-700 py-[0.5em] px-[1em] rounded-md"
          onChange={downPayment}
          value={enteredDownPayment}
        />
        <select
          className="border-2 border-slate-700 py-[0.5em] px-[1em] rounded-md"
          value={selected}
          onChange={handleSelect}
          required
        >
          <option disabled>Year Model</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <button className="bg-red-600 py-[0.5em] px-[1em] font-bold text-white rounded-md w-max my-[0.5em]">
          Calculate
        </button>
      </form>
      <CustomDownPaymentOutput onSaveValue={onSaveValue} />
    </div>
  );
};

export default CustomDownPayment;

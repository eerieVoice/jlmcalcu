import { useState } from 'react';
import FormOutput from './FormOutput';
const FormInput = () => {
  const options = [
    { value: 0.0125 * 12, text: '2018 - 2023' },
    { value: 0.0128 * 12, text: '2013 - 2017' },
    { value: 0.015 * 12, text: '2008 - 2012' },
  ];

  const [enteredTotalPrice, setEnteredTotalPrice] = useState<string>('');
  const [selected, setSelected] = useState<number>(options[1].value);
  const [onSaveValue, setOnSaveValue] = useState({
    totalPrice: '',
    select: 0,
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setEnteredTotalPrice(value);
  };

  const formHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const estimatedValue = {
      totalPrice: enteredTotalPrice,
      select: selected,
    };
    setOnSaveValue(estimatedValue);
    console.log(estimatedValue);
    setEnteredTotalPrice('');
    setSelected(options[1].value);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const num = Number(e.target.value);
    setSelected(num);
  };

  return (
    <>
      <div className="max-w-sm mx-auto text-lg min-h-screen">
        <form onSubmit={formHandler} className="flex flex-col gap-[1em]">
          <div className="flex flex-col">
            <label className="uppercase font-semibold">Total Price</label>
            <input
              type="number"
              placeholder="Type Amount"
              className="border-2 border-slate-700 py-[0.5em] px-[1em] rounded-md"
              onChange={inputHandler}
              value={enteredTotalPrice}
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase font-semibold">Select Year</label>
            <select
              className="border-2 border-slate-700 py-[0.5em] px-[1em] rounded-md"
              value={selected}
              onChange={handleSelect}
              required
            >
              <option disabled>Year Model</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          <button className="bg-red-600 py-[0.5em] px-[1em] font-bold text-white rounded-md w-max my-[0.5em]">
            Calculate
          </button>
        </form>
        <FormOutput onSaveValue={onSaveValue} />
      </div>
    </>
  );
};

export default FormInput;

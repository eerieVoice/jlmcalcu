import Output from './Output';

interface FormOutputProps {
  onSaveValue: {
    totalPrice: string;
    select: number;
  };
}

const FormOutput: React.FC<FormOutputProps> = ({ onSaveValue }) => {
  const { totalPrice, select } = onSaveValue;
  const thirty = Number(totalPrice) * 0.3;
  const seventy = Number(totalPrice) * 0.7;
  const oneyear: number = Number(
    ((seventy * select + seventy) / 12).toFixed(2)
  );
  const twoyear = Number(((seventy * (select * 2) + seventy) / 24).toFixed(2));
  const threeyear = Number(
    ((seventy * (select * 3) + seventy) / 36).toFixed(2)
  );
  const fouryear = Number(
    ((seventy * (0.015 * 12 * 4) + seventy) / 48).toFixed(2)
  );
  const processingFee = seventy * 0.07;

  const amount = [
    {
      value: Number(totalPrice),
      text: 'Total Price:',
    },
    {
      value: Number(thirty),
      text: '30% Down Payment',
    },
    {
      value: Number(seventy),
      text: '70% to be Financed:',
    },
    {
      value: Number(oneyear),
      text: '1 year Installment:',
    },
    {
      value: Number(twoyear),
      text: '2 year Installment:',
    },
    {
      value: Number(threeyear),
      text: '3 year Installment:',
    },
    {
      value: Number(fouryear),
      text: '4 year Installment:',
    },
    {
      value: Number(processingFee),
      text: 'Processing Fee (7%):',
    },
  ];
  return (
    <div className="rouned border-2 border-slate-700 p-[1em] w-full">
      {amount.map((amount, index) => (
        <Output key={index} amount={amount.value} text={amount.text} />
      ))}
    </div>
  );
};

export default FormOutput;

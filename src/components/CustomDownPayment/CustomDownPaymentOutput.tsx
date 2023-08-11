import Output from '../Output';

interface FormOutputProps {
  onSaveValue: {
    totalPrice: string;
    downPayment: string;
    select: number;
  };
}

const CustomDownPaymentOutput: React.FC<FormOutputProps> = ({
  onSaveValue,
}) => {
  const { totalPrice, select, downPayment } = onSaveValue;
  const downPercentage = (Number(downPayment) / Number(totalPrice)) * 100;
  const tobeFinanced = Number(totalPrice) - Number(downPayment);
  const tobeFinancedPercentage = 100 - downPercentage;
  const downPay = Number(downPayment);
  const oneyear: number = Number(
    ((tobeFinanced * select + tobeFinanced) / 12).toFixed(2)
  );
  const twoyear = Number(
    ((tobeFinanced * (select * 2) + tobeFinanced) / 24).toFixed(2)
  );
  const threeyear = Number(
    ((tobeFinanced * (select * 3) + tobeFinanced) / 36).toFixed(2)
  );
  const fouryear = Number(
    ((tobeFinanced * (0.015 * 12 * 4) + tobeFinanced) / 48).toFixed(2)
  );
  const processingFee = tobeFinanced * 0.07;

  const amount = [
    {
      value: Number(totalPrice),
      text: 'Total Price:',
    },
    {
      value: Number(downPay),
      text: `${downPercentage.toFixed(2)}% Down Payment:`,
    },
    {
      value: Number(tobeFinanced),
      text: `${tobeFinancedPercentage.toFixed(2)}% to be Financed:`,
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

export default CustomDownPaymentOutput;

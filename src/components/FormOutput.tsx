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

  const addComma = (num: number): string => {
    return num.toLocaleString('en-US');
  };

  return (
    <div className="rouned border-2 border-slate-700 p-[1em] w-full">
      <p>
        Total Price:
        <br /> <span className="font-bold">{addComma(Number(totalPrice))}</span>
      </p>
      <p>
        30% Downpayment:
        <br /> <span className="font-bold"> {addComma(thirty)}</span>
      </p>
      <p>
        70% Financing Amount:
        <br /> <span className="font-bold"> {addComma(seventy)}</span>
      </p>
      <p>
        1 year Installment:
        <br /> <span className="font-bold">{addComma(oneyear)}</span>
      </p>
      <p>
        2 year Installment:
        <br /> <span className="font-bold"> {addComma(twoyear)}</span>
      </p>
      <p>
        3 year Installment:
        <br /> <span className="font-bold"> {addComma(threeyear)}</span>
      </p>
      <p>
        4 year Installment:
        <br /> <span className="font-bold"> {addComma(fouryear)}</span>
      </p>
      <p>
        Processing Fee (7%):
        <br /> <span className="font-bold"> {addComma(processingFee)}</span>
      </p>
    </div>
  );
};

export default FormOutput;

const Output = ({ amount, text }: { amount: number; text: string }) => {
  const addComma = (num: number): string => {
    return num.toLocaleString('en-US');
  };
  return (
    <p>
      {text}
      <br /> <span className="font-bold">{addComma(amount)}</span>
    </p>
  );
};

export default Output;

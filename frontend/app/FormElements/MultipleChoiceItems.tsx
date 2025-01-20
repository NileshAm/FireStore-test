const MultipleChoiceItems = ({
  id,
  value,
  defaultChecked = false,
}: {
  id: string;
  value: string;
  defaultChecked?: boolean;
}) => {
  return (
    <div className="flex flex-wrap">
      <input
        type="radio"
        name={id}
        id={id}
        value={value}
        defaultChecked={defaultChecked}
        className=""
      />
      <p className="text-slate-300 ms-2">{value}</p>
    </div>
  );
};

export default MultipleChoiceItems;

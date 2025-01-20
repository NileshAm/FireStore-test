import Card from "./Card";
import CardTitle from "./CardTitle";

const Input = ({
  id,
  name,
  description,
  placeholder,
  rows = 5,
  required = false,
}: {
  id: string;
  name: string;
  description: string;
  placeholder: string;
  rows?: number;
  required?: boolean;
}) => {
  return (
    <Card id={id}>
      <CardTitle name={name} description={description} required={required} />
      <textarea
        name={id}
        id={id}
        placeholder={placeholder}
        rows={rows}
        className="w-full my-2 py-1 px-2 text-slate-800 rounded-lg"
      />
    </Card>
  );
};

export default Input;

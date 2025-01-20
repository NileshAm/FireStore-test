import Card from "./Card";
import CardTitle from "./CardTitle";

const TextInput = ({
  id,
  name,
  description,
  placeholder,
  type,
  required = false,
}: {
  id: string;
  name: string;
  description: string;
  placeholder?: string;
  type: string;
  required?: boolean;
}) => {
  return (
    <Card id={id}>
      <CardTitle name={name} description={description} required={required} />
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className="w-full my-2 py-1 px-2 text-slate-800 rounded-lg"
      />
    </Card>
  );
};

export default TextInput;

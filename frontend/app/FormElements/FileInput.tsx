import Card from "./Card";
import CardTitle from "./CardTitle";

const FileInput = ({
  id,
  name,
  description,
  accept,
  required = false,
}: {
  id: string;
  name: string;
  description: string;
  accept?: string[];
  required?: boolean;
}) => {
  return (
    <Card id={id}>
      <CardTitle name={name} description={description} required={required} />
      <input
        type={"file"}
        name={id}
        id={id}
        accept={accept?.toString()}
        className="w-full my-2 py-1 px-2 text-slate-800 rounded-lg"
      />
    </Card>
  );
};

export default FileInput;

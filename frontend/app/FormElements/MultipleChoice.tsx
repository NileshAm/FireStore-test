import { ReactNode } from "react";
import CardTitle from "./CardTitle";
import Card from "./Card";

const MultipleChoice = ({
  id,
  name,
  description,
  children,
  required,
}: {
  id:string
  name: string;
  description: string;
  children: ReactNode;
  required?: boolean;
}) => {
  return (
    <Card id={id}>
      <CardTitle name={name} description={description} required={required} />
      <div className="w-full my-2 py-1 px-2 text-slate-800 rounded-lg">
        {children}
      </div>
    </Card>
  );
};

export default MultipleChoice;

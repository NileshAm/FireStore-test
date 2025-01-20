import { ReactNode } from "react";
import CardTitle from "./CardTitle";
import Card from "./Card";

const CheckBox = ({
  name,
  id,
  description,
  children,
  required = false,
  incomplete = false,
}: {
  name: string;
  id: string;
  description: string;
  children: ReactNode;
  required?: boolean;
  incomplete?: boolean;
}) => {
  return (
    <Card id={id} incomplete={incomplete}>
      <CardTitle name={name} description={description} required={required} />
      <div className="w-full my-2 py-1 px-2 text-slate-800 rounded-lg">
        {children}
      </div>
    </Card>
  );
};

export default CheckBox;

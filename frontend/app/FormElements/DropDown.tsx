import { ReactNode } from "react";
import CardTitle from "./CardTitle";
import Card from "./Card";

const DropDown = ({
  id,
  name,
  description,
  children,
  required = false,
}: {
  id: string;
  name: string;
  description: string;
  children: ReactNode;
  required?: boolean;
}) => {
  return (
    <Card id={id}>
      <CardTitle name={name} description={description} required={required} />
      <select
        name={id}
        id={id}
        className="w-full my-2 py-1 px-2 text-slate-800 rounded-lg"
      >
        <option value="" hidden>
          --select--
        </option>
        {children}
      </select>
    </Card>
  );
};

export default DropDown;

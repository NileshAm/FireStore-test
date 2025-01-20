const CardTitle = ({
  name,
  description,
  required = false,
}: {
  name: string;
  description: string;
  required?: boolean;
}) => {
  return (
    <>
      <div className="flex">
        <p className="text-3xl">{name}</p>
        {required && <p className="text-3xl ps-2 text-red-500">*</p>}
      </div>
      <p className="text-sm text-slate-400">{description}</p>
    </>
  );
};

export default CardTitle;

import Image from "next/image";

const Title = ({
  title,
  description,
  src
}: {
  title: string;
  description: string;
  src:string
}) => {
  return (
    <div className="bg-slate-700 rounded-lg w-full py-3 px-5 my-1">
      <p className="text-4xl">{title}</p>
      <p className="text-lg text-slate-400">{description}</p>
      <Image
        unoptimized
        src={
          src
        }
        alt="Poster Image"
        width={1000}
        height={500}
        className="rounded-lg"
      />
    </div>
  );
};

export default Title;

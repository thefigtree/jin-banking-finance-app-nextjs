const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-24 lg:text-30 font-semibold text-gray-900">
        {title}
        {type === "greeting" && (
          <span className="text-green-400">&nbsp;{user}</span>
        )}
      </h1>

      <p>{subtext}</p>
    </div>
  );
};
export default HeaderBox;

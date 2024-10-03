const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === "greeting" && (
          <span className="text-green-400">&nbsp;{user}</span>
        )}
      </h1>
    </div>
  );
};
export default HeaderBox;

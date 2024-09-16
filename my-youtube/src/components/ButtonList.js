import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Live",
    "Gaming",
    "Song",
    "Soccer",
    "Cricket",
    "Cooking",
    "Cricket",
    "Movies",
    "Football",
    "News",
  ];
  return (
    <div className="flex">
      {list.map((item,index) => {
        return <Button key={index} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;

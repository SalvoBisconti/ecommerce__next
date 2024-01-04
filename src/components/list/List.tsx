const List = (props: {
  itemName: string[];
  flexOption: string;
  fontOption: string;
}) => {
  const { itemName, flexOption, fontOption } = props;
  return (
    <ul className={`md:text-right ${flexOption} ${fontOption}`}>
      {itemName.length > 0 &&
        itemName.map((element, index) => <li key={index}>{element}</li>)}
    </ul>
  );
};

export default List;

const List = (props: { itemName: string[]; flexOption: string }) => {
  const { itemName, flexOption } = props;
  return (
    <ul className={`md:text-right ${flexOption}`}>
      {itemName.length > 0 &&
        itemName.map((element, index) => <li key={index}>{element}</li>)}
    </ul>
  );
};

export default List;

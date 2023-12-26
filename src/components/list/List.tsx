const List = (props: { itemName: string[] }) => {
  const { itemName } = props;
  return (
    <ul className="md:text-right">
      {itemName.length > 0 && itemName.map((element) => <li>{element}</li>)}
    </ul>
  );
};

export default List;

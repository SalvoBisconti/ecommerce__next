const Line = (props: { width: string; selfCenter: string }) => {
  const { width, selfCenter } = props;
  return (
    <hr className={`bg-stronGray h-[1px] ${width} ${selfCenter} border-0`} />
  );
};

export default Line;

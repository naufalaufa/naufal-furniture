const ListTextJumbotron = ({
  name,
  className,
}: {
  name: string;
  className: string;
}) => {
  return (
    <>
      <p className={className}>{name}</p>
    </>
  );
};

export default ListTextJumbotron;

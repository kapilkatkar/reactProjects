// eslint-disable-next-line react/prop-types
const HeaderCompo = ({ onSearch }) => {
  const onInputSearch = (e) => {
    const searchValue = e.target.value;
    onSearch(searchValue);
  };
  return (
    <div>
      <input
        type="search"
        placeholder="Search here..."
        onChange={onInputSearch}
      />
    </div>
  );
};
export default HeaderCompo;

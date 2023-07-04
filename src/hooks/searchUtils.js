export const handleInputChange = (event, setSearchTerm, onSearch) => {
  const value = event.target.value;
  setSearchTerm(value);
  onSearch(value);
};

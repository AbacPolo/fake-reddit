import "./SearchBar.css";

export function SearchBar(props) {
  const { handleSubmit, searchInput, setSearchInput } = props;
  return (
    <form className="SearchInputForm_Container" onSubmit={handleSubmit}>
      <div className="SearchInput_Container">
        <input
          className="SearchInput"
          placeholder="Search on Reddit"
          id="searchInput"
          value={searchInput}
          onChange={(e) => setSearchInput(e.currentTarget.value)}
          type="text"
        ></input>
      </div>
    </form>
  );
}

import css from "./SearchBox.module.scss";

const SearchBox = ({ value, onFind }) => {
  return (
    <div className={css.search}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onFind(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;

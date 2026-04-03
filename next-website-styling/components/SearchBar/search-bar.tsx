import { useState } from "react";
import styles from "./search-bar.module.css";
import FormButton from "../Button/Button";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here
    console.log("Searching for:", query);
    setQuery("");
  };

  return (
    <div className={styles.searchBarContainer}>
      <form onSubmit={handleSearch}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search Articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <FormButton version="form" type="submit">
          Search
        </FormButton>
      </form>
    </div>
  );
};
export default SearchBar;

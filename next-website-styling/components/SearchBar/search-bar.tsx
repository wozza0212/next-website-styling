import { useState } from "react";
import styles from "./search-bar.module.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here
    console.log("Searching for:", query);
    setQuery("");
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search Articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default SearchBar;

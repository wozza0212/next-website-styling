"use client";
import SearchBar from "@/components/SearchBar/search-bar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <h1> This is the Home Page</h1>
        <SearchBar />
      </main>
    </div>
  );
}

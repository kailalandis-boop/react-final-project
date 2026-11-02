"use client"
import { useState } from "react"

function Nav() {
    const [search, setSearch] = useState("");

  return (
    <nav className="nav">
        <div className="logo">
            <img className="logo__img"
            src="/fes-logo.png"
            alt="Flix logo"
            />
            <div className="logo__title">
            <span>Simplified </span>Flix
            </div>
        </div>
        <form onSubmit={handleSearch}
        className="search-form" id="searchForm">
            <div className="search-form__group">
                <label htmlFor="searchInput"></label>
                <input 
                className="search-form__input"
                type="text"
                id="searchInput"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search movies..."
                required
                />
                <button 
                className="search-form__button" 
                type="submit" 
                aria-label="Search">
                    <svg className="search-form__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                        <circle cx="11" cy="11" r="7"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>
            </div>
        </form>
    </nav>
  );
}

export default Nav;
import * as React from "react";
import {useEffect} from "react";

interface SearchBarProps {
    placeholder?: string;
    onQuery: (query: string) => void;
}

export const SearchBar =
    ({placeholder = 'Search...', onQuery}: SearchBarProps) => {
        const [query, setQuery] = React.useState('');
        useEffect(() => {
            const timeoutId = setTimeout(() => {
                onQuery(query);
            }, 2000);
            return () => {
                clearTimeout(timeoutId);
            }
        }, [query, onQuery]);

        const handleSearch = () => {
            onQuery(query);
            setQuery('');
        }

        const handleKeyDown =
            (event: React.KeyboardEvent<HTMLInputElement>) => {
                if (event.key === 'Enter') handleSearch();
            }

        return (
            <div className="search-container">
                <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    onKeyDown={handleKeyDown}
                    type="text"
                    placeholder={placeholder}/>
                <button onClick={handleSearch}>Search</button>
            </div>
        )
    }
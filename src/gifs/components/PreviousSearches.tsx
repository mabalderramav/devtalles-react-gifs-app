import type {FC} from "react";

interface PreviousSearchesProps {
    previousSearches: string[];
    onLabelClicked: (term: string) => void;
}

export const PreviousSearches: FC<PreviousSearchesProps> = ({previousSearches, onLabelClicked}) => {
    return (
        <div className="previous-searches">
            <h2>Previous searches</h2>
            <ul className="previous-searches-list">
                {previousSearches.map((term) => (
                    <li key={term}>
                        <button type="button" onClick={() => onLabelClicked(term)}>
                            {term}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
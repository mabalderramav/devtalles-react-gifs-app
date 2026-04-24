import {CustomHeader} from "./shared/components/CustomHeader";
import {SearchBar} from "./shared/components/SearchBar";
import {PreviousSearches} from "./gifs/components/PreviousSearches";
import {GifList} from "./gifs/components/GifList";
import {useState} from "react";
import {getGifsByQuery} from "./gifs/actions/get-gifs-by-query.action";
import type {Gif} from "./gifs/interfaces/gif.interface.ts";

export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);

    const handleTermClicked = (term: string) => {
        console.log(term);
    }

    const handleSearch = async (query: string = '') => {
        const trimmedQuery = query.trim().toLowerCase();
        if (trimmedQuery.length === 0) return;
        if (previousTerms.includes(trimmedQuery)) return;
        setPreviousTerms([trimmedQuery, ...previousTerms].slice(0, 7));

        const gifs = await getGifsByQuery(trimmedQuery);
        setGifs(gifs);
    }

    return (
        <>
            {/* Header */}
            <CustomHeader title="Search of Gifs" description="Search for your favorite gifs"/>
            {/* Search */}
            <SearchBar placeholder="Search for gifs!!!" onQuery={handleSearch}/>
            {/*    Preview searched gifs    */}
            <PreviousSearches previousSearches={previousTerms} onLabelClicked={handleTermClicked}/>
            {/*    Gifs   */}
            <GifList gifs={gifs}/>
        </>
    )
}
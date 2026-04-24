import {type Gif} from "../interfaces/gif.interface.ts";
import type {FC} from "react";

interface GifListProps {
    gifs: Gif[];
}

export const GifList: FC<GifListProps> = ({gifs}) => {
    return (
        <div className="gifs-container">
            {
                gifs.map((gif) => (
                    <div className="gif-card" key={gif.id}>
                        <img src={gif.url} alt={gif.title}/>
                        <h3>{gif.title}</h3>
                        <p>
                            {gif.width} x {gif.height} (1.5MB)
                        </p>
                    </div>
                ))
            }
        </div>
    )
}
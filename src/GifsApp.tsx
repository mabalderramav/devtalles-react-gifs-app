import {mockGifs} from "./mock-data/gifs.mock.ts";

export const GifsApp = () => {
    return (
        <>
            {/* Header */}
            <div className="content-center">
                <h1>Search of Gifs</h1>
                <p>Search for your favorite gifs</p>
            </div>
            {/* Search */}
            <div className="search-container">
                <input type="text" placeholder="Search for gifs..."/>
                <button>Search</button>
            </div>

            {/*    Preview searched gifs    */}
            <div className="previous-searches">
                <h2>Previous searches</h2>
                <ul className="previous-searches-list">
                    <li>Goku</li>
                    <li>Vegeta</li>
                    <li>Kriling</li>
                    <li>Gojan</li>
                </ul>
            </div>

            {/*    Gifs   */}
            <div className="gifs-container">
                {
                    mockGifs.map((gif) => (
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
        </>
    )
}
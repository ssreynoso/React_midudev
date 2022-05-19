import React   from "react";
import getGifs from "../../Services/getGifs";
import GifItem from "../GifItem";
import Loading from "../GifLoading/";

function GifList({ params }) {
    const keyword = params.keyword;

    const [loading, setLoading] = React.useState(false);
    const [gifs, setGifs] = React.useState([]);

    React.useEffect(() => {
        setLoading(true);
        getGifs(keyword).then((gifs) => {
            setGifs(gifs);
            setLoading(false);
        });
    }, [keyword]);

    if (loading) return <Loading />;

    return (
        <div className="GifList">
            {gifs.map(({ title, id, url }) => (
                <GifItem 
                    key   = { id }
                    id    = { id } 
                    title = { title } 
                    url   = { url }
                />
            ))}
        </div>
    );
}

export default GifList;

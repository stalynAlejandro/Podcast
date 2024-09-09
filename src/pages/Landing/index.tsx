import { useNavigate } from "react-router-dom";
import { fetchPodcasts } from "../../services/indext";
import { Filter, PodcastCard } from "../../components";
import { useEffect, useState } from "react";
import { Podcast, PodcastEntry } from "../../../types";
import "./style.css"

export const Landing = () => {
    const [pods, setPods] = useState<Podcast>()

    const getPodcast = async () => {
        const podcast = await fetchPodcasts();
        setPods(podcast)
    }

    useEffect(() => {
        getPodcast()
    }, [])


    return (
        <div className="landing">
            <div className="filter">
                <Filter count={pods?.feed?.entry?.length || 0} />
            </div>
            <div className="grid-podcast">
                {pods?.feed?.entry?.map((podcast: PodcastEntry) => (
                    <PodcastCard
                        key={podcast?.id?.attributes["im:id"] || ''}
                        podId={podcast?.id?.attributes["im:id"] || ''}
                        title={podcast["im:name"]?.label || ''}
                        author={podcast["im:artist"]?.label || ''}
                        image={podcast["im:image"][0]?.label || ''}
                    />
                ))}
            </div>
        </div>
    );
};

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPodcastDetail } from "../../services/indext";

export const Podcast = () => {
    const navigate = useNavigate();
    const { podcastId } = useParams();
    const [pods, setPods] = useState<any>()

    const getPodcast = async () => {
        const podcast = await fetchPodcastDetail(podcastId);
        setPods(podcast)
    }

    useEffect(() => {
        getPodcast()
    }, [])

    return (
        <div>
            <p>Podcast Container {podcastId}</p>
        </div>
    );
};

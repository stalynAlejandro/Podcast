import axios from "axios";
import { type Podcast } from "../../types"

const URL = 'https://itunes.apple.com/';

export const fetchPodcasts = async (): Promise<Podcast> => {
    const { data } = await axios.get(
        `${URL}us/rss/toppodcasts/limit=100/genre=1310/json`
    );
    return data as Podcast;
};

export const fetchPodcastDetail = async (id = ''): Promise<any> => {
    const { data } = await axios.get(
        `${URL}lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
    );
    return data;
};


import { useEffect } from "react";
import { isSameDay } from "../utils";
import { loadState } from "../store/async";
import { setPodcast } from "../store/redux/podcast";
import { fetchPodcasts } from "../services/indext";
import { useAppDispatch } from "../store/redux";
import _ from "lodash";

export const useFetchPodcats = () => {
    const dispatch = useAppDispatch()

    const getPodcast = async () => {
        const today = new Date()
        const localStorage = await loadState();
        if (_.isEmpty(localStorage) || !isSameDay(new Date(localStorage?.podcasts?.lastModified), today)) {
            await fetchPodcasts().then((p) => {
                dispatch(setPodcast({ pods: p, lastModified: today.toString() }))
            });
        } else {
            dispatch(setPodcast({ pods: localStorage?.podcasts?.pods, lastModified: localStorage?.podcasts?.lastModified }))
        }
    }

    useEffect(() => {
        getPodcast()
    }, [])

}

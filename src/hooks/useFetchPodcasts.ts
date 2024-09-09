import { Podcast } from "../../types";
import { isSameDay } from "../utils";
import { setPodcast } from "../store/redux/podcast";
import { useSelector } from "react-redux";
import { fetchPodcasts } from "../services/indext";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../store/redux";

export const useFetchPodcats = (): Podcast | undefined => {
    const dispatch = useAppDispatch()
    const [pod, setPod] = useState<Podcast>()
    const { pods, lastModified } = useSelector((state: RootState) => state.podcasts);

    const getPodcast = async () => {
        const today = new Date()
        if (isSameDay(new Date(lastModified as string), today)) setPod(pods)
        else {
            await fetchPodcasts().then((p) => {
                dispatch(setPodcast({ pods: p, lastModified: today.toString() }))
                setPod(p)
            });
        }
    }

    useEffect(() => {
        getPodcast()
    }, [])

    return pod
}

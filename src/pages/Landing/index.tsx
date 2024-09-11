import { Filter, PodcastCard } from "../../components";
import { PodcastEntry } from "../../../types";
import "./style.css"
import { useSelector } from "react-redux";
import { RootState } from "../../store/redux";
import { useState } from "react";

export const Landing = () => {
    const pods = useSelector((state: RootState) => state.podcasts.pods)
    const [filterText, setFilterText] = useState<string>('');

    const filteredPods = pods?.feed?.entry?.filter((podcast: PodcastEntry) => {
        const titleMatch = podcast["im:name"]?.label.toLowerCase().includes(filterText.toLowerCase());
        const authorMatch = podcast["im:artist"]?.label.toLowerCase().includes(filterText.toLowerCase());
        return titleMatch || authorMatch;
    });

    return (
        <div className="landing">
            <div className="filter">
                <Filter count={filteredPods?.length || 0} setFilterText={setFilterText} />
            </div>
            <div className="grid-podcast">
                {filteredPods?.map((podcast: PodcastEntry) => (
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

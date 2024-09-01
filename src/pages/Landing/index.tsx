import { useNavigate } from "react-router-dom";
import { Filter, PodcastCard } from "../../components";
import "./style.css"

const podcastData = [
    { id: 1, title: "ALL SONGS CONSIDERED", author: "NPR", image: "all-songs-considered.jpg" },
    { id: 2, title: "KEXP SONG OF THE DAY", author: "KEXP", image: "kexp-song-of-the-day.jpg" },
    { id: 3, title: "SONG EXPLODER", author: "Song Exploder", image: "song-exploder.jpg" },
    { id: 4, title: "MUSIC ON FIRE PODCAST", author: "georges dagher", image: "music-on-fire.jpg" },
    { id: 5, title: "SOUND OPINIONS", author: "WBEZ Chicago", image: "sound-opinions.jpg" },
    { id: 6, title: "TINY DESK CONCERTS - VIDEO", author: "NPR", image: "tiny-desk-concerts.jpg" },
    { id: 7, title: "CLUBLIFE BY TIËSTO", author: "Tiësto", image: "clublife-by-tiesto.jpg" },
    { id: 8, title: "ABOVE & BEYOND: GROUP THERAPY", author: "Above & Beyond", image: "above-and-beyond.jpg" },
];

export const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="landing">
            <div className="filter">
                <Filter />
            </div>
            <div className="grid-podcast">
                {podcastData.map((podcast) => (
                    <PodcastCard
                        key={podcast?.id}
                        title={podcast?.title}
                        author={podcast?.author}
                        image={podcast?.image}
                    />
                ))}
            </div>
        </div>
    );
};

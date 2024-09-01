import "./style.css";

interface IPodcastCard {
    title: string;
    author: string;
    image: string;
}

export const PodcastCard = (props: IPodcastCard) => {
    return (
        <div className="podcast-card">
            <div className="podcast-image">
                <img src="src/assets/blue_wall.jpg" alt="Podcast logo" />
            </div>
            <div className="podcast-title">ALL SONGS CONSIDERED</div>
            <div className="podcast-author">Author: NPR</div>
        </div>
    );
};

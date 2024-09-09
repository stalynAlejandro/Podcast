import { useNavigate } from "react-router-dom";
import "./style.css";

interface IPodcastCard {
    podId: string;
    title: string;
    author: string;
    image: string;
}

export const PodcastCard = (props: IPodcastCard) => {
    const { podId, title, author, image } = props
    const navigate = useNavigate();

    return (
        <div onClickCapture={() => navigate(`podcast/${podId}`)} className="podcast-card">
            <div className="podcast-image">
                <img src={image} alt="Podcast logo" />
            </div>
            <div className="podcast-title">{title}</div>
            <div className="podcast-author">Author: {author}</div>
        </div>
    );
};

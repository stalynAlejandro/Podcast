import { useState } from "react";
import "./style.css";

export const Filter = () => {
    const [num] = useState<number>(100)
    const [txt, setText] = useState<string>("")


    return (
        <div className="filter">
            <div className="count">{num}</div>
            <input className="input-text" type="text" placeholder={'Filter podcasts...'} onChange={(e) => setText(e.target.value)} />
        </div>
    );
};

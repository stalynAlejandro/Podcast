import { useState } from "react";
import "./style.css";

interface IFilter {
    count: number
}

export const Filter = (props: IFilter) => {
    const { count } = props;
    const [txt, setText] = useState<string>("")

    return (
        <div className="filter">
            <div className="count">{count}</div>
            <input className="input-text" type="text" placeholder={'Filter podcasts...'} onChange={(e) => setText(e.target.value)} />
        </div>
    );
};

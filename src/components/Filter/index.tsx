import "./style.css";

interface IFilter {
    count: number
    setFilterText: (txt: string) => void;
}

export const Filter = (props: IFilter) => {
    const { count, setFilterText } = props;

    return (
        <div className="filter">
            <div className="count">{count}</div>
            <input className="input-text" type="text" placeholder={'Filter podcasts...'} onChange={(e) => setFilterText(e.target.value)} />
        </div>
    );
};

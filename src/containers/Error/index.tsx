import { useRouteError } from "react-router-dom";

export const Error = () => {
    const error = useRouteError() as { statusText: string; message: string };

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{error?.statusText || error?.message}</p>
        </div>
    );
};

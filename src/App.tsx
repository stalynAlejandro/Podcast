import { router } from "./routes";
import { Provider } from "react-redux";
import { useAppState } from "./hooks/useAppState";
import { RouterProvider } from "react-router-dom";

function App() {
    const store = useAppState();

    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider >
    )
}

export default App;

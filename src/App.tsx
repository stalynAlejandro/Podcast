import { router } from "./routes";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { emptyStore } from "./store/redux";
import _ from "lodash";
import { saveState } from "./store/async";

function App() {
    const store = emptyStore
    store.subscribe(() => saveState(store.getState()));

    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider >
    )
}

export default App;

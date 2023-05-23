import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import "./App.css";

//pages
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

//components
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

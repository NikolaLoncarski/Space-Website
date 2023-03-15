import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import "./scss/index.css";
import Destination from "./Components/Destionation/Destination";
import Crew from "./Components/Crew/Crew";
import Technology from "./Components/Technology/Technology";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Nav />}>
      <Route index element={<Home />} />
      <Route path="destination" element={<Destination />} />
      <Route path="crew" element={<Crew />} />
      <Route path="technology" element={<Technology />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <Nav />
      <main>
        <Home />
      </main> */}
    </div>
  );
}

export default App;

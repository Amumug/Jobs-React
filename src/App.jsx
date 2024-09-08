import Navbar from "./components/Navbar";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Findjobs from "./pages/FindJobs";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route path="/" element={<HomePage />} />
      <Route path="/findjobs" element={<Findjobs />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <RouterProvider router={router} />
        {/* <HomePage/> */}
      </div>
    </>
  );
}

export default App;

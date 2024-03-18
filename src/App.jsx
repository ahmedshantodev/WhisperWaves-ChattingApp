import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import SignUp from "./pages/sign up/SignUp";
import SignIn from "./pages/sing in/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgetPassword from "./pages/forget password/ForgetPassword";

function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Route>
    )
  );

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

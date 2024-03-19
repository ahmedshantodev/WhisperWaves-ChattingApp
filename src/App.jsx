import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/sign up/SignUp";
import SignIn from "./pages/sign in/SignIn";
import ForgetPassword from "./pages/forget password/ForgetPassword";
import Pages from "./pages/Pages";
import Home from "./pages/home/Home";
import Message from "./pages/message/Message";

function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/pages" element={<Pages />}>
          <Route path="home" element={<Home />} />
          <Route path="message" element={<Message />} />
        </Route>
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

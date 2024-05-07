import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/sign up/SignUp";
import SignIn from "./pages/sign in/SignIn";
import ForgetPassword from "./pages/forget password/ForgetPassword";
import Pages from "./pages/Pages";
import Home from "./pages/home/Home";
import Chat from "./pages/chat/Chat";
import Group from "./pages/group/Group";
import Friends from "./pages/friends/Friends";
import Feeds from "./pages/feeds/Feeds";
import AccountSetting from "./pages/account setting/AccountSetting";

function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/pages" element={<Pages />}>
          <Route path="home" element={<Home />} />
          <Route path="chat" element={<Chat />} />
          <Route path="group" element={<Group />} />
          <Route path="friends" element={<Friends />} />
          <Route path="feeds" element={<Feeds />} />
          <Route path="account-setting" element={<AccountSetting />} />
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

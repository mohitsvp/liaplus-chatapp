import { Navigate, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import { useAuthStore } from "./store/useAuthStore"
import { useEffect } from "react"
import { Toaster } from "react-hot-toast"

function App() {

  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();

  console.log("sidfsdf", onlineUsers);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div>
        Loading....
      </div>
    )
  }

  return (
    <>
      <Toaster/>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <Homepage /> : <Navigate to="/login"/>} />
        <Route path="/register" element={!authUser ? <Signup /> : <Navigate to="/"/>} />
        <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/"/>} />
        <Route path="/profile" element={authUser ? <Profile /> : <Navigate to="/login"/>} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>

  )
}

export default App

import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { SlSettings } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { Button } from "../ui/Button";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
              </div>
              <h1 className="text-lg font-bold">Liaplus Chat</h1>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors flex items-center border rounded-md p-2
              
              `}
            >
                <SlSettings/>
                <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2 flex items-center border rounded-md p-2`}>
                    <FaUser/>
                    <span className="hidden sm:inline">Profile</span>
                </Link>

                <Button
                    text="Logout"
                    icon={<LuLogOut/>}
                    onClick={logout}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
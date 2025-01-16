import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  useUser,
  SignIn,
  UserButton,
} from "@clerk/clerk-react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { AboutUs } from "@/pages/aboutus";

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/sign-in" replace />; // Redirect to login if not authenticated
  }

  return children; // Render the protected component
};

function Nav() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);
  // Handle overlay click to close the SignIn modal
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
    }
  };

  return (
    <>
     <link
        href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Playwrite+AU+SA:wght@100..400&display=swap"
        rel="stylesheet"
      />
      <nav className="bg-blue-400 text-black">
        <div className="h-10vh flex justify-between items-center px-4 py-4 md:px-20 md:py-4">
          {/* Logo */}
          <div className="flex items-center flex-1 rounded-b-lg">
            <Link to="/">
              <span className="text-3xl font-bold ">HOLMES</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center justify-end gap-8 text-[18px]">
            <ul className="flex gap-8">
              <SignedOut>
                {/* Links for Signed Out Users */}
                <Button
                  variant="outline"
                  onClick={() => setShowSignIn(true)}
                  className="rounded-xl bg-black text-white"
                >
                  Login/Sign Up
                </Button>
              </SignedOut>
              <SignedIn>
                <Link to="/aboutus">
                <Button
                  variant=""
                  className="rounded-xl bg-white text-black shadow-2xl hover:shadow-2xl"
                >
                  About Us
                </Button>
                </Link>
                {/* Links for Signed In Users */}
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10",
                    },
                  }}
                >
                  <UserButton.MenuItems>
                    <UserButton.Link
                      label="Favourite PGs"
                      labelIcon={<Heart size={15} />}
                      href="/favourites-pgs"
                    />
                    <UserButton.Link
                      label="Cart"
                      labelIcon={<Heart size={15} />}
                      href="/cart"
                    />
                  </UserButton.MenuItems>
                </UserButton>
              </SignedIn>
            </ul>
          </div>
        </div>
      </nav>

      {/* For Mobile/Tablet View */}
      <div className="lg:hidden flex items-center justify-center gap-4 px-4 py-4">
        <SignedOut>
          <Button
            variant="outline"
            onClick={() => setShowSignIn(true)}
            className="rounded-xl bg-black text-white"
          >
            Login/Sign Up
          </Button>
          {/* <Button variant='outline' className='rounded-xl bg-black text-white'>Select PGs</Button> */}
        </SignedOut>
      </div>

      {/* Sign In Modal */}
      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOverlayClick}
        >
          <SignIn signUpForceRedirectUrl="/" fallbackRedirectUrl="/" />
        </div>
      )}
    </>
  );
}

export default Nav;

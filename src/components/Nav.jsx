import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  useUser,
  SignIn,
  UserButton,
} from "@clerk/clerk-react";

function Nav() {
  const [showSignIn, setShowSignIn] = useState(false);
  const { user } = useUser();

  // Handle overlay click to close the SignIn modal
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
    }
  };

  return (
    <>
      <nav className="bg-[#FF9F1C] text-black">
        <div className="h-10vh flex justify-between items-center px-4 py-4 md:px-20 md:py-4">
          {/* Logo */}
          <div className="flex items-center flex-1 rounded-b-lg">
            <span className="text-3xl font-bold">HOLMES</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center justify-end gap-8 text-[18px]">
            <ul className="flex gap-8">
              <SignedOut>
                {/* Links for Signed Out Users */}
                <Button
                  variant="destructive"
                  onClick={() => setShowSignIn(true)}
                >
                  Login
                </Button>
              </SignedOut>
              <SignedIn>
                {/* Links for Signed In Users */}
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10",
                    },
                  }}
                />
              </SignedIn>
            </ul>
          </div>
        </div>
      </nav>

      {/* For Mobile/Tablet View */}
      <div className="lg:hidden flex items-center justify-center gap-4 px-4 py-4">
        <SignedOut>
          <Button
            variant="destructive"
            onClick={() => setShowSignIn(true)}
            className="w-full"
          >
            Login
          </Button>
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

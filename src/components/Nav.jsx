import React from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  useUser,
  SignIn,
  UserButton,
} from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { dark, neobrutalism } from '@clerk/themes'

function Nav() {
  const [search, setSearch] = useSearchParams();
  const [showSignIn, setShowSignIn] = useState(false);
  const { user } = useUser();
  // const content = (
  //   <>
  //     <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-950 transition">
  //       <ul className="text-center text-xl p-20">
  //         <Link spy={true} smooth={true} to="Home">
  //           <li className="my-4 py-4 border-b bg-slate-800 hover:bg-slate-800 hover:rounded">
  //             Home
  //           </li>
  //         </Link>
  //         <Link spy={true} smooth={true} to="Education">
  //           <li className="my-4 py-4 border-b bg-slate-800 hover:bg-slate-800 hover:rounded">
  //             Education
  //           </li>
  //         </Link>
  //         <Link
  //           spy={true}
  //           smooth={true}
  //           to="/login"
  //           className="my-4 py-4 border-b bg-slate-800 hover:bg-slate-800 hover:rounded"
  //         >
  //           <li>Log In</li>
  //         </Link>
  //       </ul>
  //     </div>
  //   </>
  // );
  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };
  return (
    <>
      <nav className="bg-white text-black">
        <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4">
          <div className="flex items-center flex-1">
            <span className="text-3xl font-bold">HOLMES</span>
          </div>
          <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8 mr-16 text-[18px]">
                {/* <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-950 hover:border-fuchsia-600 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Education">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-950 hover:border-fuchsia-600 cursor-pointer">
                  Education
                </li>
              </Link> */}
                <SignedOut>
                  <Link to="/">
                    <Button variant="ghost">Home</Button>
                  </Link>

                  <Link to="/education">
                    <Button variant="ghost">Education</Button>
                  </Link>

                  <Button
                    variant="destructive"
                    onClick={() => setShowSignIn(true)}
                  >
                    Login
                  </Button>
                </SignedOut>
                <SignedIn>
                  <Link to="/">
                    <Button variant="ghost">Home</Button>
                  </Link>

                  <Link to="/education">
                    <Button variant="ghost">Education</Button>
                  </Link>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10",
                      },
                    }}
                  ></UserButton>
                </SignedIn>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {showSignIn && (
        <div
          className="fixed flex inset-0 items-center bg-black bg-opacity-50 justify-center z-50"
          onClick={handleOverlayClick}
        >
          <SignIn signUpForceRedirectUrl="/" fallbackRedirectUrl="/" />
        </div>
      )}
    </>
  );
}

export default Nav;

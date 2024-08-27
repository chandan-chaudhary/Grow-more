import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);I

  //scroll to any section from any pathname
  const handleScrollto = (section) => {
    // navigate("/");
    setTimeout(() => {
      scrollToSection(section);
    }, 100);
  };

  const [showHeader, setShowHeader] = useState(false);
  return (
    <div
      className={
        "flex items-center justify-between bg-gray-300 text-black lg:px-28 px-8 py-3 sticky top-0 w-full z-20"
      }
    >
      <div className=" ">
        <a className="font-bold text-2xl md:text-3xl">Grow More</a>
      </div>
      <div className="md:hidden relative">
        {showHeader ? (
          <RxCross2
            onClick={() => setShowHeader(false)}
            className="text-3xl font-bold"
          />
        ) : (
          <GiHamburgerMenu
            onClick={() => setShowHeader(true)}
            className="text-3xl font-bold"
          />
        )}
        {showHeader && <HeaderMobile />}
      </div>
      <div
        className={
          "xs:max-md:hidden flex space-x-8 font-semibold text-blue-900 uppercase"
        }
      >
        <li
          onClick={() => {
            handleScrollto("landingpage");
          }}
          className="list-none cursor-pointer hover:bg-blue-950 hover:text-white rounded-lg px-2 py-1"
        >
          home
        </li>
        {/* <Link to="about" smooth={true} duration={500}> */}
        <li
          onClick={() => {
            handleScrollto("about");
          }}
          className="list-none cursor-pointer hover:bg-blue-950 hover:text-white rounded-lg px-2 py-1"
        >
          about
        </li>
        <li
          onClick={() => {
            handleScrollto("about");
          }}
          className="list-none cursor-pointer hover:bg-blue-950 hover:text-white rounded-lg px-2 py-1"
        >
          services
        </li>

        {/* </Link> navigate("/contact-details") */}
        <li
          onClick={() => ""}
          className="list-none cursor-pointer hover:bg-blue-950 hover:text-white rounded-lg px-2 py-1"
        >
          contact
        </li>
      </div>
    </div>
  );

  //  MOBILEHEADER
  function HeaderMobile() {
    const modalRef = useRef(null);
    // Handle modal open close on click outside modal.
    useEffect(() => {
      const dropDownHandler = (event) => {
        // LARGE AND EXTRALARGE SCREEN
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          setShowHeader(false);
        }
      };
      document.addEventListener("mousedown", dropDownHandler);

      return () => {
        document.removeEventListener("mousedown", dropDownHandler);
      };
    }, []);

    return (
      <div
        ref={modalRef}
        className="absolute border-2 shadow-2xl shadow-blue-900 rounded-lg z-10 border-gray-300 bg-white py-7 px-5 flex flex-col gap-y-3 list-none -right-5 top-12  "
      >
        <li
          onClick={() => {
            handleScrollto("landingpage"), setShowHeader(false);
          }}
          className="text-lg font-semibold uppercase hover:bg-blue-900 hover:text-white rounded-lg p-1"
        >
          home
        </li>

        <li
          onClick={() => {
            handleScrollto("about"), setShowHeader(false);
          }}
          className="text-lg font-semibold uppercase hover:bg-blue-900 hover:text-white rounded-lg p-1"
        >
          about
        </li>
        <li
          onClick={() => {
            setShowHeader(false);
          }}
          className="text-lg font-semibold uppercase hover:bg-blue-900 hover:text-white rounded-lg p-1"
        >
          contact
        </li>
      </div>
    );
  }
}

export default Header;

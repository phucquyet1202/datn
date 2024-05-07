import { useState, useEffect } from "react";
import { Container, DarkMode, Logo, UserMenu, NavBarIcon } from "../..";

const NavBar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 100); // Ẩn navbar khi cuộn xuống dưới 100px
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      // fixed
      className={`top-0 left-0 right-0 py-3 px-5 md:px-0 md:py-0 shadow bg-transparent transition-transform duration-500 ease-in-out ${
        !visible ? "-translate-y-full" : ""
      }`}
      style={{ zIndex: "999" }}
    >
      <Container>
        <div className="flex flex-row items-center justify-between gap-5 py-4">
          <NavBarIcon />
          <Logo url="/" />

          <div className="flex flex-row gap-5 justify-center items-center">
            {/* <Search /> */}
            <DarkMode />
            <UserMenu />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;

// import { Container, DarkMode, Logo, UserMenu, NavBarIcon } from "../..";

// const NavBar = () => {
//   return (
//     <div className="w-full py-3 px-5 md:px-0 md:py-0 shadow bg-light dark:bg-dark">
//       <Container>
//         <div className="flex flex-row items-center justify-between gap-5 py-4">
//           <NavBarIcon />
//           <Logo url="/" />

//           <div className="flex flex-row gap-5 justify-center items-center">
//             {/* <Search /> */}

//             <DarkMode />

//             <UserMenu />
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default NavBar;

// navbar di chuển
// <div className={`fixed top-0 left-0 right-0 py-3 px-5 md:px-0 md:py-0 shadow bg-light dark:bg-dark transition-transform duration-500 ease-in-out ${!visible ? '-translate-y-full' : ''}`} style={{ zIndex: '100' }}>
// <Container>
//   <div className="flex flex-row items-center justify-between gap-5 py-4">
//     <NavBarIcon />
//     <Logo url="/" />

//     <div className="flex flex-row gap-5 justify-center items-center">
//       {/* <Search /> */}
//       <DarkMode />
//       <UserMenu />
//     </div>
//   </div>
// </Container>
// </div>

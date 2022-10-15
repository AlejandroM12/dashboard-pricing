import { useState } from "react";
import { Logo } from "../Logo";
import {
  RiBarChartBoxLine,
  RiGlobalLine,
  RiArrowDownSLine,
  RiMailOpenFill,
  RiCalendar2Line,
  RiSettings3Line,
  RiCheckboxBlankCircleFill,
  RiArrowUpSLine,
  RiLogoutCircleRLine,
  RiMenuLine,
  RiCloseLine,
} from "react-icons/ri";

const SidebarContainer = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className={`flex flex-col justify-between bg-[#1E1F24] fixed 
    ${showMenu ? "-left-0" : "-left-full"}
    -left-full lg:left-0 top-0 w-72 h-full p-8 transition-all overflow-y-scroll`}
    >
      <nav>
        <div>
          <Logo />
        </div>
        <a
          href="#"
          className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
        >
          <RiBarChartBoxLine />
          Analytic
        </a>
        <a
          href="#"
          className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
        >
          <RiGlobalLine />
          <span className="flex-1 flex items-center gap-4 justify-between">
            Social Media <RiArrowDownSLine />
          </span>
        </a>
        <a
          href="#"
          className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
        >
          <RiMailOpenFill />
          Message
        </a>
        <a
          href="#"
          className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
        >
          <RiCalendar2Line />
          Schedule
        </a>
        <a
          href="#"
          className="flex flex-col  gap-4 text-gray-200 py-2 hover:text-gray-200 transition-colors"
        >
          <span className="flex items-center gap-4">
            <RiSettings3Line className="text-[#F46556]" />
            <div className="flex-1 flex items-center justify-between">
              Settings
              <RiArrowUpSLine />
            </div>
          </span>
          <nav className="flex flex-col border-l border-gray-600 ml-2">
            <a href="#" className="relative pl-8 text-gray-300">
              <RiCheckboxBlankCircleFill className="absolute -left-[7px] text-[#F46556] text-sm top-[50%] -translate-y-[50%] p-[4px] bg-[#1E1F24] rounded-full" />
              Plan
            </a>
            <a href="#" className="relative pl-8 text-gray-400">
              <RiCheckboxBlankCircleFill className="absolute -left-[7px] text-gray-500 text-sm top-[50%] -translate-y-[50%] p-[4px] bg-[#1E1F24] rounded-full" />
              Security
            </a>
          </nav>
        </a>
      </nav>
      <div>
        <a
          href="#"
          className="flex items-center text-gray-400 gap-4 hover:text-gray-200 transition-colors"
        >
          <RiLogoutCircleRLine />
          Logout
        </a>
      </div>
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed right-4 bottom-4 bg-[#1E1F24] text-[#F46556] text-2xl p-3 rounded-full"
      >
        {showMenu ? <RiCloseLine /> : <RiMenuLine />}
      </button>
    </div>
  );
};
export default SidebarContainer;

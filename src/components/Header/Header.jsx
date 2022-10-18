import {
  RiNotificationLine,
  RiArrowDownSLine,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";
const Header = () => {
  return (
    <main className="lg:pl-80">
      <header className="p-8 flex justify-end border-b border-gray-500 fixed left-0 top-0 w-full bg-[#141517]">
        <ul className="flex items-center gap-4">
          <li>
            <a href="#" className=" relative text-white text-lg">
              <RiNotificationLine />
              <RiCheckboxBlankCircleFill className="text-[#F46556] text-[8px] absolute top-0 right-0" />
            </a>
          </li>
          <li>
            <a href="#" className="flex text-white items-center gap-2">
              <img
                src="https://i.pravatar.cc/150?u=women"
                alt="user"
                className="w-7 h-7 object-cover rounded-full ring-2 ring-gray-300"
              />
              Ferra Alexandra
              <RiArrowDownSLine />
            </a>
          </li>
        </ul>
      </header>
    </main>
  );
};
export default Header;

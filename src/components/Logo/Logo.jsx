import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex flex-row mb-8 -ml-1 gap-1.5">
      <img src={logo} alt="logo" />
      <h1 className="text-white font-bold text-2xl tracking-[4px]">Antis</h1>
    </div>
  );
};
export default Logo;

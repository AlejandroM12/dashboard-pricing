import { RiCheckLine } from "react-icons/ri";
import classnames from "classnames";

const Card = (props) => {
  return (
    <div className={`bg-${props.bgCardColor} p-5 rounded-xl mb-10`}>
      <div className="flex flex-col items-center mb-8">
        <h1 className="bg-[#C5BAFF] rounded-full p-4 text-3xl mb-4">
          {props.emoji}
        </h1>
        <h2 className="text-4xl">{props.title}</h2>
        <p className="text-gray-500 mb-4">{props.description}</p>
        <h5 className="text-2xl uppercase tracking-[4px] font-bold">
          {props.price}
        </h5>
        <p className="text-gray-500 mb-5">{props.time}</p>
        <button
          className={`bg-${props.bgButton} py-2 px-8 rounded-lg hover:text-white transition-colors`}
        >
          {props.plan}
        </button>
      </div>
      <ul className="flex flex-col gap-4 text-gray-400">
        <li className="flex items-center gap-4">
          <RiCheckLine className="text-green-500 text-2xl" /> {props.detailOne}
        </li>
        <li className="flex items-center gap-4">
          <RiCheckLine className="text-green-500 text-2xl" /> {props.detailTwo}
        </li>
        <li className="flex items-center gap-4">
          <RiCheckLine className="text-green-500 text-2xl" />
          {props.detailThree}
        </li>
        <li className="flex items-center gap-4">
          <RiCheckLine className="text-green-500 text-2xl" /> {props.detailFour}
        </li>
        <li className="flex items-center gap-4">
          <RiCheckLine className="text-green-500 text-2xl" /> {props.detailFive}
        </li>
      </ul>
    </div>
  );
};
export default Card;

import Image from "next/image";
import turkish from "../../../public/Traditional-Turkish-cuisine.jpg";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function Introduce() {
  return (
    <div className=" mt-[120px]">
      <div className="h-[40vw] w-screen">
        <Image
          className="absolute -z-10 h-[40vw] w-screen  select-none object-cover"
          alt="Food pic"
          src={turkish}
          quality={75}
        />
        <div className="pt-[16%] max-[650px]:pt-[15%]">
          <div className=" flex justify-between text-white">
            <RiArrowLeftSLine className="cursor-pointer text-8xl max-[1000px]:text-6xl max-[500px]:text-4xl" />
            <RiArrowRightSLine className="cursor-pointer text-8xl max-[1000px]:text-6xl max-[500px]:text-4xl" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

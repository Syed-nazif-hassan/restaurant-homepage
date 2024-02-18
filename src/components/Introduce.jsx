import Image from "next/image";
import turkish from "../images/Traditional-Turkish-cuisine.jpg";
import uzbek from "../../src/images/uzbek_food.jpg";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function Introduce() {
  return (
    <div className=" mb-36 mt-[120px]">
      <div
        className="flex h-[40vw] w-[100%] items-center justify-between bg-cover text-white max-[1050px]:h-[60vw] max-[680px]:h-[90vw]"
        style={{
          backgroundImage: `url(${turkish.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <RiArrowLeftSLine className="cursor-pointer text-8xl hover:scale-110 max-[500px]:text-6xl" />
        <RiArrowRightSLine className="cursor-pointer text-8xl hover:scale-110 max-[500px]:text-6xl " />
      </div>
      <div className="mx-10 mt-12">
        <h2 className="mb-20 font-['Playfair'] text-2xl">Trending Foods</h2>
        <div className="grid grid-cols-3 gap-12 max-[1050px]:grid-cols-2 max-[680px]:grid-cols-1 max-[680px]:place-items-center">
          <div className="cursor-pointer overflow-hidden rounded-lg border-black bg-lime-200 shadow-xl transition ease-in-out hover:scale-105 max-[680px]:max-h-80 max-[680px]:max-w-96">
            <Image
              src={uzbek}
              alt="Food pic"
              quality={75}
              placeholder="blur"
              className="object-cover object-center"
            />
            <div className="m-3 flex justify-between ">
              <h3 className="max-[340px]:text-sm">Uzbek food</h3>
              <h3 className="mr-3 max-[340px]:text-sm">Tk 530</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

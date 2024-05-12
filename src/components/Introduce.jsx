import Image from "next/image";
import turkish from "../images/Traditional-Turkish-cuisine.jpg";
import kazanKabob from "../images/kazan-kabob.jpg";
import butterChicken from "../images/butter-chicken.jpg";
import muttonKacchi from "../images/mutton-kacchi.jpg";
import muttonKorma from "../images/mutton-korma.jpg";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import ImagesForHome from "./ImagesForHome";

export default function Introduce() {
  const foods = [
    { path: butterChicken, name: "Butter Chicken", price: "Tk 270" },
    { path: muttonKacchi, name: "Mutton Kacchi", price: "Tk 400" },
    { path: muttonKorma, name: "Mutton Korma", price: "Tk 350" },
    { path: kazanKabob, name: "Kazan Kabob", price: "Tk 320" },
  ];
  return (
    <div className="mb-36 mt-[120px]">
      <div
        className="flex h-[40vw] w-[100%] select-none items-center justify-between bg-cover text-white max-[1050px]:h-[60vw] max-[680px]:h-[90vw]"
        style={{
          backgroundImage: `url(${turkish.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <RiArrowLeftSLine className="cursor-pointer text-8xl hover:scale-110 max-[500px]:text-6xl" />
        <RiArrowRightSLine className="cursor-pointer text-8xl hover:scale-110 max-[500px]:text-6xl " />
      </div>
      <div>
        <ImagesForHome />
      </div>
      <div className="mx-10 mt-12">
        <h2 className="mb-20 font-['Playfair'] text-2xl">Trending Foods</h2>
        <div className="grid grid-cols-3 gap-12 max-[1050px]:grid-cols-2 max-[680px]:grid-cols-1 max-[680px]:place-items-center">
          {foods.map((food, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer overflow-hidden rounded-lg border-black bg-lime-200 shadow-xl transition ease-in-out hover:scale-105"
              >
                <Image
                  key={index}
                  src={food.path}
                  alt="Food pic"
                  quality={75}
                  placeholder="blur"
                  className="h-[20vw] w-[50vw] select-none  object-cover object-center max-[680px]:h-[40vw] max-[680px]:w-[70vw]"
                />
                <div className="m-3 flex justify-between ">
                  <h3 className="max-[340px]:text-sm">{food.name}</h3>
                  <h3 className="mr-3 max-[340px]:text-sm">{food.price}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

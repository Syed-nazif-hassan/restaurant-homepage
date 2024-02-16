import Dropdown from "./Droppdown";
import Link from "next/link";

const navbar_items = ["Menu", "Online Order", "Reservation", "About Us"];
const navbar_signup_login = ["Signup", "Login"];

export default function NavBar() {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 bg-lime-50 shadow">
      <div className="mx-3 mb-10 mt-2 flex justify-between">
        <h1 className="font-['Faustina'] text-4xl">BistroVerve</h1>
        <div className="mt-2 flex space-x-10 max-[900px]:space-x-6 max-[833px]:hidden">
          {navbar_items.map((item, index) => (
            <Link
              key={index}
              className="decoration-amber-800 decoration-2 underline-offset-8 hover:text-amber-800 hover:underline"
              href="#"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="mr-3 mt-2 flex  space-x-4 max-[900px]:space-x-3 max-[833px]:hidden">
          {navbar_signup_login.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="decoration-amber-800 decoration-2 underline-offset-8 hover:text-amber-800 hover:underline"
            >
              {item}
            </Link>
          ))}
        </div>
        <Dropdown />
      </div>
    </div>
  );
}

import Dropdown from "./Droppdown";
import Link from "next/link";

const navbar_items = ["Menu", "Online Order", "Reservation", "About Us"];
const navbar_signup_login = ["Signup", "Login"];

export default function NavBar() {
  return (
    <div className="flex justify-between mx-3 my-2">
      <h1 className="text-4xl font-['Rosrivo]']">BistroVerve</h1>
      <div className="flex space-x-10 max-[900px]:space-x-6 max-[833px]:hidden">
        {navbar_items.map((item) => (
          <Link
            className="hover:text-amber-800 hover:underline underline-offset-8 decoration-2 decoration-amber-800"
            href="#"
          >
            {item}
          </Link>
        ))}
        {/* <Link href="#">Menu</Link>
        <Link href="#">Online Order</Link>
        <Link href="#">Reservation</Link>
        <Link href="#">About us</Link> */}
      </div>
      <div className="flex space-x-4 mr-3  max-[900px]:space-x-3 max-[833px]:hidden">
        {navbar_signup_login.map((item) => (
          <Link href="#" className="hover:text-amber-800 hover:underline underline-offset-8 decoration-2 decoration-amber-800">
            {item}
          </Link>
        ))}
        {/* <Link href="#">Signup</Link>
        <Link href="#">Login</Link> */}
      </div>
      <Dropdown />
    </div>
  );
}

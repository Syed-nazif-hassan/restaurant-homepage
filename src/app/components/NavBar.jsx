import Dropdown from "./Droppdown";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between mx-3 my-2">
      <h1 className="text-4xl font-['Rosrivo]']">BistroVerve</h1>
      <div className="flex space-x-10 max-[900px]:space-x-6 max-[833px]:hidden">
        <Link href="#">Menu</Link>
        <Link href="#">Online Order</Link>
        <Link href="#">Reservation</Link>
        <Link href="#">About us</Link>
      </div>
      <div className="flex space-x-4 mr-3  max-[900px]:space-x-3 max-[833px]:hidden">
        <Link href="#">Signup</Link>
        <Link href="#">Login</Link>
      </div>
      <Dropdown />
    </div>
  );
}

import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-lime-300 to-teal-300">
      <div className="px-20 py-10 max-[400px]:px-8">
        <div className="grid grid-cols-3 gap-16 max-lg:grid-cols-2 max-[710px]:grid-cols-1">
          <div>
            <h3 className="text-xl font-semibold">OUR MISSION</h3>
            <br />
            <br />
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              turpis ligula, vestibulum semper feugiat quis, scelerisque a diam.
              Curabitur auctor fringilla turpis, ac tristique mauris porttitor
              nec. Morbi blandit tincidunt elementum. Sed vel tincidunt turpis.
              Cras ut nisi ipsum. Cras sodales, nisi et luctus tincidunt, erat.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">CONTACT DETAILS</h3>
            <br />
            <br />
            <div className="flex gap-5">
              <MdEmail className="shrink-0 text-4xl" />
              <p className="text-wrap break-words font-semibold">
                Email:
                <br />
                <Link href="#">
                  <span>BistroVerve @gmail.com</span>
                </Link>
              </p>
            </div>
            <br />
            <div className="flex gap-5">
              <FaPhoneVolume className="shrink-0 text-4xl" />
              <p className="font-semibold">
                Call Us:
                <br />
                01456789347
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">LOCATION</h3>
            <br />
            <br />
            <p className="font-semibold">
              Halishahar, Chittagong, <br />
              Bangladesh
            </p>
          </div>
        </div>
        <hr className="my-8 border-black" />
        <div className="flex justify-between max-[525px]:flex-col max-[525px]:gap-4">
          <p>
            Copyright&copy;. <span className="font-semibold">Bistro Verve</span>
          </p>
          <div className="flex gap-5 text-xl">
            <Link href="#">
              <RiInstagramFill />
            </Link>
            <Link href="#">
              <FaTwitter />
            </Link>
            <Link href="#">
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

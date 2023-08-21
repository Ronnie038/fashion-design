import { Link } from "react-router-dom";
import logo from "../../assets/UrbanUtopia.png";
import cartIcon from "../../assets/icons/Vector.png";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-white">
        <div className="flex-1">
          <Link to="" className="">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="flex-none gap-5">
          <div className="form-control relative w-80">
            <input
              type="text"
              placeholder="Search Products"
              className=" input input-bordered rounded-full border-black w-full h-10 md:w-auto"
            />
            <div className="absolute top-2 right-5">
              <Icon className="text-2xl" icon="circum:search" />
            </div>
          </div>
          <div>
            <button className="border w-[122px] text-2xl h-10 bg-transparent border-black">
              login
            </button>
          </div>
          <div>
            <Link><img src={cartIcon} alt="" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

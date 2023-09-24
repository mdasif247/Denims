import { LocationCity } from "@material-ui/icons";
import {
  Email,
  EmailOutlined,
  Facebook,
  Instagram,
  LocalPhone,
  LocalPhoneOutlined,
  LocationCityOutlined,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import React from "react";

function Footer() {
  return (
    <div className="flex items-center justify-around p-2 mobile:flex-col mobile:items-start">
      <div className="flex-1 flex flex-wrap p-2">
        <h1 className="text-[25px]">Connect with Denims</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsam
          omnis repellendus, explicabo recusandae ad cum minus ut laboriosam
          officiis nam expedita in voluptates architecto rerum! Corporis quam
          dignissimos quia?
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className="m-2">
            <Facebook />
          </div>
          <div className="m-2">
            <Instagram />
          </div>
          <div className="m-2">
            <Twitter />
          </div>
          <div className="m-2">
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
          <LocationCityOutlined />
          <p className="pl-3">India</p>
        </div>
        <div className="flex m-3">
          <LocalPhone />
          <p className="pl-3">+91 123456678</p>
        </div>
        <div className="flex m-3">
          <Email />
          <p className="pl-3">asifcodes@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

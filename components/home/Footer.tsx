import Image from "next/image"
import Link from "next/link"

import { footerLinks } from "@/constants"
import logo from "@/public/images/logo.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 padding-x py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image 
            className="object-contain w-[180px] h-auto"
            src={logo}
            alt="Drive Hub Logo"
          />
          <p className="text-base text-gray-400">
            DriveHub 2023 
            <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="footer__link"
            >
              <h3 className="font-bold text-gray-200">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-400 hover:underline"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer__copyrights">
        <p className="text-gray-400 mx-auto whitespace-nowrap">@2023 DriveHub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link
            href={"/"}
            className="text-gray-400 hover:underline whitespace-nowrap"
          >
            Privacy Policy
          </Link>
          <Link
            href={"/"}
            className="text-gray-400 hover:underline whitespace-nowrap" 
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
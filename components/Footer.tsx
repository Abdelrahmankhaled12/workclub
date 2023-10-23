import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => (
  <footer className='padding-section'>
    <div className="max-width padding-x padding-y">
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:justify-items-center gap-5'>
        <h2 className=''>
          <Link href='/' className="text-[25px] font-semibold text-blackCustomColor">
            Workclub.ai
          </Link>
        </h2>
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-semibold text-blackCustomColo mb-3 text-[20px]" key={item.title}>{item.title}</h3>
            <div className="flex flex-col gap-2">
              {item.links.map((link , index) => (
                <Link
                  key={link.title + index}
                  href={link.url}
                  className="text-[#212121] text-[14px] duration-300 hover:tracking-[1.4px]"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='text-center mt-12 text-[#333333]'>
        <p>Copyright © 2023 Workclub.ai</p>
      </div>
    </div>
  </footer>
);

export default Footer;
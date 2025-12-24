import flag from '../../../assets/images/nepal_flag.png';
import main_logo from '../../../assets/images/main_logo.png';
import { Menu } from 'lucide-react';
import { useState } from 'react';

function Header() {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      {/* header content starts here */}
      <div className="head_container naxatw-flex naxatw-flex-row naxatw-justify-between naxatw-gap-x-5 naxatw-gap-y-10  naxatw-px-5 naxatw-pt-4 md:naxatw-px-10">
        {/* main logo */}
        <div className="logo_section naxatw-flex naxatw-max-h-[70px] naxatw-max-w-[412px] naxatw-flex-col naxatw-text-white">
          <img
            src={main_logo}
            alt="main_logo.png"
            className="naxatw-h-full naxatw-w-full naxatw-object-contain"
          />
        </div>
        {/* nav section starts here */}
        <div className="nav_section naxatw-hidden naxatw-text-base naxatw-text-white lg:naxatw-flex">
          <nav className="naxatw-flex naxatw-items-center naxatw-justify-between naxatw-gap-x-5 naxatw-px-5 naxatw-font-primary naxatw-text-base naxatw-font-bold lg:naxatw-justify-center">
            <div className="naxatw-flex naxatw-gap-10">
              <a className="hover:naxatw-font-extrabold" href="#">
                Data
              </a>
              <a className="hover:naxatw-font-extrabold" href="#">
                About
              </a>
            </div>
            <div className="naxatw-flex naxatw-items-center naxatw-justify-center naxatw-gap-5">
              <div className="naxatw-h-[40px] naxatw-w-[40px] naxatw-overflow-hidden naxatw-rounded-full hover:naxatw-cursor-pointer">
                <img
                  className="naxatw-h-full naxatw-w-full naxatw-object-contain"
                  src={flag}
                  alt="nepal_flag.png"
                />
              </div>
              <button className="naxatw-rounded-md naxatw-border-[1px] naxatw-border-primary-50 naxatw-px-5 naxatw-py-3 naxatw-text-sm hover:naxatw-cursor-pointer hover:naxatw-bg-primary-50 hover:naxatw-text-primary-700 lg:naxatw-text-base">
                Log in
              </button>
            </div>
          </nav>
        </div>
        {/* medium to small screen */}
        <div className="btn naxatw-flex naxatw-items-start">
          <button
            onClick={() => setVisible(prevVisible => !visible)}
            className={`naxatw-visible naxatw-rounded-md  naxatw-border naxatw-p-1 naxatw-text-white active:naxatw-bg-white active:naxatw-text-grey-900 md:naxatw-p-2  lg:naxatw-hidden ${visible ? 'naxatw-hidden' : ''}`}
          >
            <Menu />
          </button>
        </div>
        {visible ? (
          <div
            className={`nav_section naxatw-z-1000 naxatw-fixed  naxatw-right-0 naxatw-top-0 naxatw-h-full naxatw-w-[60%] naxatw-transform naxatw-bg-primary-500 naxatw-text-white  ${visible ? 'naxatw-translate-x-0' : 'naxatw-translate-x-full'}`}
          >
            <nav className="naxatw-mt-5 naxatw-flex naxatw-flex-col naxatw-items-start  naxatw-gap-5 naxatw-px-5 naxatw-font-primary naxatw-text-base naxatw-font-bold lg:naxatw-justify-center">
              <div className="naxatw-flex naxatw-w-full naxatw-justify-end">
                <button
                  onClick={() => setVisible(prevVisible => !visible)}
                  className={`naxatw-visible naxatw-flex naxatw-items-start naxatw-rounded-md naxatw-border naxatw-px-3 naxatw-text-white active:naxatw-border-gray-900 active:naxatw-bg-white active:naxatw-text-grey-900 lg:naxatw-hidden ${!visible ? 'naxatw-hidden' : ''}`}
                >
                  X
                </button>
              </div>
              <div className="naxatw-flex naxatw-flex-col naxatw-gap-5 lg:naxatw-gap-10">
                <a className="hover:naxatw-font-extrabold" href="#">
                  Data
                </a>
                <a className="hover:naxatw-font-extrabold" href="#">
                  About
                </a>
              </div>
              <div className="naxatw-flex naxatw-flex-col naxatw-items-start  naxatw-gap-5 ">
                <div className="naxatw-h-[40px] naxatw-w-[40px] naxatw-overflow-hidden naxatw-rounded-full  hover:naxatw-cursor-pointer">
                  <img
                    className="naxatw-h-full naxatw-w-full naxatw-object-contain"
                    src={flag}
                    alt="nepal_flag.png"
                  />
                </div>
                <button className="naxatw-rounded-md naxatw-border-[1px] naxatw-border-primary-50 naxatw-px-5 naxatw-py-2 naxatw-text-sm hover:naxatw-cursor-pointer hover:naxatw-bg-primary-50 hover:naxatw-text-primary-700 lg:naxatw-text-base">
                  Log in
                </button>
              </div>
            </nav>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default Header;

import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import emblem from '../../../assets/images/emblem.png';
import uk_flag from '../../../assets/images/uk.png';

function Footer() {
  return (
    <div className="container naxatw-mx-8 naxatw-mb-5 naxatw-h-auto naxatw-w-[80%] md:naxatw-mx-14 lg:naxatw-mx-32  ">
      <div className="main_container naxatw-flex naxatw-flex-col naxatw-gap-y-5">
        {/* main section starts here */}
        <div className="main naxatw-flex naxatw-flex-col naxatw-gap-y-10  lg:naxatw-flex-row">
          {/* first section starts here */}
          <div className="first_section naxatw-flex naxatw-w-full naxatw-gap-x-5 lg:naxatw-w-[50%]">
            {/* first container */}
            <div className="first_container naxatw-mb-6 naxatw-flex naxatw-h-11 naxatw-gap-x-3">
              <div className="ministry_container naxatw-flex naxatw-justify-start naxatw-gap-3 naxatw-border-r-2 naxatw-border-grey-400 naxatw-pr-3">
                <div className="naxatw-flex naxatw-items-start naxatw-justify-center ">
                  <img
                    className="naxatw-h-[41px] naxatw-w-[50px]"
                    src={emblem}
                    alt=""
                  />
                </div>
                <div className="naxatw-flex naxatw-flex-col naxatw-justify-start naxatw-text-maroon">
                  <p className="naxatw-font-devnagari naxatw-text-sm naxatw-font-extrabold naxatw-leading-5">
                    कर्णाली प्रदेश सरकार
                  </p>
                  <p className="naxatw-font-devnagari naxatw-text-lg naxatw-font-extrabold naxatw-leading-5">
                    मुख्यमन्त्री तथा मन्त्रिपरिषद्को कार्यालय
                  </p>
                </div>
              </div>
              <div className="text_container naxatw-flex naxatw-flex-col  naxatw-justify-start">
                <p className="naxatw-inline-block naxatw-bg-gradient-to-r naxatw-from-light-red  naxatw-to-primary-700 naxatw-bg-clip-text naxatw-text-xl naxatw-font-[1000] naxatw-uppercase naxatw-italic naxatw-text-transparent ">
                  Project
                </p>
                <p className="naxatw-font-comfortaa naxatw-text-[0.85rem]">
                  <strong className="naxatw-text-grey-900">Database</strong>{' '}
                  Portal
                </p>
              </div>
            </div>
          </div>
          {/* second section starts here */}
          <div className="second_section naxatw-flex naxatw-w-full lg:naxatw-w-[50%] ">
            <div className="links_container naxatw-flex naxatw-w-[50%] naxatw-flex-col naxatw-items-start naxatw-justify-center naxatw-gap-y-4 lg:naxatw-items-center">
              <p className="naxatw-text-base naxatw-font-semibold naxatw-text-grey-900 hover:naxatw-cursor-pointer hover:naxatw-text-grey-600 active:naxatw-text-grey-600">
                Map
              </p>
              <p className="naxatw-text-base naxatw-font-semibold naxatw-text-grey-900 hover:naxatw-cursor-pointer hover:naxatw-text-grey-600 active:naxatw-text-grey-600">
                Data
              </p>
              <p className="naxatw-text-base naxatw-font-semibold naxatw-text-grey-900 hover:naxatw-cursor-pointer hover:naxatw-text-grey-600 active:naxatw-text-grey-600">
                About
              </p>
            </div>
            <div className="contacts_container naxatw-font-base naxatw-flex naxatw-w-[50%] naxatw-flex-col naxatw-gap-y-3 naxatw-font-normal naxatw-text-gray-600">
              <div className="search_projects naxatw-flex naxatw-items-center naxatw-justify-start naxatw-gap-x-2 ">
                <MapPin />
                <p>Search Projects</p>
              </div>
              <div className="contact_no naxatw-flex naxatw-items-center naxatw-justify-start naxatw-gap-x-2">
                <Phone />
                <p>+977-014563235, 014575246</p>
              </div>
              <div className="mail_container naxatw-flex naxatw-items-center naxatw-justify-start naxatw-gap-x-2">
                <Mail />
                <p>mail@mail.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* footer section starts here */}
        <div className="w-full naxatw-h-[1px] naxatw-bg-grey-400"></div>
        <div className="footer_section naxatw-flex naxatw-flex-col naxatw-gap-y-5 md:naxatw-flex-row md:naxatw-justify-between">
          <div className="selector_section naxatw-flex naxatw-items-center naxatw-gap-x-2">
            <div className="naxatw-w-5  naxatw-rounded-xl">
              <img src={uk_flag} alt="uk_flag" />
            </div>
            <select className="naxatw-font-primary naxatw-text-base naxatw-font-bold naxatw-leading-5">
              <option value="">English</option>
              <option value="">Spanish</option>
            </select>
          </div>
          <div className="other_section naxatw-flex naxatw-gap-x-3 naxatw-text-sm naxatw-font-normal">
            <div>
              <p>Privacy policy</p>
            </div>
            <div>
              <p>Terms</p>
            </div>
            <div>
              <p>Copyright © 2022 Project Database Portal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

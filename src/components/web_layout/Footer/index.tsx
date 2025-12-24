import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import emblem from '../../../assets/images/emblem.png';
import uk_flag from '../../../assets/images/uk.png';
import karnali_min from '../../../assets/images/foot_logo_1.png';
import project from '../../../assets/images/foot_logo_2.png';

function Footer() {
  return (
    <div className="container naxatw-mx-8 naxatw-mb-5 naxatw-h-auto naxatw-w-[80%] md:naxatw-mx-14 lg:naxatw-mx-32  ">
      <div className="main_container naxatw-flex naxatw-flex-col naxatw-gap-y-5">
        {/* main section starts here */}
        <div className="main naxatw-flex naxatw-flex-col naxatw-gap-y-3 lg:naxatw-flex-row  lg:naxatw-gap-y-10">
          {/* first section starts here */}
          <div className="first_section naxatw-flex naxatw-w-full naxatw-gap-x-5 lg:naxatw-w-[50%]">
            {/* first container */}
            <div className="first_container naxatw-mb-6 naxatw-flex naxatw-h-11 naxatw-gap-x-3">
              <div className="ministry_container naxatw-flex naxatw-max-h-[40px] naxatw-max-w-[298px] naxatw-justify-start naxatw-gap-3 naxatw-border-r-2 naxatw-border-grey-400 naxatw-pr-3">
                <img
                  src={karnali_min}
                  alt="karnali.img"
                  className="object-contain naxatw-h-full naxatw-w-full"
                />
              </div>
              <div className="text_container naxatw-flex naxatw-max-h-[30px] naxatw-max-w-[137px] naxatw-flex-col naxatw-justify-start">
                <img
                  src={project}
                  alt="project.png"
                  className="object-contain naxatw-h-full naxatw-w-full"
                />
              </div>
            </div>
          </div>
          {/* second section starts here */}
          <div className="second_section naxatw-flex naxatw-w-full lg:naxatw-w-[50%] ">
            <div className="links_container naxatw-flex naxatw-w-[50%] naxatw-flex-col naxatw-items-start naxatw-justify-center naxatw-gap-y-2 naxatw-text-sm naxatw-font-semibold lg:naxatw-items-center lg:naxatw-gap-y-4 lg:naxatw-text-base">
              <p className=" naxatw-text-grey-900 hover:naxatw-cursor-pointer hover:naxatw-text-grey-600 active:naxatw-text-grey-600 ">
                Map
              </p>
              <p className=" naxatw-text-grey-900 hover:naxatw-cursor-pointer hover:naxatw-text-grey-600 active:naxatw-text-grey-600 ">
                Data
              </p>
              <p className="  naxatw-text-grey-900 hover:naxatw-cursor-pointer hover:naxatw-text-grey-600 active:naxatw-text-grey-600 ">
                About
              </p>
            </div>
            <div className="contacts_container naxatw-flex naxatw-w-[50%] naxatw-flex-col naxatw-gap-y-3 naxatw-text-sm naxatw-font-normal naxatw-text-gray-600 lg:naxatw-text-base">
              <div className="search_projects naxatw-flex naxatw-items-center naxatw-justify-start naxatw-gap-x-2 ">
                <MapPin className="naxatw-h-4 naxatw-w-4" />
                <p>Search Projects</p>
              </div>
              <div className="contact_no naxatw-flex naxatw-items-center naxatw-justify-start naxatw-gap-x-2">
                <Phone className="naxatw-h-4 naxatw-w-4" />
                <p>+977-014563235, 014575246</p>
              </div>
              <div className="mail_container naxatw-flex naxatw-items-center naxatw-justify-start naxatw-gap-x-2">
                <Mail className="naxatw-h-4 naxatw-w-4" />
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
            <select className="naxatw-font-primary naxatw-text-sm naxatw-font-bold naxatw-leading-5 md:naxatw-text-base">
              <option value="">English</option>
              <option value="">Spanish</option>
            </select>
          </div>
          <div className="other_section naxatw-flex naxatw-flex-wrap  naxatw-gap-x-3 naxatw-text-sm naxatw-font-normal">
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

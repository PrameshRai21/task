import emblem from '../../../assets/images/emblem.png';

function Footer() {
  return (
    <div className="container naxatw-mx-32 naxatw-mb-10 naxatw-h-[30vh] naxatw-w-[80%] naxatw-bg-white">
      <div className="main naxatw-flex">
        <div className="first_section naxatw-flex naxatw-w-[50%] naxatw-gap-x-5">
          <div className="ministry_container naxaatw-flex naxatw-items-start naxatw-gap-3">
            <div className="naxatw-flex naxatw-items-center naxatw-justify-center">
              <img className="naxatw-h-14 naxatw-w-16" src={emblem} alt="" />
            </div>
            <div className="naxatw-flex naxatw-flex-col naxatw-justify-center naxatw-text-red-500">
              <p className="naxatw-text-sm naxatw-font-bold naxatw-leading-5">
                कर्णाली प्रदेश सरकार
              </p>
              <p className="naxatw-text-md naxatw-font-semibold naxatw-leading-5">
                मुख्यमन्त्री तथा मन्त्रिपरिषद्को कार्यालय
              </p>
            </div>
          </div>
          <div className="text_container naxatw-flex naxatw-flex-col naxatw-justify-start">
            <h1 className="naxatw-bg-linear-to-r naxatw-from-[#FF4538] naxatw-to-[#1A83FB] naxatw-bg-clip-text naxatw-text-xl naxatw-font-extrabold naxatw-uppercase naxatw-italic naxatw-text-transparent">
              Project
            </h1>
            <p className="naxatw-text-[0.85rem]">
              <strong className="naxatw-text-gray-800">Database</strong> Portal
            </p>
          </div>
        </div>
        <div className="second_section naxatw-flex naxatw-w-[50%] ">
          <div className="links_container naxatw-flex naxatw-w-[50%] naxatw-flex-col naxatw-items-center naxatw-justify-center naxatw-gap-y-4">
            <p className="naxatw-text-sm naxatw-font-semibold naxatw-text-gray-800 hover:naxatw-cursor-pointer hover:naxatw-text-gray-600">
              Map
            </p>
            <p className="naxatw-text-sm naxatw-font-semibold naxatw-text-gray-800 hover:naxatw-cursor-pointer hover:naxatw-text-gray-600">
              Data
            </p>
            <p className="naxatw-text-sm naxatw-font-semibold naxatw-text-gray-800 hover:naxatw-cursor-pointer hover:naxatw-text-gray-600">
              About
            </p>
          </div>
          <div className="contacts_container naxatw-flex naxatw-w-[50%] naxatw-flex-col naxatw-gap-y-2  naxatw-text-[0.785rem] naxatw-text-gray-600">
            <div className="search_projects naxatw-flex naxatw-items-center naxatw-justify-start naxatw-gap-x-2">
              <p>Search Projects</p>
            </div>
            <div className="contact_no naxatw-flex naxatw-items-center naxatw-justify-start naxatw-gap-x-2">
              <p>+977-014563235, 014575246</p>
            </div>
            <div className="mail_container naxatw-flex naxatw-items-center naxatw-justify-start naxatw-gap-x-2">
              mail@mail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

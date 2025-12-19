import emblem from '../../../assets/images/emblem.png';
import laptop_image from '../../../assets/images/laptop.png';
import flag from '../../../assets/images/nepal_flag.png';

function Banner() {
  return (
    // main container starts here
    <div className="container naxatw-mx-5 naxatw-mb-5 naxatw-h-auto naxatw-rounded-b-[20px] naxatw-bg-gradient-to-t naxatw-from-primary-600 naxatw-to-primary-400 lg:naxatw-mx-10 lg:naxatw-mb-10">
      {/* header content starts here */}
      <div className="head_container naxatw-flex naxatw-flex-col-reverse naxatw-justify-between naxatw-gap-y-10 naxatw-px-10 naxatw-pt-5 lg:naxatw-flex-row">
        <div className="naxatw-flex ">
          <div className="logo_section naxatw-flex naxatw-items-center naxatw-justify-center">
            <img
              className="naxatw-object-fit naxatw-mr-3 naxatw-max-h-[60px] naxatw-max-w-[72px] naxatw-cursor-pointer"
              src={emblem}
              alt=""
            />
          </div>
          <div className="head_sec naxatw-flex naxatw-flex-col naxatw-gap-2 naxatw-text-white">
            <h4 className="">कर्णाली प्रदेश सरकार</h4>
            <h3 className="">मुख्यमन्त्री तथा मन्त्रिपरिषद्को कार्यालय</h3>
            <p className="naxatw-font-comfortaa naxatw-text-sm lg:naxatw-text-base">
              Project Information Management System
            </p>
          </div>
        </div>
        {/* nav section starts here */}
        <div className="nav_section naxatw-text-base naxatw-text-white">
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
              <div className="naxatw-h-[40px] naxatw-w-[40px] naxatw-rounded-[50%] naxatw-bg-white hover:naxatw-cursor-pointer">
                <img
                  className="naxatw-h-full naxatw-w-full naxatw-rounded-full naxatw-border-[1px] naxatw-object-cover"
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
      </div>
      {/* main section starts here */}
      <div className="main naxatw-flex naxatw-flex-col naxatw-rounded-b-lg naxatw-px-10 naxatw-pb-8 naxatw-pt-2 naxatw-text-white lg:naxatw-flex-row lg:naxatw-pt-8">
        {/* text content starts here */}
        <div className="naxatw-text-content naxatw-flex naxatw-h-auto naxatw-w-full  naxatw-flex-col naxatw-items-center naxatw-justify-center naxatw-py-3 naxatw-font-primary lg:naxatw-w-[60%] lg:naxatw-py-6">
          <div className="text_container ">
            <div className="title naxatw-py-4 lg:naxatw-py-8 ">
              <h1 className="naxatw-ml-0 lg:naxatw-ml-5">
                Interactive digital portal of projects in Karnali Province of
                Nepal
              </h1>
            </div>
            <div className="desc naxatw-text-[0.85rem]">
              <p className="naxatw-ml-0 naxatw-font-primary naxatw-text-base naxatw-font-normal lg:naxatw-ml-5">
                A digital portal to identify the enabling factors of the
                development supported by development partners in Karnali
                Province of Nepal
              </p>
            </div>
          </div>
        </div>
        {/* image content starts here */}
        <div className="image_content naxatw-flex naxatw-min-h-[200px] naxatw-w-full naxatw-flex-col naxatw-items-center naxatw-justify-center naxatw-rounded-3xl lg:naxatw-h-[500px]  lg:naxatw-w-[40%]">
          <img
            className=" naxatw-h-full naxatw-w-full naxatw-rounded-3xl naxatw-object-cover"
            src={laptop_image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;

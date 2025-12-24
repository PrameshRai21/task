import laptop_image from '../../../assets/images/laptop.png';
import Header from '../Header';

function Banner() {
  return (
    // main container starts here
    <div className="container naxatw-mx-5 naxatw-mb-5 naxatw-h-auto naxatw-rounded-b-2xl naxatw-bg-gradient-to-t naxatw-from-primary-600 naxatw-to-primary-400 lg:naxatw-mx-10 lg:naxatw-mb-10">
      <Header />
      <div className="main naxatw-flex naxatw-flex-col naxatw-rounded-b-lg naxatw-px-5 naxatw-pb-5  naxatw-text-white md:naxatw-px-10 md:naxatw-pb-8 lg:naxatw-flex-row lg:naxatw-pt-8">
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
        <div className="image_content naxatw-flex naxatw-h-[200px] naxatw-w-full naxatw-flex-col naxatw-items-center naxatw-justify-center naxatw-rounded-2xl md:naxatw-h-[300px] lg:naxatw-h-[480px]  lg:naxatw-w-[40%]">
          <img
            className=" naxatw-h-full naxatw-w-full naxatw-rounded-2xl naxatw-object-cover"
            src={laptop_image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;

import { Map } from 'lucide-react';
import location from '../../../assets/images/location.png';

function Explore() {
  return (
    <div className="container naxatw-mx-8 naxatw-mb-10  naxatw-w-auto naxatw-rounded-2xl naxatw-bg-primary-700 naxatw-px-14 naxatw-py-10 naxatw-text-white md:naxatw-mx-14 lg:naxatw-mx-32">
      <div className="main naxatw-flex naxatw-flex-col naxatw-items-center naxatw-justify-between naxatw-gap-y-5 lg:naxatw-flex-row">
        {/* front section starts here */}
        <div className="naxatw-x-2 naxatw-x-5 naxatw-flex lg:naxatw-gap-x-8">
          <div className="image_container naxatw-mr-5 naxatw-flex naxatw-h-auto naxatw-flex-col naxatw-items-center naxatw-justify-center">
            <img
              className="naxatw-h-[80px] naxatw-w-[112px] naxatw-object-contain"
              src={location}
              alt="location.png"
            />
          </div>
          <div className="text_container naxatw-flex naxatw-flex-col naxatw-items-center naxatw-justify-center ">
            <p className="naxatw-text-xl naxatw-leading-7 md:naxatw-text-2xl md:naxatw-leading-9 lg:naxatw-text-3xl lg:naxatw-leading-10">
              Interactive digital portal of projects in Karnali Province of
              Nepal
            </p>
          </div>
        </div>
        {/* button section starts here */}
        <div className="btn_container naxatw-flex naxatw-flex-col naxatw-items-start naxatw-justify-center">
          <button className="naxatw-flex naxatw-min-w-[160px] naxatw-justify-center naxatw-gap-x-1 naxatw-rounded-lg naxatw-bg-white naxatw-px-2 naxatw-py-3 naxatw-font-primary naxatw-text-base naxatw-font-bold naxatw-leading-6 naxatw-text-primary-700 hover:naxatw-border hover:naxatw-border-white hover:naxatw-bg-primary-700 hover:naxatw-text-white active:naxatw-border active:naxatw-border-white active:naxatw-bg-primary-700 active:naxatw-text-white">
            <Map className="naxatw-text-2xl" /> Explore Map
          </button>
        </div>
      </div>
    </div>
  );
}

export default Explore;

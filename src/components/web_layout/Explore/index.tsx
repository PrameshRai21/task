import { Map } from 'lucide-react';
import location from '../../../assets/images/location.png';

function Explore() {
  return (
    <div className="container naxatw-mx-5 naxatw-mb-5 naxatw-w-auto  naxatw-rounded-2xl naxatw-bg-primary-700 naxatw-p-5 naxatw-text-white md:naxatw-mx-14 lg:naxatw-mx-32 lg:naxatw-mb-10 lg:naxatw-px-14 lg:naxatw-py-10">
      <div className="main naxatw-flex naxatw-flex-col naxatw-items-center naxatw-justify-between naxatw-gap-y-5 lg:naxatw-flex-row">
        {/* front section starts here */}
        <div className="naxatw-x-2 naxatw-flex naxatw-flex-col naxatw-items-center naxatw-justify-center naxatw-gap-x-5 md:naxatw-flex-row lg:naxatw-gap-x-8">
          <div className="image_container naxatw-flex  naxatw-h-[80px] naxatw-w-[80px] naxatw-flex-col naxatw-items-center naxatw-justify-center">
            <img
              className="naxatw-h-full naxatw-w-full naxatw-object-cover"
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
          <button className="naxatw-flex naxatw-w-[130px] naxatw-items-center naxatw-justify-center naxatw-gap-x-1 naxatw-rounded-lg naxatw-bg-white naxatw-px-2 naxatw-py-2 naxatw-font-primary naxatw-text-sm naxatw-font-bold naxatw-leading-6 naxatw-text-primary-700 hover:naxatw-border hover:naxatw-border-white hover:naxatw-bg-primary-700 hover:naxatw-text-white active:naxatw-border active:naxatw-border-white active:naxatw-bg-primary-700 active:naxatw-text-white lg:naxatw-w-[160px] lg:naxatw-py-3 lg:naxatw-text-base">
            <Map className="naxatw-h-4 naxatw-w-4 md:naxatw-h-6 md:naxatw-w-6" />{' '}
            Explore Map
          </button>
        </div>
      </div>
    </div>
  );
}

export default Explore;

import location from '../../../assets/images/location.png';

function Explore() {
  return (
    <div className="container naxatw-mx-32 naxatw-mb-10 naxatw-h-[30vh] naxatw-w-[80%] naxatw-rounded-xl naxatw-bg-[#045bbf] naxatw-text-white">
      <div className="main naxatw-flex naxatw-justify-between">
        <div className="image_container naxatw-flex naxatw-h-[30vh] naxatw-w-[20%] naxatw-flex-col naxatw-items-center naxatw-justify-center">
          <img
            className="naxatw-h-20 naxatw-w-20"
            src={location}
            alt="location.png"
          />
        </div>
        <div className="text_container naxatw-flex naxatw-h-[30vh] naxatw-w-[60%] naxatw-flex-col naxatw-items-center naxatw-justify-center">
          <h2 className="naxatw-text-2xl">
            Interactive digital portal of projects in Karnali Province of Nepal
          </h2>
        </div>
        <div className="btn_container naxatw-flex naxatw-h-[30vh] naxatw-w-[20%] naxatw-flex-col naxatw-items-center naxatw-justify-center">
          <button className="naxatw-rounded-lg naxatw-bg-white naxatw-px-5 naxatw-py-2 naxatw-font-primary naxatw-text-sm naxatw-font-semibold naxatw-text-[#045bbf] hover:naxatw-border hover:naxatw-border-white hover:naxatw-bg-[#045bbf] hover:naxatw-text-white">
            Explore Map
          </button>
        </div>
      </div>
    </div>
  );
}

export default Explore;

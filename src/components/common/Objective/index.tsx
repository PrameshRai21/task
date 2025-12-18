import karnali_img from '../../../assets/images/chisapani.jpg';
import freelancer from '../../../assets/images/freelancer.png';
import data_collection from '../../../assets/images/data-collection.png';
import workshop from '../../../assets/images/workshop.png';
import ContentCard from '../Cards/ContentCard';

function Objective() {
  return (
    <div className="container naxatw-mx-5 naxatw-mb-5 naxatw-rounded-xl naxatw-bg-light-grey naxatw-p-8 lg:naxatw-mx-10 lg:naxatw-mb-10 lg:naxatw-p-14">
      {/* top content starts here */}
      <div className="top_content naxatw-flex naxatw-flex-col lg:naxatw-flex-row">
        <div className="text_content naxatw-flex naxatw-w-full naxatw-flex-col naxatw-items-center naxatw-justify-center  lg:naxatw-w-[60%] ">
          <div className="naxatw-flex naxatw-flex-col naxatw-gap-y-5">
            <h2 className="naxatw-my-3 naxatw-font-primary  naxatw-text-grey-900">
              This portal developed to identify the enabling factors of the
              development supported by development partners in Karnali Province
              of Nepal
            </h2>
            <p className="naxatw-font-primary naxatw-text-lg naxatw-leading-6 naxatw-text-grey-900 ">
              In the last few years, there has been a huge concern among the
              civil societies, government and international development partners
              about improving the quality of the life of people of Karnali.
              Nepal government along with the support of donor countries and
              multilateral funding agencies has invested the huge resources to
              the implementing development project through NGO/INGO and others.
              Many organizations including NGO/INGO have spent significant
              amount of resources towards accessing development initiatives
              through project intervention through provincial and municipal
              level.The focus of all these investments and efforts is to create
              equitable prosperous society but such investment is not always
              based on the proper assessment of local needs and expectations.
            </p>
          </div>
        </div>
        {/* image content starts here */}
        <div className="image_content min-h-96 naxatw-mb-10 naxatw-mt-5 naxatw-h-[350px] naxatw-w-full lg:naxatw-h-[540px] lg:naxatw-w-[488px]">
          <img
            className="naxatw-h-full naxatw-w-full naxatw-rounded-3xl "
            src={karnali_img}
            alt=""
          />
        </div>
      </div>
      {/* bottom content starts here */}
      <div className="bottom_content naxatw-my-3 lg:naxatw-my-5">
        <div className="title ">
          <h3 className=" naxatw-font-primary naxatw-text-grey-900">
            Objective
          </h3>
        </div>
        <div className="obj_content naxatw-flex naxatw-flex-col naxatw-justify-between naxatw-gap-10 lg:naxatw-flex-row">
          <ContentCard
            image={freelancer}
            alt="freelancer.png"
            text="Identifying the key actors to operate Project Database Portal."
          />
          <ContentCard
            image={data_collection}
            alt="data_collection.png"
            text="Collection of project related data from federal, provincial &
                municipal levels and validate into Project Database Portal."
          />
          <ContentCard
            image={workshop}
            alt="workshop.png"
            text="Capacitate provincial and municipal officials to handle Project
                Database Portal."
          />
        </div>
      </div>
    </div>
  );
}

export default Objective;

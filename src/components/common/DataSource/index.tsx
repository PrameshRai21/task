import emblem from '../../../assets/images/emblem.png';
import Card from '../Cards/Card';

function DataSource() {
  return (
    <div className="container naxatw-bg-light-blue naxatw-mx-8 naxatw-mb-5 naxatw-w-auto naxatw-rounded-2xl naxatw-px-5 naxatw-py-5 md:naxatw-mx-14 lg:naxatw-mx-32 lg:naxatw-mb-10 lg:naxatw-py-10">
      {/* top content starts here */}
      <div className="top_content naxatw-mb-3 naxatw-flex naxatw-justify-center lg:naxatw-mb-10">
        <div className="naxatw-flex naxatw-h-auto naxatw-w-[692px] naxatw-flex-col naxatw-gap-y-5 lg:naxatw-h-[192px] lg:naxatw-gap-y-10">
          <h1 className="naxatw-text-center naxatw-text-grey-900">
            Data Source
          </h1>
          <p className="naxatw-text-center naxatw-text-base naxatw-leading-5 naxatw-text-grey-900">
            A digital portal to identify the enabling factors of the development
            supported by development partners in Karnali Province of Nepal
          </p>
        </div>
      </div>
      {/* bottom content starts here */}
      <div className="bottom_content naxatw-my-4">
        {/* federal gov content starts here */}
        <div className="federal naxatw-flex naxatw-justify-center naxatw-py-2">
          <div className="naxatw-h-137px naxatw-w-[629px]">
            <div className="federal_content naxatw-flex naxatw-flex-col naxatw-gap-y-5  ">
              <div className="title">
                <p className="naxatw-text-light-red naxatw-text-center naxatw-font-primary naxatw-text-xs naxatw-font-bold naxatw-uppercase naxatw-leading-[1px] ">
                  Federal Government
                </p>
              </div>
              <div className="first_row naxatw-my-3">
                <div className="finance naxatw-flex naxatw-flex-col naxatw-items-start naxatw-justify-center naxatw-gap-5 md:naxatw-flex-row md:naxatw-gap-20">
                  <Card
                    image={emblem}
                    government="नेपाल सरकार"
                    depart="अर्थ मन्त्रालय"
                  />
                  <Card
                    image={emblem}
                    government="Nepal Government"
                    depart="Line Ministry Budget Information System"
                  />
                </div>
              </div>
            </div>
            <div className="second_row naxatw-my-3 naxatw-gap-3 lg:naxatw-my-5">
              <div className="finance naxatw-flex naxatw-flex-col naxatw-items-start naxatw-justify-center naxatw-gap-5 md:naxatw-flex-row md:naxatw-gap-20">
                <Card
                  image={emblem}
                  government="Government of Nepal"
                  depart="Aid Management System for Nepal"
                />
                <Card
                  image={emblem}
                  government="नेपाल सरकार"
                  depart="अर्थ मन्त्रालय"
                  office="महालेखा नियन्त्रक कार्यालय"
                />
              </div>
            </div>
          </div>
        </div>
        {/* provincial gov content starts here */}
        <div className="provincial_content ">
          <div className=" naxatw-mb-5 naxatw-flex naxatw-flex-col naxatw-gap-3 lg:naxatw-gap-y-5">
            <div className="title">
              <p className="naxatw-text-center naxatw-text-xs naxatw-font-bold naxatw-uppercase naxatw-text-red-500">
                Provincial Government
              </p>
            </div>
            <div className="finance naxatw-flex naxatw-flex-wrap naxatw-justify-between naxatw-gap-y-5  lg:naxatw-gap-x-5">
              <Card
                image={emblem}
                government="कर्णाली प्रदेश सरकार"
                depart="मुख्यमन्त्री तथा मन्त्रिपरिषद्को कार्यालय"
              />
              <Card
                image={emblem}
                government="Province Government"
                depart="Provincial Line Ministry Budget Information System"
              />
              <Card
                image={emblem}
                government="नेपाल सरकार"
                depart="अर्थ मन्त्रालय"
                office="महालेखा नियन्त्रक कार्यालय"
              />
            </div>
          </div>
        </div>
        {/* municipal content starts here */}
        <div className="municipal_content naxatw-mb-5">
          <div className="title">
            <p className="naxatw-text-center naxatw-text-xs naxatw-font-bold naxatw-uppercase naxatw-text-red-500">
              Municipal Government
            </p>
          </div>
          <div className="first_row naxatw-my-5">
            <div className="finance naxatw-flex naxatw-items-start naxatw-gap-20 md:naxatw-items-center md:naxatw-justify-center">
              <Card
                image={emblem}
                government="नेपाल सरकार"
                depart="स्थानीय सञ्चित कोष प्रणाली"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataSource;

import emblem from '../../../assets/images/emblem.png';
import Card from '../../common/Cards/Card';
import fed1 from '../../../assets/images/fed1.png';
import fed2 from '../../../assets/images/fed2.png';
import fed3 from '../../../assets/images/fed3.png';
import fed4 from '../../../assets/images/fed4.png';
import prov1 from '../../../assets/images/prov_1.png';
import prov2 from '../../../assets/images/prov_2.png';
import prov3 from '../../../assets/images/prov_3.png';
import mun from '../../../assets/images/mun_1.png';

function DataSource() {
  const firstFedGovData = [
    {
      title: 'नेपाल सरकार',
      subTitle: '',
      office: 'अर्थ मन्त्रालय',
      style: 'naxatw-w-[180px]',
    },
    {
      title: 'Nepal Government',
      subTitle: 'Line Ministry Budget Information System',
      office: '',
      style: ' naxatw-w-auto ',
    },
  ];
  const secondFedGovData = [
    {
      title: 'Government of Nepal',
      subTitle: 'Aid Management System for Nepal',
      office: '',
      style: ' ',
    },
    {
      title: 'नेपाल सरकार',
      subTitle: 'अर्थ मन्त्रालय',
      office: 'महालेखा नियन्त्रक कार्यालय',
      style: ' ',
    },
  ];

  const provGovData = [
    {
      title: 'कर्णाली प्रदेश सरकार',
      subTitle: '',
      office: 'मुख्यमन्त्री तथा मन्त्रिपरिषद्को कार्यालय',
      style: '',
    },
    {
      title: 'Province Government',
      subTitle: 'Provincial Line Ministry Budget Information System',
      office: '',
      style: '',
    },
    {
      title: 'नेपाल सरकार',
      subTitle: 'अर्थ मन्त्रालय',
      office: 'महालेखा नियन्त्रक कार्यालय',
      style: '',
    },
  ];
  return (
    <div className="container naxatw-mx-5 naxatw-mb-5 naxatw-w-auto naxatw-rounded-2xl naxatw-bg-light-blue naxatw-px-5 naxatw-py-5 md:naxatw-mx-14 lg:naxatw-mx-32 lg:naxatw-mb-10 lg:naxatw-py-10">
      {/* top content starts here */}
      <div className="top_content naxatw-mb-3 naxatw-flex naxatw-justify-center lg:naxatw-mb-5">
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
      <div className="bottom_content naxatw-flex naxatw-flex-col naxatw-gap-y-5 lg:naxatw-my-4 lg:naxatw-gap-y-10">
        <div className="all_content naxatw-items-starts lg:naxatw-gap-y-26 naxatw-flex naxatw-flex-col naxatw-justify-start naxatw-gap-y-10 naxatw-py-2 lg:naxatw-items-center lg:naxatw-justify-center">
          {/* federal gov content starts here */}
          <div className="fed_container naxatw-h-auto  lg:naxatw-w-[700px]">
            <div className="federal_content naxatw-flex naxatw-flex-col naxatw-items-start naxatw-justify-center naxatw-gap-y-3 lg:naxatw-gap-y-5  ">
              <div className="title naxatw-flex naxatw-w-full  naxatw-justify-center">
                <p className=" naxatw-font-primary naxatw-text-xs naxatw-font-bold naxatw-uppercase naxatw-leading-4 naxatw-tracking-[1px] naxatw-text-light-red">
                  Federal Government
                </p>
              </div>
              <div className="first_row ">
                <div className="finance naxatw-flex naxatw-flex-col naxatw-items-start  naxatw-justify-center naxatw-gap-5 md:naxatw-flex-row md:naxatw-gap-16">
                  <img src={fed1} alt="fed1.png" className="naxatw-h-9" />
                  <img src={fed2} alt="fed2.png" className="naxatw-h-9" />
                </div>
              </div>
              <div className="second_row  ">
                <div className="finance naxatw-flex naxatw-flex-col naxatw-items-start naxatw-gap-y-5  md:naxatw-flex-row md:naxatw-gap-16">
                  <img src={fed3} alt="fed3.png" className="naxatw-h-9" />
                  <img src={fed4} alt="fed4.png" className="naxatw-h-9" />
                </div>
              </div>
            </div>
          </div>
          {/* provincial gov content starts here */}
          <div className="provincial_content naxatw-flex naxatw-items-center naxatw-justify-center">
            <div className="naxatw-flex naxatw-w-auto naxatw-flex-col naxatw-gap-y-3 lg:naxatw-gap-y-5 xl:naxatw-w-[900px]">
              <div className="title">
                <p className="naxatw-text-center naxatw-text-xs naxatw-font-bold naxatw-uppercase naxatw-leading-5 naxatw-tracking-[1px] naxatw-text-red-500 lg:naxatw-leading-8">
                  Provincial Government
                </p>
              </div>
              <div className="finance naxatw-flex naxatw-flex-wrap naxatw-justify-between naxatw-gap-y-5 lg:naxatw-flex-wrap  lg:naxatw-gap-x-5">
                <img src={prov1} alt="fed4.png" className="naxatw-h-9" />
                <img src={prov2} alt="fed4.png" className="naxatw-h-9" />
                <img src={prov3} alt="fed4.png" className="naxatw-h-9" />
              </div>
            </div>
          </div>
          {/* municipal content starts here */}
          <div className="municipal_content naxatw-mb-5">
            <div className="title">
              <p className="naxatw-text-center naxatw-text-xs naxatw-font-bold naxatw-uppercase naxatw-leading-5 naxatw-tracking-[1px] naxatw-text-red-500">
                Municipal Government
              </p>
            </div>
            <div className="first_row naxatw-my-5">
              <div className="finance naxatw-flex naxatw-items-start naxatw-gap-20 md:naxatw-items-center md:naxatw-justify-center">
                <img src={mun} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataSource;

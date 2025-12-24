import Banner from '@Components/web_layout/Banner';
import DataSource from '@Components/web_layout/DataSource';
import Explore from '@Components/web_layout/Explore';
import Footer from '@Components/web_layout/Footer';
import Objective from '@Components/web_layout/Objective';

export default function Dashboard() {
  return (
    <>
      <Banner />
      <Objective />
      <DataSource />
      <Explore />
      <Footer />
    </>
  );
}

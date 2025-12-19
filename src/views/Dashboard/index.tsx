import Banner from '@Components/common/Banner';
import DataSource from '@Components/common/DataSource';
import Explore from '@Components/common/Explore';
import Footer from '@Components/common/Footer';
import Objective from '@Components/common/Objective';

export default function Dashboard() {
  return (
    <div>
      <div>
        <Banner />
        <Objective />
        <DataSource />
        <Explore />
        <Footer />
      </div>
    </div>
  );
}

import Header from './../Components/Header';
import Footer from './../Components/Footer';
import KegList from '../Components/KegList';

function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <KegList />
      <Footer />
    </div>
  );
}

export default Home;
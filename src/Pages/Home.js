import Header from './../Components/Header';
import Footer from './../Components/Footer';
import KegList from '../Components/KegList';
import KegForm from '../Components/KegForm';

function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <KegList />
      <KegForm />
      <Footer />
    </div>
  );
}

export default Home;
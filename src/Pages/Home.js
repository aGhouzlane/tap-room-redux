import Header from './../Components/Header';
import Footer from './../Components/Footer';

import KegControl from "./../Components/KegControl";

function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <KegControl />
      <Footer />
    </div>
  );
}

export default Home;
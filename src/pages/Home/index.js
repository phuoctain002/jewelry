import Header from '~/components/Layout/DefaultLayout/Header';
import Slider from '~/components/Layout/DefaultLayout/Slider';
import HomeContent from '~/components/Layout/DefaultLayout/HomeContent';
import Footer from '~/components/Layout/DefaultLayout/Footer';

function Home() {
    return (
        <>
            <Header />
            <Slider />
            <HomeContent />
            <Footer />
        </>
    );
}

export default Home;

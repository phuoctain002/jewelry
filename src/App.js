import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '~/base.css';
import '~/main.css';
import Header from './components/Layout/DefaultLayout/Header';
import Slider from './components/Layout/DefaultLayout/Slider';
import HomeContent from './components/Layout/DefaultLayout/HomeContent';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Slider />
                <HomeContent />
                <Routes>
                    {/* {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })} */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

import { Fragment } from "react";
import "./App.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { publicRoutes } from "./routes/index.router";
import DefaultLayout from "./components/layout/DefaultLayout";

// import DefaultLayOut from "./components/layout/DefaultLayout";

function App() {
    return (
        <Router>
            <div className="App">
                
                <Routes>
                    {publicRoutes.map((route, index) => {
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
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

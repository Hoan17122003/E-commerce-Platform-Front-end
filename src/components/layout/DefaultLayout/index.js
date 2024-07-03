// import { Header } from "../components";
// import { Search } from "../components";
import { Fragment } from "react";
import Header from "../components/header/header";
import Search from "../components/search/search";
import Content from "../ContentLayout/content";

// import { allProduct } from "../../../core/services/product.service";

function DefaultLayout() {
    // const data = allProduct();
    return (
        <Fragment>
            <Header />
            <Content />
        </Fragment>
    );
}

export default DefaultLayout;

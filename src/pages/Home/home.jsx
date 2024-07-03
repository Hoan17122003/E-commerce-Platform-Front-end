import { Fragment } from "react";
// import DefaultLayout from "../components/layout/DefaultLayout";
// import { allProduct } from "../../core/services";
// import { ProductService } from "../../core/services/product";

async function Home() {
    // const dataProduct = await allProduct();
    // // console.log("data product:", dataProduct);
    // const productService = new ProductService();
    // const products = await productService.getProducts();

    return (
        <div className="home">
            {/* {products.map((product, index) => {
                return (
                    <div className={`item-${index}`}>
                        <div className="tensanpham">product.TenSanPham</div>
                        <div className="giaban">product.GiaBan</div>
                    </div>
                );
            })} */}
        </div>
    );
}

export default Home;

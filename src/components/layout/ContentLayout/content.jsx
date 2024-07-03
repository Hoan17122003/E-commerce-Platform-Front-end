import { Fragment, useEffect, useState, useLayoutEffect } from "react";
import ProductService from "~/core/services/product.service.tsx";
import Styles from "./content.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(Styles);

function Content() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const pageSize = 5;

    useLayoutEffect(() => {
        const getdata = async () => {
            const productService = new ProductService();
            const products = await productService.getProducts(page, pageSize);
            console.log("products : ", products);
            setProducts(products);
            return;
        };
        getdata();
    }, []);

    return (
        <Fragment>
            <div className={cx("Products")}>
                {products.map((element, index) => {
                    return (
                        <Link
                            key={index}
                            className={cx(`Product${index}`)}
                            to={`Product/${element.TenSanPham}-${element.MaSanPham}`}
                        >
                            <img src={`${element.AnhSanPham}`} alt="ảnh bị lỗi" />
                            <div>{element.TenSanPham || element.albumId}</div>
                            <div>{element.GiaBan || element.id}</div>
                        </Link>
                    );
                })}
            </div>
        </Fragment>
    );
}

export default Content;

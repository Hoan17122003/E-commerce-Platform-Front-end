import { Fragment, useRef, useState } from "react";
import classNames from "classnames/bind";
import Styles from "./signup.module.scss";
import Header from "~/components/layout/components/header/header.jsx";

const cx = classNames.bind(Styles);

export default function SignUp() {
    //TenDangNhap,TenTaiKhoan,MatKhau,VaiTro,Email,SDT,NgayThangNamSinh,DiaChi

    const [vaiTro, setVaiTro] = useState("NguoiMuaHang");
    const handleVaiTroChange = (event) => {
        setVaiTro(event.target.value); // Cập nhật state khi thay đổi dropdown
    };

    return (
        <Fragment>
            <div className={cx("container")}>
                <Header dissableSignUp_login={true} />
                <div className={cx("box")}>
                    <div className="TenDangNhap">
                        <label>Tên đăng nhập:</label>
                        <input type="text" placeholder="Tên đăng nhập" />
                    </div>
                    <div className="TenTaiKhoan">
                        <label>Tên tài khoản:</label>
                        <input type="text" placeholder="Tên tài khoản" />
                    </div>
                    <div className="MatKhau">
                        <label>Mật khẩu:</label>
                        <input type="password" placeholder="Mật khẩu" />
                    </div>
                    <div className="VaiTro">
                        <label htmlFor="vaitro">Vai trò:</label>
                        <select
                            name="vaitro"
                            value={vaiTro} // Thêm giá trị từ state
                            onChange={handleVaiTroChange} // Lắng nghe sự thay đổi
                        >
                            <option value="NguoiMuaHang">Người Mua Hàng</option>
                            <option value="NguoiBanHang">Người Bán Hàng</option>
                        </select>
                    </div>
                    <div className="Email">
                        <label>Email:</label>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="SDT">
                        <label>Số điện thoại:</label>
                        <input type="tel" placeholder="Số điện thoại" />
                    </div>
                    <div className="NgayThangNamSinh">
                        <label>Ngày tháng năm sinh:</label>
                        <input type="date" placeholder="Ngày tháng năm sinh" />
                    </div>
                    {vaiTro === "NguoiBanHang" && (
                        <div className="DiaChi">
                            <label>Địa chỉ:</label>
                            <input type="text" placeholder="Địa chỉ" />
                        </div>
                    )}
                    <div className={cx("btn")}>
                        {/* <button>Đăng ký</button> */}
                        <div className={cx("block")}>
                            <button type="submit" className={cx("btn", "btn-1", "color-green")}>
                                <svg>
                                    <rect x="0" y="0" fill="none" width="100%" height="100%" />
                                </svg>
                                Đăng Kí
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

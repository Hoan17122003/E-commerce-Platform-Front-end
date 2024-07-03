import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark, faSpinner, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Styles from "./AccountItem.module.scss";
import Image from '~/components/image/Image.jsx'

const cx = classNames.bind(Styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
            <Image className={cx("avatar")} src={data.avatar} alt="images" />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />}
                </h4>
                <span className={cx("username")}>{data.full_name}</span>
            </div>
        </Link>
    );
}

export default AccountItem;

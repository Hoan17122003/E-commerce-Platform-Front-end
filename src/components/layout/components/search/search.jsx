// import classNames from "classnames/bind";
// import Styles from "./search.module.scss";

// const cx = classNames.bind(Styles);

// function Search() {
//     return (
//         <div className={cx("search")}>
//             <div className={cx('logo')}>

//             </div>
//             <input className={cx("search-input")} type="text" placeholder="search is new" />
//             <input type="button" className={cx("search-button")} />
//         </div>
//     );
// }

// export default Search;

import { useState, useEffect, useRef, useMemo } from "react";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AccountItem from "../../../AccountItem/index";
import { Wrapper as PopperWrapper, Menu as PoperMenu } from "~/components/poper/index";
import styles from "./search.module.scss";

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const handleNotReRender = useMemo(() => {});

    const handleClear = () => {
        setSearchValue("");
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResults(false);
    };

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((data) => {
                if (data.status == 200) return data.json();
                // Promise.reject(() => {});
            })
            .then((data) => {
                setSearchResult(data.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);
    console.log(searchResult);

    return (
        <Tippy
            interactive
            visible={showResults && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                    {showResults && (
                        <PopperWrapper>
                            <h4 className={cx("search-title")}>accounts</h4>
                            {searchResult.map((value) => (
                                <AccountItem data={value} key={value.id} />
                            ))}
                        </PopperWrapper>
                    )}
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx("search")}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResults(true)}
                />
                {!!searchValue & !loading && (
                    <button className={cx("clear")} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* loading */}
                {loading && <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />}

                <button className={cx("search-btn")}>{<FontAwesomeIcon icon={faMagnifyingGlass} />}</button>
            </div>
        </Tippy>
    );
}

export default Search;

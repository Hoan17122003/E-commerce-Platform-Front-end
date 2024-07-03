import { createContext } from 'react';
import classNames from 'classnames/bind';
import './GlobalStyle.scss';
import LayoutStyles from './GlobalStyleLayout.module.scss';

const cx = classNames.bind(LayoutStyles);
export const GlobalStyleProvider = createContext();

function GlobalStyles({ children }) {
    const d_f = cx('d_f');

    return <GlobalStyleProvider.Provider value={d_f}>{children}</GlobalStyleProvider.Provider>;
}

export default GlobalStyles;
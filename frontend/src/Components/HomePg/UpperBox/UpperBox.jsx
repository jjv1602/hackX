import React from 'react';
import st from './UpperBox.module.css';
import { AiOutlineSearch, AiOutlineCalendar } from 'react-icons/ai';

const UpperBox = (props) => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const currentDate = `${day}-${month}-${year}`;
    return (
        <div className={st.par}>
            <div className={st.searchBar}>
                <input
                    type="text"
                    placeholder="Search..."
                    className={st.searchInput}
                />
                <button className={st.searchButton}>
                    <AiOutlineSearch size={'1.2em'} />
                </button>
            </div>
            <div className={st.calendar}>
                <AiOutlineCalendar size={'6vh'} />
                <div id={st.date}>{currentDate}</div>
            </div>
        </div>
    );
};

export default UpperBox;

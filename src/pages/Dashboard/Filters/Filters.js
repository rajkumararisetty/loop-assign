import React from 'react';
import Gender from './Gender/Gender';
import Categories from './Categories/Categories';
import Brand from './Brand/Brand';
import classes from './filters.module.css';

const Filters = () => {
    return (
        <div className={`${classes.filters} sticky-sm-top d-flex flex-column align-items-center border-end`}>
            <div className={`${classes.filtersTitle} ${classes.filterItem} d-flex align-items-center justify-content-center border-bottom`}>Filters</div>
            <Gender />
            <Categories />
            <Brand />
        </div>
    );
};

export default Filters;

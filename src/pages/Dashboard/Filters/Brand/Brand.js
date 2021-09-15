import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormGroup, Label, Input } from 'reactstrap';
import { brandSelector, updateFilters } from '../../../../slices/products';
import classes from '../filters.module.css';

const Brand = () => {
    const brands = useSelector(brandSelector);
    const selected = useSelector(state => state.products.filters.brand);
    const dispatch = useDispatch();

    const onChecked = (event) => {
        const value = event.target.value;
        let newSelected = [];
        if (selected.includes(value)) {
            newSelected = selected.filter((each) => (each !== value));
        } else {
            newSelected = [...selected, value];
        }
        dispatch(updateFilters({type: 'brand', filters: newSelected}));
    };

    return (
        <div className={classes.filterItem}>
            <h5>BRAND</h5>
            <div className={classes.filterItemBody}>
                {brands.map((brand) => (
                    <FormGroup key={brand}>
                        <Label>
                            <Input
                                type="checkbox"
                                value={brand}
                                checked={selected.includes(brand)}
                                onChange={onChecked}
                            />
                            {' '}
                            {brand}
                        </Label>
                    </FormGroup>
                ))}
            </div>
        </div>
    );
};

export default Brand;

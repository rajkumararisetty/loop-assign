import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { FormGroup, Label, Input } from 'reactstrap';
import { categoriesSelector, updateFilters } from '../../../../slices/products';
import classes from '../filters.module.css';

const Categories = () => {
    const categories = useSelector(categoriesSelector);
    const selected = useSelector(state => state.products.filters.categories);
    const dispatch = useDispatch();

    const onChecked = (event) => {
        const value = event.target.value;
        let newSelected = [];
        if (selected.includes(value)) {
            newSelected = selected.filter((each) => (each !== value));
        } else {
            newSelected = [...selected, value];
        }
        dispatch(updateFilters({type: 'categories', filters: newSelected}));
    };

    return (
        <div className={classes.filterItem}>
            <h5>CATEGORIES</h5>
            <div className={classes.filterItemBody}>
                {categories.map((category) => (
                    <FormGroup key={category}>
                        <Label>
                            <Input
                                type="checkbox"
                                value={category}
                                checked={selected.includes(category)}
                                onChange={onChecked}
                            />
                            {' '}
                            {category}
                        </Label>
                    </FormGroup>
                ))}
            </div>
        </div>
    );
};

export default Categories;

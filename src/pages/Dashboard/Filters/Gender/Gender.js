import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormGroup, Label, Input } from 'reactstrap';
import { genderSelector, updateFilters } from '../../../../slices/products';
import classes from '../filters.module.css';

const Gender = () => {
    const genders = useSelector(genderSelector);
    const selected = useSelector(state => state.products.filters.gender);
    const dispatch = useDispatch();

    return (
        <div className={classes.filterItem}>
            {genders.map((each) => (
                <FormGroup key={each}>
                    <Label>
                        <Input
                            type="radio"
                            value={each}
                            checked={each === selected}
                            onChange={(event) => dispatch(updateFilters({type: 'gender', filters: event.target.value}))}
                        />
                        {' '}
                        {each}
                    </Label>
                </FormGroup>
            ))}
        </div>
    );
};

export default Gender;

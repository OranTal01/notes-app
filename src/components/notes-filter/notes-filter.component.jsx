import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAlphabetically } from '../../redux/filters/filter-notes.action';
import { DATE } from '../../redux/filters/filter-notes.types';
import { filterItemsSelector } from '../../redux/filters/filter-notes.selectors';
import { Link } from "react-router-dom";
import CustomButton from '../custom-button/custom-button.component';
import './notes-filter.style.scss';


const NotesFilter = ({ filter, setText, sortByDate, sortByAlphabetically }) => {
    const handelOnSelect = (e) => {
        const sortBy = e.target.value;
        if (sortBy === DATE) {
            return sortByDate()
        } else {
            return sortByAlphabetically()
        }
    }
    return (
        <div className="container">
            <input
                className="input"
                placeholder="Search Note"
                type="text"
                name="search"
                value={ filter.text }
                onChange={ (e) => setText(e.target.value) }
            />
            <select
                className="dropdown"
                onChange={ handelOnSelect }
                value={ filter.sortBy }
                name="sortBy">
                <option value="date">Sort By Date</option>
                <option value="alphabetically">Sort By Alphabetically</option>
            </select>
            <CustomButton
                customButton
                inverted>
                <Link
                    to='/add-note'>
                    Add Note
            </Link>
            </CustomButton>
        </div>
    );
};

const mapStateToProps = (state) => ({
    filter: filterItemsSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    setText: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAlphabetically: () => dispatch(sortByAlphabetically())
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesFilter);
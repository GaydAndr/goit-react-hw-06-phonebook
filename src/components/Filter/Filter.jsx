// import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from 'redux/contacts/contacts-selectors';
import { filterContact } from 'redux/contacts/contscts-actions';

export const Filter = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  return (
    <label htmlFor="filter" className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={s.input}
        value={filter}
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </label>
  );
};

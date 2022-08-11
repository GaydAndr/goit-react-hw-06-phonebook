import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  filterSelector,
  itemsSelector,
} from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contscts-actions';
import { useMemo } from 'react';

export const ContactList = () => {
  const items = useSelector(itemsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  // const contacts = items.filter(({ name }) => {
  //   return name.toLowerCase().includes(filter.toLowerCase());
  // });

  const contacts = useMemo(
    () =>
      items.filter(({ name }) => {
        return name.toLowerCase().includes(filter.toLowerCase());
      }),
    [items, filter]
  );

  return (
    <ul className={s.contact__list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contact__item}>
            <p>
              <span>{name}: </span>
              <span>{number} </span>
            </p>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              className={s.btn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

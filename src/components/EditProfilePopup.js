import React, { useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import useFormWithValidations from '../validationHook/UseFormWithValidations';
import {editProfileStartingValues} from '../utils/constants';

function EditProfilePopup({ isOpen, isClose, onUpdateUser }) {
    const currentUser = useContext(CurrentUserContext);

    const { values,
        setValues,
        errText,
        isErrs,
        handleChangeValue,
        resetErrs } = useFormWithValidations(editProfileStartingValues);

    useEffect(() => {
        if (currentUser.name && currentUser.about && isOpen) {
            setValues({ firstname: currentUser.name, work: currentUser.about });
            resetErrs();
        }
    }, [currentUser, isOpen]);


    // useEffect(() => {
    //     if (!!currentUser && !!currentUser.name && !!currentUser.about && isOpen) {
    //         setValues({ firstname: currentUser.name, work: currentUser.about });
    //         resetErrs();
    //     }
    // }, [currentUser, isOpen]);


    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({ name: values["firstname"], about: values["work"] });
    }

    return (
        <PopupWithForm
            name="popup_place_profile"
            title="Редактировать профиль"
            buttonText="Сохранить"
            isOpen={isOpen}
            isClose={isClose}
            onSubmit={handleSubmit}
        >
            <input placeholder="Имя"
                name="firstname"
                onChange={handleChangeValue}
                type="text"
                id="name-input"
                className={`form__input form__input_type_name ${isErrs["firstname"] ? "form__input_type_error" : ''}`}
                value={values["firstname"]}
                required
                minLength="2"
                maxLength="40"
            />
            <span id="name-input-error"
                className={`form__error ${isErrs["firstname"] ? "form__error_visible" : ''}`}>{errText["firstname"]}</span>
            <input placeholder="О себе"
                name="work"
                onChange={handleChangeValue}
                type="text"
                id="activity-input"
                className={`form__input form__input_type_activity ${isErrs["work"] ? "form__input_type_error" : ''}`}
                value={values["work"]}
                required
                minLength="2"
                maxLength="200"
            />
            <span id="activity-input-error"
                className={`form__error ${isErrs["work"] ? "form__error_visible" : ''}`}>{errText["work"]}</span>
            <button type="submit"
                className={`form__button ${Object.values(isErrs).some((item) => item) ? 'form__button_disabled' : ''}`}
                name="save"
                aria-label="Сохранить"
                disabled={Object.values(isErrs).some((item) => item)}>Сохранить</button>
        </PopupWithForm>
    );
}

export default EditProfilePopup;
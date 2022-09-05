import React from 'react';
import { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';
import useFormWithValidations from '../validationHook/UseFormWithValidations';
import { addPlaceStartingValues } from '../utils/constants';

function AddPlacePopup({ isOpen, isClose, onAddPlace }) {
    const addPlaceNameRef = useRef();
    const addPlaceLinkRef = useRef();
    const { setValues, errText, isErrs, handleChangeValue } 
    = useFormWithValidations(addPlaceStartingValues);

    function handleAddPlaceSubmit(e) {
        e.preventDefault();
        onAddPlace({name: addPlaceNameRef.current.value, link: addPlaceLinkRef.current.value});
        addPlaceNameRef.current.value = '';
        addPlaceLinkRef.current.value = '';
    }

    useEffect(() => {
        if (isOpen) {
            setValues({ newPlace: '', linkPlace: '' });
        }
    }, [isOpen]);

    return (
        <PopupWithForm
            name="popup_place_add-card"
            title="Новое место"
            buttonText="Создать"
            isOpen={isOpen}
            isClose={isClose}
            onSubmit={handleAddPlaceSubmit}
        >
            <input
                name="newPlace"
                type="text"
                id="place-input"
                className={`form__input form__input_type_place ${isErrs["newPlace"] ? "form__input_type_error" : ''}`}
                // value={values["newPlace"]}
                onChange={handleChangeValue}
                ref={addPlaceNameRef}
                placeholder="Название"
                required
                minLength="2"
                maxLength="40"
            />

            <span
                id="place-input-error"
                className={`form__error ${isErrs["newPlace"] ? "form__error_visible" : ''}`}>
                {errText["newPlace"]}
            </span>

            <input
                name="linkPlace"
                type="url"
                id="link-input"
                ref={addPlaceLinkRef}
                className={`form__input form__input_type_link-place ${isErrs["linkPlace"] ? "form__input_type_error" : ''}`}
                // value={values["linkPlace"]}
                onChange={handleChangeValue}
                placeholder="Ссылка на картинку"
                required
            />

            <span
                id="link-input-error"
                className={`form__error ${isErrs["linkPlace"] ? "form__error_visible" : ''}`}>
                {errText["linkPlace"]}
            </span>

            <button type="submit"
                className={`form__button ${Object.values(isErrs).some((item) => item) ? 'form__button_disabled' : ''}`}
                name="save" aria-label="Создать" disabled={Object.values(isErrs).some((item) => item)}>
                Создать
            </button>

        </PopupWithForm>
    );
}

export default AddPlacePopup;
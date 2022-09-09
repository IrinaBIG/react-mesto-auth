import React from 'react';
import { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { useFormAndValidation } from '../hooks/useFormAndValidation';
import { addPlaceStartingValues } from '../utils/constants';

// Геннадий Барсегян, здравствуйте! в задании к ПР 11 написано, что этот попап я могу реализовать
// как желаю (абзац третий раздела "Сохраните данные" пункта 5 задания к пр 11). я его переделала. 
// но мой вариант имел место быть. 

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {

    const { values, handleChange, errors, isValid, setValues, resetForm }
        = useFormAndValidation(addPlaceStartingValues);

    useEffect(() => {
        if (isOpen) {
            resetForm();
            setValues({ newPlace: '', linkPlace: '' });
        }
    }, [isOpen]);

    function handleAddPlaceSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        onAddPlace({ name: values["newPlace"], link: values["linkPlace"] });
    }

    return (
        <PopupWithForm
            name="popup_place_add-card"
            title="Новое место"
            buttonText={isLoading ? 'Создание...' : 'Создать'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleAddPlaceSubmit}
            isDisabled={Object.values(errors).some((item) => item)}
        >
            <input
                name="newPlace"
                type="text"
                id="place-input"
                className={`form__input form__input_type_place ${errors["newPlace"] ? "form__input_type_error" : ''}`}
                value={values["newPlace"] || ''}
                onChange={handleChange}
                placeholder="Название"
                required
                minLength="2"
                maxLength="40"
            />

            <span
                id="place-input-error"
                className={`form__error ${errors["newPlace"] ? "form__error_visible" : ''}`}>
                {errors["newPlace"]}
            </span>

            <input
                name="linkPlace"
                type="url"
                id="link-input"
                className={`form__input form__input_type_link-place ${errors["linkPlace"] ? "form__input_type_error" : ''}`}
                value={values["linkPlace"] || ''}
                onChange={handleChange}
                placeholder="Ссылка на картинку"
                required
            />

            <span
                id="link-input-error"
                className={`form__error ${errors["linkPlace"] ? "form__error_visible" : ''}`}>
                {errors["linkPlace"]}
            </span>

        </PopupWithForm>
    );
}

export default AddPlacePopup;
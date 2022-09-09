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
            setValues({ newPlace: '', linkPlace: '' });
            // resetForm();
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



// import React from 'react';
// import { useEffect } from 'react';
// import PopupWithForm from './PopupWithForm';
// import useFormWithValidations from '../validationHook/UseFormWithValidations';
// import { addPlaceStartingValues } from '../utils/constants';

// // Геннадий Барсегян, здравствуйте! в задании к ПР 11 написано, что этот попап я могу реализовать
// // как желаю (абзац третий раздела "Сохраните данные" пункта 5 задания к пр 11). я его переделала. 
// // но мой вариант имеет место "жить". 

// function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {

//     const { values,
//         setValues,
//         errText,
//         isErrs,
//         handleChangeValue,
//         resetErrs } = useFormWithValidations(addPlaceStartingValues);

//     useEffect(() => {
//         if (isOpen) {
//             setValues({ newPlace: '', linkPlace: '' });
//             resetErrs();
//         }
//     }, [isOpen]);

//     function handleAddPlaceSubmit(e) {
//         // Запрещаем браузеру переходить по адресу формы
//         e.preventDefault();
//         // Передаём значения управляемых компонентов во внешний обработчик
//         onAddPlace({ name: values["newPlace"], link: values["linkPlace"] });
//     }

//     return (
//         <PopupWithForm
//             name="popup_place_add-card"
//             title="Новое место"
//             buttonText={isLoading ? 'Создание...' : 'Создать'}
//             isOpen={isOpen}
//             onClose={onClose}
//             onSubmit={handleAddPlaceSubmit}
//         >
//             <input
//                 name="newPlace"
//                 type="text"
//                 id="place-input"
//                 className={`form__input form__input_type_place ${isErrs["newPlace"] ? "form__input_type_error" : ''}`}
//                 value={values["newPlace"] || ''}
//                 onChange={handleChangeValue}
//                 placeholder="Название"
//                 required
//                 minLength="2"
//                 maxLength="40"
//             />

//             <span
//                 id="place-input-error"
//                 className={`form__error ${isErrs["newPlace"] ? "form__error_visible" : ''}`}>
//                 {errText["newPlace"]}
//             </span>

//             <input
//                 name="linkPlace"
//                 type="url"
//                 id="link-input"
//                 className={`form__input form__input_type_link-place ${isErrs["linkPlace"] ? "form__input_type_error" : ''}`}
//                 value={values["linkPlace"] || ''}
//                 onChange={handleChangeValue}
//                 placeholder="Ссылка на картинку"
//                 required
//             />

//             <span
//                 id="link-input-error"
//                 className={`form__error ${isErrs["linkPlace"] ? "form__error_visible" : ''}`}>
//                 {errText["linkPlace"]}
//             </span>

//             {/* <button type="submit"
//                 className={`form__button ${Object.values(isErrs).some((item) => item) ? 'form__button_disabled' : ''}`}
//                 name="save" aria-label="Создать" disabled={Object.values(isErrs).some((item) => item)}>
//                 {isLoading ? 'Создание...' : 'Создать'}
//             </button> */}

//         </PopupWithForm>
//     );
// }

// export default AddPlacePopup;

// function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
//     const addPlaceNameRef = useRef();
//     const addPlaceLinkRef = useRef();
//     const { values, setValues, errText, isErrs, handleChangeValue } 
//     = useFormWithValidations(addPlaceStartingValues);

//     function handleAddPlaceSubmit(e) {
//         e.preventDefault();
//         onAddPlace({name: addPlaceNameRef.current.value, link: addPlaceLinkRef.current.value});
//         addPlaceNameRef.current.value = '';
//         addPlaceLinkRef.current.value = '';
//     }

//     useEffect(() => {
//         if (isOpen) {
//             setValues({ newPlace: '', linkPlace: '' });
//         }
//     }, [isOpen]);

//     return (
//         <PopupWithForm
//             name="popup_place_add-card"
//             title="Новое место"
//             buttonText="Создать"
//             isOpen={isOpen}
//             onClose={onClose}
//             onSubmit={handleAddPlaceSubmit}
//         >
//             <input
//                 name="newPlace"
//                 type="text"
//                 id="place-input"
//                 className={`form__input form__input_type_place ${isErrs["newPlace"] ? "form__input_type_error" : ''}`}
//                 value={values["newPlace"]}
//                 onChange={handleChangeValue}
//                 ref={addPlaceNameRef}
//                 placeholder="Название"
//                 required
//                 minLength="2"
//                 maxLength="40"
//             />

//             <span
//                 id="place-input-error"
//                 className={`form__error ${isErrs["newPlace"] ? "form__error_visible" : ''}`}>
//                 {errText["newPlace"]}
//             </span>

//             <input
//                 name="linkPlace"
//                 type="url"
//                 id="link-input"
//                 ref={addPlaceLinkRef}
//                 className={`form__input form__input_type_link-place ${isErrs["linkPlace"] ? "form__input_type_error" : ''}`}
//                 value={values["linkPlace"]}
//                 onChange={handleChangeValue}
//                 placeholder="Ссылка на картинку"
//                 required
//             />

//             <span
//                 id="link-input-error"
//                 className={`form__error ${isErrs["linkPlace"] ? "form__error_visible" : ''}`}>
//                 {errText["linkPlace"]}
//             </span>

//             <button type="submit"
//                 className={`form__button ${Object.values(isErrs).some((item) => item) ? 'form__button_disabled' : ''}`}
//                 name="save" aria-label="Создать" disabled={Object.values(isErrs).some((item) => item)}>
//                 Создать
//             </button>

//         </PopupWithForm>
//     );
// }
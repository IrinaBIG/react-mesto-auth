import PopupWithForm from './PopupWithForm';

function WithConfirmationPopup({ isOpen, isClose, onSubmit }) {

    function handleSubmit(card) {
        onSubmit(card);
    }

    return (
        <PopupWithForm
            name="popup_confirmation"
            title="Вы уверены?"
            isOpen={isOpen}
            isClose={isClose}
            onSubmit={handleSubmit}
        >
            <button type="submit" className="form__button" name="save" aria-label="Да">Да</button>
        </PopupWithForm>
    );
}

export default WithConfirmationPopup;
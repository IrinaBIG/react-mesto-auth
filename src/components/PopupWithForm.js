function PopupWithForm({ name, title, children, isOpen, isClose, onSubmit }) {
    function handleCloseOverlay(e) {
        if (e.target === e.currentTarget) {
            isClose();
        }
    }
    return (
        <div className={`popup ${name} ${isOpen && "popup_is-active"}`} onMouseDown={handleCloseOverlay} >
            <div className="popup__content">
                <button className="popup__close" type="button" onClick={isClose}></button>
                <h4 className="popup__title">{title}</h4>
                <form className="form" id="profile-form" name={name} onSubmit={onSubmit} noValidate>
                    {children}
                    {/* <button type="submit" className="form__button" name="save" aria-label="{buttonText}">{buttonText}</button> */}
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;
function InfoToolTip({isOpen, isClose, name, text}) {

    function handleCloseOverlay(evt) {
        if (evt.target === evt.currentTarget) {
            isClose();
        }
    }

  return (
        <div className={`popup popup__place_tooltip  ${isOpen && "popup_is-active"}}`} onMouseDown={handleCloseOverlay}>
          
                <div className="popup__content">
                    <img className="popup__image_tooltip-success" alt="Успешная регистрация" />
                    <h4 className="popup__title popup__title_place_tooltip">Вы успешно зарегистрировались!</h4>
                </div>
          
        </div>
    )

    // return (
    //     <div className={`popup popup__place_tooltip  ${isOpen && "popup_is-active"}}`} onMouseDown={handleCloseOverlay}>
    //             <div className="popup__content">
    //                 <img className={`popup ${name}`} alt={text} />
    //                 <h4 className="popup__title popup__title_place_tooltip">{text}</h4>
    //             </div>
    //     </div>
    // )

    // return (
    //     <div className={`popup popup__place_tooltip  ${isOpen && "popup_is-active"}}`} onMouseDown={handleCloseOverlay}>
    //         if () {
    //             <div className="popup__content">
    //                 <img className="popup__image_tooltip-success" alt="Успешная регистрация" />
    //                 <h4 className="popup__title popup__title_place_tooltip">Вы успешно зарегистрировались!</h4>
    //             </div>
    //         } else {
    //             <div className="popup__content">
    //                 <img className="popup__image_tooltip-fail" alt="Ошибка в регистрации" />
    //                 <h4 className="popup__title popup__title_place_tooltip">Что-то пошло не так! Попробуйте ещё раз.</h4>
    //             </div>
    //         }
    //     </div>
    // )
}

export default InfoToolTip;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as auth from '../utils/auth';
import { useHistory } from 'react-router';

function Register({ onTooltipPlace, setIfRegOk, handleRegister }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    // function handleClickRegister() {
    //     onTooltipPlace();
    // }

    function handleSubmit(e) {
        e.preventDefault();
        handleRegister(password, email);
    }
    // function handleClickRegister() {
    //     onTooltipPlace();
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     if (password, email) {
    //         auth.register(password, email)
    //             .then((res) => {
    //                 if (res.data) {
    //                     // console.log(res);
    //                     setIfRegOk(true);
    //                     history.push('/sign-in');
    //                 }
    //             })
    //             .catch((err) => {
    //                 setIfRegOk(false);
    //                 console.log(err);
    //             })
    //             .finally(() => {
    //                 handleClickRegister();
    //             })
    //     }
    // }
    
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     if (password, email) {
    //         auth.register(password, email)
    //             .then((res) => {
    //                 if (res.data) {
    //                     // console.log(res);
    //                     setIfRegOk(true);
    //                     handleClickRegister();
    //                     history.push('/sign-in');
    //                 } else {
    //                     handleClickRegister();
    //                 }
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             })
    //     }
    // }

    return (
        <div className="start-page">
            <p className="start-page__title">
                Регистрация
            </p>
            <form onSubmit={handleSubmit} className="start-page__form">
                <input placeholder="Email"
                    name="emailInput"
                    onChange={handleChangeEmail}
                    type="email"
                    className="start-page__input"
                    value={email}
                    required
                />
                <input placeholder="Пароль"
                    name="passwordInput"
                    onChange={handleChangePassword}
                    type="password"
                    className="start-page__input"
                    value={password}
                    required
                />
                <button type="submit" className="start-page__button">Зарегистрироваться</button>
            </form>
            <div className="start-page__signin">
                <p>Уже зарегистрированы?</p>
                <Link to="/sign-in" className="start-page__register-link">Войти</Link>
            </div>
        </div>
    );
}

export default Register;
import { useState } from 'react';
import * as auth from '../utils/auth';
import { useHistory } from 'react-router';

function Login({handleLogin}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }
    
    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        auth.authorize(password, email)
          .then((data) => {
            console.log(data)
                if (data.token){                
                console.log(data.token);
                    handleLogin();
                history.push('/main');
            }  
          })
          .catch(err => console.log(err));
        
    }

    return (
        <div className="start-page">            
                <p className="start-page__title">
                    Вход
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
                    required />
                <button type="submit" className="start-page__button">Войти</button>
            </form>
        </div>
    );
}

export default Login;
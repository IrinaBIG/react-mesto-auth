import React, { useContext } from 'react';
import headerLogo from '../images/Vector.svg';
import { Link, Route, Switch } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Header() {
    // let { username, email} = props.userData;
    const currentUser = useContext(CurrentUserContext);

    return (
        <div className="header">
            <img className="logo" src={headerLogo} alt="логотип Mesto" />
            <Switch>

                <Route path="/sign-in">
                    <Link to="/sign-up" className="header__link">
                        Регистрация
                    </Link>
                </Route>

                <Route path="/sign-up">
                    <Link to="/sign-in" className="header__link">
                        Войти
                    </Link>
                </Route>

                <Route path="/main">
                    <div className="header__user-data">
                        {currentUser.email}
                    </div>
                    <Link to="/sign-in" className="header__link">
                        Выйти
                    </Link>
                </Route>

            </Switch>

        </div>
    );
}

export default Header;
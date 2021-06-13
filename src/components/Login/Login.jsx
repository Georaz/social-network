import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from "../common/FormsControls/FormsControls.module.css";

const LoginForm = ({handleSubmit, error, captchaURL}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", Input, [required])}
            {createField("Password", "password", Input, [required], {type: "password"})}
            {createField(null, "rememberMe", Input, [], {type: "checkbox"}, "remember me")}

            {captchaURL && <img src={captchaURL} />}
            {captchaURL && createField("Symbols from an image", "captcha", Input, [required])}

            {error && <div className={classes.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL} />
        </div>
    )
}


const mapStateToProps = (state) => ({
    captchaURL: state.auth.captchaURL,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
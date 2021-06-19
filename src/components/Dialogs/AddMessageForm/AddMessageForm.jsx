import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import classes from "./AddMessageForm.module.css";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={classes.addMessageTextarea} component={Textarea}
                       validate={[required, maxLength50]}
                       name="newMessageBody"
                       placeholder="Enter your message" />
            </div>
            <div>
                <button className={classes.addMessageSubmit}>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
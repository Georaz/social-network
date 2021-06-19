import React from "react";
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import classes from "./ProfileData.module.css";
import {reduxForm} from "redux-form";
import style from "../../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <label htmlFor="fullName" className={classes.fieldLabel}><b>Full name:</b></label>
                {createField("Full name", "fullName", Input, [], "fullName")}
            </div>
            <div>
                <label htmlFor="lookingForAJob" className={classes.fieldLabel}><b>Looking for a job:</b></label>
                {createField("", "lookingForAJob", Input, [], "lookingForAJob", {type: "checkbox"})}
            </div>
            <div>
                <label htmlFor="lookingForAJobDescription" className={classes.fieldLabel}><b>My professional skills:</b></label>
                {createField("My professional skills", "lookingForAJobDescription", Textarea, [], "lookingForAJobDescription")}
            </div>
            <div>
                <label htmlFor="aboutMe" className={classes.fieldLabel}><b>About me:</b></label>
                {createField("About me", "aboutMe", Textarea, [], "aboutMe")}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={classes.contact}>
                    <b>{key}: {createField(key, "contacts." + key, Input, [])}</b>
                </div>
            })}
            </div>
            <div>
                <button className={classes.saveButton}>Save</button>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;
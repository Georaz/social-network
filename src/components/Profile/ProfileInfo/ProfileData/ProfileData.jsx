import React from "react";
import classes from "./ProfileData.module.css";

const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}><b>{contactTitle}:</b> {contactValue}</div>
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return(
        <div className={classes.profileData}>
            <div className={classes.profileDataItem}>
                <b>Full name:</b> {profile.fullName}
            </div>
            <div className={classes.profileDataItem}>
                <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
            <div className={classes.profileDataItem}>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>
            }
            <div className={classes.profileDataItem}>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div className={classes.profileDataItem}>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
            </div>
            {isOwner && <div><button className={classes.editButton} onClick={goToEditMode}>Edit</button></div>}
        </div>
    )
}

export default ProfileData;
import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../images/userAvatar.png";
import ProfileDataForm from "./ProfileData/ProfileDataForm";
import ProfileData from "./ProfileData/ProfileData";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        );
    }

    return (
        <section>
            <div className={classes.descriptionWrapper}>
                <div className={classes.userProfileHeaderWrapper}>
                    <div className={classes.userAvatarSection}>
                        <div className={classes.mainPhotoWrapper}>
                            <img src={profile.photos.large || userPhoto} className={classes.mainPhoto} alt=""/>
                        </div>
                        {isOwner && <div>
                            <input className={classes.mainPhotoUploader}
                                   type={"file"}
                                   id={"mainPhotoUploader"}
                                   onChange={onMainPhotoSelected}
                            />
                            <label className={classes.mainPhotoUploaderLabel} htmlFor="mainPhotoUploader">Select
                                photo</label>
                        </div>}
                    </div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}

            </div>
        </section>
    )
}

export default ProfileInfo;
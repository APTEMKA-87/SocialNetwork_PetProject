import React from 'react';
import s from '../Profile.module.css';
import Preloader from '../../common/Preloader/preloader';
import {ProfileType} from '../../../Redux/profile-reducer';
import ProfileStatus from './ProfileStatus';

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div className={s.content}>
                <img src="https://buddy.ghostpool.com/wp-content/uploads/photodune-3382849-mountain3-s1-1003x480.jpg"
                     alt=""/>
            </div>*/}
            <div className={s.post}>
                <h3>Selected User</h3>
                <div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    <img className={s.user} src={props.profile.photos.large}/>
                    // добавить данные юзера с сервера (location etc)
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;
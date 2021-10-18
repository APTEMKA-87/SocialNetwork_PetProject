import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../Redux/profile-reducer';

type ProfilePropsType = {
    profile: ProfileType | null
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className="content">
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
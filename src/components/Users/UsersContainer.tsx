import Users from './Users';
import {connect} from 'react-redux';
import {RootStateType} from '../../Redux/redux-store';
import {followAC, setUsersAC, unfollowAC, UserType} from '../../Redux/user-reducer';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currenPage: number
}

type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currenPage: state.usersPage.currenPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {  // загрузка, установка юзеров
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users); //?
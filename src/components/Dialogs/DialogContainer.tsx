import Dialogs from './Dialogs';
import {DialogPageType, sendMessage} from '../../Redux/dialogs-reducer';
import {connect} from 'react-redux';
import {RootStateType} from '../../Redux/redux-store';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import React from 'react';

type MapStateToPropsType = {
    dialogPage: DialogPageType
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogPage: state.dialogPage,
    }
}

export default compose <React.ComponentType>(
    connect(mapStateToProps, {sendMessage}),
    WithAuthRedirect
)(Dialogs)

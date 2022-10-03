import auth from "@react-native-firebase/auth";
import {setAuthenticatedUser} from "../../../redux/slices/user";
import {
    toggleSpinnerOn,
    setAlertModalMessage,
    toggleGenericAlertModalOn,
    toggleSpinnerOff
} from "../../../redux/slices/app";
import {ERRORS} from '../../../constants/error-message.constant';
import {Keyboard} from "react-native";

export const emailPasswordSignIn = async (dispatch, email, password) => {
    Keyboard.dismiss();
    dispatch(toggleSpinnerOn());
    if (!email || !password || email.length < 2 || password.length < 1) {
        dispatch(toggleSpinnerOff());
        dispatch(setAlertModalMessage(ERRORS.EMAIL_PASSWORD_INVALID));
        return dispatch(toggleGenericAlertModalOn());
    }

    return auth()
        .signInWithEmailAndPassword(email, password)
        .then((e) => dispatch(setAuthenticatedUser(e)))
        .finally(() => dispatch(toggleSpinnerOff()))
        .catch(error => {
            dispatch(toggleGenericAlertModalOn());
            if (error.code === 'auth/internal-error') {
                return dispatch(setAlertModalMessage(ERRORS.UNKNOWN_ERROR));
            } else {
                return dispatch(setAlertModalMessage(ERRORS.EMAIL_PASSWORD_INVALID));
            }
        })
}
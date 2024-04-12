import React from 'react';
import AuthPageInput from '../../components/AuthPageInput/AuthPageInput';
import PasswordEditPage from '../PasswordEditPage/PasswordEditPage';

function UserInfoModification(data) {
    console.log(data);

    return (
        <PasswordEditPage />
    );
}

export default UserInfoModification;
import React from 'react';
import SearchUserInfo from '../../components/SearchUserInfo/SearchUserInfo';
import EditPassword from '../../components/EditPassword/FindPasswordEdit';

function FindPasswordPage(props) {
    return (
        <div>
            <SearchUserInfo />
            <EditPassword />
        </div>
    );
}

export default FindPasswordPage;
import { Fragment } from 'react';
function UserInfo(props) {
    return (
        <Fragment>
            <div className="title">User information</div>
            <div id="userinfo">
                <div className="el">
                    Your full name: <span className="value">{props.fullName}</span>
                </div>
                <div className="el">
                    Email: <span className="value">{props.email}</span>
                </div>
            </div>
        </Fragment>
    );
}
export default UserInfo;
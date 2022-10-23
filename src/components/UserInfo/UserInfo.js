import css from './UserInfo.module.css'


const UserInfo = ({user}) => {

    return (
        <div className={css.box}>
            <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="picOfUser"/>
            {user.name && <p>{user.name}</p>}
        </div>
    );
};

export {UserInfo};
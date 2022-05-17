import Userform from '../forms/user-form';

const UserModal = ({ user }) => {
  return (
    <div>
      <Userform user={user} />
    </div>
  );
};
export default UserModal;

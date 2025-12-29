
import UserForm from '@Components/UserComponents/UserForm';
import UserTable from '@Components/UserComponents/UserTable';

function UserData() {
  return (
    <>
      <UserForm />
      <UserTable />
    </>
import { useFetchUserData } from '@Hooks/userHooks/useFetchUserApi';

function UserData() {
  const { data } = useFetchUserData();
  console.log(data);
  return (
    <div>
      <h1>UserData</h1>
    </div>
  );
}

export default UserData;

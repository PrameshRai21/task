import { useState } from 'react';
import { useFetchUserData } from '../../hooks/userHooks/useFetchUserApi';
import { Pen } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import UserForm from './UserForm';
import { UserData } from '@Types/index';
import ConfirmBox from './ConfirmBox';

function UserTable() {
  // state for user form
  const [visible, setVisible] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  //state for confirm modal
  const [deleteConfirm, setDeleteConfirm] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const { data } = useFetchUserData();

  return (
    <div className=" naxatw-fixed naxatw-mx-36 naxatw-font-primary">
      <div>
        {visible && (
          <div className="naxatw-flex naxatw-justify-center  naxatw-py-5">
            <UserForm
              visible={visible}
              setVisible={setVisible}
              defaultUserData={userData}
            />
          </div>
        )}
      </div>

      <div className="naxatw-my-4">
        <button
          onClick={() => {
            setUserData(null);
            setVisible(prev => !prev);
          }}
          className="naxatw-rounded-md naxatw-border naxatw-border-blue-600 naxatw-bg-blue-600 naxatw-px-3 naxatw-py-2 naxatw-text-base naxatw-font-bold naxatw-text-white hover:naxatw-border hover:naxatw-bg-white hover:naxatw-text-blue-600"
          type="submit"
        >
          Add User
        </button>
      </div>
      <table>
        <thead className="naxatw-text-lg">
          <tr className="naxatw-bg-gray-100">
            <th
              rowSpan={2}
              className="naxatw-border naxatw-border-gray-300 naxatw-px-2 naxatw-text-left"
            >
              S.No
            </th>
            <th
              rowSpan={2}
              className="naxatw-border naxatw-border-gray-300 naxatw-px-2 naxatw-py-1"
            >
              Name
            </th>
            <th
              rowSpan={2}
              className="naxatw-border naxatw-border-gray-300 naxatw-px-2 naxatw-py-1"
            >
              Username
            </th>
            <th
              rowSpan={2}
              className="naxatw-border naxatw-border-gray-300 naxatw-px-2 naxatw-py-1"
            >
              Email
            </th>

            <th
              rowSpan={2}
              className="naxatw-border naxatw-border-gray-300 naxatw-px-2 naxatw-py-1"
            >
              Phone
            </th>
            <th
              rowSpan={2}
              className="naxatw-border naxatw-border-gray-300 naxatw-px-2 naxatw-py-1"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((user, index) => (
                <tr
                  key={user.id}
                  className="naxatw-text-base naxatw-font-normal hover:naxatw-bg-green-300"
                >
                  <td className="naxatw-border naxatw-border-gray-200 naxatw-px-2 naxatw-py-1">
                    {index + 1}
                  </td>
                  <td className="naxatw-border naxatw-border-gray-200 naxatw-px-2 naxatw-py-1">
                    {user.name}
                  </td>
                  <td className="naxatw-border naxatw-border-gray-200 naxatw-px-2 naxatw-py-1">
                    {user.username}
                  </td>
                  <td className="naxatw-border naxatw-border-gray-200 naxatw-px-2 naxatw-py-1">
                    {user.email}
                  </td>
                  <td className="naxatw-border naxatw-border-gray-200 naxatw-px-2 naxatw-py-1">
                    {user.phone}
                  </td>
                  <td className="naxatw-flex naxatw-h-full naxatw-items-center naxatw-justify-center naxatw-gap-x-3 naxatw-border naxatw-border-gray-200  naxatw-px-2 naxatw-py-1">
                    <button
                      onClick={() => {
                        setUserData(user);
                        setVisible(prev => !prev);
                      }}
                      className="naxatw-rounded-md naxatw-border naxatw-p-1 naxatw-text-green-700 hover:naxatw-border hover:naxatw-border-green-700"
                    >
                      <Pen />
                    </button>
                    <button
                      onClick={() => setModalVisible(true)}
                      className="naxatw-rounded-md naxatw-border naxatw-p-1 naxatw-text-red-700 hover:naxatw-border hover:naxatw-border-red-700"
                    >
                      <Trash2 />
                    </button>
                  </td>
                  <div>
                    {modalVisible && (
                      <ConfirmBox
                        confirmDelete={deleteConfirm}
                        setConfirmDelete={setDeleteConfirm}
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                        user={user}
                      />
                    )}
                  </div>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;

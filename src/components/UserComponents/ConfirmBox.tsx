import { Dispatch, SetStateAction } from 'react';
import Modal from '@Components/common/Modal';
import { UserData } from '@Types/index';
import { useDeleteUser } from '@Hooks/userHooks/useUserMutation';
import { ToastContainer, toast } from 'react-toastify';

interface PropsType {
  confirmDelete: boolean;
  setConfirmDelete: Dispatch<SetStateAction<boolean>>;
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  user: UserData;
}

function ConfirmBox({
  confirmDelete,
  setConfirmDelete,
  modalVisible,
  setModalVisible,
  user,
}: PropsType) {
  //delete mutation function
  const { mutate: deleteUser } = useDeleteUser();

  //   toast
  const deleteSuccess = () => {
    toast.success('User Deleted Successfully!', {
      position: 'top-center',
    });
  };

  return (
    <Modal
      title="Are you sure you want to delete user ?"
      show={modalVisible}
      onClose={() => setModalVisible(false)}
    >
      <div className="naxatw-flex naxatw-justify-center naxatw-gap-10">
        <ToastContainer />
        <button
          className="naxatw-rounded-md naxatw-border naxatw-border-red-600 naxatw-bg-red-600 naxatw-px-10 naxatw-py-2 naxatw-text-white hover:naxatw-border-red-500 hover:naxatw-bg-red-500 focus:naxatw-border-red-500 focus:naxatw-bg-red-500"
          onClick={() => {
            deleteUser(user.id);
            deleteSuccess();
            setConfirmDelete(true);
            setModalVisible(false);
          }}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}

export default ConfirmBox;

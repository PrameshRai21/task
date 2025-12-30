import { useForm, Resolver } from 'react-hook-form';
import { UserData } from '@Types/index';
import { useCreateUser, useUpdateUser } from '@Hooks/userHooks/useUserMutation';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const resolver: Resolver<UserData> = async values => {
  const errors: any = {};
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (!values.name?.trim()) {
    errors.name = { type: 'required', message: 'Name is required' };
  }

  if (!values.username?.trim()) {
    errors.username = { type: 'required', message: 'Username is required' };
  }

  //email
  if (!values.email || !values.email.trim()) {
    errors.email = {
      type: 'required',
      message: 'Email is required',
    };
  } else if (!emailRegex.test(values.email)) {
    errors.email = {
      type: 'pattern',
      message: 'Invalid email address',
    };
  }

  if (!values.phone) {
    errors.phone = { type: 'required', message: 'Phone no. is required' };
  }

  return {
    values: Object.keys(errors).length ? {} : values,
    errors,
  };
};

interface PropsType {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  defaultUserData?: UserData | null;
}

function UserForm({ visible, setVisible, defaultUserData }: PropsType) {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver, defaultValues: defaultUserData ?? {} });

  useEffect(() => {
    if (defaultUserData) {
      reset(defaultUserData);
    } else {
      reset({});
    }
  }, [defaultUserData, reset]);

  //   hooks are initialized here
  const { mutate: addUser } = useCreateUser();
  const { mutate: updateUser } = useUpdateUser();

  const onSubmit = handleSubmit(data => {
    if (defaultUserData?.id) {
      updateUser({ id: defaultUserData.id, data });
    } else {
      addUser(data);
    }
    reset();
    setVisible(false);
  });

  return (
    <div className="naxatw-fixed naxatw-inset-0 naxatw-flex naxatw-items-center naxatw-justify-center">
      <div className="naxatw-flex naxatw-h-auto naxatw-w-[50%] naxatw-flex-col naxatw-items-center naxatw-justify-center naxatw-gap-y-5 naxatw-rounded-md naxatw-border naxatw-border-green-500 naxatw-bg-white naxatw-py-5">
        <div className="btn_holder naxatw-flex naxatw-w-full naxatw-items-center naxatw-gap-x-20 naxatw-pl-20">
          <button
            onClick={() => setVisible(prev => !prev)}
            className="naxatw-rounded-full naxatw-bg-primary-600 naxatw-p-1 naxatw-text-white"
          >
            <ArrowLeft />
          </button>
          <h3 className=" naxatw-text-center naxatw-underline naxatw-underline-offset-2">
            {defaultUserData ? 'Edit User Form' : 'Add User Form'}
          </h3>
        </div>
        <form
          onSubmit={onSubmit}
          className="naxatw-flex naxatw-w-[80%] naxatw-flex-col naxatw-gap-y-2 naxatw-text-lg"
        >
          {/* Name */}
          <div className="name naxatw-flex naxatw-flex-col">
            <label
              htmlFor="name"
              className="naxatw-font-primary naxatw-font-bold naxatw-text-grey-900"
            >
              Name
            </label>
            <input
              {...register('name')}
              className="naxatw-max-w-[70%] naxatw-rounded-sm naxatw-px-3 naxatw-py-1 naxatw-font-primary naxatw-outline naxatw-outline-1 naxatw-outline-gray-400 focus:naxatw-outline-yellow-500"
              placeholder="Enter your name here..."
            />
            {errors?.name && (
              <p className="naxatw-text-sm naxatw-text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>
          {/* Username */}
          <div className="username naxatw-flex naxatw-flex-col">
            <label
              htmlFor="username"
              className="naxatw-font-primary naxatw-font-bold naxatw-text-grey-900"
            >
              Username
            </label>
            <input
              {...register('username')}
              className="naxatw-max-w-[70%] naxatw-rounded-sm naxatw-px-3 naxatw-py-1 naxatw-font-primary naxatw-outline naxatw-outline-1 naxatw-outline-gray-400 focus:naxatw-outline-yellow-500"
              placeholder="Enter username"
            />
            {errors?.username && (
              <p className="naxatw-text-sm naxatw-text-red-400">
                {errors.username.message}
              </p>
            )}
          </div>
          {/* Email */}
          <div className="name naxatw-flex naxatw-flex-col">
            <label
              htmlFor="email"
              className="naxatw-font-primary naxatw-font-bold naxatw-text-grey-900"
            >
              Email
            </label>
            <input
              {...register('email')}
              className="naxatw-max-w-[70%] naxatw-rounded-sm naxatw-px-3 naxatw-py-1 naxatw-font-primary naxatw-outline naxatw-outline-1 naxatw-outline-gray-400 focus:naxatw-outline-yellow-500"
              placeholder="E-mail: example@gmail.com"
            />
            {errors?.email && (
              <p className="naxatw-text-sm naxatw-text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* Phone */}
          <div className="phone naxatw-flex naxatw-flex-col">
            <label
              htmlFor="phone"
              className="naxatw-font-primary naxatw-font-bold naxatw-text-grey-900"
            >
              Phone
            </label>
            <input
              {...register('phone')}
              type="text"
              className="naxatw-max-w-[70%] naxatw-rounded-sm naxatw-px-3 naxatw-py-1 naxatw-font-primary naxatw-outline naxatw-outline-1 naxatw-outline-gray-400 focus:naxatw-outline-yellow-500"
              placeholder="Phone number"
            />
            {errors?.phone && (
              <p className="naxatw-text-sm naxatw-text-red-400">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className="">
            <button
              type="submit"
              className="naxatw-w-[30%] naxatw-rounded-sm naxatw-bg-primary-700 naxatw-px-3 naxatw-py-2 naxatw-font-primary naxatw-text-lg naxatw-text-white hover:naxatw-bg-primary-800 active:naxatw-bg-primary-800"
            >
              {defaultUserData ? 'Edit User ' : 'Add User'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;

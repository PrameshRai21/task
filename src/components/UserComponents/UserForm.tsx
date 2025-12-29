import { useForm, Resolver } from 'react-hook-form';
import { UserData } from '@Types/index';
import { useCreateUser } from '@Hooks/userHooks/useUserMutation';

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

  if (!values.address?.street?.trim()) {
    errors.address = {
      ...errors.address,
      street: { type: 'required', message: 'Street is required' },
    };
  }

  if (!values.address?.suite?.trim()) {
    errors.address = {
      ...errors.address,
      suite: { type: 'required', message: 'Suite is required' },
    };
  }

  if (!values.address?.city?.trim()) {
    errors.address = {
      ...errors.address,
      city: { type: 'required', message: 'City is required' },
    };
  }

  if (!values.address?.zipcode?.trim()) {
    errors.address = {
      ...errors.address,
      zipcode: { type: 'required', message: 'Zipcode is required' },
    };
  }

  if (!values.address?.geo?.lon) {
    errors.address = {
      ...errors.address,
      lng: { type: 'required', message: 'Longitude is required' },
    };
  }

  if (!values.address?.geo?.lat) {
    errors.address = {
      ...errors.address,
      lng: { type: 'required', message: 'Longitude is required' },
    };
  }

  if (!values.company?.name?.trim()) {
    errors.company = {
      ...errors.company,
      name: { type: 'required', message: 'Company name is required' },
    };
  }

  if (!values.company?.catchPhrase?.trim()) {
    errors.company = {
      ...errors.company,
      catchPhrase: {
        type: 'required',
        message: 'Company catch phrase is required',
      },
    };
  }

  if (!values.company?.bs?.trim()) {
    errors.company = {
      ...errors.company,
      bs: { type: 'required', message: 'Company bs is required' },
    };
  }

  return {
    values: Object.keys(errors).length ? {} : values,
    errors,
  };
};

function UserForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver });

  //   hooks are initialized here
  const { mutate: addUser } = useCreateUser();

  const onSubmit = handleSubmit(data => {
    addUser(data);
    reset();
  });

  return (
    <div className="container naxatw-my-4 naxatw-flex naxatw-w-screen naxatw-items-center naxatw-justify-center">
      <div className=" naxatw-flex naxatw-h-auto naxatw-w-[80%] naxatw-flex-col naxatw-items-center naxatw-justify-center naxatw-rounded-md naxatw-border naxatw-border-green-500 naxatw-py-5">
        <h1 className="naxatw-mb-5 naxatw-text-center naxatw-underline naxatw-underline-offset-2">
          User Registration Form
        </h1>
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
          {/* Address here */}
          <div className="address naxatw-flex naxatw-h-auto naxatw-w-full naxatw-flex-col naxatw-gap-y-2  naxatw-rounded-md naxatw-border naxatw-px-3 naxatw-py-5">
            <h4 className="naxatw-mb-3 naxatw-text-center">Address</h4>
            {/* first row: street and suite */}
            <div className="naxatw-flex naxatw-w-full naxatw-gap-x-2 ">
              {/* street */}
              <div className="street naxatw-flex naxatw-w-[50%] naxatw-flex-col">
                <label
                  htmlFor="street"
                  className="naxatw-font-primary naxatw-font-bold naxatw-text-grey-900"
                >
                  Street
                </label>
                <input
                  {...register('address.street')}
                  className="naxatw-max-w-[85%] naxatw-rounded-sm naxatw-px-3 naxatw-py-1 naxatw-font-primary naxatw-outline naxatw-outline-1 naxatw-outline-gray-400 focus:naxatw-outline-yellow-500"
                  placeholder="Enter street"
                />
                {errors?.address?.street && (
                  <p className="naxatw-text-sm naxatw-text-red-400">
                    {errors.address.street.message}
                  </p>
                )}
              </div>
              {/* Suite */}
              <div className="suite naxatw-flex naxatw-w-[50%] naxatw-flex-col">
                <label
                  htmlFor="suite"
                  className="naxatw-font-primary naxatw-font-bold naxatw-text-grey-900"
                >
                  Suite
                </label>
                <input
                  {...register('address.suite')}
                  className="naxatw-max-w-[85%] naxatw-rounded-sm naxatw-px-3 naxatw-py-1 naxatw-font-primary naxatw-outline naxatw-outline-1 naxatw-outline-gray-400 focus:naxatw-outline-yellow-500"
                  placeholder="Enter suite "
                />
                {errors?.address?.suite && (
                  <p className="naxatw-text-sm naxatw-text-red-400">
                    {errors.address.suite.message}
                  </p>
                )}
              </div>
            </div>
            {/* second row: city and suite */}
            <div className="naxatw-flex naxatw-w-full naxatw-gap-x-2 ">
              {/* city */}
              <div className="city naxatw-flex naxatw-w-[50%] naxatw-flex-col">
                <label
                  htmlFor="city"
                  className="naxatw-font-primary naxatw-font-bold naxatw-text-grey-900"
                >
                  City
                </label>
                <input
                  {...register('address.city')}
                  className="naxatw-max-w-[85%] naxatw-rounded-sm naxatw-px-3 naxatw-py-1 naxatw-font-primary naxatw-outline naxatw-outline-1 naxatw-outline-gray-400 focus:naxatw-outline-yellow-500"
                  placeholder="Enter city name"
                />
                {errors?.address?.city && (
                  <p className="naxatw-text-sm naxatw-text-red-400">
                    {errors.address.city.message}
                  </p>
                )}
              </div>
              {/* zipcode */}
              <div className="zipcode naxatw-flex naxatw-w-[50%] naxatw-flex-col">
                <label
                  htmlFor="zipcode"
                  className="naxatw-font-primary naxatw-font-bold naxatw-text-grey-900"
                >
                  Zipcode
                </label>
                <input
                  {...register('address.zipcode')}
                  type="number"
                  className="naxatw-max-w-[85%] naxatw-rounded-sm naxatw-px-3 naxatw-py-1 naxatw-font-primary naxatw-outline naxatw-outline-1 naxatw-outline-gray-400 focus:naxatw-outline-yellow-500"
                  placeholder="Enter city zipcode "
                />
                {errors?.address?.zipcode && (
                  <p className="naxatw-text-sm naxatw-text-red-400">
                    {errors.address.zipcode.message}
                  </p>
                )}
              </div>
            </div>
            {/* third row */}
            <div className="naxatw-flex naxatw-w-full naxatw-gap-x-2 ">
              {/* longitude */}
              <div className="longitude naxatw-flex naxatw-w-[50%] naxatw-flex-col">
                <label
                  htmlFor="lon"
                  className="naxatw-font-primary naxatw-font-bold naxatw-text-grey-900"
                >
                  Longitude
                </label>
                <input
                  {...register('address.geo.lon')}
                  type="number"
                  className="naxatw-max-w-[85%] naxatw-rounded-sm naxatw-px-3 naxatw-py-1 naxatw-font-primary naxatw-outline naxatw-outline-1 naxatw-outline-gray-400 focus:naxatw-outline-yellow-500"
                  placeholder="Enter longitude"
                />
                {errors?.address?.geo?.lon && (
                  <p className="naxatw-text-sm naxatw-text-red-400">
                    {errors.address.geo.lon.message}
                  </p>
                )}
              </div>
              {/* latitude */}
              <div className="name naxatw-flex naxatw-w-[50%] naxatw-flex-col">
                <label
                  htmlFor="lat"
                  className="naxatw-font-primary naxatw-font-bold naxatw-text-grey-900"
                >
                  Latitude
                </label>
                <input
                  {...register('address.geo.lat')}
                  type="number"
                  className="naxatw-max-w-[85%] naxatw-rounded-sm naxatw-px-3 naxatw-py-1 naxatw-font-primary naxatw-outline naxatw-outline-1 naxatw-outline-gray-400 focus:naxatw-outline-yellow-500"
                  placeholder="Enter latitude "
                />
                {errors?.address?.geo?.lat && (
                  <p className="naxatw-text-sm naxatw-text-red-400">
                    {errors.address.geo.lat.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* Company here */}
          <div className="Company naxatw-flex naxatw-h-auto naxatw-w-full naxatw-flex-col naxatw-gap-y-2 naxatw-rounded-md naxatw-border naxatw-px-3 naxatw-py-5">
            <h4 className="naxatw-mb-3 naxatw-text-center">Company</h4>
            {/* first row */}
            <div className="naxatw-flex naxatw-w-full naxatw-gap-x-2 ">
              {/* company name */}
              <div className="name naxatw-flex naxatw-w-[50%] naxatw-flex-col">
                <label
                  htmlFor="name"
                  className="naxatw-font-primary naxatw-font-bold naxatw-text-grey-900"
                >
                  Company Name
                </label>
                <input
                  {...register('company.name')}
                  className="naxatw-max-w-[85%] naxatw-rounded-sm naxatw-px-3 naxatw-py-1 naxatw-font-primary naxatw-outline naxatw-outline-1 naxatw-outline-gray-400 focus:naxatw-outline-yellow-500"
                  placeholder="Enter company name"
                />
                {errors?.company?.name && (
                  <p className="naxatw-text-sm naxatw-text-red-400">
                    {errors.company.name.message}
                  </p>
                )}
              </div>
              {/* company catch phrase */}
              <div className="catchPhrase naxatw-flex naxatw-w-[50%] naxatw-flex-col">
                <label
                  htmlFor="catchPhrase"
                  className="naxatw-font-primary naxatw-font-bold naxatw-text-grey-900"
                >
                  Catch Phrase
                </label>
                <input
                  {...register('company.catchPhrase')}
                  className="naxatw-max-w-[85%] naxatw-rounded-sm naxatw-px-3 naxatw-py-1 naxatw-font-primary naxatw-outline naxatw-outline-1 naxatw-outline-gray-400 focus:naxatw-outline-yellow-500"
                  placeholder="Enter company catch phrase "
                />
                {errors?.company?.catchPhrase && (
                  <p className="naxatw-text-sm naxatw-text-red-400">
                    {errors.company?.catchPhrase.message}
                  </p>
                )}
              </div>
            </div>
            {/* second row */}
            <div className="bs naxatw-flex naxatw-w-[50%] naxatw-flex-col">
              <label
                htmlFor="bs"
                className="naxatw-font-primary naxatw-font-bold naxatw-text-grey-900"
              >
                Company BS
              </label>
              <input
                {...register('company.bs')}
                className="naxatw-max-w-[85%] naxatw-rounded-sm naxatw-px-3 naxatw-py-1 naxatw-font-primary naxatw-outline naxatw-outline-1 naxatw-outline-gray-400 focus:naxatw-outline-yellow-500"
                placeholder="Enter company bs"
              />
              {errors?.company?.bs && (
                <p className="naxatw-text-sm naxatw-text-red-400">
                  {errors.company.bs.message}
                </p>
              )}
            </div>
          </div>
          <div className="">
            <input
              type="submit"
              value={'Add User'}
              className="naxatw-w-[30%] naxatw-rounded-sm naxatw-bg-primary-700 naxatw-px-3 naxatw-py-2 naxatw-font-primary naxatw-text-lg naxatw-text-white hover:naxatw-bg-primary-800 active:naxatw-bg-primary-800"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;

import { useFetchUserData } from '@Hooks/userHooks/useFetchUserApi';
import { useDeleteUser } from '@Hooks/userHooks/useUserMutation';
import { Pen, Trash2 } from 'lucide-react';

function UserTable() {
  const { isLoading, data, isError } = useFetchUserData();
  const { mutate: deleteUser } = useDeleteUser();

  return (
    <div className=" naxatw-mx-3 naxatw-font-primary">
      <div className="naxatw-my-4">
        <button
          className="naxatw-rounded-md naxatw-border naxatw-border-blue-600 naxatw-bg-blue-600 naxatw-px-3 naxatw-py-2 naxatw-text-base naxatw-font-bold naxatw-text-white hover:naxatw-border hover:naxatw-bg-white hover:naxatw-text-blue-600"
          type="submit"
        >
          Add User
        </button>
      </div>
      <table>
        <thead className="naxatw-text-base">
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
              colSpan={3}
              className="naxatw-border naxatw-border-gray-300 naxatw-px-2 naxatw-py-1 naxatw-text-center"
            >
              Address
            </th>

            <th
              colSpan={2}
              className="naxatw-border naxatw-border-gray-300 naxatw-px-2 naxatw-py-1 naxatw-text-center"
            >
              Geo
            </th>

            <th
              rowSpan={2}
              className="naxatw-border naxatw-border-gray-300 naxatw-px-2 naxatw-py-1"
            >
              Phone
            </th>

            <th
              colSpan={3}
              className="naxatw-border naxatw-border-gray-300 naxatw-px-2 naxatw-py-1 naxatw-text-center"
            >
              Company
            </th>
            <th
              rowSpan={2}
              className="naxatw-border naxatw-border-gray-300 naxatw-px-2 naxatw-py-1"
            >
              Actions
            </th>
          </tr>

          <tr className="naxatw-bg-gray-50">
            <th className="naxatw-border naxatw-border-gray-300 naxatw-px-2 naxatw-py-1">
              City
            </th>
            <th className="naxatw-border naxatw-border-gray-300 naxatw-px-2 naxatw-py-1">
              Street
            </th>
            <th className="naxatw-border naxatw-border-gray-300 naxatw-px-2 naxatw-py-1">
              Zip
            </th>

            <th className="naxatw-border naxatw-border-gray-300 naxatw-px-2 naxatw-py-1">
              Lat
            </th>
            <th className="naxatw-border naxatw-border-gray-300 naxatw-px-2 naxatw-py-1">
              Lng
            </th>

            <th className="naxatw-border naxatw-border-gray-300 naxatw-px-2 naxatw-py-1">
              Name
            </th>
            <th className="naxatw-border naxatw-border-gray-300 naxatw-px-2 naxatw-py-1">
              Catch Phrase
            </th>
            <th className="naxatw-border naxatw-border-gray-300 naxatw-px-2 naxatw-py-1">
              BS
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((user, index) => (
                <tr
                  key={user.id}
                  className="naxatw-text-sm naxatw-font-semibold hover:naxatw-bg-green-300"
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
                    {user.address.street}
                  </td>
                  <td className="naxatw-border naxatw-border-gray-200 naxatw-px-2 naxatw-py-1">
                    {user.address.city}
                  </td>
                  <td className="naxatw-border naxatw-border-gray-200 naxatw-px-2 naxatw-py-1">
                    {user.address.zipcode}
                  </td>

                  <td className="naxatw-border naxatw-border-gray-200 naxatw-px-2 naxatw-py-1">
                    {user.address.geo.lat}
                  </td>
                  <td className="naxatw-border naxatw-border-gray-200 naxatw-px-2 naxatw-py-1">
                    {user.address.geo.lon}
                  </td>

                  <td className="naxatw-border naxatw-border-gray-200 naxatw-px-2 naxatw-py-1">
                    {user.phone}
                  </td>

                  <td className="naxatw-border naxatw-border-gray-200 naxatw-px-2 naxatw-py-1">
                    {user.company.name}
                  </td>
                  <td className="naxatw-border naxatw-border-gray-200 naxatw-px-2 naxatw-py-1">
                    {user.company.catchPhrase}
                  </td>
                  <td className="naxatw-border naxatw-border-gray-200 naxatw-px-2 naxatw-py-1">
                    {user.company.bs}
                  </td>
                  <td className="naxatw-flex naxatw-h-full naxatw-items-center naxatw-justify-center naxatw-gap-x-3 naxatw-border naxatw-border-gray-200  naxatw-px-2 naxatw-py-1">
                    <button className="naxatw-rounded-md naxatw-border naxatw-p-1 naxatw-text-green-700 hover:naxatw-border hover:naxatw-border-green-700">
                      <Pen />
                    </button>
                    <button
                      onClick={e => deleteUser(user.id)}
                      className="naxatw-rounded-md naxatw-border naxatw-p-1 naxatw-text-red-700 hover:naxatw-border hover:naxatw-border-red-700"
                    >
                      <Trash2 />
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;

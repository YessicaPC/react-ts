import { User } from "../interfaces/reqres.response";

interface Props {
  user: User;
}

const UserRow = ({ user }: Props) => {
  return (
    <tr className="p-2">
      <td>
        <img
          src={user.avatar}
          alt="User Avatar"
          className="rounded-full w-14"
        />
      </td>
      <td>
        {user.first_name} {user.last_name}
      </td>
      <td> {user.email}</td>
    </tr>
  );
};

export default UserRow;
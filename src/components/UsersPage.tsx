import { useUsers } from "../hooks/useUsers";
import UserRow from "./UserRow";
//https://reqres.in/api/users?page=2
export const UsersPage = () => {
  const { users, nextPage, prevPage } = useUsers();
  return (
    <>
      <h3>Usuarios</h3>

      <table className="w-[500px] bg-purple-300 rounded-xl">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
      <div className="flex justify-between w-[500px] mt-2">
        <button
          onClick={prevPage}
          className="p-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-300"
        >
          Anteriores
        </button>
        <button
          onClick={nextPage}
          className="p-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-300"
        >
          Siguientes
        </button>
      </div>
    </>
  );
};

export default UsersPage;

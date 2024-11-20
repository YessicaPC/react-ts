import { useAuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { user, isChecking, isAuthenticated, loginWithEmailPassword, logout } =
    useAuthContext();

  if (isChecking) {
    return <h1>Verificando Usuario</h1>;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <h3>Bienvenido</h3>
          <p>{JSON.stringify(user, null, 2)}</p>
          <button
            onClick={() => logout()}
            className="bg-pink-500 text-white rounded-xl mt-2 p-2 hover:bg-pink-300"
          >
            Salir
          </button>
        </>
      ) : (
        <>
          <h3>Ingresar</h3>
          <button
            onClick={() => loginWithEmailPassword("yessica@gmail.com", "test")}
            className="bg-pink-500 text-white rounded-xl mt-2 p-2 hover:bg-pink-300"
          >
            Login
          </button>
        </>
      )}
    </>
  );
};

export default LoginPage;

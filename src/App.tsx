//import BasicFunction from './typescript/BasicFunction'
//import ObjectLiterals from './typescript/ObjectLiterals'
//import BasicTypes from './typescript/BasicTypes'
//import Counter from "./components/Counter"
//import LoginPage from "./components/LoginPage"
import { FormPage } from "./components/FormPage";
import UsersPage from "./components/UsersPage";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <>
      <AuthProvider>
        <div className="flex flex-col justify-center items-center h-svh bg-black text-purple-700">
          <h1 className="text-3xl font-bold underline mb-5">Hello world!</h1>
          <FormPage></FormPage>
        </div>
        {/*<UsersPage />/*}
        {/* <Counter />*/}

        {/*<BasicTypes />*/}
        {/* <ObjectLiterals></ObjectLiterals> />*/}
        {/*  <BasicFunction />*/}
      </AuthProvider>
    </>
  );
}

export default App;

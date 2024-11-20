import { useForm } from "react-hook-form";
type FormInputs = {
  email: string;
  password: string;
};
export const FormPage = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "yess@gmail.com",
      password: "123456",
    },
  });
  const onSubmit = (myForm: FormInputs) => {
    console.log({ myForm });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Formulario</h3>
        <div className="flex flex-col space-y-2 w-[500px">
          <input
            type="email"
            placeholder="email"
            className="border border-green-300 p-2 rounded-xl"
            {...register("email", { required: true })}
          />
          <input
            type="password"
            placeholder="password"
            className="border border-green-300 p-2 rounded-xl"
            {...register("password", { required: true })}
          />
          <button className=" bg-purple-400 rounded-xl p-2" type="submit">
            Ingresar
          </button>
        </div>
      </form>
    </>
  );
};

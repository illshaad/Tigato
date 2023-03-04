import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  nameRequired: string;
};

export default function Formulaire() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("name"));

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid place-items-center"
      >
        <input
          placeholder="Prenom"
          {...register("name")}
          className="border rounded-lg p-2 text-center"
        />
        <button
          type="submit"
          className="mt-2 pl-4 pr-4 grid text-gray-700 place-items-center rounded rounded-ml border-2 border-gray"
        >
          Envoyer
        </button>
      </form>
    </>
  );
}

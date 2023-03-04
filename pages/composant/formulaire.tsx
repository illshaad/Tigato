import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  phone: number;
  value: "string";
};

export default function Formulaire() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid place-items-center"
      >
        <input
          placeholder="Prenom"
          {...register("name", { minLength: 3, maxLength: 10, required: true })}
          className="border rounded-lg p-2 mt-2"
        />
        {errors.name && (
          <p>
            Prénom obligatoir minimun 3 lettres et ne dois pas dépasser 10
            lettre
          </p>
        )}
        <input
          placeholder="Numéro de téléphone"
          type="tel"
          {...register("phone", {
            maxLength: 10,
            required: true,
            valueAsNumber: true,
            pattern: { value: "(0|\\+33|0033)[1-9][0-9]{8}" },
          })}
          className="border rounded-lg p-2 mt-2"
        />
        {errors.phone && (
          <p>
            Numéro téléphone obligatoire et ne dois pas dépasser 10 chiffres
          </p>
        )}
        <button
          type="submit"
          className="mt-2 pl-4 pr-4 grid text-gray-900 place-items-center rounded rounded-lg border-2 border-{#06a77d}"
        >
          Envoyer
        </button>
      </form>
    </>
  );
}
[];

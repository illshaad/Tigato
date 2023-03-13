import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  name: string;
  phone: string;
};

export default function Formulaire() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { name, phone } = data;
    const addZero = phone.toString().padStart(2, "0");
    return router.push({
      pathname: "/commande",
      query: { name, phone: addZero },
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid place-items-center"
      >
        <input
          placeholder="Prenom"
          {...register("name", { minLength: 3, maxLength: 10, required: true })}
          className="border-2 rounded-lg p-2 mt-2"
        />
        {errors.name && (
          <p className="font-tilt-warp text-red-600 text-xs pt-2">
            Prénom obligatoire minimums 3 lettres et ne doivent pas dépasser 10
            lettres
          </p>
        )}
        <input
          placeholder="Numéro de téléphone"
          type="tel"
          {...register("phone", {
            minLength: 0,
            maxLength: 10,
            required: true,
          })}
          className="border rounded-lg p-2 mt-2"
        />
        {errors.phone && (
          <p className="font-tilt-warp text-red-600 text-xs pt-2">
            Numéro téléphone obligatoire et ne dois pas dépasser 10 chiffres
          </p>
        )}
        <button
          type="submit"
          className="mt-4 p-2 grid text-white font-tilt-warp place-items-center rounded rounded-lg border-2 border-white"
        >
          Envoyer
        </button>
      </form>
    </>
  );
}

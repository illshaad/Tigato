export default function inputProduct({ name, register }) {
  return (
    <>
      <input
        type="number"
        min={0}
        placeholder="Quantité"
        {...register(name)}
        className="border rounded-lg p-2 mt-2"
      />
      <button
        type="submit"
        className="mt-2 pl-4 pr-4 grid text-gray-900 font-tilt-warp place-items-center rounded rounded-lg border-2 border-{#06a77d}"
      >
        Ajouter
      </button>
    </>
  );
}

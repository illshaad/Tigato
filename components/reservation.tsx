import React, { useState } from "react";
import { sendMessage } from "@/service/api";
export default function Reservation({
  router,
  name,
  phone,
  information,
  setInformation,
  commandeForReservation,
}: {
  name: string;
  phone: string;
  commandeForReservation: number;
}) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const onSubmit = async (data) => {
    const { name, phone, information } = data;
    // Use api send message for phone
    await sendMessage({
      name,
      phone,
      information,
      commandeForReservation,
    });

    router.push({
      pathname: "/",
    });
    return setInformation([]) && setShowModal(false);
  };

  return (
    <>
      <button
        type="submit"
        onClick={() => setShowModal(true)}
        className="p-2 font-bold text-1xl border-2 border-cyan-900 rounded font-tilt-warp shadow-xl bg-cyan-900 text-white"
      >
        Reservation
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl  font-tilt-warp font-semibold">
                    Résumer de ma commande
                  </h3>
                </div>
                <div className="p-10 flex">
                  <table className="table-auto">
                    <thead>
                      <tr>
                        <th className="px-12 py-3 text-xs font-bold text-gray-800 uppercase ">
                          Produits
                        </th>
                        <th className="px-12 py-3 text-xs font-bold text-gray-800 uppercase ">
                          Type
                        </th>
                        <th className="px-12 py-3 text-xs font-bold text-gray-800 uppercase ">
                          Prix
                        </th>
                        <th className="px-12 py-3 text-xs font-bold text-gray-800 uppercase ">
                          Quantité
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {information.map((e, key) => (
                        <tr key="key">
                          <td className="px-12 py-3 text-xs whitespace-nowrap">
                            <p className="my-4 text-grey-900 text-center text-sm font-tilt-warp">
                              {e.products.name}
                            </p>
                          </td>
                          <td>
                            <p className="my-4 text-grey-900 text-center text-sm font-tilt-warp">
                              {e.products.type}
                            </p>
                          </td>
                          <td>
                            <p className="my-4 text-grey-900  text-center text-sm font-tilt-warp">
                              {e.products.price}€
                            </p>
                          </td>
                          <td className="px-12 py-3 text-xs whitespace-nowrap">
                            <p className="my-4 text-grey-900 text-center text-sm font-tilt-warp">
                              {e.quantity}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-sm font-tilt-warp font-semibold">
                    Total {commandeForReservation}€
                  </h3>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold font-tilt-warp  uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fermer
                  </button>
                  <button
                    className="bg-cyan-800 text-white  font-tilt-warp font-bold uppercase text-sm px-6 py-3 rounded shadow  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false),
                        onSubmit({ name, phone, information });
                    }}
                  >
                    Valider ma réservation
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

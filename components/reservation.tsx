import React, { useState } from "react";

export default function Reservation({ router, name, phone, information }) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onSubmit = (data) => {
    const { name, phone, information } = data;
    //Use api send message for phone
    router.push({
      pathname: "/commande",
    });
    return setShowModal(false);
  };

  return (
    <>
      <button
        type="submit"
        onClick={() => setShowModal(true)}
        className="p-2 font-bold text-1xl border-2 border-cyan-900 rounded-xl font-tilt-warp shadow-xl bg-cyan-900 text-white"
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
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed font-tilt-warp">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
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

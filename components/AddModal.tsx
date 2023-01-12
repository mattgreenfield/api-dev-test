import React, { FC, useEffect, useState } from "react";
import { Modal } from "./Modal";
import { Drink } from '../types';

type AddModalProps = {
  //   heading: string;
};

export const AddModal: FC<AddModalProps> = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Drink[]>([]);
  const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);

//     fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
        
//         setResults(data.drinks);
//         setLoading(false);
//       });
//   }, [search]);

  return (
    <Modal
      trigger={(openModal) => (
        <button
          type="button"
          onClick={() => openModal()}
          className="flex items-center justify-center border aspect-square rounded-2xl bg-gray-100 hover:bg-gray-50"
        >
          Add Another
        </button>
      )}
    >
      <div className="flex divide-x gap-4">
        <form action="" className="w-56">
          <h2>Filters</h2>
          <input
            type="text"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Search…"
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>
        <div className="pl-4">
          <h2>Results</h2>
          {results && (
            <ul>
              {results.map((drink) => (
                <li>{drink.strDrink}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Modal>
  );
};

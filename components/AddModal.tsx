import React, { FC, useEffect, useState } from "react";
import { Modal } from "./Modal";
import { Drink } from '../types';
import { Card } from "./Card";
import useDebounce from "../helpers/debounce";
import { Button } from "./Button";

type AddModalProps = {
    onAdd: (id: string) => void;
};

export const AddModal: FC<AddModalProps> = ({onAdd}) => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 1000);

  const [results, setResults] = useState<Drink[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${debouncedSearch}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        setResults(data.drinks);
        setLoading(false);
      });
  }, [debouncedSearch]);

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
        <div className="pl-4 flex-grow">
          <h2 className="mb-4 text-2xl font-bold">Results</h2>
          {results && (
            <ul className="space-y-2">
              {results.map(
                ({ strDrink, idDrink, strDrinkThumb, strAlcoholic }) => (
                  <li key={idDrink + "_addButton"}>
                    <Card growOnHover={false}>
                      <div className="flex p-4 gap-4">
                        <img
                          className="aspect-square bg-gray-100"
                          src={strDrinkThumb}
                          alt={strDrink}
                          width="100px"
                          height="100px"
                        />
                        <div className="w-full">
                          <div className="text-lg font-bold">{strDrink}</div>
                          {strAlcoholic}
                          <div className="mt-4 flex justify-end">
                            <Button onClick={() => onAdd(idDrink)}>
                              Add to my list
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </div>
    </Modal>
  );
};

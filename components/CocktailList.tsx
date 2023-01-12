import React, { FC } from "react";
import { Card } from "../components/Card";
import classNames from "classnames";
import { AddModal } from "./AddModal";
import { Drink } from '../types';


type CocktailListProps = {
  heading: string;
  items: Drink[];
  loading: boolean;
  error: unknown;
  addBlank?: number | false;
  cols: 2 | 10;
};

export const CocktailList: FC<CocktailListProps> = ({
  heading,
  items,
  loading,
  error,
  addBlank = false,
  cols = 2,
}) => {
  // const cols = !!addBlank ? 10 : 2;
  const emptySlots = !!addBlank ? addBlank - items.length - 1 : 0;

  return (
    <section>
      <h2 className="font-bold text-xl mb-4">{heading}</h2>
      {loading && <>Loading</>}
      {items && (
        <ul
          className={classNames([
            "grid gap-2",
            {
              "grid-cols-5": cols === 10,
              "grid-cols-2": cols === 2,
            },
          ])}
        >
          {items.map(({ strDrink, idDrink, strDrinkThumb }) => (
            <li key={idDrink + "_shopping"} className="relative">
              <Card isSquare={cols === 10}>
                <img src={strDrinkThumb} alt={strDrink} />
                <div className="absolute bottom-0 inset-x-0 bg-black font-bold text-white rounded-b-xl p-2 bg-opacity-70">
                  {strDrink}
                </div>
              </Card>
            </li>
          ))}
          {!!emptySlots && <AddModal onAdd={console.log} />}
          {[...Array(emptySlots).keys()].map((index) => (
            <li key={index + "skeleton"}>
              <Card isSquare growOnHover={false} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

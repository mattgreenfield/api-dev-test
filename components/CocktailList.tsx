import React, { FC } from "react";
import { Card } from "../components/Card";

type CocktailListProps = {
  heading: string;
  items: unknown[];
  loading: boolean;
  error: unknown;
};

export const CocktailList: FC<CocktailListProps> = ({ heading, items, loading, error }) => {

  return (
    <section>
      <h2 className="font-bold text-xl mb-4">{heading}</h2>
      <ul className="grid grid-cols-5 gap-2">
        {items.map(({ name, id }) => (
          <li key={id + "_shopping"}>
            <Card>{name}</Card>
          </li>
        ))}
      </ul>
    </section>
  );
}

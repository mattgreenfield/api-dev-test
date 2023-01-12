import Head from "next/head";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { CocktailList } from "../components/CocktailList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // TODO: store a list of all the cocktails we know about so we don't have to keep fetching them??
  // Maybe in redux...

  const [usersCocktailIds, setUsersCocktailIds] = useState([]);
  const [usersCocktails, setUsersCocktails] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);
  useEffect(() => {
    setUsersLoading(true);

    // TODO: can I get it to return 2 results??
    fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007")
      .then((res) => res.json())
      .then((data) => {
        setUsersCocktails(data.drinks);
        setUsersLoading(false);
      });
  }, [usersCocktailIds]);

  const [teamsCocktails, setTeamsCocktails] = useState([]);
  const [teamLoading, setTeamLoading] = useState(false);
  useEffect(() => {
    setTeamLoading(true);

    // TODO: can I get it to return 2 results??
    fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007")
      .then((res) => res.json())
      .then((data) => {
        setTeamsCocktails(data.drinks);
        setTeamLoading(false);
      });
  }, []);

  const [recommendedCocktails, setRecommendedCocktails] = useState([]);
  const [recommendedLoading, setRecommendedLoading] = useState(false);
  useEffect(() => {
    setRecommendedLoading(true);

    // TODO: can I get it to return 2 results??
    fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007")
      .then((res) => res.json())
      .then((data) => {
        setRecommendedCocktails(data.drinks);
        setRecommendedLoading(false);
      });
  }, []);

  // const [shoppingList, setShoppingList] = useState([]);

  return (
    <>
      <Head>
        <title>Cocktails</title>
        <meta name="description" content="A cocktail list and finder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classNames([inter.className, "container px-4 mx-auto mt-10"])}>
        <header className="mb-8">
          <h1 className="font-bold text-2xl">Cocktail Party Picker</h1>
          <p>
            Pick you favourite cocktails and see what everyone else has picked
          </p>
        </header>
        <main className="divide-y space-y-10">
          <CocktailList
            items={usersCocktails}
            heading="Your Choices"
            loading={usersLoading}
            addBlank={10}
            cols={10}
            error="null"
          />
          <CocktailList
            items={teamsCocktails}
            heading="Teams Choices"
            loading={teamLoading}
            error="null"
            cols={10}
          />
          <CocktailList
            items={recommendedCocktails}
            heading="Recomended Cocktails"
            loading={recommendedLoading}
            error="null"
          />
          {/* <CocktailList
            items={shoppingList}
            heading="Shopping List"
            loading="false"
            error="null"
          /> */}
        </main>
      </div>
    </>
  );
}

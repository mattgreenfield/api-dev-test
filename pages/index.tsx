import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState } from 'react'
import classNames from 'classnames'
import { Card } from '../components/Card'
import {CocktailList} from '../components/CocktailList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [usersCocktails, setUsersCocktails] = useState([{ id: 1, name: 'maragrita'}]);
  const [teamsCocktails, setTeamsCocktails] = useState([]);
  const [recommendedCocktails, setRecommendedCocktails] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  return (
    <>
      <Head>
        <title>Cocktails</title>
        <meta name="description" content="A cocktail list and finder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classNames([inter.className, "container mx-auto mt-10"])}>
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
            loading="false"
            error="null"
          />
          <CocktailList
            items={teamsCocktails}
            heading="Teams Choices"
            loading="false"
            error="null"
          />
          <CocktailList
            items={recommendedCocktails}
            heading="Recomended Cocktails"
            loading="false"
            error="null"
          />
          <CocktailList
            items={shoppingList}
            heading="Shopping List"
            loading="false"
            error="null"
          />
        </main>
      </div>
    </>
  );
}

# Mali Pokèmon

Simulation of pokemon website with the help of pokemon api ([https://pokeapi.co](https://pokeapi.co/)).

You can see any Pokemon by searching their name with at least 3 letters.

You can add or remove Pokemon cards to your deck and review them through the deck, but your maximum number of cards will be 10.

By clicking on the image of each card, you will be taken to the information page to view the details of that card.

## Run the App

For installing dependencies:

```bash
npm install
```

And For Start the app:

```bash
npm run dev
```

- For Having latest version you should get `readme` branch, and run these two command there again.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```bash
.
├── app
│   ├── deck
│   │   └── page.tsx
│   ├── globals.css
│   ├── info
│   │   └── [id]
│   │       └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── core
│   ├── api
│   │   ├── getPokemonDetails.ts
│   │   ├── getPokemonsList.ts
│   │   ├── transformer.ts
│   │   └── types.ts
│   ├── components
│   │   ├── Container
│   │   │   ├── Container.tsx
│   │   │   └── index.ts
│   │   ├── DeckButton
│   │   │   ├── DeckButton.tsx
│   │   │   └── index.ts
│   │   ├── Header
│   │   │   ├── Header.tsx
│   │   │   └── index.ts
│   │   ├── PokemonCard
│   │   │   ├── PokemonCard.tsx
│   │   │   └── index.ts
│   │   └── Text
│   │       ├── Text.tsx
│   │       └── index.ts
│   ├── context
│   │   ├── deckListContext
│   │   │   ├── deckListContext.ts
│   │   │   └── index.ts
│   │   └── pokemonListContext
│   │       ├── index.ts
│   │       └── pokemonListContext.ts
│   └── providers
│       └── ContextProvider.tsx
└── pages
    ├── Deck
    │   ├── Deck.tsx
    │   └── index.ts
    ├── Home
    │   ├── Home.tsx
    │   ├── components
    │   │   ├── PokemonList
    │   │   │   ├── PokemonList.tsx
    │   │   │   └── index.ts
    │   │   └── SearchComponent
    │   │       ├── SearchComponent.tsx
    │   │       └── index.ts
    │   ├── constant
    │   │   └── constant.ts
    │   ├── data
    │   │   └── pokemonDataDefault.ts
    │   ├── hooks
    │   │   └── useGetData.ts
    │   ├── index.ts
    │   └── types.ts
    └── Info
        ├── Info.tsx
        ├── components
        │   ├── Chart
        │   │   ├── Chart.tsx
        │   │   └── index.ts
        │   ├── ChartContainer
        │   │   ├── ChartContainer.tsx
        │   │   └── index.ts
        │   ├── InfoCard
        │   │   ├── InfoCard.tsx
        │   │   └── index.ts
        │   ├── InfoDetails
        │   │   ├── InfoDetails.tsx
        │   │   └── index.ts
        │   ├── InfoHeader
        │   │   ├── InfoHeader.tsx
        │   │   └── index.ts
        │   └── InfoImages
        │       ├── InfoImages.tsx
        │       └── index.ts
        └── index.ts
```

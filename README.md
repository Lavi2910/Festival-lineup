# Festival Lineup

A React TypeScript project for displaying festival shows with interactive features.

![Final Result](./final.jpg)

## Task

Complete the TODOs to create a working festival lineup app:

### In App.tsx:
- Map through shows array and render ShowCard components

### In ShowCard.tsx:
1. Accept props with `ShowCardProps` type
2. Create `isInterested` state using `useState` (boolean, default: false)
3. Create toggle function for interested state
4. Show different ticket status based on `ticketsLeft`
5. Display star (⭐) when show is marked as interested
6. Make button text change based on state

## Components

- **App**: Main component with shows data
- **ShowCard**: Individual show card with props and useState

Used for tracking which shows the user is interested in.

## Run Project

```bash
npm install
npm run dev
```

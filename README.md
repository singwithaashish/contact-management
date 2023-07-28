**Contact management** is a react application to CRUD contacts with redux. It also has covid dashboard with all the data worldwide. 

## Table of contents
* [Demo](#demo)
* [Technologies](#technologies)
* [Features](#features)
* [Getting started](#getting-started)
* [Folder structure](#folder-structure)
* [Screenshots](#screenshots)

## Demo
Here is a working live demo: https://contact-management-react.netlify.app/

## Technologies
* React
* Redux
* React Router
* React Query
* Tailwind CSS
* TypeScript

## Features
* CRUD contacts
* Covid dashboard
* Responsive design 

## Getting started
Clone the repository
```
git clone
```
Install dependencies
```
npm install
```
Run the app
```
npm run start
```

## Folder structure
```
src
├── app
│   ├── contactSlice.ts # Contact slice for redux
│   └── store.ts # Redux store
├── components
│   ├── Chart
│   │   ├── CasesMap.tsx # world map with covid cases per country
│   │   ├── LineGraph.tsx # line graph with recovered, deaths and cases per day
│   │   └── PieChart.tsx # pie chart with active, recovered and deaths
│   ├── Contact
│   │   ├── ContactElement.tsx # contact element with name, email and phone
│   │   ├── CraeteContact.tsx # popup form to create a contact
│   │   └── NoContactBox.tsx # box to show when there is no contact
│   └── Layout
│       ├── Sidebar.tsx # sidebar with links to contacts and covid dashboard
│       └── Layout.tsx # layout with header and footer and sidebar
├── pages
│   ├── Contacts.tsx # page to show all contacts
│   └── ChartsAndMap.tsx # page to show covid dashboard
├── utils
│   ├── api.ts # api to fetch covid data
│   └── getRandomid.ts # types for covid data
├── App.tsx # main app
├── index.css # global styles
├── index.tsx # entry point
├── react-app-env.d.ts # types for react
└── typings.d.ts # types for the app
```

## Screenshots


**Contact management** is a react application to CRUD contacts with redux. It also has covid dashboard with all the data worldwide. 

## Table of contents
* [Demo](#demo)
* [Technologies](#technologies)
* [Features](#features)
* [Getting started](#getting-started)
* [Folder structure](#folder-structure)
* [Screenshots](#screenshots)

## Demo
Here is a working live demo: https://celebrated-licorice-332ea3.netlify.app

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
│   │   ├── EditContact.tsx # popup form to edit a contact
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
![Screen Shot 2023-07-28 at 21 19 06](https://github.com/singwithaashish/contact-management/assets/52033403/1c8f0d1e-e786-4175-97ae-2a3ed2f7166b)
![Screen Shot 2023-07-13 at 14 00 29](https://github.com/singwithaashish/contact-management/assets/52033403/c6765c72-483b-4c3d-9e90-5357df5eeff2)
![Screen Shot 2023-07-28 at 21 18 42](https://github.com/singwithaashish/contact-management/assets/52033403/3710b3c6-e246-41d3-9047-0e6d2f073b87)

![Screenshot from 2023-07-28 21-18-28](https://github.com/singwithaashish/contact-management/assets/52033403/76318bec-15df-4add-8a09-f9bd3d338447)
![Screenshot from 2023-07-28 21-18-13](https://github.com/singwithaashish/contact-management/assets/52033403/544d1568-c182-4440-89ce-d44a919f1b49)
![Screenshot from 2023-07-28 21-17-55](https://github.com/singwithaashish/contact-management/assets/52033403/130e990d-3611-43f3-801a-4950d1c2096c)


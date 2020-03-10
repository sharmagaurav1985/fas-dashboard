const clients = {
  clients: [
    {
      clientId: 1,
      clientName: "Sample Client 1",
      StartingYear: 2016,
      IsActive: true
    },
    {
      clientId: 1,
      clientName: "Sample Client 1",
      StartingYear: 2016,
      IsActive: true
    },
    {
      clientId: 1,
      clientName: "Sample Client 1",
      StartingYear: 2016,
      IsActive: true
    },
    {
      clientId: 1,
      clientName: "Sample Client 1",
      StartingYear: 2016,
      IsActive: true
    },
    {
      clientId: 1,
      clientName: "Sample Client 1",
      StartingYear: 2016,
      IsActive: true
    },
    {
      clientId: 1,
      clientName: "Sample Client 1",
      StartingYear: 2016,
      IsActive: true
    },
    {
      clientId: 1,
      clientName: "Sample Client 1",
      StartingYear: 2016,
      IsActive: true
    },
    {
      clientId: 1,
      clientName: "Sample Client 1",
      StartingYear: 2016,
      IsActive: true
    },
    {
      clientId: 1,
      clientName: "Sample Client 1",
      StartingYear: 2016,
      IsActive: true
    },
    {
      clientId: 1,
      clientName: "Sample Client 1",
      StartingYear: 2016,
      IsActive: true
    },
    {
      clientId: 1,
      clientName: "Sample Client 1",
      StartingYear: 2016,
      IsActive: true
    },
    {
      clientId: 1,
      clientName: "Sample Client 1",
      StartingYear: 2016,
      IsActive: true
    },
    {
      clientId: 1,
      clientName: "Sample Client 1",
      StartingYear: 2016,
      IsActive: true
    },
    {
      clientId: 1,
      clientName: "Sample Client 1",
      StartingYear: 2016,
      IsActive: true
    },
    {
      clientId: 1,
      clientName: "Sample Client 1",
      StartingYear: 2016,
      IsActive: true
    },
    {
      clientId: 1,
      clientName: "Sample Client 1",
      StartingYear: 2016,
      IsActive: true
    },

    {
      clientId: 2,
      ClientName: "Sample Client 2",
      StartingYear: 2016,
      IsActive: true
    },
    {
      clientId: 3,
      clientName: "Sample Client 3",
      StartingYear: 2017,
      IsActive: false
    },
    {
      clientId: 4,
      ClientName: "Sample Client 4",
      StartingYear: 2016,
      IsActive: false
    },
    {
      clientId: 5,
      clientName: "Sample Client 5",
      StartingYear: 2017,
      IsActive: true
    },
    {
      clientId: 6,
      ClientName: "Sample Client 6",
      StartingYear: 2019,
      IsActive: true
    },
    {
      clientId: 7,
      clientName: "Sample Client 7",
      StartingYear: 2019,
      IsActive: true
    },
    {
      clientId: 8,
      ClientName: "Sample Client 8",
      StartingYear: 2019,
      IsActive: true
    }
  ]
};

const funds = {
  funds: [
    {
      fundId: 1,
      fundName: "Sample Fund 1",
      StartingYear: 2019,
      IsActive: true
    },
    {
      fundId: 3,
      fundName: "Sample Fund 3",
      StartingYear: 2019,
      IsActive: true
    },
    {
      fundId: 2,
      fundName: "Sample Fund 2",
      StartingYear: 2017,
      IsActive: true
    },
    {
      fundId: 4,
      fundName: "Sample Fund 4",
      StartingYear: 2016,
      IsActive: true
    }
  ]
};

const fundGenerationDuration = {
  fundGenerationDuration: [
    {
      fundId: 1,
      fundName: "Sample Fund 1",
      generationDate: "03/10/2020",
      dataGeneratedForDays: 10
    },
    {
      fundId: 1,
      fundName: "Sample Fund 1",
      generationDate: "03/09/2020",
      dataGeneratedForDays: 100
    },
    {
      fundId: 2,
      fundName: "Sample Fund 2",
      generationDate: "03/10/2020",
      dataGeneratedForDays: 15
    },
    {
      fundId: 4,
      fundName: "Sample Fund 4",
      generationDate: "03/09/2020",
      dataGeneratedForDays: 13
    }
  ]
};

const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices"
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture"
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    category: "Career"
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 1,
    category: "HTML5"
  }
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  clients,
  funds,
  fundGenerationDuration,
  newCourse,
  courses,
  authors
};

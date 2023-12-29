const contactMocks = [
  {
    id: "c00001",
    name: "Jane Cooper",
    status: "Hello, don't forget to find me",
    avatar: "../src/mocks/contacts/imgs/contact00001.jpg", // Verify the paths definitions
    username: "janecooper",
    phone: "+6288888888",
    active: false,
    lastConnection: "9/8/2023 7:37:08 AM", //d.toLocaleString();
  },
  {
    id: "c00002",
    name: "Jenny Wilson",
    status: "Hi there, nice to meet you.",
    avatar: "../src/mocks/contacts/imgs/contact00002.jpg",
    username: "jennywi",
    phone: "+6288888888",
    active: true,
    lastConnection: "9/8/2023 7:37:08 AM", //do not change until the next toggle
  },
  {
    id: "c00010",
    name: "Savannah Nguyen",
    status: "Product Designer",
    avatar: "../src/mocks/contacts/imgs/contact00010.jpg",
    username: "savannah",
    phone: "+628452341283",
    active: true,
    lastConnection: "9/8/2023 7:37:08 AM", //d.toLocaleString();
  },
];

export { contactMocks };

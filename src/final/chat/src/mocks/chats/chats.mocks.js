const chatMocks = [
  {
    id: "chat000000001",
    from: "c00002",
    to: "c00010",
    content:
      "Hi there, nice to meet you, My name is Jenny Wilson, and i'm from Jakarta.",
    read: true,
    timeStamp: new Date("9/8/2023 7:37:08 AM"),
  },
  {
    id: "chat000000002",
    from: "c00002",
    to: "c00010",
    content: "Good evening, I'd like to order a chicken salad, please",
    read: true,
    timeStamp: new Date("9/8/2023 11:00:00 AM"),
  },
  {
    id: "chat000000003",
    from: "c00002",
    to: "g00001",
    content: "hi",
    read: true, //in groups this will be the first view, should we change that?
    timeStamp: new Date("9/8/2023 11:00:00 AM"),
  },
  {
    id: "chat000000005",
    from: "c00010",
    to: "c00002",
    content:
      "Hi there, nice to meet you too. I'm Savannah Nguyen from Banding, pleased to meet you",
    read: true, //in groups this will be the first view, should we change that?
    timeStamp: new Date("9/8/2023 11:10:00 AM"),
  },
  {
    id: "chat000000008",
    from: "c00002",
    to: "c00010",
    content: "Hi",
    read: true,
    timeStamp: new Date("9/9/2023 11:00:00 AM"),
  },
];

export { chatMocks };

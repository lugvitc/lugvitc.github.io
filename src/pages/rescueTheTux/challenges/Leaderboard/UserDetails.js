// import { points } from "./Leaderboard1";

const UserDetails = [
  {
    _id: "62d6a2e7570aecaea5567a5c",
    Rank: 0,
    score: 94,
    name: "Kennedy",
  },
  {
    _id: "62d6a2e749e41854287a1d48",
    Rank: 1,
    score: 54,
    name: "Sweeney",
  },
  {
    _id: "62d6a2e741e0289bd4600999",
    Rank: 2,
    score: 35,
    name: "Sylvia",
  },
  {
    _id: "62d6a2e7fc1776860ad00c57",
    Rank: 3,
    score: 40,
    name: "Martina",
  },
  {
    _id: "62d6a2e77620264a2b3226c8",
    Rank: 4,
    score: 39,
    name: "Lakeisha",
  },
  {
    _id: "62d6a2e76f9f5554e13b9545",
    Rank: 5,
    score: 85,
    name: "Alexis",
  },
  {
    _id: "62d6a2e7299bc62ebe20fbcf",
    Rank: 6,
    score: 86,
    name: "Jacquelyn",
  },
  {
    _id: "62d6a2e7a50c5c8908ab8329",
    Rank: 7,
    score: 49,
    name: "Priscilla",
  },
  {
    _id: "62d6a2e75eed557074b9b94f",
    Rank: 8,
    score: 8,
    name: "Tia",
  },
  {
    _id: "62d6a2e738f0a2bee57b2599",
    Rank: 9,
    score: 66,
    name: "Bobbi",
  },
  {
    _id: "62d6a2e78baa65ac00a71580",
    Rank: 10,
    score: 92,
    name: "Ortiz",
  },
  {
    _id: "62d6a2e7ca2ddaaf7316fda1",
    Rank: 11,
    score: 40,
    name: "Cobb",
  },
  {
    _id: "62d6a2e745300c65b990504b",
    Rank: 12,
    score: 50,
    name: "Marlene",
  },
  {
    _id: "62d6a2e7e395108a2e360ec4",
    Rank: 13,
    score: 1,
    name: "Mcclure",
  },
  {
    _id: "62d6a2e7d5685104e1bc96aa",
    Rank: 14,
    score: 69,
    name: "Weiss",
  },
  {
    _id: "62d6a2e7d5asd104e1bc96aa",
    Rank: 14,
    score: 50,
    name: "You",
  },
];

UserDetails.sort(function (a, b) {
  return b.score - a.score;
});

export { UserDetails };

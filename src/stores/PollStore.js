import { writable } from "svelte/store";

const PollStore = writable([
    {
        id: 1,
        question: "Python or Javascript?",
        answerA: "Python",
        answerB: "Javascript",
        votesA: 9,
        votesB: 15,
    },
    {
        id: 2,
        question: "Firebase or Pocketbase?",
        answerA: "Firebase",
        answerB: "Pocketbase",
        votesA: 80,
        votesB: 4,
    },
    {
        id: 3,
        question: "Do you like Waffles?",
        answerA: "Yes",
        answerB: "No",
        votesA: 4,
        votesB: 5,
    },
]);

export default PollStore;

// Questions for "Why is everyone tired?"  Load with quiz.html?deck=sleep
// correct = index into choices (0-3). time = seconds (optional, default 20).
window.QUIZ = {
  title: "Why is everyone tired?",
  questions: [
    { text: "How many hours of sleep do teenagers need per night?",
      choices: ["5 to 6", "6 to 7", "8 to 10", "11 or more"], correct: 2 },
    { text: "During puberty, the body's melatonin release shifts...",
      choices: ["About 2 hours earlier", "About 2 hours later", "Not at all", "To the morning"], correct: 1,
      note: "That's why 11 p.m. feels early and 6:30 a.m. feels brutal." },
    { text: "After about 18 hours awake, your reaction time is similar to a blood alcohol level of...",
      choices: ["0.01%", "0.05%", "0.10%", "0.20%"], correct: 1 },
    { text: "Roughly what fraction of U.S. high schoolers get less than 8 hours on school nights?",
      choices: ["1 in 10", "1 in 4", "1 in 2", "3 in 4"], correct: 3 },
    { text: "Caffeine's half-life is about 5 hours. A drink at 3 p.m. is still half in you at...",
      choices: ["5 p.m.", "6 p.m.", "8 p.m.", "Midnight"], correct: 2 },
    { text: "Which habit matters most for fixing a messed-up sleep schedule?",
      choices: ["A fixed bedtime", "A fixed wake time", "Sleeping in on weekends", "Warm milk"], correct: 1 },
    { text: "The American Academy of Pediatrics says high school should start no earlier than...",
      choices: ["7:00 a.m.", "7:30 a.m.", "8:00 a.m.", "8:30 a.m."], correct: 3 },
    { text: "Ideal nap: how long, and when?",
      choices: ["20 min, before 3 p.m.", "90 min, after dinner", "2 hours, whenever", "Naps are always bad"], correct: 0 },
  ],
};

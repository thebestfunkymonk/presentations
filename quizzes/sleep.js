// Questions for "Why is everyone tired?"  Load with quiz.html?deck=sleep
// level = Bloom's taxonomy level, shown on screen. correct = index into choices.
// type: "reaction" is a reaction-time round instead of a multiple choice question.
window.QUIZ = {
  title: "Why is everyone tired?",
  questions: [
    { level: "Remember",
      text: "How many hours of sleep do teenagers need per night?",
      choices: ["5 to 6", "6 to 7", "8 to 10", "11 or more"], correct: 2 },

    { level: "Understand",
      text: "Why does 11 p.m. feel early to a 16-year-old but late to a 10-year-old?",
      choices: ["Teens have more homework, so they stay up", "Melatonin release shifts about 2 hours later during puberty", "Younger kids burn more energy during the day", "Teens build up a caffeine tolerance"], correct: 1 },

    { level: "Apply",
      text: "Maya has a big test Thursday morning and has slept 6 hours a night all week. Which plan gives her the best shot?",
      choices: ["Pull an all-nighter Wednesday to cram", "Study until 11, sleep 8 hours, review at breakfast", "Sleep 12 hours Wednesday to erase the debt", "Two energy drinks at 7 a.m."], correct: 1,
      note: "Memory is filed during sleep, and a week of debt does not clear in one night." },

    { level: "Apply",
      text: "It's 4 p.m. and Jordan wants to be asleep by 10:30. Which choice is the biggest problem?",
      choices: ["A 20-minute nap right now", "A large iced coffee right now", "A walk outside", "Starting homework now"], correct: 1,
      note: "Caffeine's half-life is about 5 hours, so half of that coffee is still active at 9 p.m." },

    { level: "Analyze",
      text: "Sam sleeps 6 hours on school nights and 11 on weekends. Monday mornings are the worst. What best explains Monday?",
      choices: ["Weekend sleep is lower quality", "Sleeping until noon shifted Sam's body clock later, so Sunday night they couldn't fall asleep", "Sam eats badly on weekends", "Mondays are just hard for everyone"], correct: 1,
      note: "Social jet lag. The clock moves with the wake time, not the intention." },

    { level: "Analyze",
      text: "In the study, people sleeping 6 hours for two weeks performed like people who pulled two all-nighters, but rated themselves only slightly tired. What does this show?",
      choices: ["6 hours is enough for most people", "Sleep debt hurts performance without making you feel tired", "All-nighters aren't that bad", "Two weeks is too short to measure"], correct: 1 },

    { level: "Evaluate",
      text: "Which argument for later school start times is best supported by evidence?",
      choices: ["Teens are lazy and need the extra time", "Teen body clocks run about 2 hours late, and districts that moved start times saw more sleep, better attendance, and fewer teen crashes", "Teachers would rather sleep in too", "A later start makes the school day shorter"], correct: 1 },

    { level: "Evaluate",
      text: "You get to change one habit. Based on the presentation, which single change would most improve your sleep?",
      choices: ["A fixed bedtime on weekdays only", "A fixed wake time every day, including weekends", "Sleeping in as long as possible on weekends", "Switching to decaf after 6 p.m."], correct: 1,
      note: "The wake time sets the clock. Bedtime follows it." },

    { type: "reaction", level: "Reaction",
      text: "Reaction round. How fast are you right now?",
      note: "Sleep-deprived people are roughly 30% slower on this test, and still rate themselves as fine." },
  ],
};

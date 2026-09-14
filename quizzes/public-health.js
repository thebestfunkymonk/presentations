// Questions for "Public Health's Greatest Hits"  Load with quiz.html?deck=public-health
// level = Bloom's taxonomy level, shown on screen. correct = index into choices.
window.QUIZ = {
  title: "Public Health's Greatest Hits",
  questions: [
    { level: "Remember",
      text: "Life expectancy for a U.S. baby born in 1900 was about...",
      choices: ["35", "47", "58", "66"], correct: 1 },

    { level: "Understand",
      text: "Why did removing the Broad Street pump handle stop the 1854 cholera outbreak?",
      choices: ["Cholera spreads through bad air, and the pump released it", "The pump's water was contaminated with sewage, and people stopped drinking it", "It scared people into leaving the neighborhood", "It forced people to boil their water"], correct: 1 },

    { level: "Apply",
      text: "A town has high rates of tooth decay, and half its residents never see a dentist. Which action follows the 'greatest hits' pattern?",
      choices: ["Free dental checkups for anyone who signs up", "Fluoridate the water supply", "A poster campaign about brushing", "Discounts on toothpaste"], correct: 1,
      note: "It reaches everyone by default, including the people who never sign up for anything." },

    { level: "Apply",
      text: "Between 1968 and 1984, every new car had seatbelts but most people didn't wear them. What changed deaths the most?",
      choices: ["Better belt design", "Laws requiring people to wear them", "Airbags", "Driver's education"], correct: 1 },

    { level: "Analyze",
      text: "Life expectancy rose about 20 years between 1900 and 1945, before antibiotics were widely available. What best explains it?",
      choices: ["Better hospitals and surgeons", "Clean water, sewers, and safer food", "Vaccines for every major disease", "People exercised more"], correct: 1,
      note: "Clean water alone accounts for about half the drop in city death rates in that period." },

    { level: "Analyze",
      text: "The 1918 flu cut U.S. life expectancy by 12 years. COVID-19 in 2020 cut it by under 2. Which factor best explains the difference?",
      choices: ["COVID was milder for everyone", "In 1918 there were no antivirals, no intensive care, no vaccines, and little public health capacity", "People in 1918 were physically weaker", "Fewer people traveled in 1918"], correct: 1 },

    { level: "Evaluate",
      text: "Which is the strongest evidence that the 1964 Surgeon General's report mattered?",
      choices: ["It was on the front page of every newspaper", "Adult smoking fell from 42% to 11% over the following decades, and about 8 million early deaths were avoided", "Cigarettes got more expensive", "Many doctors quit smoking"], correct: 1 },

    { level: "Evaluate",
      text: "A city can fund one project: a new cancer treatment wing, or replacing lead water pipes. Using the presentation's argument, which is the stronger public health investment?",
      choices: ["The wing, because treatment saves lives directly", "The pipes, because prevention reaches everyone whether or not they seek care", "The wing, because it is more visible to voters", "Neither, both are too expensive"], correct: 1 },
  ],
};

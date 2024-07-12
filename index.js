const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false, // Set to 'false' if you want to see the browser actions
    });
    const page = await browser.newPage();
    await page.goto('https://peanutinc.vercel.app/faculty/login');

    await page.type('#email', '@gmail.com');
    await page.type('#password', '');
    await page.click('button[type="submit"]');

    await page.waitForNavigation();

    await page.goto('https://peanutinc.vercel.app/faculty/createquiz');

    await page.type('input[name="topic"]', 'Assessment - III');
    await page.$eval('input[name="amount"]', input => input.value = '');
    // await page.type('input[name="amount"]', '6'); 
    await page.click('button[type="submit"]');

    await page.waitForNavigation();

    async function createQuestion(quizName, question, correctAnswer, option1, option2, option3) {
        await page.type('input[name="quizName"]', quizName);
        await page.type('input[name="question"]', question);
        await page.type('input[name="correctAnswer"]', correctAnswer);
        await page.type('input[name="option1"]', option1);
        await page.type('input[name="option2"]', option2);
        await page.type('input[name="option3"]', option3);
        await page.click('button[type="submit"]');

        await page.waitForTimeout(4000);

    }

    // Create multiple questions
    // await createQuestion('Averages', 'The average of 5, 8, 12, 20, and 25 is:', '14', '12', '15', '10');
    // await createQuestion('Averages', 'The average of first five multiples of 3 is:', '9', '10', '8', '11');
    // await createQuestion('Averages', 'The average of the first 10 natural numbers is:', '5.5', '5', '6', '4.5');
    // await createQuestion('Averages', 'The average age of a group of 10 students is 15 years. What is the total age of the group?', '150', '140', '160', '130');
    // await createQuestion('Averages', 'The average score of a student in 4 exams is 75. If the student scored 80, 70, and 75 in the first three exams, what was the score in the fourth exam?', '75', '80', '70', '85');
    // await createQuestion('Averages', 'If the average of four numbers is 20 and three of the numbers are 15, 20, and 25, what is the fourth number?', '20', '25', '30', '15');
    // await createQuestion('Averages', 'The average temperature for the first four days of a week is 40°C. If the temperature on the last three days are 41°C, 42°C, and 43°C, what is the average temperature for the week?', '41', '40', '42', '43');
    // await createQuestion('Averages', 'The average weight of 6 people is 55 kg. If the weight of the seventh person is added, the average weight increases by 1 kg. What is the weight of the seventh person?', '62', '61', '57', '60');
    // await createQuestion('Averages', 'The average marks of 30 students in a class are 75. If the highest and lowest scores are excluded, the average is 76. If the highest score is 95, what is the lowest score?', '35', '40', '45', '50');
    // await createQuestion('Averages', 'The average salary of 8 employees is 20000. If one employee whose salary is 25000 resigns and a new employee is hired, resulting in the average salary becoming 19500, what is the salary of the new employee?', '15000', '19000', '18000', '20000');

    // await createQuestion('Percentages', 'What is 20% of 150?', '30', '25', '35', '20');
    // await createQuestion('Percentages', 'If a number is increased by 20% and then decreased by 20%, the final value is what percent of the original?', '96%', '100%', '80%', '98%');
    // await createQuestion('Percentages', 'A product costs $200 and is sold with a 10% discount. What is the selling price?', '$180', '$190', '$170', '$200');
    // await createQuestion('Percentages', 'A population of a town increased by 25% in one year. If the initial population was 8000, what is the population at the end of the year?', '10000', '8500', '9500', '9000');
    // await createQuestion('Percentages', 'A score of 75 out of 100 is what percent?', '75%', '70%', '80%', '65%');
    // await createQuestion('Percentages', 'A man spends 40% of his salary on rent. If his salary is $5000, how much does he spend on rent?', '$2000', '$2500', '$1500', '$3000');
    // await createQuestion('Percentages', 'If 30% of a number is 90, what is the number?', '300', '250', '350', '270');
    // await createQuestion('Percentages', 'A student scored 72 marks in a test out of 80. What is the percentage score?', '90%', '85%', '95%', '80%');
    // await createQuestion('Percentages', 'The price of a laptop was increased by 15%. If the original price was $600, what is the new price?', '$690', '$700', '$720', '$680');
    // await createQuestion('Percentages', 'A man saves 25% of his income. If his income is $4000, how much does he save?', '$1000', '$1200', '$900', '$800');

    // await createQuestion('Data Interpretation', 'If a pie chart shows 40% of a budget spent on marketing, what fraction is this?', '2/5', '1/4', '1/3', '3/8');
    // await createQuestion('Data Interpretation', 'A bar graph shows the sales of five products: A (20 units), B (15 units), C (25 units), D (30 units), E (10 units). Which product had the highest sales?', 'D', 'A', 'C', 'E');
    // await createQuestion('Data Interpretation', 'In a survey, 60% of participants preferred tea over coffee. If there were 300 participants, how many preferred tea?', '180', '120', '150', '200');
    // await createQuestion('Data Interpretation', 'A line graph shows the population growth from 2000 to 2020. If the population was 100,000 in 2000 and increased by 50,000 every decade, what was the population in 2020?', '200,000', '150,000', '250,000', '300,000');
    // await createQuestion('Data Interpretation', 'A histogram shows the distribution of test scores. If the highest frequency is in the 70-80 range, what does this indicate?', 'Most students scored between 70-80', 'Most students scored above 80', 'Most students scored below 70', 'Scores are evenly distributed');
    // await createQuestion('Data Interpretation', 'If a scatter plot shows a positive correlation between study hours and test scores, what can be inferred?', 'More study hours lead to higher test scores', 'More study hours lead to lower test scores', 'No relationship', 'Test scores decrease with study hours');
    // await createQuestion('Data Interpretation', 'A pie chart shows 25% of the budget spent on transport, 35% on food, 20% on accommodation, and 20% on entertainment. What fraction of the budget is spent on food and accommodation combined?', '55%', '45%', '65%', '75%');
    // await createQuestion('Data Interpretation', 'A table shows the quarterly profits of a company for a year: Q1 ($10,000), Q2 ($12,000), Q3 ($15,000), Q4 ($13,000). What is the total profit for the year?', '$50,000', '$45,000', '$40,000', '$55,000');
    // await createQuestion('Data Interpretation', 'In a bar chart, the sales of three products are shown: A ($5000), B ($7000), C ($6000). Which product had the lowest sales?', 'A', 'B', 'C', 'None');
    // await createQuestion('Data Interpretation', 'A line graph shows the monthly expenses of a family. If the expenses in January were $2000 and in February $2500, what was the percentage increase?', '25%', '20%', '30%', '15%');


    // await createQuestion('Number Series, Word Analogy', 'What is the next number in the series: 2, 4, 8, 16, ...?', '32', '24', '30', '28');
    // await createQuestion('Number Series, Word Analogy', 'What is the next number in the series: 1, 1, 2, 3, 5, ...?', '8', '7', '9', '6');
    // await createQuestion('Number Series, Word Analogy', 'What is the next number in the series: 3, 6, 9, 12, ...?', '15', '14', '16', '13');
    // await createQuestion('Number Series, Word Analogy', 'What is the next number in the series: 5, 10, 20, 40, ...?', '80', '70', '90', '60');
    // await createQuestion('Number Series, Word Analogy', 'What is the next number in the series: 10, 7, 4, 1, ...?', '-2', '0', '-1', '2');
    // await createQuestion('Number Series, Word Analogy', 'Find the analogy: Cat is to Kitten as Dog is to ?', 'Puppy', 'Cub', 'Calf', 'Foal');
    // await createQuestion('Number Series, Word Analogy', 'Find the analogy: Tree is to Forest as Book is to ?', 'Library', 'Shelf', 'Page', 'Paper');
    // await createQuestion('Number Series, Word Analogy', 'Find the analogy: Water is to Drink as Food is to ?', 'Eat', 'Cook', 'Serve', 'Grow');
    // await createQuestion('Number Series, Word Analogy', 'Find the analogy: Bird is to Nest as Bee is to ?', 'Hive', 'Web', 'Den', 'Burrow');
    // await createQuestion('Number Series, Word Analogy', 'Find the analogy: Pen is to Write as Brush is to ?', 'Paint', 'Draw', 'Clean', 'Wash');

    // await createQuestion('Reasoning Logical Diagram and Reasoning Ability', 'If all roses are flowers and some flowers fade quickly, which statement is true?', 'Some roses fade quickly', 'No roses fade quickly', 'All flowers fade quickly', 'Some flowers are roses');
    // await createQuestion('Reasoning Logical Diagram and Reasoning Ability', 'If A is taller than B, and B is taller than C, who is the tallest?', 'A', 'B', 'C', 'Cannot be determined');
    // await createQuestion('Reasoning Logical Diagram and Reasoning Ability', 'If the statements "All cats are animals" and "Some animals are dogs" are true, what can be concluded?', 'Some cats are dogs', 'All animals are cats', 'No cats are dogs', 'Some animals are cats');
    // await createQuestion('Reasoning Logical Diagram and Reasoning Ability', 'If all pencils are pens and no pens are erasers, which statement is true?', 'No pencils are erasers', 'Some pencils are erasers', 'All erasers are pencils', 'Some erasers are pens');
    // await createQuestion('Reasoning Logical Diagram and Reasoning Ability', 'If A is older than B, and B is older than C, who is the youngest?', 'C', 'A', 'B', 'Cannot be determined');
    // await createQuestion('Reasoning Logical Diagram and Reasoning Ability', 'If all birds can fly and penguins are birds, which statement is false?', 'Penguins can fly', 'Penguins are birds', 'All birds can fly', 'Some birds cannot fly');
    // await createQuestion('Reasoning Logical Diagram and Reasoning Ability', 'If A is equal to B and B is equal to C, what is the relationship between A and C?', 'A is equal to C', 'A is greater than C', 'A is less than C', 'No relationship');
    // await createQuestion('Reasoning Logical Diagram and Reasoning Ability', 'If all fruits are sweet and mangoes are fruits, which statement is true?', 'Mangoes are sweet', 'No fruits are sweet', 'Some mangoes are sweet', 'Mangoes are not sweet');
    // await createQuestion('Reasoning Logical Diagram and Reasoning Ability', 'If A is to the right of B and C is to the right of A, where is C in relation to B?', 'To the right of B', 'To the left of B', 'Above B', 'Below B');
    // await createQuestion('Reasoning Logical Diagram and Reasoning Ability', 'If all apples are fruits and some fruits are sweet, which statement is true?', 'Some apples are sweet', 'All apples are sweet', 'No apples are sweet', 'Some apples are not fruits');

    // await createQuestion('Number System, Progressions and Inequalities', 'What is the next number in the arithmetic progression: 2, 5, 8, 11, ...?', '14', '13', '15', '12');
    // await createQuestion('Number System, Progressions and Inequalities', 'What is the next number in the geometric progression: 3, 6, 12, 24, ...?', '48', '42', '36', '30');
    // await createQuestion('Number System, Progressions and Inequalities', 'Solve the inequality: 2x - 3 > 7', 'x > 5', 'x > 2', 'x < 5', 'x < 2');
    // await createQuestion('Number System, Progressions and Inequalities', 'What is the sum of the first 10 natural numbers?', '55', '45', '65', '50');
    // await createQuestion('Number System, Progressions and Inequalities', 'Solve the inequality: 3x + 4 < 10', 'x < 2', 'x > 2', 'x = 2', 'x = 3');
    // await createQuestion('Number System, Progressions and Inequalities', 'What is the next number in the arithmetic progression: 1, 4, 7, 10, ...?', '13', '12', '14', '11');
    // await createQuestion('Number System, Progressions and Inequalities', 'Solve the inequality: 5x - 2 > 8', 'x > 2', 'x > 1', 'x < 2', 'x < 1');
    // await createQuestion('Number System, Progressions and Inequalities', 'What is the next number in the geometric progression: 2, 4, 8, 16, ...?', '32', '28', '24', '30');
    // await createQuestion('Number System, Progressions and Inequalities', 'What is the sum of the first 20 natural numbers?', '210', '200', '220', '230');
    // await createQuestion('Number System, Progressions and Inequalities', 'Solve the inequality: 4x + 1 < 9', 'x < 2', 'x > 2', 'x = 2', 'x = 1');

    //   await createQuestion('Profit and Loss, Simple Interest & Compound Interest', 'A man buys a book for $100 and sells it for $120. What is the profit percentage?', '20%', '10%', '15%', '25%');
    // await createQuestion('Profit and Loss, Simple Interest & Compound Interest', 'If the cost price of a product is $200 and the selling price is $250, what is the profit?', '$50', '$40', '$60', '$30');
    // await createQuestion('Profit and Loss, Simple Interest & Compound Interest', 'If the selling price of a product is $150 and the cost price is $100, what is the profit percentage?', '50%', '40%', '60%', '30%');
    // await createQuestion('Profit and Loss, Simple Interest & Compound Interest', 'If a man borrows $1000 at an annual simple interest rate of 5%, what is the interest after 2 years?', '$100', '$80', '$120', '$90');
    // await createQuestion('Profit and Loss, Simple Interest & Compound Interest', 'If the principal is $500, the rate of interest is 10% per annum, and the time period is 3 years, what is the simple interest?', '$150', '$200', '$250', '$300');
    // await createQuestion('Profit and Loss, Simple Interest & Compound Interest', 'If a man borrows $2000 at an annual compound interest rate of 10%, what is the amount after 2 years?', '$2420', '$2200', '$2300', '$2400');
    // await createQuestion('Profit and Loss, Simple Interest & Compound Interest', 'If the principal is $1000, the rate of interest is 5% per annum, and the time period is 2 years, what is the compound interest?', '$102.50', '$105', '$110', '$115');
    // await createQuestion('Profit and Loss, Simple Interest & Compound Interest', 'If the selling price of a product is $120 and the cost price is $100, what is the profit?', '$20', '$15', '$25', '$30');
    // await createQuestion('Profit and Loss, Simple Interest & Compound Interest', 'If a man borrows $5000 at an annual simple interest rate of 4%, what is the interest after 3 years?', '$600', '$500', '$400', '$700');
    // await createQuestion('Profit and Loss, Simple Interest & Compound Interest', 'If the principal is $3000, the rate of interest is 8% per annum, and the time period is 5 years, what is the simple interest?', '$1200', '$1000', '$1400', '$1100');

    // await createQuestion('Speed, Time & Distance Time & Work', 'If a car travels at 60 km/h for 2 hours, what is the distance covered?', '120 km', '100 km', '140 km', '110 km');
    // await createQuestion('Speed, Time & Distance Time & Work', 'If a train travels 300 km in 5 hours, what is its average speed?', '60 km/h', '50 km/h', '70 km/h', '40 km/h');
    // await createQuestion('Speed, Time & Distance Time & Work', 'If a man can complete a job in 8 hours, how much of the job is done in 2 hours?', '1/4', '1/3', '1/2', '1/6');
    // await createQuestion('Speed, Time & Distance Time & Work', 'If two workers can complete a job in 5 days, how long will it take for one worker to complete the job alone?', '10 days', '8 days', '12 days', '6 days');
    // await createQuestion('Speed, Time & Distance Time & Work', 'If a car travels at 90 km/h for 3 hours, what is the distance covered?', '270 km', '250 km', '300 km', '280 km');
    // await createQuestion('Speed, Time & Distance Time & Work', 'If a train travels 400 km in 8 hours, what is its average speed?', '50 km/h', '45 km/h', '55 km/h', '60 km/h');
    // await createQuestion('Speed, Time & Distance Time & Work', 'If a man can complete a job in 10 hours, how much of the job is done in 4 hours?', '2/5', '1/2', '3/5', '1/3');
    // await createQuestion('Speed, Time & Distance Time & Work', 'If three workers can complete a job in 6 days, how long will it take for one worker to complete the job alone?', '18 days', '15 days', '12 days', '10 days');
    // await createQuestion('Speed, Time & Distance Time & Work', 'If a car travels at 70 km/h for 4 hours, what is the distance covered?', '280 km', '300 km', '250 km', '270 km');
    // await createQuestion('Speed, Time & Distance Time & Work', 'If a train travels 600 km in 12 hours, what is its average speed?', '50 km/h', '45 km/h', '55 km/h', '60 km/h');

    // await createQuestion('Probabilities', 'What is the probability of rolling a 3 on a standard 6-sided die?', '1/6', '1/3', '1/2', '1/4');
    // await createQuestion('Probabilities', 'If a card is drawn from a standard deck of 52 cards, what is the probability of drawing a king?', '1/13', '1/52', '1/4', '1/12');
    // await createQuestion('Probabilities', 'What is the probability of flipping a coin and getting heads?', '1/2', '1/3', '1/4', '1/5');
    // await createQuestion('Probabilities', 'If two dice are rolled, what is the probability of getting a sum of 7?', '1/6', '1/12', '1/8', '1/4');
    // await createQuestion('Probabilities', 'If a card is drawn from a standard deck of 52 cards, what is the probability of drawing a heart?', '1/4', '1/2', '1/3', '1/5');
    // await createQuestion('Probabilities', 'What is the probability of drawing an ace from a standard deck of 52 cards?', '1/13', '1/26', '1/52', '1/12');
    // await createQuestion('Probabilities', 'If a coin is flipped twice, what is the probability of getting heads both times?', '1/4', '1/2', '1/3', '1/5');
    // await createQuestion('Probabilities', 'If two dice are rolled, what is the probability of getting a sum of 11?', '1/18', '1/12', '1/8', '1/4');
    // await createQuestion('Probabilities', 'What is the probability of drawing a red card from a standard deck of 52 cards?', '1/2', '1/4', '1/3', '1/5');
    // await createQuestion('Probabilities', 'If a coin is flipped three times, what is the probability of getting heads all three times?', '1/8', '1/6', '1/4', '1/10');

    // await createQuestion('Clocks and Calendars', 'What angle is formed between the hour and minute hands at 3:00?', '90 degrees', '60 degrees', '120 degrees', '150 degrees');
    // await createQuestion('Clocks and Calendars', 'If it is 10:15 now, what time will it be in 45 minutes?', '11:00', '11:30', '10:45', '11:15');
    // await createQuestion('Clocks and Calendars', 'What is the angle between the hour and minute hands at 6:00?', '180 degrees', '90 degrees', '120 degrees', '150 degrees');
    // await createQuestion('Clocks and Calendars', 'If today is Monday, what day will it be 10 days from now?', 'Thursday', 'Wednesday', 'Friday', 'Saturday');
    // await createQuestion('Clocks and Calendars', 'What angle is formed between the hour and minute hands at 9:00?', '90 degrees', '60 degrees', '120 degrees', '150 degrees');
    // await createQuestion('Clocks and Calendars', 'If it is 2:45 now, what time will it be in 30 minutes?', '3:15', '3:30', '3:00', '2:15');
    // await createQuestion('Clocks and Calendars', 'What is the angle between the hour and minute hands at 12:00?', '0 degrees', '90 degrees', '180 degrees', '360 degrees');
    // await createQuestion('Clocks and Calendars', 'If today is Friday, what day will it be 15 days from now?', 'Saturday', 'Sunday', 'Monday', 'Tuesday');
    // await createQuestion('Clocks and Calendars', 'What angle is formed between the hour and minute hands at 4:00?', '120 degrees', '90 degrees', '60 degrees', '150 degrees');
    // await createQuestion('Clocks and Calendars', 'If it is 8:30 now, what time will it be in 90 minutes?', '10:00', '9:30', '10:30', '9:00');

    // await createQuestion('Geometry and Mensuration', 'What is the area of a rectangle with length 10 cm and width 5 cm?', '50 cm²', '40 cm²', '60 cm²', '45 cm²');
    // await createQuestion('Geometry and Mensuration', 'What is the perimeter of a square with side length 6 cm?', '24 cm', '20 cm', '18 cm', '22 cm');
    // await createQuestion('Geometry and Mensuration', 'What is the area of a circle with radius 7 cm?', '154 cm²', '140 cm²', '164 cm²', '144 cm²');
    // await createQuestion('Geometry and Mensuration', 'What is the volume of a cube with side length 4 cm?', '64 cm³', '48 cm³', '60 cm³', '52 cm³');
    // await createQuestion('Geometry and Mensuration', 'What is the circumference of a circle with radius 5 cm?', '31.4 cm', '30 cm', '32.5 cm', '28 cm');
    // await createQuestion('Geometry and Mensuration', 'What is the area of a triangle with base 8 cm and height 6 cm?', '24 cm²', '28 cm²', '26 cm²', '20 cm²');
    // await createQuestion('Geometry and Mensuration', 'What is the perimeter of a rectangle with length 12 cm and width 7 cm?', '38 cm', '34 cm', '36 cm', '40 cm');
    // await createQuestion('Geometry and Mensuration', 'What is the volume of a sphere with radius 3 cm?', '113.1 cm³', '108 cm³', '115 cm³', '110 cm³');
    // await createQuestion('Geometry and Mensuration', 'What is the area of a square with side length 9 cm?', '81 cm²', '72 cm²', '90 cm²', '64 cm²');
    // await createQuestion('Geometry and Mensuration', 'What is the perimeter of a triangle with sides 3 cm, 4 cm, and 5 cm?', '12 cm', '10 cm', '14 cm', '15 cm');

    // // Percentages
    // await createQuestion('Assessment - I', 'What is 20% of 150?', '30', '20', '25', '40');
    // await createQuestion('Assessment - I', 'A product costs $200 after a 10% discount. What was the original price?', '$222.22', '$220', '$210', '$215');
    // await createQuestion('Assessment - I', 'If 50% of a number is 25, what is the number?', '50', '60', '40', '30');

    // // Data Interpretation
    // await createQuestion('Assessment - I', 'If the bar chart shows sales in four quarters as 100, 150, 200, and 250, what is the average sales?', '175', '200', '150', '225');
    // await createQuestion('Assessment - I', 'If a pie chart shows 25% of a budget allocated to marketing, what fraction is that?', '1/4', '1/3', '1/5', '1/6');
    // await createQuestion('Assessment - I', 'If a line graph shows a steady increase in revenue from $500 to $1000 over 5 years, what is the annual increase?', '$100', '$125', '$150', '$200');

    // // Number Series, Word Analogy
    // await createQuestion('Assessment - I', 'What is the next number in the series: 2, 4, 6, 8, ...?', '10', '12', '14', '16');
    // await createQuestion('Assessment - I', 'Complete the analogy: Cat is to Kitten as Dog is to ?', 'Puppy', 'Cub', 'Calf', 'Chick');
    // await createQuestion('Assessment - I', 'What is the next number in the series: 5, 10, 15, 20, ...?', '25', '30', '35', '40');

    // // Reasoning Logical Diagram and Reasoning Ability
    // await createQuestion('Assessment - I', 'Which shape is next in the sequence: circle, triangle, square, ...?', 'Pentagon', 'Hexagon', 'Octagon', 'Heptagon');
    // await createQuestion('Assessment - I', 'If A is to B as 1 is to ?', '2', '3', '4', '5');
    // await createQuestion('Assessment - I', 'If all apples are fruits and some fruits are sweet, which statement is true?', 'Some apples are sweet', 'All apples are sweet', 'No apples are sweet', 'Some apples are not fruits');

    // // Number System, Progressions and Inequalities
    // await createQuestion('Assessment - I', 'What is the next number in the arithmetic progression: 2, 5, 8, 11, ...?', '14', '13', '15', '12');
    // await createQuestion('Assessment - I', 'What is the next number in the geometric progression: 3, 6, 12, 24, ...?', '48', '42', '36', '30');
    // await createQuestion('Assessment - I', 'Solve the inequality: 2x - 3 > 7', 'x > 5', 'x > 2', 'x < 5', 'x < 2');

    // // Profit and Loss, Simple Interest & Compound Interest
    // await createQuestion('Assessment - I', 'A man buys a book for $100 and sells it for $120. What is the profit percentage?', '20%', '10%', '15%', '25%');
    // await createQuestion('Assessment - I', 'If the cost price of a product is $200 and the selling price is $250, what is the profit?', '$50', '$40', '$60', '$30');
    // await createQuestion('Assessment - I', 'If the selling price of a product is $150 and the cost price is $100, what is the profit percentage?', '50%', '40%', '60%', '30%');

    // // Speed, Time & Distance Time & Work
    // await createQuestion('Assessment - I', 'If a car travels at 60 km/h for 2 hours, what is the distance covered?', '120 km', '100 km', '140 km', '110 km');
    // await createQuestion('Assessment - I', 'If a train travels 300 km in 5 hours, what is its average speed?', '60 km/h', '50 km/h', '70 km/h', '40 km/h');
    // await createQuestion('Assessment - I', 'If a man can complete a job in 8 hours, how much of the job is done in 2 hours?', '1/4', '1/3', '1/2', '1/6');

    // // Probabilities
    // await createQuestion('Assessment - I', 'What is the probability of rolling a 3 on a standard 6-sided die?', '1/6', '1/3', '1/2', '1/4');
    // await createQuestion('Assessment - I', 'If a card is drawn from a standard deck of 52 cards, what is the probability of drawing a king?', '1/13', '1/52', '1/4', '1/12');
    // await createQuestion('Assessment - I', 'What is the probability of flipping a coin and getting heads?', '1/2', '1/3', '1/4', '1/5');

    // // Permutations and Combinations
    // await createQuestion('Assessment - I', 'How many ways can 4 books be arranged on a shelf?', '24', '16', '32', '12');
    // await createQuestion('Assessment - I', 'How many ways can 3 out of 5 students be chosen for a team?', '10', '15', '20', '5');
    // await createQuestion('Assessment - I', 'In how many ways can the letters of the word "CAT" be arranged?', '6', '9', '12', '3');


    // // Reasoning Logical Diagram and Reasoning Ability
    // await createQuestion('Assessment - II', 'Which shape is next in the sequence: circle, triangle, square, ...?', 'Pentagon', 'Hexagon', 'Octagon', 'Heptagon');
    // await createQuestion('Assessment - II', 'If A is to B as 1 is to ?', '2', '3', '4', '5');
    // await createQuestion('Assessment - II', 'If all apples are fruits and some fruits are sweet, which statement is true?', 'Some apples are sweet', 'All apples are sweet', 'No apples are sweet', 'Some apples are not fruits');

    // // Number System, Progressions and Inequalities
    // await createQuestion('Assessment - II', 'What is the next number in the arithmetic progression: 2, 5, 8, 11, ...?', '14', '13', '15', '12');
    // await createQuestion('Assessment - II', 'What is the next number in the geometric progression: 3, 6, 12, 24, ...?', '48', '42', '36', '30');
    // await createQuestion('Assessment - II', 'Solve the inequality: 2x - 3 > 7', 'x > 5', 'x > 2', 'x < 5', 'x < 2');

    // // Profit and Loss, Simple Interest & Compound Interest
    // await createQuestion('Assessment - II', 'A man buys a book for $100 and sells it for $120. What is the profit percentage?', '20%', '10%', '15%', '25%');
    // await createQuestion('Assessment - II', 'If the cost price of a product is $200 and the selling price is $250, what is the profit?', '$50', '$40', '$60', '$30');
    // await createQuestion('Assessment - II', 'If the selling price of a product is $150 and the cost price is $100, what is the profit percentage?', '50%', '40%', '60%', '30%');

    // // Speed, Time & Distance Time & Work
    // await createQuestion('Assessment - II', 'If a car travels at 60 km/h for 2 hours, what is the distance covered?', '120 km', '100 km', '140 km', '110 km');
    // await createQuestion('Assessment - II', 'If a train travels 300 km in 5 hours, what is its average speed?', '60 km/h', '50 km/h', '70 km/h', '40 km/h');
    // await createQuestion('Assessment - II', 'If a man can complete a job in 8 hours, how much of the job is done in 2 hours?', '1/4', '1/3', '1/2', '1/6');

    // // Probabilities
    // await createQuestion('Assessment - II', 'What is the probability of rolling a 3 on a standard 6-sided die?', '1/6', '1/3', '1/2', '1/4');
    // await createQuestion('Assessment - II', 'If a card is drawn from a standard deck of 52 cards, what is the probability of drawing a king?', '1/13', '1/52', '1/4', '1/12');
    // await createQuestion('Assessment - II', 'What is the probability of flipping a coin and getting heads?', '1/2', '1/3', '1/4', '1/5');

    // // Permutations and Combinations
    // await createQuestion('Assessment - II', 'How many ways can 4 books be arranged on a shelf?', '24', '16', '32', '12');
    // await createQuestion('Assessment - II', 'How many ways can 3 out of 5 students be chosen for a team?', '10', '15', '20', '5');
    // await createQuestion('Assessment - II', 'In how many ways can the letters of the word "CAT" be arranged?', '6', '9', '12', '3');

    // // Clocks and Calendars
    // await createQuestion('Assessment - II', 'What angle is formed between the hour and minute hands at 3:00?', '90 degrees', '60 degrees', '120 degrees', '150 degrees');
    // await createQuestion('Assessment - II', 'If it is 10:15 now, what time will it be in 45 minutes?', '11:00', '11:30', '10:45', '11:15');
    // await createQuestion('Assessment - II', 'What is the angle between the hour and minute hands at 6:00?', '180 degrees', '90 degrees', '120 degrees', '150 degrees');
    // await createQuestion('Assessment - II', 'If today is Monday, what day will it be 10 days from now?', 'Thursday', 'Wednesday', 'Friday', 'Saturday');
    // await createQuestion('Assessment - II', 'What angle is formed between the hour and minute hands at 9:00?', '90 degrees', '60 degrees', '120 degrees', '150 degrees');

    // // Geometry and Mensuration
    // await createQuestion('Assessment - II', 'What is the area of a rectangle with length 10 cm and width 5 cm?', '50 cm²', '40 cm²', '60 cm²', '45 cm²');
    // await createQuestion('Assessment - II', 'What is the perimeter of a square with side length 6 cm?', '24 cm', '20 cm', '18 cm', '22 cm');
    // await createQuestion('Assessment - II', 'What is the area of a circle with radius 7 cm?', '154 cm²', '140 cm²', '164 cm²', '144 cm²');
    // await createQuestion('Assessment - II', 'What is the volume of a cube with side length 4 cm?', '64 cm³', '48 cm³', '60 cm³', '52 cm³');
    // await createQuestion('Assessment - II', 'What is the circumference of a circle with radius 5 cm?', '31.4 cm', '30 cm', '32.5 cm', '28 cm');
    // await createQuestion('Assessment - II', 'What is the area of a triangle with base 8 cm and height 6 cm?', '24 cm²', '28 cm²', '26 cm²', '20 cm²');
    // await createQuestion('Assessment - II', 'What is the perimeter of a rectangle with length 12 cm and width 7 cm?', '38 cm', '34 cm', '36 cm', '40 cm');
    // await createQuestion('Assessment - II', 'What is the volume of a sphere with radius 3 cm?', '113.1 cm³', '108 cm³', '115 cm³', '110 cm³');
    // await createQuestion('Assessment - II', 'What is the area of a square with side length 9 cm?', '81 cm²', '72 cm²', '90 cm²', '64 cm²');
    // await createQuestion('Assessment - II', 'What is the perimeter of a triangle with sides 3 cm, 4 cm, and 5 cm?', '12 cm', '10 cm', '14 cm', '15 cm');

    await createQuestion('Assessment - III', 'What is the area of a square with side length 9 cm?', '81 cm²', '72 cm²', '90 cm²', '64 cm²');
    await createQuestion('Assessment - III', 'What is the perimeter of a triangle with sides 3 cm, 4 cm, and 5 cm?', '12 cm', '10 cm', '14 cm', '15 cm');
    await browser.close();
})();

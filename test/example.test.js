// IMPORT MODULES under test here:
import compare from '../comparing.js';

const test = QUnit.test;

test('when the correct guess is inputted the function will return 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess1 = 3;
    const guess2 = 12;
    const guess3 = 7;
    const guess4 = 16;
    const guess5 = 11;
    const correctAnswer1 = 3;
    const correctAnswer2 = 12;
    const correctAnswer3 = 7;
    const correctAnswer4 = 16;
    const correctAnswer5 = 11;
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = compare(guess1, correctAnswer1);
    const actual2 = compare(guess2, correctAnswer2);
    const actual3 = compare(guess3, correctAnswer3);
    const actual4 = compare(guess4, correctAnswer4);
    const actual5 = compare(guess5, correctAnswer5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
    expect.equal(actual4, expected);
    expect.equal(actual5, expected);
});

test('when the too low guess is inputted the function will return -1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess1 = 1;
    const guess2 = 9;
    const guess3 = 5;
    const guess4 = 13;
    const guess5 = 4;
    const wrongAnswer1 = 3;
    const wrongAnswer2 = 12;
    const wrongAnswer3 = 7;
    const wrongAnswer4 = 16;
    const wrongAnswer5 = 11;
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = compare(guess1, wrongAnswer1);
    const actual2 = compare(guess2, wrongAnswer2);
    const actual3 = compare(guess3, wrongAnswer3);
    const actual4 = compare(guess4, wrongAnswer4);
    const actual5 = compare(guess5, wrongAnswer5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
    expect.equal(actual4, expected);
    expect.equal(actual5, expected);
});

test('when the too high guess is inputted the function will return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess1 = 4;
    const guess2 = 14;
    const guess3 = 17;
    const guess4 = 20;
    const guess5 = 12;
    const wrongAnswer1 = 3;
    const wrongAnswer2 = 12;
    const wrongAnswer3 = 7;
    const wrongAnswer4 = 16;
    const wrongAnswer5 = 11;
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = compare(guess1, wrongAnswer1);
    const actual2 = compare(guess2, wrongAnswer2);
    const actual3 = compare(guess3, wrongAnswer3);
    const actual4 = compare(guess4, wrongAnswer4);
    const actual5 = compare(guess5, wrongAnswer5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
    expect.equal(actual4, expected);
    expect.equal(actual5, expected);
});

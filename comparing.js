export default function compareNums(guess, correctAnswer) {
    if (guess === correctAnswer) {
        return 0;
    } else if (guess < correctAnswer) {
        return -1;
    } else if (guess > correctAnswer) {
        return 1;
    }
}
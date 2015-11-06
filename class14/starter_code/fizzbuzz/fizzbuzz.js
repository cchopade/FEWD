/*

We're going to play a game of FizzBuzz. The rules are simple. We want to count from 1 to 20. But if the number is divisible by 3, we're going to print "Fizz". And if the number is divisible by 5 we're going to print "Buzz".

What will we print if the number is divisible by 3 AND 5? That's right! "FizzBuzz"!

There are many ways to do this, but we'd like you to use a nested conditional in this exercise.

*/

for (var i = 1; i <=20; i++) {
	if ((i % 5 === 0) && (i % 3 === 0)) {
		console.log("FizzBuzz");
	}
	else if (i % 3 === 0) {
		console.log("Fizz");
	}
	else if (i % 5 === 0) {
		console.log("Buzz");
	}
} 
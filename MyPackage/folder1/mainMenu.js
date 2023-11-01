const reverseArray = require('../folder2/reverseArray');
const countDigits = require('../folder2/countDigits');
const bubbleSort = require('../folder2/bubbleSort');


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mainMenu() {
  console.log('Menu:');
  console.log(1,'1. Reverse an array');
  console.log('2. Count digits of a given number');
  console.log('3. Bubble Sort');
  console.log('4. Single Linked List');
  console.log('5. Stack');
  console.log('6. Queue');
  console.log('0. Exit');

  rl.question('Enter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        const inputArray = [1, 2, 3, 4, 5];
        const reversedArray = reverseArray(inputArray);
        console.log('Reversed Array: ', reversedArray);
        mainMenu();
        break;
      case '2':
        const inputNumber = 12345;
        const digitCount = countDigits(inputNumber);
        console.log('Number of digits: ', digitCount);
        mainMenu();
        break;
      case '3':
        const unsortedArray = [5, 3, 1, 4, 2];
        const sortedArray = bubbleSort(unsortedArray);
        console.log('Sorted Array: ', sortedArray);
        mainMenu(); 
        break;
      case '4':
        // Single Linked List functions from Folder3
        break;
      case '5':
        // Call Stack functions from Folder3
        break;
      case '6':
        // Call Queue functions from Folder3
        break;
      case '0':
        rl.close();
        break;
      default:
        console.log('Invalid choice. Please try again.');
        mainMenu();
    }
  });
}

mainMenu();
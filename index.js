const DoublyLinkedList = require('./linkedLists');
const TreeNode = require('./TreeNode.js');
const MinHeap = require('./MinHeap.js');
MinHeap
// const subway=new DoublyLinkedList();
// subway.addToHead('TimesSquare');
// subway.addToHead('GrandCentral');
// subway.addToHead('CentralPark');
// subway.printList();
// subway.addToTail('PennStation');
// subway.addToTail('WallStreet');
// subway.addToTail('BrooklynBridge');
// subway.printList();
// subway.removeTail();
// subway.removeHead();
// subway.printList();
// subway.removeByData('TimesSquare');
// subway.printList();

// const menu = new TreeNode('Menu');

// const entries = {
//   'Breakfast' : [ 'Cereal', 'BBQ Chicken', 'Oatmeal' ],
//   'Lunch' : [ 'Soup', 'Sandwich', 'Lasagna' ],
//   'Dinner' : [ 'Yogurt', 'Filet Mignon', 'Fish Florentine' ]
// };

// const meals = Object.keys(entries);
// for (let meal=0; meal < meals.length; meal++){
//   menu.addChild(meals[meal]);
//   const entrylist = entries[meals[meal]];
//   entrylist.forEach( entry => {
//     menu.children[meal].addChild(entry);
//   });
// }

// menu.print();
// menu.children[0].removeChild(menu.children[0].children[1]);
// menu.children[2].removeChild(menu.children[2].children[0]);

// menu.children[0].addChild('Yogurt');
// menu.children[2].addChild('BBQ Chicken');
// console.log('------- Corrected Menu');
// menu.print();

// menu.depthFirstTraversal();



// instantiate a MinHeap class
const minHeap = new MinHeap();

// populate minHeap with descending numbers from 10001 to 1
console.log('Adding');
for (let i=10000; i >=1; i--) {
  minHeap.add(i);
}

// remove the minimum value from heap
console.log('Removing');
console.log('Minimum value = ' + minHeap.popMin());


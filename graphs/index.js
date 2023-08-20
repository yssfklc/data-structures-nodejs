const Graph = require('./Graph.js');

const trainNetwork = new Graph(true, true);
const los=trainNetwork.addVertex('Los Angeles');
const San=trainNetwork.addVertex('San Francisco');
const New=trainNetwork.addVertex('New York');
const Atlanta=trainNetwork.addVertex('Atlanta');
const Denver=trainNetwork.addVertex('Denver');
const Calgary=trainNetwork.addVertex('Calgary');

trainNetwork.addEdge(San, los, 400);
trainNetwork.addEdge(los, San, 400);
trainNetwork.addEdge(New, Denver, 1800);
trainNetwork.addEdge(Denver, New, 1800);
trainNetwork.addEdge(Calgary, Denver, 1000);
trainNetwork.addEdge(Denver, Calgary, 1000);
trainNetwork.addEdge(los, Atlanta, 2100);
trainNetwork.addEdge(Atlanta, los, 2100);

trainNetwork.removeEdge(New, Denver);
trainNetwork.removeEdge(Calgary, Denver);
trainNetwork.removeEdge(Denver, Calgary);

trainNetwork.removeVertex(Calgary);

trainNetwork.print();
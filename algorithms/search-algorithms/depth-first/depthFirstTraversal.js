const testGraph = require('../testGraph');

const depthFirstTraversal = (start, callback, visitedVertices = [start]) => {

  start.edges.forEach((edge) => {
    const neighbor = edge.end;

    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, callback, visitedVertices);

    }
      callback(start);
  });
};
const callback=(vertex)=>{
  console.log(vertex.data)
}
depthFirstTraversal(testGraph.vertices[0], callback);
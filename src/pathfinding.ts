/**
 * Console Log objects to full depth
 * @param objs Objects to print
 */
function print(...objs) {
	for (const obj of objs) {
		console.dir(obj, { depth: null });
	}
}

import { Graph, astar } from "yarn-pathfinding";

interface City {
	name: string;
	neighbors: { [cityName: string]: number };
}

const cities: City[] = [
	{ name: "New York", neighbors: { "Los Angeles": 3000, Chicago: 900 } },
	{ name: "Los Angeles", neighbors: { "New York": 3000, Houston: 1600 } },
	{ name: "Houston", neighbors: { "Los Angeles": 1600, Chicago: 1400 } },
	{ name: "Chicago", neighbors: { "New York": 900, Houston: 1400 } },
];

function findPath(start: string, end: string): string[] {
	const graph = new Graph();
	for (const city of cities) {
		graph.addNode(city.name);
		for (const neighbor of Object.keys(city.neighbors)) {
			graph.addEdge(city.name, neighbor, { weight: city.neighbors[neighbor] });
		}
	}

	const result = astar(graph, start, end, (a, b) => {
		return graph.getEdge(a, b).weight;
	});

	return result.path;
}

console.log(findPath("New York", "Chicago"));

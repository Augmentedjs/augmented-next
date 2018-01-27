import Augmented from "../dist/augmented-next.js";
import expect from "expect";

const DATA = [5, 7, 10, 400, 234, 4, 12, 55, 663, 34267, 22, 45, 3242, 27, 222, 43, 32, 98, 99, 21, 34, 6547, 3411, 1232];
const SORTED = [4, 5, 7, 10, 12, 21, 22, 27, 32, 34, 43, 45, 55, 98, 99, 222, 234, 400, 663, 1232, 3242, 3411, 6547, 34267];

describe("Given Sorting Utilities", () => {
	it("is defined", () => {
		expect(Augmented.Utility).toBeDefined();
	});

  describe("Given object sort", () => {
		it("can sort an array", () => {
			const o = [{"A": "B"}, {"A": "D"}, {"A": "C"}];
			const a = Augmented.Utility.sortObjects(o, "A");
			expect(a).not.toEqual(null);
			expect(a).not.toEqual([]);
			expect(a).toEqual([{"A": "B"}, {"A": "C"}, {"A": "D"}]);
		});
	});

  describe("Given quick sort", () => {
		it("can sort an array", () => {
			const a = Augmented.Utility.quickSort(DATA);
			expect(a).not.toEqual(null);
			expect(a).not.toEqual([]);
			expect(a).toEqual(SORTED);
		});
	});

  describe("Given mergeSort sort", () => {
		it("can sort an array", () => {
			const a = Augmented.Utility.mergeSort(DATA);
			expect(a).not.toEqual(null);
			expect(a).not.toEqual([]);
			expect(a).toEqual(SORTED);
		});
	});

  describe("Given insertionSort sort", () => {
		it("can sort an array", () => {
			const a = Augmented.Utility.insertionSort(DATA);
			expect(a).not.toEqual(null);
			expect(a).not.toEqual([]);
			expect(a).toEqual(SORTED);
		});
	});

  describe("Given bubbleSort sort", () => {
		it("can sort an array", () => {
			const a = Augmented.Utility.bubbleSort(DATA);
			expect(a).not.toEqual(null);
			expect(a).not.toEqual([]);
			expect(a).toEqual(SORTED);
		});
	});
});

const expect = require("expect");
import Augmented from "../src/augmented";

const KEY = "Name",
			makeUpNames = (amount) => {
	let i = 0, r = 0, d, indexHash = {};
	for (i = 0; i < amount; i++) {
		r = Math.random(r);
		d = { "Name": "name" + r, "ID": r, "Email": "name@augmentedjs.org", "Role": "nobody", "Active": false };
		// index the Name column
		indexHash[d[KEY]] = i;
	}
	return indexHash;
},
			makeUpData = (amount) => {
	let i = 0, r = 0, d, data = [];
	for (i = 0; i < amount; i++) {
		r = Math.random(r);
		d = { "Name": "name" + r, "ID": r, "Email": "name@augmentedjs.org", "Role": "nobody", "Active": false };
		data.push(d);
	}
	return data;
},
			arr = [5, 7, 10, 400, 234, 4, 12, 55, 663, 34267, 22, 45, 3242, 27, 222, 43, 32, 98, 99, 21, 34, 6547, 3411, 1232],
			objArr = [
	{
		"name": "freeForm Design",
		"image": "images/freeform.png",
		"title": "freeForm Design - Augmented SPA Designer",
		"desciption": "A Single Page Application designer built in Augmented.js.  This application can build the structure and source-code for a single page app.",
		"link": "http://www.augmentedjs.com/freeform/index.html",
		"patterns": [{ "pName": "Single Page Application"}]
	},
	{
		"name": "Augmented.Presentation.AutomaticTable",
		"image": "images/autoTable.png",
		"title": "Augmented.Presentation: Editable Automatic Table",
		"desciption": "Demonstrates Augmented.Presentation.AutomaticTable and various functions of the Presentation Module.",
		"link": "http://www.augmentedjs.com/example/index.html",
		"patterns": [{ "pName": "Automatic Table"},{ "pName": "Mediator"},{ "pName": "JSON Schema Validation"}]
	},
	{
		"name": "Augmented Top Model",
		"image": "images/topModel.png",
		"title": "Augmented: JSON Schema Validation",
		"desciption": "Demonstrates Augmented JSON Schema Validation.",
		"link": "http://www.augmentedjs.com/top-model/index.html",
		"patterns": [{ "pName": "Event Binding"},{ "pName": "Mediator"},{ "pName": "JSON Schema Validation"}]
	},
	{
		"name": "Stickies!",
		"image": "images/stickies.png",
		"title": "Stickies!",
		"desciption": "Demonstrates Augmented Decorator View.",
		"link": "http://www.augmentedjs.com/decorator/index.html",
		"patterns": [{ "pName": "MVVM"},{ "pName": "Decorator"},{ "pName": "Two-way Binding"}]
	},
	{
		"name": "Hello",
		"image": "images/dataPush.png",
		"title": "Hello",
		"desciption": "Demonstrates Augmented Decorator View Data Push.",
		"link": "http://www.augmentedjs.com/data-push/index.html",
		"patterns": [{ "pName": "MVVM"},{ "pName": "Decorator"},{ "pName": "Two-way Binding"}]
	},
	{
		"name": "Visual Mediator",
		"image": "images/mediator.png",
		"title": "Visual Mediator",
		"desciption": "Demonstrates Mediator View.",
		"link": "http://www.augmentedjs.com/mediator/index.html",
		"patterns": [{ "pName": "Mediator"}]
	}
];

describe("Given standard Data Structures", () => {
	describe("Given an array of objects", () => {
		const indexHash = makeUpNames(100000);
		const data = makeUpData(100000);
		const randomOne = Math.floor(Math.random() * ((data.length) - 0 + 1)) + 0;
		const match = data[randomOne],
				searchKey = match[KEY];

		it("can find the key (" + searchKey + ") by knowing the property \"Name\" O(1)", () => {
			let i = 0, result;
			const l = data.length;
			for (i = 0; i < l; i++) {
				if((data[i].Name === searchKey)) {
					result = data[i];
					break;
				}
			}
			expect(result).toEqual(match);
		});

		it("can find the key (" + searchKey + ") by not knowing the property \"Name\" O(n^2)", () => {
			let i = 0, l = data.length, result, keys, ii, ll, d;
			for (i = 0; i < l; i++) {
				d = data[i];
				keys = Object.keys(d);
				ll = keys.length;
				for (ii = 0; ii < ll; ii++) {
					if((d[keys[ii]] === searchKey)) {
						result = data[i];
						break;
					}
				}
			}
			expect(result).toEqual(match);
		});
	});

	describe("Given an array of objects", () => {
		let sorted;
		beforeEach(() => {
			sorted = Augmented.Utility.sortObjects(objArr, "name");
		});

		afterEach(() => {
			sorted = null;
		});

		it("can sort object array by property", () => {
			expect(sorted).toEqual([{"name":"Augmented Top Model","image":"images/topModel.png","title":"Augmented: JSON Schema Validation","desciption":"Demonstrates Augmented JSON Schema Validation.","link":"http://www.augmentedjs.com/top-model/index.html","patterns":[{"pName":"Event Binding"},{"pName":"Mediator"},{"pName":"JSON Schema Validation"}]},{"name":"Augmented.Presentation.AutomaticTable","image":"images/autoTable.png","title":"Augmented.Presentation: Editable Automatic Table","desciption":"Demonstrates Augmented.Presentation.AutomaticTable and various functions of the Presentation Module.","link":"http://www.augmentedjs.com/example/index.html","patterns":[{"pName":"Automatic Table"},{"pName":"Mediator"},{"pName":"JSON Schema Validation"}]},{"name":"Hello","image":"images/dataPush.png","title":"Hello","desciption":"Demonstrates Augmented Decorator View Data Push.","link":"http://www.augmentedjs.com/data-push/index.html","patterns":[{"pName":"MVVM"},{"pName":"Decorator"},{"pName":"Two-way Binding"}]},{"name":"Stickies!","image":"images/stickies.png","title":"Stickies!","desciption":"Demonstrates Augmented Decorator View.","link":"http://www.augmentedjs.com/decorator/index.html","patterns":[{"pName":"MVVM"},{"pName":"Decorator"},{"pName":"Two-way Binding"}]},{"name":"Visual Mediator","image":"images/mediator.png","title":"Visual Mediator","desciption":"Demonstrates Mediator View.","link":"http://www.augmentedjs.com/mediator/index.html","patterns":[{"pName":"Mediator"}]},{"name":"freeForm Design","image":"images/freeform.png","title":"freeForm Design - Augmented SPA Designer","desciption":"A Single Page Application designer built in Augmented.js.  This application can build the structure and source-code for a single page app.","link":"http://www.augmentedjs.com/freeform/index.html","patterns":[{"pName":"Single Page Application"}]}]);
		});
	});

	describe("Given an Array", () => {
		let sorted;
		beforeEach(() => {
			sorted = Augmented.Utility.quickSort(arr);
		});

		afterEach(() => {
			sorted = null;
		});

		it("can sort number array with QuickSort", () => {
			expect(sorted).toEqual([4, 5, 7, 10, 12, 21, 22, 27, 32, 34, 43, 45, 55, 98, 99, 222, 234, 400, 663, 1232, 3242, 3411, 6547, 34267]);
		});

		describe("can perform a binary search", () => {
			const comp = (z, n) => { return z - n; };
			let i, ii;

			beforeEach(() => {
				i = null;
				ii = null;
			});

			afterEach(() => {
				i = null;
				ii = null;
			});

			it("can return the index of a item via binary search O(n log n).", () => {
				i = Augmented.Utility.binarySearch(sorted, 32, comp);
				ii = sorted.indexOf(32);

				expect(i).toEqual(8);
				expect(i).toEqual(ii);
			});

			it("can return the index of a item via binary search with last index O(n log n).", () => {
				i = Augmented.Utility.binarySearch(sorted, 34267, comp);
				ii = sorted.indexOf(34267);

				expect(i).toEqual(23);
				expect(i).toEqual(ii);
			});
		});
	});
});

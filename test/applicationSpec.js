import Augmented from "../dist/augmented-next.js";
import expect from "expect";

describe("Given Augmented Application", () => {
	it("is defined", () => {
		expect(Augmented.Application).toBeDefined();
	});

	describe("can create an instance", () => {
		let app = null;
		beforeEach(() => {
			app = new Augmented.Application();
		});
		afterEach(() => {
			app = null;
		});

		it("can create an instance", () => {
			expect(app instanceof Augmented.Application).toBeTruthy();
		});

		it("to be able to add metadata 'name'", () => {
			app.setMetadataItem("name", "test");
			expect(app.getMetadataItem("name")).toEqual("test");
		});

		it("can start", () => {
			app.start();
			expect(app.start).toBeDefined();
		});

		it("can stop", () => {
			app.stop();
			expect(app.stop).toBeDefined();
		});
	});
});

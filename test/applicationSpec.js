describe("Given Augmented Application", () => {
	it("is defined", () => {
		expect(Augmented.Application).to.not.be.undefined;
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
			expect(app instanceof Augmented.Application).to.be.true;
		});

		it("to be able to add metadata 'name'", () => {
			app.setMetadataItem("name", "test");
			expect(app.getMetadataItem("name")).to.equal("test");
		});

		it("can start", () => {
			app.start();
			expect(app.start).to.not.be.undefined;
		});

		it("can stop", () => {
			app.stop();
			expect(app.stop).to.not.be.undefined;
		});
	});
});

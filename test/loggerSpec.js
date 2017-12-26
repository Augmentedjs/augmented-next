import Augmented from "../dist/augmented-next.js";
import expect from "expect";


describe("Given a logger factory", () => {
	it("is defined", () => {
		expect(Augmented.Logger.LoggerFactory).toBeDefined();
	});

	describe("Given a console logger", () => {
		let logger = null;
		beforeEach(() => {
			logger = Augmented.Logger.LoggerFactory.getLogger(Augmented.Logger.Type.CONSOLE, Augmented.Logger.Level.DEBUG);
		});

		afterEach(() => {
			logger = null;
		});

		it("can request a logger", () => {
			expect(logger).toBeDefined();
		});

		it("can log info", () => {
			const m = logger.info("xx");
			expect(m).not.toEqual("");
		});

		it("can log debug", () => {
			const m = logger.debug("xx");
			expect(m).not.toEqual("");
		});

		it("can log warn", () => {
			const m = logger.warn("xx");
			expect(m).not.toEqual("");
		});
	});

	describe("Given a color console logger", () => {
		let logger = null;
		beforeEach(() => {
			logger = Augmented.Logger.LoggerFactory.getLogger(Augmented.Logger.Type.COLOR_CONSOLE, Augmented.Logger.Level.DEBUG);
		});

		afterEach(() => {
			logger = null;
		});

		it("can request a logger", () => {
			expect(logger).toBeDefined();
		});
	});

	describe("Given a REST logger", () => {
		let logger = null;
		beforeEach(() => {
			logger = Augmented.Logger.LoggerFactory.getLogger(Augmented.Logger.Type.REST, Augmented.Logger.Level.DEBUG);
		});

		afterEach(() => {
			logger = null;
		});

		it("can request a logger", () => {
			expect(logger).toBeDefined();
		});
	});
});

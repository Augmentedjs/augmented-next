const expect = require("expect");
import * as Logger from "../src/logger";

describe("Given a logger factory", () => {
	it("is defined", () => {
		expect(Logger.LoggerFactory).toBeDefined();
	});

	describe("Given a console logger", () => {
		let logger = null;
		beforeEach(() => {
			logger = Logger.LoggerFactory.getLogger(Logger.Type.CONSOLE, Logger.Level.DEBUG);
		});

		afterEach(() => {
			logger = null;
		});

		it("can request a console logger", () => {
			expect(logger).toBeDefined();
		});

		it("can log info", () => {
			logger.info("xx");
			expect(logger).toBeDefined();
		});

		it("can log debug", () => {
			logger.debug("xx");
			expect(logger).toBeDefined();
		});

		it("can log warn", () => {
			logger.warn("xx");
			expect(logger).toBeDefined();
		});
	});
});

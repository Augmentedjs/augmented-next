import Augmented from "../dist/augmented-next.js";
import expect from "expect";

describe("Given Augmented Security", () => {
	it("is defined", () => {
		expect(Augmented.Security).toBeDefined();
	});

	describe("Given Augmented Security Factory", () => {
		let client = null;

		afterEach(() => {
			client = null;
		});

		it("is defined", () => {
			expect(Augmented.Security.AuthenticationFactory).toBeDefined();
		});

		it("can return an OAUTH2 Client", () => {
			client = Augmented.Security.AuthenticationFactory.getSecurityClient(Augmented.Security.ClientType.OAUTH2);
			expect(client.type).toEqual(Augmented.Security.ClientType.OAUTH2);
		});

		it("can return an ACL Client", () => {
			client = Augmented.Security.AuthenticationFactory.getSecurityClient(Augmented.Security.ClientType.ACL);
			expect(client.type).toEqual(Augmented.Security.ClientType.ACL);
		});

		it("does not return a Fake Client", () => {
			client = Augmented.Security.AuthenticationFactory.getSecurityClient("fake");
			expect(client).toEqual(null);
		});
	});
});

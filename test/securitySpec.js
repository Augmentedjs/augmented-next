
describe("Given Augmented Security", () => {
	it("is defined", () => {
		expect(Augmented.Security).to.not.be.undefined;
	});

	describe("Given Augmented Security Factory", () => {
		let client = null;

		afterEach(() => {
			client = null;
		});

		it("is defined", () => {
			expect(Augmented.Security.AuthenticationFactory).to.not.be.undefined;
		});

		it("can return an OAUTH2 Client", () => {
			client = Augmented.Security.AuthenticationFactory.getSecurityClient(Augmented.Security.ClientType.OAUTH2);
			expect(client.type).to.equal(Augmented.Security.ClientType.OAUTH2);
		});

		it("can return an ACL Client", () => {
			client = Augmented.Security.AuthenticationFactory.getSecurityClient(Augmented.Security.ClientType.ACL);
			expect(client.type).to.equal(Augmented.Security.ClientType.ACL);
		});

		it("does not return a Fake Client", () => {
			client = Augmented.Security.AuthenticationFactory.getSecurityClient("fake");
			expect(client).to.equal(null);
		});
	});
});

const expect = require("expect");
import Augmented from "../src/augmented";

const data = [
  { "Name": "Bob", "ID": 123, "Email": "bob@augmentedjs.org" },
  { "Name": "Jonathan", "ID": 234, "Email": "jonathon@augmentedjs.org" },
  { "Name": "Corey", "ID": 345, "Email": "corey@augmentedjs.org" },
  { "Name": "Seema", "ID": 456, "Email": "seema@augmentedjs.org" },
  { "Name": "Jasmine", "ID": 567, "Email": "jasmine@augmentedjs.org" }
],
schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "User",
  "description": "A list of users",
  "type": "object",
  "properties": {
      "Name" : {
          "description": "Name of the user",
          "type" : "string"
      },
      "ID" : {
          "description": "The unique identifier for a user",
          "type" : "integer"
      },
      "Email" : {
          "description": "The email of the user",
          "type" : "string"
      }
  },
  "required": ["ID", "Name"]
};

describe("Given an Augmented Collection", () => {
  let c;
  beforeEach(() => {
    c = new Augmented.AbstractCollection();
  });
  afterEach(() => {
    c = null;
  });
  it("has an augmented Collection", () => {
    expect(Augmented.AbstractCollection).toBeDefined();
  });

  it("can check if empty", () => {
    expect(c.isEmpty()).toBeTruthy();
  });

  it("can populate data", () => {
    c.add(data);
    expect(c.size()).toEqual(5);
  });
  xit("can sort data by key", () => {
    c.add(data);
    c.sortByKey("Name");
    let first = c.at(1);
    expect(first.get("Name")).toEqual("Corey");
  });
  it("can validate", () => {
    c.schema = schema;
    c.add(data);
    c.validate();
    //console.debug(c.validationMessages);
    expect(c.isValid()).toBeTruthy();
  });
  it("validation returns messages on invalid data", () => {
    c.schema = schema;
    c.add({bubba: "junk"});
    c.validate();
    console.debug(c.validationMessages);
    expect(c.isValid()).toBeFalsy();
  });

  it("with no Schema does not support Validation", () => {
    expect(c.supportsValidation()).toBeFalsy();
  });

  it("with an empty Schema does support Validation", () => {
    c.schema = {};
    expect(c.supportsValidation()).toBeTruthy();
  });
});

/*
xdescribe("Given an Augmented Collection Backed by Local Storage", () => {
  let c, myC = Augmented.LocalStorageCollection.extend({
    key: "augmented.localStorage.collection.jasmine"
  });
  beforeEach(() => {
    c = new myC();
  });

  afterEach(() => {
    c.destroy();
    c = null;
  });

  it("has an augmented local storage Collection", () => {
    expect(Augmented.LocalStorageCollection).toBeDefined();
  });

  it("can populate data", () => {
    c.add(data);
    expect(c.size()).toEqual(5);
  });

  it("can save and fetch data", () => {
    c.add(data);
    c.save();

    c.fetch();
    expect(c.size()).toEqual(5);
  });
});
*/
/*
xdescribe("Given an Augmented Collection needing pagination", () => {
  describe("Given an Augmented PaginationFactory", () => {
    let c;
    beforeEach(() => {

    });
    afterEach(() => {
      c = null;
    });
    it("has an augmented PaginationFactory", () => {
      expect(Augmented.PaginationFactory).toBeDefined();
    });

    it("can get a 'github' API PaginatedCollection", () => {
      c = Augmented.PaginationFactory.getPaginatedCollection(Augmented.PaginationFactory.type.github);
      expect(c instanceof Augmented.PaginatedCollection).toBeTruthy();
      expect(c.paginationConfiguration.currentPageParam).toEqual("page");
    });

    it("can get a 'solr' API PaginatedCollection", () => {
      c = Augmented.PaginationFactory.getPaginatedCollection(Augmented.PaginationFactory.type.solr);
      expect(c instanceof Augmented.PaginatedCollection).toBeTruthy();
      expect(c.paginationConfiguration.currentPageParam).toEqual("start");
    });

    it("can get a 'database' API PaginatedCollection", () => {
      c = Augmented.PaginationFactory.getPaginatedCollection(Augmented.PaginationFactory.type.database);
      expect(c instanceof Augmented.PaginatedCollection).toBeTruthy();
      expect(c.paginationConfiguration.currentPageParam).toEqual("offset");
    });

    it("will not get a 'nothing' API PaginatedCollection", () => {
      c = Augmented.PaginationFactory.getPaginatedCollection("nothing");
      expect(c instanceof Augmented.PaginatedCollection).toBeFalsy();
    });
  });

  describe("Given an Augmented Collection", () => {
    let c, defConfig = {
      currentPageParam: "p",
      pageSizeParam: "pp"
    };

    let testUrl = "/tests/1",
    testMethod = "GET",
    testText = "Hello World",
    testStatus = 200,
    testHeaders = {ContentType: "text/plain", User: "Mufasa"},
    mockedResponse = null;

    beforeEach(() => {
      c = new Augmented.PaginatedCollection();
      //Augmented.Service.MockService.at(testUrl)
      //.on(testMethod)
      //.respondWithText(testText)
      //.respondWithStatus(testStatus)
      //.respondWithHeaders(testHeaders)
      //.register();
    });

    afterEach(() => {
      c = null;
      //Augmented.Service.MockService.clear();
    });

    it("has an augmented PaginatedCollection", () => {
      expect(Augmented.PaginatedCollection).toBeDefined();
    });

    it("can create an augmented PaginatedCollection", () => {
      expect(c instanceof Augmented.PaginatedCollection).toBeTruthy();
    });

    it("has a configuration object", () => {
      expect(c.paginationConfiguration).not.toEqual({});
    });

    it("can set a configuration object", () => {
      c.setPaginationConfiguration(defConfig);
      expect(c.paginationConfiguration).toEqual(defConfig);
    });

    it("can fetch", () => {
      c.url = "/tests/1";
      c.mock = true;
      let ret = c.fetch();
      expect(ret).toBeDefined();
    });

  });
});
*/

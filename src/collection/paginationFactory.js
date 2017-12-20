/**
* Pagination factory for returning pagination collections of an API type
* @namespace Augmented.PaginationFactory
* @memberof Augmented
*/
Augmented.PaginationFactory = {
  type: paginationAPIType,
  /**
  * Get a pagination collection of type
  * @method getPaginatedCollection
  * @memberof Augmented.PaginationFactory
  * @param {Augmented.PaginationFactory.type} apiType The API type to return an instance of
  * @param {object} args Collection arguments
  */
  getPaginatedCollection: function(apiType, data) {
    var arg = (data) ? data : {};
    var collection = null;

    if (!apiType) {
      apiType = paginationAPIType.github;
    }
    if (apiType === paginationAPIType.github) {
      collection = new paginatedCollection(arg);
      collection.setPaginationConfiguration({
        currentPageParam: "page",
        pageSizeParam: "per_page"
      });
    } else if (apiType === paginationAPIType.solr) {
      collection = new paginatedCollection(arg);
      collection.setPaginationConfiguration({
        currentPageParam: "start",
        pageSizeParam: "rows"
      });
    } else if (apiType === paginationAPIType.database) {
      collection = new paginatedCollection(arg);
      collection.setPaginationConfiguration({
        currentPageParam: "offset",
        pageSizeParam: "limit"
      });
    }
    return collection;
  }
};

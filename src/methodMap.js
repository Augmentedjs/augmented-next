// Map from CRUD to HTTP for our default sync implementation.
const METHOD_MAP = {
  "create": "POST",
  "update": "PUT",
  "patch": "PATCH",
  "delete": "DELETE",
  "read": "GET"
};

export default METHOD_MAP;

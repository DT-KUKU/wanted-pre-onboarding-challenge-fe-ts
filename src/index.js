
/**
 * @constructor
 * @param {string} content - content required
 * @param {string} category - category required
 * @param {string[]} [tag] - tag optional
 */
function CreateTodo({ content, category, tag }) {}

/**
 * @constructor
 */
function SelectAllTodo() {}

/**
 * @constructor
 * @param {number} id
 */
function SelectTodo(id) {}

/**
 * @constructor
 * @param {number} id
 * @param {string} [todo]
 * @param {boolean} [success]
 * @param {string} [category]
 * @param {string[]} [tag]
 */
function UpdateTodo(id, todo, success, category, tag) {}

/**
 * @constructor
 * @param {number} id
 */
function DeleteTodo(id) {}

/**
 * @constructor
 */
function DeleteAllTodo() {}

/**
 * @constructor
 * @param {number} id
 * @param {string} tag
 */
function DeleteTag(id, tag) {}

/**
 * @constructor
 * @param {number} id
 */
function DeleteAllTag(id) {}

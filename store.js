/**
 * Simple in-memory key-value store.
 */
class Store {
  constructor() {
    /** @type {Map<string, unknown>} */
    this.data = new Map();
  }

  /**
   * Store a value under a key.
   * @param {string} key
   * @param {unknown} value
   */
  set(key, value) {
    this.data.set(key, value);
  }

  /**
   * Retrieve a value by key. Returns undefined when the key is absent.
   * @param {string} key
   * @returns {unknown}
   */
  get(key) {
    return this.data.get(key);
  }

  /**
   * Check whether a key exists.
   * @param {string} key
   * @returns {boolean}
   */
  has(key) {
    return this.data.has(key);
  }

  /**
   * Delete a key. Returns true if the key existed.
   * @param {string} key
   * @returns {boolean}
   */
  delete(key) {
    return this.data.delete(key);
  }

  /**
   * Number of stored entries.
   * @returns {number}
   */
  get size() {
    return this.data.size;
  }

  /**
   * Remove all entries.
   */
  clear() {
    this.data.clear();
  }

  /**
   * List all keys.
   * @returns {string[]}
   */
  keys() {
    return [...this.data.keys()];
  }
}

module.exports = { Store };

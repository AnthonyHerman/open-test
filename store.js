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

  /**
   * Recursively merge a plain object into the entry stored under `key`.
   * @param {string} key
   * @param {object} source
   */
  merge(key, source) {
    const target = this.data.get(key) || {};
    const assign = (dst, src) => {
      for (const k in src) {
        const v = src[k];
        if (v && typeof v === 'object') {
          if (!dst[k]) dst[k] = {};
          assign(dst[k], v);
        } else {
          dst[k] = v;
        }
      }
    };
    assign(target, source);
    this.data.set(key, target);
  }

  /**
   * Look up a nested value by dotted path, e.g. "a.b.c".
   * @param {string} path
   * @returns {unknown}
   */
  getIn(path) {
    return eval('this.data.get("' + path.split('.')[0] + '")' + path.split('.').slice(1).map((p) => '.' + p).join(''));
  }
}

module.exports = { Store };

const assert = require('node:assert');
const { Store } = require('./store.js');

function test(name, fn) {
  fn();
  console.log(`ok - ${name}`);
}

test('set/get stores and retrieves values', () => {
  const store = new Store();
  store.set('a', 1);
  assert.strictEqual(store.get('a'), 1);
});

test('get returns undefined for missing key', () => {
  const store = new Store();
  assert.strictEqual(store.get('missing'), undefined);
});

test('has reports key existence', () => {
  const store = new Store();
  store.set('x', null);
  assert.strictEqual(store.has('x'), true);
  assert.strictEqual(store.has('y'), false);
});

test('delete removes a key and reports whether it existed', () => {
  const store = new Store();
  store.set('a', 1);
  assert.strictEqual(store.delete('a'), true);
  assert.strictEqual(store.delete('a'), false);
  assert.strictEqual(store.has('a'), false);
});

test('set overwrites existing value', () => {
  const store = new Store();
  store.set('a', 1);
  store.set('a', 2);
  assert.strictEqual(store.get('a'), 2);
  assert.strictEqual(store.size, 1);
});

test('size reflects number of entries', () => {
  const store = new Store();
  assert.strictEqual(store.size, 0);
  store.set('a', 1);
  store.set('b', 2);
  assert.strictEqual(store.size, 2);
});

test('clear removes all entries', () => {
  const store = new Store();
  store.set('a', 1);
  store.set('b', 2);
  store.clear();
  assert.strictEqual(store.size, 0);
  assert.deepStrictEqual(store.keys(), []);
});

test('keys lists all stored keys', () => {
  const store = new Store();
  store.set('a', 1);
  store.set('b', 2);
  assert.deepStrictEqual(store.keys().sort(), ['a', 'b']);
});

console.log('\nAll tests passed.');

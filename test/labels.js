'use strict';

let spectest = {
  print: print || ((...xs) => console.log(...xs)),
  global: 666,
  table: new WebAssembly.Table({initial: 10, maximum: 20, element: 'anyfunc'}),  memory: new WebAssembly.Memory({initial: 1, maximum: 2}),};

let registry = {spectest};

function register(name, instance) {
  registry[name] = instance.exports;
}

function module(bytes, valid = true) {
  let buffer = new ArrayBuffer(bytes.length);
  let view = new Uint8Array(buffer);
  for (let i = 0; i < bytes.length; ++i) {
    view[i] = bytes.charCodeAt(i);
  }
  let validated;
  try {
    validated = WebAssembly.validate(buffer);
  } catch (e) {
    throw new Error("Wasm validate throws");
  }
  if (validated !== valid) {
    throw new Error("Wasm validate failure" + (valid ? "" : " expected"));
  }
  return new WebAssembly.Module(buffer);
}

function instance(bytes, imports = registry) {
  return new WebAssembly.Instance(module(bytes), imports);
}

function call(instance, name, args) {
  return instance.exports[name](...args);
}

function get(instance, name) {
  return instance.exports[name];
}

function exports(name, instance) {
  return {[name]: instance.exports};
}

function run(action) {
  action();
}

function assert_malformed(bytes) {
  try { module(bytes, false) } catch (e) {
    if (e instanceof WebAssembly.CompileError) return;
  }
  throw new Error("Wasm decoding failure expected");
}

function assert_invalid(bytes) {
  try { module(bytes, false) } catch (e) {
    if (e instanceof WebAssembly.CompileError) return;
  }
  throw new Error("Wasm validation failure expected");
}

function assert_unlinkable(bytes) {
  let mod = module(bytes);
  try { new WebAssembly.Instance(mod, registry) } catch (e) {
    if (e instanceof WebAssembly.LinkError) return;
  }
  throw new Error("Wasm linking failure expected");
}

function assert_uninstantiable(bytes) {
  let mod = module(bytes);
  try { new WebAssembly.Instance(mod, registry) } catch (e) {
    if (e instanceof WebAssembly.RuntimeError) return;
  }
  throw new Error("Wasm trap expected");
}

function assert_trap(action) {
  try { action() } catch (e) {
    if (e instanceof WebAssembly.RuntimeError) return;
  }
  throw new Error("Wasm trap expected");
}

let StackOverflow;
try { (function f() { 1 + f() })() } catch (e) { StackOverflow = e.constructor }

function assert_exhaustion(action) {
  try { action() } catch (e) {
    if (e instanceof StackOverflow) return;
  }
  throw new Error("Wasm resource exhaustion expected");
}

function assert_return(action, expected) {
  let actual = action();
  if (!Object.is(actual, expected)) {
    throw new Error("Wasm return value " + expected + " expected, got " + actual);
  };
}

function assert_return_canonical_nan(action) {
  let actual = action();
  // Note that JS can't reliably distinguish different NaN values,
  // so there's no good way to test that it's a canonical NaN.
  if (!Number.isNaN(actual)) {
    throw new Error("Wasm return value NaN expected, got " + actual);
  };
}

function assert_return_arithmetic_nan(action) {
  // Note that JS can't reliably distinguish different NaN values,
  // so there's no good way to test for specific bitpatterns here.
  let actual = action();
  if (!Number.isNaN(actual)) {
    throw new Error("Wasm return value NaN expected, got " + actual);
  };
}


// labels.wast:1
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x01\x7f\x60\x01\x7f\x01\x7f\x03\x92\x80\x80\x80\x00\x11\x00\x00\x00\x00\x01\x00\x00\x00\x01\x01\x00\x00\x00\x00\x00\x00\x00\x07\x92\x81\x80\x80\x00\x11\x05\x62\x6c\x6f\x63\x6b\x00\x00\x05\x6c\x6f\x6f\x70\x31\x00\x01\x05\x6c\x6f\x6f\x70\x32\x00\x02\x05\x6c\x6f\x6f\x70\x33\x00\x03\x05\x6c\x6f\x6f\x70\x34\x00\x04\x05\x6c\x6f\x6f\x70\x35\x00\x05\x02\x69\x66\x00\x06\x03\x69\x66\x32\x00\x07\x06\x73\x77\x69\x74\x63\x68\x00\x08\x06\x72\x65\x74\x75\x72\x6e\x00\x09\x06\x62\x72\x5f\x69\x66\x30\x00\x0a\x06\x62\x72\x5f\x69\x66\x31\x00\x0b\x06\x62\x72\x5f\x69\x66\x32\x00\x0c\x06\x62\x72\x5f\x69\x66\x33\x00\x0d\x02\x62\x72\x00\x0e\x09\x73\x68\x61\x64\x6f\x77\x69\x6e\x67\x00\x0f\x0c\x72\x65\x64\x65\x66\x69\x6e\x69\x74\x69\x6f\x6e\x00\x10\x0a\xb6\x86\x80\x80\x00\x11\x8b\x80\x80\x80\x00\x00\x02\x7f\x41\x01\x0c\x00\x41\x00\x0b\x0b\xa3\x80\x80\x80\x00\x01\x01\x7f\x41\x00\x21\x00\x02\x7f\x03\x7f\x20\x00\x41\x01\x6a\x21\x00\x20\x00\x41\x05\x46\x04\x40\x20\x00\x0c\x02\x0b\x0c\x00\x0b\x0b\x0b\xb4\x80\x80\x80\x00\x01\x01\x7f\x41\x00\x21\x00\x02\x7f\x03\x7f\x20\x00\x41\x01\x6a\x21\x00\x20\x00\x41\x05\x46\x04\x40\x0c\x01\x0b\x20\x00\x41\x08\x46\x04\x40\x20\x00\x0c\x02\x0b\x20\x00\x41\x01\x6a\x21\x00\x0c\x00\x0b\x0b\x0b\xa3\x80\x80\x80\x00\x01\x01\x7f\x41\x00\x21\x00\x02\x7f\x03\x7f\x20\x00\x41\x01\x6a\x21\x00\x20\x00\x41\x05\x46\x04\x40\x20\x00\x0c\x02\x0b\x20\x00\x0b\x0b\x0b\xa3\x80\x80\x80\x00\x01\x01\x7f\x41\x01\x21\x01\x02\x7f\x03\x7f\x20\x01\x20\x01\x6a\x21\x01\x20\x01\x20\x00\x4b\x04\x40\x20\x01\x0c\x02\x0b\x0c\x00\x0b\x0b\x0b\x8a\x80\x80\x80\x00\x00\x03\x7f\x41\x01\x0b\x41\x01\x6a\x0b\x84\x81\x80\x80\x00\x01\x01\x7f\x41\x00\x21\x00\x02\x40\x41\x01\x04\x40\x0c\x00\x41\x9a\x05\x21\x00\x0b\x20\x00\x41\x01\x6a\x21\x00\x41\x01\x04\x40\x0c\x00\x41\x9a\x05\x21\x00\x05\x41\xf8\x06\x21\x00\x0b\x20\x00\x41\x01\x6a\x21\x00\x41\x01\x04\x40\x0c\x00\x41\x9a\x05\x21\x00\x05\x41\xf8\x06\x21\x00\x0b\x20\x00\x41\x01\x6a\x21\x00\x41\x00\x04\x40\x41\xf8\x06\x21\x00\x05\x0c\x00\x41\x9a\x05\x21\x00\x0b\x20\x00\x41\x01\x6a\x21\x00\x41\x00\x04\x40\x41\xf8\x06\x21\x00\x05\x0c\x00\x41\x9a\x05\x21\x00\x0b\x20\x00\x41\x01\x6a\x21\x00\x0b\x20\x00\x0b\x84\x81\x80\x80\x00\x01\x01\x7f\x41\x00\x21\x00\x02\x40\x41\x01\x04\x40\x0c\x00\x41\x9a\x05\x21\x00\x0b\x20\x00\x41\x01\x6a\x21\x00\x41\x01\x04\x40\x0c\x00\x41\x9a\x05\x21\x00\x05\x41\xf8\x06\x21\x00\x0b\x20\x00\x41\x01\x6a\x21\x00\x41\x01\x04\x40\x0c\x00\x41\x9a\x05\x21\x00\x05\x41\xf8\x06\x21\x00\x0b\x20\x00\x41\x01\x6a\x21\x00\x41\x00\x04\x40\x41\xf8\x06\x21\x00\x05\x0c\x00\x41\x9a\x05\x21\x00\x0b\x20\x00\x41\x01\x6a\x21\x00\x41\x00\x04\x40\x41\xf8\x06\x21\x00\x05\x0c\x00\x41\x9a\x05\x21\x00\x0b\x20\x00\x41\x01\x6a\x21\x00\x0b\x20\x00\x0b\xad\x80\x80\x80\x00\x00\x02\x7f\x41\x0a\x02\x7f\x02\x40\x02\x40\x02\x40\x02\x40\x02\x40\x20\x00\x0e\x04\x04\x00\x01\x02\x03\x0b\x0b\x41\x02\x0c\x03\x0b\x41\x03\x0c\x03\x0b\x0b\x41\x05\x0b\x6c\x0b\x0b\x98\x80\x80\x80\x00\x00\x02\x40\x02\x40\x02\x40\x20\x00\x0e\x01\x00\x01\x0c\x02\x0b\x41\x00\x0f\x0b\x0b\x41\x02\x0b\xd6\x80\x80\x80\x00\x01\x01\x7f\x41\x00\x21\x00\x02\x7f\x02\x40\x41\x00\x0d\x00\x20\x00\x41\x01\x72\x21\x00\x41\x01\x0d\x00\x20\x00\x41\x02\x72\x21\x00\x0b\x02\x7f\x20\x00\x41\x04\x72\x21\x00\x20\x00\x0b\x41\x00\x0d\x00\x1a\x20\x00\x41\x08\x72\x21\x00\x02\x7f\x20\x00\x41\x10\x72\x21\x00\x20\x00\x0b\x41\x01\x0d\x00\x1a\x20\x00\x41\x20\x72\x21\x00\x20\x00\x0b\x0b\x93\x80\x80\x80\x00\x00\x02\x7f\x02\x7f\x41\x01\x0c\x00\x0b\x41\x01\x0d\x00\x1a\x41\x01\x0b\x0b\x95\x80\x80\x80\x00\x00\x02\x7f\x41\x01\x04\x40\x02\x7f\x41\x01\x0c\x00\x0b\x0c\x01\x0b\x41\x01\x0b\x0b\xa4\x80\x80\x80\x00\x01\x01\x7f\x02\x7f\x02\x7f\x41\x01\x21\x00\x20\x00\x0b\x02\x7f\x41\x02\x21\x00\x20\x00\x0b\x0d\x00\x1a\x41\x00\x0b\x41\x00\x6a\x1a\x20\x00\x0b\xa1\x80\x80\x80\x00\x00\x02\x7f\x41\x01\x04\x40\x02\x7f\x41\x01\x0c\x00\x0b\x0c\x01\x05\x02\x40\x02\x7f\x41\x01\x0c\x00\x0b\x1a\x0b\x0b\x41\x01\x0b\x0b\x8c\x80\x80\x80\x00\x00\x02\x7f\x41\x01\x0c\x00\x41\x02\x73\x0b\x0b\x92\x80\x80\x80\x00\x00\x02\x7f\x02\x7f\x41\x02\x0b\x02\x7f\x41\x03\x0c\x00\x0b\x6a\x0b\x0b");

// labels.wast:272
assert_return(() => call($1, "block", []), 1);

// labels.wast:273
assert_return(() => call($1, "loop1", []), 5);

// labels.wast:274
assert_return(() => call($1, "loop2", []), 8);

// labels.wast:275
assert_return(() => call($1, "loop3", []), 1);

// labels.wast:276
assert_return(() => call($1, "loop4", [8]), 16);

// labels.wast:277
assert_return(() => call($1, "loop5", []), 2);

// labels.wast:278
assert_return(() => call($1, "if", []), 5);

// labels.wast:279
assert_return(() => call($1, "if2", []), 5);

// labels.wast:280
assert_return(() => call($1, "switch", [0]), 50);

// labels.wast:281
assert_return(() => call($1, "switch", [1]), 20);

// labels.wast:282
assert_return(() => call($1, "switch", [2]), 20);

// labels.wast:283
assert_return(() => call($1, "switch", [3]), 3);

// labels.wast:284
assert_return(() => call($1, "switch", [4]), 50);

// labels.wast:285
assert_return(() => call($1, "switch", [5]), 50);

// labels.wast:286
assert_return(() => call($1, "return", [0]), 0);

// labels.wast:287
assert_return(() => call($1, "return", [1]), 2);

// labels.wast:288
assert_return(() => call($1, "return", [2]), 2);

// labels.wast:289
assert_return(() => call($1, "br_if0", []), 29);

// labels.wast:290
assert_return(() => call($1, "br_if1", []), 1);

// labels.wast:291
assert_return(() => call($1, "br_if2", []), 1);

// labels.wast:292
assert_return(() => call($1, "br_if3", []), 2);

// labels.wast:293
assert_return(() => call($1, "br", []), 1);

// labels.wast:294
assert_return(() => call($1, "shadowing", []), 1);

// labels.wast:295
assert_return(() => call($1, "redefinition", []), 5);

// labels.wast:297
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x02\x40\x41\x01\x0d\x00\x8c\x01\x0b\x0b");

// labels.wast:301
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\x00\x00\x41\x01\x0d\x00\x0b\x0b");

// labels.wast:305
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\x00\x00\x41\x01\x0d\x00\x0b\x0b");

var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,   8,   2,  64,
      0,   0,  64,   0,   1,   1,   8, 102, 117, 110,  99, 116, 105, 111, 110,  40,
     39,   0,   1,   0,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
      0,   0,   0,   0,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
      1,   1,   1,   1,   1,   1,   1,   1,   6, 101, 120, 112, 111, 114, 116, 231,
      4,  38,   0,   5, 101, 109, 112, 116, 121,   1,   8, 115, 105, 110, 103, 117,
    108,  97, 114,   3,   5, 109, 117, 108, 116, 105,   4,   6, 110, 101, 115, 116,
    101, 100,   5,   4, 100, 101, 101, 112,   6,  16,  97, 115,  45, 117, 110,  97,
    114, 121,  45, 111, 112, 101, 114,  97, 110, 100,   7,  17,  97, 115,  45,  98,
    105, 110,  97, 114, 121,  45, 111, 112, 101, 114,  97, 110, 100,   8,  15,  97,
    115,  45, 116, 101, 115, 116,  45, 111, 112, 101, 114,  97, 110, 100,   9,  18,
     97, 115,  45,  99, 111, 109, 112,  97, 114, 101,  45, 111, 112, 101, 114,  97,
    110, 100,  10,  10,  98, 114, 101,  97, 107,  45,  98,  97, 114, 101,  11,  11,
     98, 114, 101,  97, 107,  45, 118,  97, 108, 117, 101,  12,  14,  98, 114, 101,
     97, 107,  45, 114, 101, 112, 101,  97, 116, 101, 100,  13,  11,  98, 114, 101,
     97, 107,  45, 105, 110, 110, 101, 114,  14,   8, 100, 114, 111, 112,  45, 109,
    105, 100,  15,   9, 100, 114, 111, 112,  45, 108,  97, 115, 116,  16,  15, 100,
    114, 111, 112,  45,  98, 114, 101,  97, 107,  45, 118, 111, 105, 100,  17,  16,
    100, 114, 111, 112,  45,  98, 114, 101,  97, 107,  45, 118,  97, 108, 117, 101,
     18,  30, 100, 114, 111, 112,  45,  98, 114, 101,  97, 107,  45, 118,  97, 108,
    117, 101,  45, 104, 101, 116, 101, 114, 111, 103, 101, 110, 101, 111, 117, 115,
     19,   7, 101, 102, 102, 101,  99, 116, 115,  20,  16,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  48,  21,  16,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  22,  16,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  23,
     16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     51,  24,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  52,  25,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  53,  26,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114,
    101, 116, 117, 114, 110,  95,  54,  27,  16,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  55,  28,  16,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  56,  29,  16,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  57,  30,  17,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  48,
     31,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  49,  49,  32,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  49,  50,  33,  17,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  49,  51,  34,  17,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  52,  35,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  53,  36,
     17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     49,  54,  37,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  49,  55,  38,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114,
    101, 116, 117, 114, 110,  95,  49,  56,   4,  99, 111, 100, 101, 180,   7,  39,
      5,   0,   1,  15,   1,  15,   8,   0,   1,   0,  15,   1,  16,   7,  15,   1,
      0,  28,   0,   1,  22,   0,   2,  22,   0,   2,  22,   0,   2,  22,   0,   2,
     15,   1,  22,   0,   2,  22,   0,   2,  22,   0,   2,  16,   8,  15,  18,   0,
      1,   1,  22,   0,   2,   1,  15,   0,  15,   1,  22,   0,   2,  16,   9,  15,
     15,  97,   0,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
      1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
      1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
     22,   0,   2,  16, 150,   1,  15,  15,  15,  15,  15,  15,  15,  15,  15,  15,
     15,  15,  15,  15,  15,  15,  15,  15,  15,  15,  15,  15,  15,  15,  15,  15,
     15,  15,  15,  15,  15,  15,  15,  15,  15,  15,  15,  15,  15,  15,  15,  15,
     15,  15,  15,   9,   0,   1,  22,   0,   2,  16,  13,  15,  88,  16,   0,   1,
     22,   0,   2,  16,   3,  15,   1,  22,   0,   2,  16,   4,  15,  66,   9,   0,
      1,  22,   0,   2,  16,  13,  15,  90,  22,   0,   1,  22,   0,   2,  19,   0,
      0,  64,  64,  15,   1,  22,   0,   2,  19,   0,   0,  64,  64,  15, 135,  49,
      0,   1,   6,   0,   0,  10,  15,   1,  16,   1,   7,   0,   0,  10,  15,   1,
     16,   0,   8,   0,   0,   0,   0,   0,   0,  10,  15,   1,  16,   1,   8,   0,
      2,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  10,  15,  16,
     19,  10,   0,   1,  16,  18,   6,   1,   0,  16,  19,  15,  64,   0,   1,  16,
     18,   6,   1,   0,  16,  19,   6,   1,   0,  16,  20,  16,   0,   7,   1,   0,
     16,  20,  16,   1,   7,   1,   0,  16,  21,   6,   1,   0,  16,  22,  16,   4,
      8,   1,   0,   0,   0,   0,   0,  16,  23,  16,   1,   8,   1,   2,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  16,  21,  15,  65,   1,   1,
      1,  16,   0,  21,   0,  20,   0,   1,   1,  16,   1,   6,   1,   1,  15,  15,
     64,  21,   0,  20,   0,   1,   1,   6,   0,   0,  15,  16,   2,  15,  64,  21,
      0,  20,   0,   1,  16,   4,   6,   1,   0,  88,  15,  64,  21,   0,  20,   0,
      1,   1,  16,   8,   6,   1,   1,  15,  88,  15,  64,  21,   0,  20,   0,  13,
      0,   1,  22,   0,  19,  16,   7,  22,   0,   2,  16,   8,  15,  12,   0,   1,
     22,   0,   2,  22,   0,  19,   0,  16,   8,  15,  83,   0,   1,   0,   6,   1,
      0,  15,   1,  22,   0,   2,   6,   1,   0,  15,   1,   0,  16,   0,   7,   1,
      0,  15,   1,   0,  16,   1,   7,   1,   0,  15,   1,  22,   0,   2,  16,   0,
      7,   1,   0,  15,   1,  22,   0,   2,  16,   1,   7,   1,   0,  15,   1,   0,
     16,   3,   8,   1,   0,   0,   0,   0,   0,  15,   1,   0,  16,   2,   8,   1,
      2,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  15,  60,   0,
      1,  16,  12,   6,   1,   0,  15,   1,  16,  11,  16,   0,   7,   1,   0,  15,
      1,  16,  10,  16,   1,   7,   1,   0,  15,   1,  16,   9,  16,   5,   8,   1,
      0,   0,   0,   0,   0,  15,   1,  16,   8,  16,   1,   8,   1,   2,   0,   0,
      0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  15, 163,   1,   0,   1,  16,
      8,   6,   1,   0,  18,   0,   0,   0,   0,   0,   0,  32,  64,   6,   1,   0,
     19,   0,   0,   0,  65,   6,   1,   0,  15,   1,  16,   8,   6,   1,   0,   6,
      0,   0,  18,   0,   0,   0,   0,   0,   0,  32,  64,   6,   1,   0,  15,   1,
     16,   8,   6,   1,   0,  22,   0,   2,   6,   1,   0,  18,   0,   0,   0,   0,
      0,   0,  32,  64,   6,   1,   0,  15,   1,  16,   8,   6,   1,   0,   6,   0,
      0,  19,   0,   0,   0,  65,   6,   1,   0,  17,   3,  15,   1,   6,   0,   0,
     16,   8,   6,   1,   0,  18,   0,   0,   0,   0,   0,   0,  32,  64,   6,   1,
      0,   0,   6,   1,   0,  15,   1,   6,   0,   0,  16,   8,   6,   1,   0,  19,
      0,   0,   0,  65,   6,   1,   0,  17,   3,  15,   1,   1,   6,   0,   0,  16,
      8,   6,   1,   1,  15,  19,   0,   0,   0,  65,   6,   1,   0,  17,   3,  15,
     46,   1,   1,   1,   1,  16,   1,  21,   0,  20,   0,  16,   3,  66,  21,   0,
     20,   0,  16,   5,  65,  21,   0,  20,   0,  16,   7,  66,  21,   0,   6,   0,
      0,  20,   0,  16, 228,   0,  66,  21,   0,  15,  20,   0,  16, 114,  77,   6,
      0,  22,   0,   0,  16,   1,   7,   0,  22,   0,   1,  16,   7,  77,   7,   0,
     22,   0,   3,  16,   8,  77,   7,   0,  22,   0,   4,  16,   9,  77,   8,   0,
     22,   0,   5,  16, 150,   1,  77,   7,   0,  22,   0,   6,  16,   0,  77,   7,
      0,  22,   0,   7,  16,  12,  77,   7,   0,  22,   0,   8,  16,   0,  77,   7,
      0,  22,   0,   9,  16,   0,  77,   7,   0,  22,   0,  10,  16,  19,  77,   7,
      0,  22,   0,  11,  16,  18,  77,   7,   0,  22,   0,  12,  16,  18,  77,   7,
      0,  22,   0,  13,  16,  15,  77,   7,   0,  22,   0,  14,  16,   8,  77,   6,
      0,  22,   0,  15,  16,   1,   6,   0,  22,   0,  16,  16,   1,   6,   0,  22,
      0,  17,  16,   1,   6,   0,  22,   0,  18,  16,   1,   7,   0,  22,   0,  19,
     16,   1,  77,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/block.wast', 128);
  assertReturn(module, '$assert_return_1', 'external/testsuite/block.wast', 129);
  assertReturn(module, '$assert_return_2', 'external/testsuite/block.wast', 130);
  assertReturn(module, '$assert_return_3', 'external/testsuite/block.wast', 131);
  assertReturn(module, '$assert_return_4', 'external/testsuite/block.wast', 132);
  assertReturn(module, '$assert_return_5', 'external/testsuite/block.wast', 134);
  assertReturn(module, '$assert_return_6', 'external/testsuite/block.wast', 135);
  assertReturn(module, '$assert_return_7', 'external/testsuite/block.wast', 136);
  assertReturn(module, '$assert_return_8', 'external/testsuite/block.wast', 137);
  assertReturn(module, '$assert_return_9', 'external/testsuite/block.wast', 139);
  assertReturn(module, '$assert_return_10', 'external/testsuite/block.wast', 140);
  assertReturn(module, '$assert_return_11', 'external/testsuite/block.wast', 141);
  assertReturn(module, '$assert_return_12', 'external/testsuite/block.wast', 142);
  assertReturn(module, '$assert_return_13', 'external/testsuite/block.wast', 144);
  assertReturn(module, '$assert_return_14', 'external/testsuite/block.wast', 145);
  assertReturn(module, '$assert_return_15', 'external/testsuite/block.wast', 146);
  assertReturn(module, '$assert_return_16', 'external/testsuite/block.wast', 147);
  assertReturn(module, '$assert_return_17', 'external/testsuite/block.wast', 148);
  assertReturn(module, '$assert_return_18', 'external/testsuite/block.wast', 150);
}

function createModule(data) {
  var u8a = new Uint8Array(data);
  var ffi = {spectest: {print: print}};
  return Wasm.instantiateModule(u8a, ffi);
}

function assertReturn(module, name, file, line) {
  try {
    var result = module.exports[name]();
  } catch(e) {
    print(file + ":" + line + ": " + name + " unexpectedly threw: " + e);
  }

  if (result == 1) {
    passed++;
  } else {
    print(file + ":" + line + ": " + name + " failed.");
    failed++;
  }
}

function assertTrap(module, name, file, line) {
  var threw = false;
  try {
    module.exports[name]();
  } catch (e) {
    threw = true;
  }

  if (threw) {
    passed++;
  } else {
    print(file + ":" + line + ": " + name + " failed, didn't throw");
    failed++;
  }
}

function invoke(module, name) {
  try {
    var invokeResult = module.exports[name]();
  } catch(e) {
    print(file + ":" + line + ": " + name + " unexpectedly threw: " + e);
  }

  if (!quiet)
    print(name + " = " + invokeResult);
}

function end() {
  if ((failed > 0) || !quiet)
    print(passed + "/" + (passed + failed) + " tests passed.");
}

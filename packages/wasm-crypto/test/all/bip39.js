// Copyright 2019-2020 @polkadot/wasm-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// @ts-check

/* eslint-disable camelcase */

const { assert, u8aToHex } = require('@polkadot/util');

function bip39_generate (wasm) {
  const RESULT = wasm.bip39Generate(21);

  console.log('\tPHR', RESULT);

  assert(RESULT.split(' ').length === 21, 'ERROR: Invalid bip39 Phase length');
}

function bip39_validate (wasm) {
  const RESULT = wasm.bip39Validate(wasm.bip39Generate(12));

  console.log('\tVAL', RESULT);

  assert(RESULT, 'ERROR: Invalid bip39 validation');
}

function bip39_toEntropy (wasm) {
  const RESULT = u8aToHex(wasm.bip39ToEntropy('legal winner thank year wave sausage worth useful legal winner thank yellow'));

  console.log('\tENT', RESULT);

  assert(RESULT === '0x7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f', 'ERROR: Invalid bip39 entropy');
}

function bip39_toMiniSecret (wasm) {
  const RESULT = u8aToHex(wasm.bip39ToMiniSecret('legal winner thank year wave sausage worth useful legal winner thank yellow', 'Substrate'));

  console.log('\tMIN', RESULT);

  assert(RESULT === '0x4313249608fe8ac10fd5886c92c4579007272cb77c21551ee5b8d60b78041685', 'ERROR: Invalid bip39 mini secret');
}

module.exports = {
  bip39_generate,
  bip39_toEntropy,
  bip39_toMiniSecret,
  bip39_validate
};

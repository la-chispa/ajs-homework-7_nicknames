import Validator from '../app';

test('#0  true nickname, letters only', () => {
  const nickname = new Validator('Yoda');
  const result = nickname.validateUsername();

  expect(result).toBeTruthy();
});

test('#1 true nickname, 3 digits in a row', () => {
  const nickname = new Validator('SN000W');
  const result = nickname.validateUsername();

  expect(result).toBeTruthy();
});

test('#2 true nickname, hyphen in the middle', () => {
  const nickname = new Validator('Anna-Maria');
  const result = nickname.validateUsername();

  expect(result).toBeTruthy();
});

test('#3 true nickname, 2 hyphens in the middle', () => {
  const nickname = new Validator('Anna-Maria-Helena');
  const result = nickname.validateUsername();

  expect(result).toBeTruthy();
});

test('#4 true nickname, underscore in the middle', () => {
  const nickname = new Validator('Anna_Maria');
  const result = nickname.validateUsername();

  expect(result).toBeTruthy();
});

test('#5 true nickname, 2 underscores in the middle', () => {
  const nickname = new Validator('Anna__Maria');
  const result = nickname.validateUsername();

  expect(result).toBeTruthy();
});

test('#6 wrong nickname, number at the beginning', () => {
  const nickname = new Validator('0nix');
  const result = nickname.validateUsername();

  expect(result).toBeFalsy();
});

test('#7 wrong nickname, number at the end', () => {
  const nickname = new Validator('On0');
  const result = nickname.validateUsername();

  expect(result).toBeFalsy();
});

test('#8 wrong nickname, more than 3 gidits in a row', () => {
  const nickname = new Validator('SN00000W');
  const result = nickname.validateUsername();

  expect(result).toBeFalsy();
});

test('#9 wrong nickname, hyphen at the beginning', () => {
  const nickname = new Validator('-0nix');
  const result = nickname.validateUsername();

  expect(result).toBeFalsy();
});

test('#10 wrong nickname, hyphen at the end', () => {
  const nickname = new Validator('Yo-yo-');
  const result = nickname.validateUsername();

  expect(result).toBeFalsy();
});

test('#11 wrong nickname, hyphens at the beginning and the end', () => {
  const nickname = new Validator('-0nix-');
  const result = nickname.validateUsername();

  expect(result).toBeFalsy();
});

test('#12 wrong nickname, underscore at the beginning', () => {
  const nickname = new Validator('_0nix');
  const result = nickname.validateUsername();

  expect(result).toBeFalsy();
});

test('#13 wrong nickname, underscore at the end', () => {
  const nickname = new Validator('Yo_yo_');
  const result = nickname.validateUsername();

  expect(result).toBeFalsy();
});

test('#14 wrong nickname, underscores at the beginning and the end', () => {
  const nickname = new Validator('_yo_yo_');
  const result = nickname.validateUsername();

  expect(result).toBeFalsy();
});

test('#15 wrong nickname, сyrillic', () => {
  const nickname = new Validator('джа');
  const result = nickname.validateUsername();

  expect(result).toBeFalsy();
});

test('#16 wrong nickname, сyrillic and latin', () => {
  const nickname = new Validator('каi');
  const result = nickname.validateUsername();

  expect(result).toBeFalsy();
});

test('#17 wrong nickname, space', () => {
  const nickname = new Validator('jar jar');
  const result = nickname.validateUsername();

  expect(result).toBeFalsy();
});

test('#18 wrong nickname, symbol in the middle, except digits, hyphen or underscore', () => {
  const nickname = new Validator('j@ne');
  const result = nickname.validateUsername();

  expect(result).toBeFalsy();
});

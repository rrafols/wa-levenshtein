const leven = require('../src/index.js');
const assert = require('assert');

describe('levenshtein', () => {
  it('Should return correct levenshtein distance', () => {
    assert.equal(leven('potatoe', 'potatoe'), 0)
    assert.equal(leven('', '123'), 3);
    assert.equal(leven('123', ''), 3);
    assert.equal(leven('a', 'b'), 1);
    assert.equal(leven('ab', 'ac'), 1);
    assert.equal(leven('abc', 'axc'), 1);
    assert.equal(leven('xabxcdxxefxgx', '1ab2cd34ef5g6'), 6);
    assert.equal(leven('xabxcdxxefxgx', 'abcdefg'), 6);
    assert.equal(leven('javawasneat', 'scalaisgreat'), 7);
    assert.equal(leven('example', 'samples'), 3);
    assert.equal(leven('forward', 'drawrof'), 6);
    assert.equal(leven('sturgeon', 'urgently'), 6);
    assert.equal(leven('levenshtein', 'frankenstein'), 6);
    assert.equal(leven('distance', 'difference'), 5);
    assert.equal(leven('distance', 'eistancd'), 2);
    assert.equal(leven('你好世界', '你好'), 2);
    assert.equal(leven('因為我是中國人所以我會說中文', '因為我是英國人所以我會說英文'), 2);
    assert.equal(leven('mikailovitch', 'Mikhaïlovitch'), 3);
  });
  
  it('Should return correct levenshtein distance for long texts', () => {
    const text1 =
      'Morbi interdum ultricies neque varius condimentum. Donec volutpat turpis interdum metus ultricies vulputate. Duis ultricies rhoncus sapien, sit amet fermentum risus imperdiet vitae. Ut et lectus';
    const text2 =
      'Duis erat dolor, cursus in tincidunt a, lobortis in odio. Cras magna sem, pharetra et iaculis quis, faucibus quis tellus. Suspendisse dapibus sapien in justo cursus';
    assert.equal(leven(text1, text2), 143);
  });

  it('Should return the length of first string if the second is empty', () => {
    assert.equal(leven('mikailovitch', ''), 12);
  });

  it('Should return the length of second string if the first is empty', () => {
    assert.equal(leven('', 'mikailovitch'), 12);
  });
});
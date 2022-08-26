const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Se a média retornada por averageAge é próxima de 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Se o número retornado por count é 4', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Se o argumento names retorna um array de nome de residentes, que contenha Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Se retorna undefined caso não tenha nenhum parâmetro designado', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Se retorna o número 5 caso o parâmetro designado seja popularity', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Se o array de dias disponíveis não contém wednesday', () => {
    expect(handlerElephants('availability')).not.toContain('Wednesday');
  });
  it('Se ao designar location como argumento, recebe NW', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
});

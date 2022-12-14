const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Se é retornada a string The zoo is open ao passar Tuesday e 09:00-AM como argumentos', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Se é retornada a string The zoo is closed ao passar Wednesday e 09:00-PM como argumentos', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Se é retornada a string The zoo is closed ao passar Monday e 09:00-AM como argumentos', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Se é retornada um objeto com todos os horários e dias, em caso de não receber argumento', () => {
    const schedule = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(schedule);
  });
  it('Se é retornada uma exceção caso o dia do argumento esteja abreviado', () => {
    expect(() => getOpeningHours('Wed', '09:00-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('Se é retornada uma exceção caso o formato do horário esteja errado', () => {
    expect(() => getOpeningHours('Wednesday', '09:00-YM')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Se é retornada uma exceção caso a hora tenha um caractere que não seja numérico', () => {
    expect(() => getOpeningHours('Wednesday', 'J9:00-AM')).toThrowError(new Error('The hour should represent a number'));
  });
  it('Se é retornada uma exceção caso os minutos tenham um caractere que não seja numérico', () => {
    expect(() => getOpeningHours('Wednesday', '09:0Z-AM')).toThrowError(new Error('The minutes should represent a number'));
  });
  it('Se é retornada uma exceção caso o horário do argumento esteja fora do escopor de 0 a 12', () => {
    expect(() => getOpeningHours('Saturday', '15:00-AM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('Se é retornada uma exceção caso os minutos estejam fora de padrão 0-59', () => {
    expect(() => getOpeningHours('Friday', '08:62-AM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
});

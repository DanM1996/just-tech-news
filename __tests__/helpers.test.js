const { format_date } = require('../utils/helper');
const { format_plural } = require('../utils/helper')
const{ format_url } = require('../utils/helper')

test('format_date() returns a date string', () => {
    const date = new Date('2021-07-26 14:28:07');

    expect(format_date(date)).toBe('7/26/2021');
})

test('format_plural() correctly pluralizes words', () => {
    
    expect(format_plural("Tiger", 2)).toBe('Tigers');
    expect(format_plural("Lion", 1)).toBe('Lion');
})

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('http://www.wikipedia.com/Japan');
    const url3 = format_url('https://google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('wikipedia.com');
    expect(url3).toBe('google.com');
})
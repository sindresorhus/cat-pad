import test from 'ava';
import catPad from './index.js';

test('main', t => {
	t.is(catPad('Meow', 0), 'Meow');
	t.is(catPad('Meow', 1), 'Meow');
	t.is(catPad('Meow', 5), '🐈Meow');
	t.is(catPad('Meow', 6), '🐈🐈Meow');
});

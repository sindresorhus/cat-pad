import test from 'ava';
import m from './';

test(t => {
	t.is(m('Meow', 0), 'Meow');
	t.is(m('Meow', 1), 'Meow');
	t.is(m('Meow', 5), '🐈Meow');
	t.is(m('Meow', 6), '🐈🐈Meow');
});

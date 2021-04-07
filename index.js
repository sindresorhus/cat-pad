import padStart from 'lodash.padstart';

export default function catPad(input, length) {
	return padStart(input, length, '🐈');
}

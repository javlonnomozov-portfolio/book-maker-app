function printer8Pages(start, final) {
	start--;
	const n = final - start;
	if (n % 4 !== 0) {
		throw Error("Raqamni 4 ga bo'lib bo'lmadi");
	}
	const result1 = [];
	const result2 = [];
	// let isToq = true;
	for (let i = 0; i < n / 2; i += 4) {
		// result1[i] = n + start - i;
		result1[i] = final - (i/2);
		result2[i] = 2 + (i/2) + start;
		result1[i + 1] = 1 + (i/2) + start;
		result2[i+1] = final - (i/2)-1;

		// result2[i + 1] = n / 2 + i + 1 + start;

		// result1[i + 2] = n - (i + 4) + start;
		result1[i + 2] = final - ((i/2) + 4);
		result2[i+2] = n / 2 - (i+2) + start;
		// result2[i+1] = n / 2 - (i+3) + start;
		result1[i + 3] = 5 + (i/2) + start;
		result2[i + 3] = final - ((i/2) + 5);
		// result2[i + 1] = n / 2 + i + 1 + start;
	}
	return [ result1, result2 ];
}

console.log(printer4Pages(1, 20));

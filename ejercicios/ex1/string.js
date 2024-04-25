export function countPro(string = "") {
	if (!string)
		console.warn("you must enter a text"), alert("you must enter a text");
	else {
		console.info(`the text ${string} has ${string.length} characters.`);
	}
}

export const countVeryPro = (string = "") => {
	if (!string) {
		console.warn("you must enter a text");
		alert("you must enter a text");
	} else {
		console.info(`the text ${string} has ${string.length} characters.`);
		alert(`the text ${string} has ${string.length} characters.`);
	}
};

export const partitionPro = (string = "", length = undefined) => {
	let partitionedText, charactersLess;
	!string && length === undefined
		? (console.warn("please, add values."), alert("Please, add values ."))
		: !string && length !== undefined
		? (console.warn(
				"Impossible to count an empty partition. You must add text."
		  ),
		  alert("Impossible to count an empty partition. You must add text."))
		: !string
		? (console.warn("you must enter a text"), alert("you must enter a text"))
		: length === undefined
		? (console.warn("you must enter a length"),
		  alert("you must enter a length"))
		: ((partitionedText = string.slice(0, length)),
		  (charactersLess = length - partitionedText.length),
		  charactersLess > 0
				? (console.warn(
						`the partitioned text "${partitionedText}" has ${partitionedText.length} characters, ${charactersLess} less characters than partition request.`
				  ),
				  alert(
						`the partitioned text "${partitionedText}" has ${partitionedText.length} characters, ${charactersLess} less characters than partition request.`
				  ))
				: (console.info(
						`the partitioned text "${partitionedText}" has ${partitionedText.length} characters.`
				  ),
				  alert(
						`the partitioned text "${partitionedText}" has ${partitionedText.length} characters.`
				  )));
};

export const dividePro = (string = "", referenceSplitter = undefined) =>
	!string && referenceSplitter === undefined
		? (console.warn("Please, add values"), alert("Please, add values"))
		: !string && referenceSplitter !== undefined
		? (console.warn(
				"The Reference Splitter is correct but You must add text too."
		  ),
		  alert("The Reference Splitter is correct but You must add text too."))
		: !string
		? console.warn("You Must add text")
		: referenceSplitter === undefined
		? (console.warn("You must add a Reference Splitter"),
		  alert("You must add a Reference Splitter"))
		: console.info(string.split(referenceSplitter));

export const repeatPro = (string = "", amountRepetitions = undefined) => {
	let repeatedStringArray, repeatedString;
	!string && amountRepetitions === undefined
		? (console.warn("Please, add values"), alert("Please, add values"))
		: !string && amountRepetitions !== undefined
		? (console.warn(
				"The amount of repetitions is correct but You must add text too."
		  ),
		  alert("The amount of repetitions is correct but You must add text too."))
		: !string
		? console.warn("You Must add text")
		: amountRepetitions === undefined
		? (console.warn("You must add an amount of repetitions"),
		  alert("You must add an amount of repetitions"))
		: (repeatedStringArray = Array.from(
				{ length: amountRepetitions },
				() => string
		  ));
	repeatedStringArray && repeatedStringArray.length > 0
		? ((repeatedString = repeatedStringArray.join(", ")),
		  console.info(repeatedString),
		  console.warn(`The text "${string}" repeats ${amountRepetitions} times.`),
		  alert(`The text "${string}" repeats ${amountRepetitions} times.`))
		: undefined;
};

export class TypeIndex {
	typeIndex = $state({ value: 0 });

	update = (i) => {
		this.typeIndex.value = i;
	};
}

export const navIndex = $state({
	value: 0
});

export const pomodoroMin = $state({
	value: 25
});

export const shortMin = $state({
	value: 5
});

export const longMin = $state({
	value: 10
});

export const colorIndex = $state({
	value: 1
});

export function setTimer() {
	let value = $state(11);

	function up() {
		value += 1;
	}

	return {
		get value() {
			return value;
		},
		set value(newValue) {
			value = newValue;
		},
		up
	};
}

export class MainIndex {
	value = $state(0);

	setMain(v) {
		this.value = v;
	}
}

export class PomodoroTimer {
	value = $state(25);

	setPomodoro(v) {
		this.value = v;
	}
}
export class ShortTimer {
	value = $state(5);

	setShort(v) {
		this.value = v;
	}
}
export class LongTimer {
	value = $state(5);

	setLong(v) {
		this.value = v;
	}
}
export class FontIndex {
	value = $state(0);

	setFont(v) {
		this.value = v;
	}
}
export class ColorIndex {
	value = $state(0);

	setColor(v) {
		this.value = v;
	}
}
export class SoundIndex {
	value = $state(0);

	setSound(v) {
		this.value = v;
	}
}

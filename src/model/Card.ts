import { State } from './common';

export interface ICard {
	name: String,
	src: String,
	state: State,
}

export default class Card implements ICard {
	private _name: String;
	private _src: String;
	private _state: State = State.DEFAULT;

	constructor(name: String) {
		this._name = name;
		this._src = '/images/' + name + '.jpg';
	}

	get name(): String {
		return this._name;
	}

	get src(): String {
		return this._src;
	}

	get state(): State {
		return this._state;
	}

	set state(state: State) {
		this._state = state;
	}
}
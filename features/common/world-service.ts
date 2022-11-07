export default class WorldService {
	private world: Map<string, string>;

	public init() {
		this.world = new Map();
	}

	public parse(text: string): any {
		return this.world.get(text);
	}

	public store(key: string, value: any) {
		this.world.set(key, value);
	}
}

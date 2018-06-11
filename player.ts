export class Player {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    get Name(): string {
        return this.name;
    }
}
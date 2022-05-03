
interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): number;
}
interface RunningBird {
    run(): void;
}
interface SwimmerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    public eat() {}
    public fly() { return 100; }
}

class Humminbird  implements Bird, FlyingBird {
    public fly() { return 200; }
    public eat() {}
}

class Ostrich  implements Bird, RunningBird {
    public eat() {}
    public run() {}
}

class Pinguin  implements Bird, SwimmerBird {
    public eat() {}
    public swim() {}
}

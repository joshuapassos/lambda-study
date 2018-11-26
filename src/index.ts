
type Maybe<A> = Just<A> | Nothing
type Option<A,B> = Left<A> | Right<B>

class Left<A> {
    value: A
    constructor(value: A) {
        this.value = value
    }
}
class Right<B> {
    value: B
    constructor(value: B) {
        this.value = value
    }
}

// interface Monad<A>{
//     bind<B>(a: Monad<A>, f: (t: A) => Monad<B>): Monad<B>; // >>= :: m a -> (  a -> m b) -> m b
//     chain<B>(f: (t: Monad<A>) => Monad<B>): Monad<B>; // (>>) :: m a -> m b -> m b
//     ret(t: A): Monad<A> // return :: a -> m a
//     fail(t: string):Monad<A> // fail :: String -> m a
// }

class Just<T> {
    value: T
    constructor(value: T) {
        this.value = value
    }
    toString(): string {
        return `Just(${this.value})`;
    }
    inspect(): string {
        return `Just(${this.value})`
    }
    isNothing(): boolean {
        return false
    }
    isJust(): boolean {
        return true
    }
    equals(secondValue: Maybe<T>): boolean {
        return (secondValue.isNothing) ? false : (secondValue as Just<T>).value === this.value;
    }
}

class Nothing {
    toString(): string {
        return `Nothing`;
    }
    inspect(): string {
        return `Nothing`
    }
    isNothing(): boolean {
        return true
    }
    isJust(): boolean {
        return false
    }
}

function Maybe<T>(value?: T): Maybe<T> {
    if(typeof value !== "undefined")
        return value ? new Just(value) : new Nothing()
    return new Nothing()
}

function compute<T>(value: Maybe<T>): T | null {
    if (value.isNothing())
        return null
    else
        return (value as Just<T>).value
}

function isNothing<T>(value: Maybe<T>): boolean {
    return value.isNothing()
}

function isJust<T>(value: Maybe<T>): boolean {
    return value.isJust()
}

function computeOr<T,Y>(value: Maybe<T>, option: Y): T | Y {
    if (value.isJust())
        return (value as Just<T>).value;
    return option;
}


// equals
// map
// chain

// console.log(computeOr(a,3));
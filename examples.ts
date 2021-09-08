// Simple primitive assignment
let a = 123
let b = "123"
a = b

// contextual type
var foo:{id:number;}[] = [{id:1}, {id:2, name:"foo"}];

//  covarient callbacks
interface P<T> {
    then(cb: (value: T) => void): void;
};

interface A { a: string }
interface B extends A { b: string }

function f1(a: P<A>, b: P<B>) {
    a = b;
    b = a;  // Error
}

interface AList1 {
    forEach(cb: (item: A) => void): void;
}

interface BList1 {
    forEach(cb: (item: B) => void): void;
}


function f11(a: AList1, b: BList1) {
    a = b;
    b = a;  // Error
}

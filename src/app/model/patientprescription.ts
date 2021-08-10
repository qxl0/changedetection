// interface ProxeeHandler<T extends Object, TOut extends Object> {
//     get?<K extends keyof TOut>(target: T, p: K, receiver: TOut): TOut[K];
//     set?<K extends keyof TOut>(target: T, p: K, value: TOut[K], receiver: TOut): boolean;
// }
// interface ProxeeConstructor {
//     new <T extends Object, TOut extends Object>(target: T, handler: ProxeeHandler<T, TOut>): TOut & {isDirty: boolean};
// }

import { dirtify } from "./dirtyfy";

// export var Proxee : ProxeeConstructor;
export function createProxy<T>(value: T): T & { isDirty: boolean,clearDirt(): void } {
    return dirtify(value);
}

export function createProxy2<T>(value: T): T & { isDirty: boolean,clearDirt(): void } {
    return dirtify(value);
}



// export function first() {
//   console.log("first(): factory evaluated");
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log("first(): called");
//   };
// }

// export function Talks<T extends {new(...args:any[]):{}}>(constructor:T) {
//     return class extends constructor {
//         sayHello(): void {
//             console.log('Hello');
//         }
//     }
// }
// export function addisDity<T extends {new(...args:any[]):{}}>(constructor:T) {
//     return class extends constructor {
//         createProxy<T>(value: T): T & { isDirty: boolean,clearDirt(): void } {
//             return dirtify(value);
//         }
//     }
// }

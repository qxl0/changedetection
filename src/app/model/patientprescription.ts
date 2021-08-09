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





// /*
//  * @see https://twitter.com/mattpocockuk/status/1740418559623508269?s=12&t=0Bs_ltBYiO3nhiiL9YZAEw
//  */
// type InferValueFromColor<Color extends string> =
//   Color extends `${infer N}-${infer C}-${infer T}`
//     ? {
//         namespace: N;
//         color: C;
//         tone: T;
//       }
//     : never;

// type Example = InferValueFromColor<"text-red-500">;

// /*
//  * @see https://twitter.com/mattpocockuk/status/1740702711652225157?s=12&t=0Bs_ltBYiO3nhiiL9YZAEw
//  */
// const inferValueFromColor = <
//   N extends string,
//   C extends string,
//   T extends number
// >(
//   colorTag: `${N}-${C}-${T}`
// ) => {
//   const [namespace, color, tone] = colorTag.split("-");
//   return {
//     namespace: namespace as N,
//     color: color as C,
//     tone: Number(tone) as T,
//   };
// };

// const example = inferValueFromColor("text-red-500");

// type A = "foo"; // global scope
// type B = A extends infer C
//   ? C extends "foo"
//     ? true
//     : false // *only* inside this expression, C represents A
//   : never;

// // ちょっとユースケース的に考えにくいかも
// // @see https://twitter.com/mattpocockuk/status/1660954698386403332?s=12&t=0Bs_ltBYiO3nhiiL9YZAEw
// type SomeObject = {
//   a: string;
//   b: string;
// };

// export type Example2 = {
//   [K in keyof SomeObject]: {
//     key: K;
//   };
// }[keyof SomeObject];

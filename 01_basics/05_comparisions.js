console.log(2>1)
console.log(2<1)
console.log(2==1)
console.log(2>=1)
console.log(2!=1)
console.log(2<=1)

console.log("2">1) // true 
console.log("02">0) // true 

console.log(null>0) // false 
console.log(null==0) // false 
console.log(null>=0) // true 

/*
    the equality(==) and comaprision(>,<,>=,<=) work differently.
    comparision converts null to number, treating it as 0. 
*/ 

console.log(undefined==0)


/* 
    1. Equality Operators (== vs ===)
        Loose Equality (==):
            -> It performs type coercion if the types are different.
            -> If the types are the same, it compares the values directly.
            -> There are specific rules for different types:
            Comparison	Result
            null == undefined	true
            0 == false	true
            '' == false	true
            [] == ''	true
            [] == 0	true
            [1] == 1	true
            [''] == 0	true
            {} == "[object Object]"	false
        Important: null and undefined are only equal to each other, and not to anything else (e.g., 0 or false).

        Strict Equality (===):
            No type coercion is performed. Both the type and value must match exactly.
            Comparison	Result
            0 === false	false
            '' === false	false
            null === undefined	false
            [] === ''	false
            [1] === 1	false
        Best Practice: Use === unless you explicitly want type coercion.

    2. Comparison Operators (<, <=, >, >=)
        Comparison operators perform numeric or lexicographical comparisons, depending on the input types.
        Primitive Coercion Rules for Comparison:
        Number vs. String: If one operand is a string and the other is a number, the string is coerced to a number.
            '5' < 10  // true, '5' becomes 5
            '5' > 3   // true
        Boolean Coercion: true becomes 1 and false becomes 0 when compared numerically.
            true > false  // true (1 > 0)
            null and undefined Behavior:
        null becomes 0 when compared numerically.
        undefined becomes NaN, and any comparison with NaN (except NaN == NaN) is false.
            null < 1  // true (null becomes 0)
            undefined < 1  // false (undefined becomes NaN)


    3. Type Conversion Rules for Primitive Values
        When coercing between types, JavaScript follows these rules:

        Type	Converted To	Example
        String to Number	Parsed as a number	'42' -> 42, 'abc' -> NaN
        Boolean to Number	true -> 1, false -> 0	true + 1 // 2
        Null to Number	0	Number(null) // 0
        Undefined to Number	NaN	Number(undefined) // NaN
        Array to String	Joins elements with ,	[1,2].toString() // '1,2'
        Object to Primitive	Calls valueOf() or toString()	({}).toString() // '[object Object]'


    4. NaN Behavior
        NaN (Not-a-Number) is a special value. Any comparison involving NaN (except NaN == NaN) returns false.
            console.log(NaN === NaN);  // false
            console.log(NaN < 5);      // false
            console.log(NaN >= 0);     // false


    5. Truthy and Falsy Values
        JavaScript considers some values falsy when converted to boolean. All other values are truthy.
        Falsy Values:
        false
        0
        -0
        '' (empty string)
        null
        undefined
        NaN

    6. Special Case Comparisons Involving null and undefined
        null and undefined are treated differently across operators:
        Equality (==): null == undefined is true.
        Strict Equality (===): null !== undefined.
        Comparisons (<, <=, >, >=):
        null is converted to 0.
        undefined is converted to NaN.
            console.log(null >= 0);  // true (null becomes 0)
            console.log(undefined >= 0);  // false (undefined becomes NaN)
*/ 
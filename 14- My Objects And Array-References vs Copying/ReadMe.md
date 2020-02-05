1) For strings, numbers and Boolean, if we have two variables with variable1 = variable2, 
changing the value of variable1 will not have any effect on variable2.
2) But, in the case of Arrays and Objects, this does not hold true. This is because when we do,
arr1 = arr2, we are just referencing the arr1 with the variable arr2. Hence, any change in either
of the 2 arrays will reflect in the other.
3) In order to copy an array, use one of the following methods
	1) Use the slice() method - This method takes a part of the array(that is specified by the 
	indexes in the paranthesis) and returns just that part. If there are no arguments passed
	to the method, it just copies the entire array, without affecting the original array.
	2) Use the concat() method - This method concatenates the existing array to the new array. 
	In order to copy the existing array to a new array, we first create a blank array and then
	concatenate the existing array to the blank array.
	3) Use the ES6 Spread operator 
	4) Use the Array.from() method - 
4) In order to copy an Object, use one of the following methods
	1) Use the Object.assign() method - This method takes 3 parameters. Parameter1 = a blank 
	object, parameter2= the object that you want to copy, parameter3 = This is an optional
	parameter. This parameter can be used to add new properties fro the new object or to override 
	the values of the existing properties.
	The problem with the above method is the above methods(for both arrays and objects) is that,
	the copying is done only 1 level deep. This means that, if we have nested objects, the above
	properties won't hold.

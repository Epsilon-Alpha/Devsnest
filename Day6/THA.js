// Write a JavaScript function to check whether an `input` is an array or not
function is_array(item){
	return Array.isArray(item);
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//Write a JavaScript function to clone an array
function array_Clone(ar){
  if(!is_array(ar))
    return "Not an array";
	return [...ar];
}

console.log(array_Clone(5));
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

function first(ar, index=1){
  if(!is_array(ar))
    return "Not an array";
  if(index<1 || ar.length==0)
    return [];
  if(index == 1)
    return ar[0];
  return ar.slice(0,index);
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//Write a simple JavaScript program to join all elements of the following array into a string.
function arrayJoin(ar, delim=','){
  return ar.join(delim);
}

myColor = ["Red", "Green", "White", "Black"];
console.log(arrayJoin(myColor));
console.log(arrayJoin(myColor, ' '))
console.log(arrayJoin(myColor, '+'))

// Write a JavaScript program to find the most frequent item of an array
function mostFrequent(ar){
    if(!is_array(ar))
      return "Not an array";
      
    let n = ar.length;
    if(n == 0)
      return "Empty array";
    
    let currCount = 1, maxCount = 1, item = ar[0];
    ar.sort();
    ar.push('$'); //Assuming no $ in original array
    for(let i=1;i<=n;i++)
    {
      if(ar[i] == ar[i-1])
        currCount++;
      else
      {
        if(currCount > maxCount)
        {
          maxCount = currCount;
          item = ar[i-1];
        }
        currCount = 1;
      }
    }
    return (item + " ( " + maxCount + " times )")
}

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequent(arr1))
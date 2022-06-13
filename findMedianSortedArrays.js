/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let len = nums1.length+nums2.length
  if(len === 0)
    return 0
  let singleMedian = len % 2 === 0 ? false : true

  let mid = Math.floor(len/2)
  let i = 0
  let j = 0
  let k = 0
  let mergeArr = []
  while(i<nums1.length && j<nums2.length){
    if(nums1[i] > nums2[j]){
      mergeArr.push(nums2[j])
      j+=1
    }
    else{
      mergeArr.push(nums1[i])
      i+=1
    }
    if(k === mid){
      if(singleMedian)
        return mergeArr[k]
      else
        return (mergeArr[k] + mergeArr[k-1]) / 2
      break
    }
    k+=1
  }

  let leftNums = nums1
  let n = i
  if(j !== nums2.length){
    n = j
    leftNums = nums2
  }

  steps2Mid = mid - k + 1
  n = n + steps2Mid - 1
  if(singleMedian)
    return leftNums[n]
  else{
    if(steps2Mid < 2)
      return (leftNums[n] + mergeArr[k-1]) / 2
    else
      return (leftNums[n] + leftNums[n-1]) / 2
  }
}


// O(m+n)
var findMedianSortedArrays = function(nums1, nums2) {
  const totalLen = nums2.length + nums1.length;
  const halfLen = Math.floor(totalLen/2);
  let a = nums1;
  let b = nums2;

  // const c = []
  let i=0, j=0;
  let k=0;

  let pre,cur
  a[a.length] = Infinity
  b[b.length] = Infinity
  while(true){
    if(a[i] < b[j]){
      cur = a[i]
      // c[k] = a[i]
      i++
    }else{
      cur = b[j]
      // c[k] = b[j]
      j++
    }

    if(k===halfLen){
      if(totalLen %2 === 0){
        return ( cur + pre ) /2
        // return ( c[k] + c[k-1] ) / 2
      }else{
        return cur
        // return c[k]
      }
    }
    pre = cur
    k++
  }
}

var findMedianSortedArrays = function(nums1, nums2) {
  const totalLen = nums2.length + nums1.length;
  const halfLen = Math.floor(totalLen/2);
  let a = nums1;
  let b = nums2;

  if (nums1.length < nums2.length){
    a = nums2;
    b = nums1
  }

  const bLen = b.length

  a[a.length] = Infinity;
  b[b.length] = Infinity;

  let l = 0, r = bLen-1
  while(true){
    // even r < 0, whic is also the case l < r
    // that is also make sense logically
    let leftpb = Math.floor((l + r) / 2);
    bLeft = -Infinity
    if(leftpb >= 0) bLeft = b[leftpb]
    let bR = b[leftpb+1]

    // let leftpa = halfLen - leftpb;
    let leftpa = halfLen - leftpb - 2;
    let aR = a[leftpa+1]
    let aLeft = -Infinity
    if(leftpa >=0) aLeft = a[leftpa]

    // if(( leftpb < 0 || b[leftpb] <= aR ) && ( leftpa < 0 || a[leftpa] <=bR )){
    if((aLeft <= bR) && (bLeft <= aR)){
      if(totalLen %2 === 0){
        return (Math.max(aLeft, bLeft) + Math.min(aR, bR)) /2
        // return (Math.min(b[leftpb],a[leftpa]) + Math.min(aR, bR))/2
      }else{
        return Math.min(aR, bR)
      }
    }else{
      if(aLeft <bR){
        r = leftpb -1
      }else
        l = leftpb + 1
    }
  }
}

console.log(findMedianSortedArrays([0,0],[0,0]));
console.log(findMedianSortedArrays([1,2],[3,4]));
console.log(findMedianSortedArrays([1,3], [2]));

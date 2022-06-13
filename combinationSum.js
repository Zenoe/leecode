
var combinationSum = (candidates, target) =>{
  const comb = (candidates, target, index) => {
    if(target === 0) return [[]]
    if(index === candidates.length) return null
    if(target < 0) return null

    const result = []
    const left = target - candidates[index]
    let tmp = comb(candidates, left, index)
    if(tmp !== null){
      for(let t of tmp){
        result.push ([candidates[index], ...t])
      }
    }

    tmp = comb(candidates, target, index+1)
    if(tmp !== null){
      for(let t of tmp){
        result.push (t)
      }
    }

    return result
  }

  return comb(candidates, target, 0);
}


console.log(combinationSum([2,3,5], 8));

console.log(combinationSum([2,3,6,7], 7));
console.log(combinationSum([2], 1));

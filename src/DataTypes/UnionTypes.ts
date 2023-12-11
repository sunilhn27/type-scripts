function union(a:any, b:any){
   if(typeof a=== 'number' && typeof b==='number'){
      return a+b;
   }if (typeof a==='string' && typeof b==='string'){
    return a.concat(b);
   }else{
    throw new Error("paramtre not matching");
   }

}



function addition1(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}


console.log(union("sunil","hn"))
console.log(addition1(2,5));
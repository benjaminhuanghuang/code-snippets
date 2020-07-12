/*
1. 找出所有入度为0的顶点，入栈
2. 选一个栈中元素
  2.1 删除出度
  2.2 如果入度为0，入栈
3. 如果无环，则输出顺序为拓扑排序
*/


/*
// transfor 邻接矩阵到入度表

let adj = {
  1: [2,3],
  2: [3,4]
}

let rudu ={
  2: [1 , 5],
  3: [1, 2, 4]
}
*/
let trans = (adj) => {
  let rudu = {};

  for (let k in adj){
    let pointArr = adj[k];
    for(let i=0 ;i < pointArr.length; i++){
      if(!rudu[pointArr[i]]){
        rudu[pointArr[i]] = [];
      }
      rudu[pointArr[i]].push[k]
    }
  }
};


let getAllRudu0V = (n, rudu) => {
  let arr =[];
  for (let i =1; i <=n; i++){
    if(!rudu[i] || !rudu[i].length){
      arr.push(i);
    }
  }
  return arr;
}

let topoArr = [];

let stack = getAllRudu0V(n, rudu);

while(stack.length != 0){
  let v = stack.pop();
  topoArr.push(v);

  // delete all chudu of v
  for(let k in rudu){
    let index = rudu[k].indexOf(v+' ');
    if(index > -1){
      rudu[k].splice(index, 1);
      if(rudu[k].length === 0){
        stack.push(k/1)
      }
    }
  }
}

return topoArr.length === n? topoArr : 'CYCLE'
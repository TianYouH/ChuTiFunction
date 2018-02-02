let jjArr = ['+', '-'];
let tmArr = [];

function ti() {
  let j1 = Math.floor( Math.random() * 30);
  let j2 = Math.floor( Math.random() * 30);
  let j3 = Math.floor( Math.random() * 30);
  let jj1 = jjArr[Math.floor( Math.random() * 2)];
  let jj2 = jjArr[Math.floor( Math.random() * 2)];

  if (addOrReduce(j1 + jj1 + j2 + jj2 + j3)) {
    tmArr.push(j1 + jj1 + j2 + jj2 + j3 + '=' + '\t\t')
    if (tmArr.length  > 3) {
      console.log(tmArr.join(' '))
      tmArr = []
    }
  }
  
}

function addOrReduce (val) {
  let a = eval(val)
  if (a < 0) {
    return false
  }else{
    return true
  }
}

for (let i = 0; i < 300; i++) {
  ti()
}
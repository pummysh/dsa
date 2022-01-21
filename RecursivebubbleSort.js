function bubbl(arr,n,cur){
    if(cur===n){
        return ;
    }

    for(let i=0;i<n-i-1;i++){
        if(arr[i]>arr[i+1]){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
        }
    }
    bubbl(arr,n,cur+1);
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    bubbl(arr,n,0);
    console.log(arr);
   
  }
  if (process.env.USERNAME === "PUMMY SHARMA") {
    runProgram(`5
    3 5 0 9 8`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }
function binary(arr,k,n){
    // console.log(arr,k);

    let l=0;
    let h=n-1;

    while(l<h){
        let mid=Math.floor(l+(h-l)/2);
        if(arr[mid]===k){
            return 1;
        }else if(mid<k){
            l=mid+1;
        }else{
            h=mid-1;
        }
    }
    return -1;

}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let [n,k]=input[0].trim().split(" ").map(Number);
    let arr=input[1].trim().split(" ").map(Number);
    let ans=binary(arr,k,n);
    console.log(ans);
  }
  if (process.env.USERNAME === "PUMMY SHARMA") {
    runProgram(`5 0
    2 -2 0 3 4`);
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
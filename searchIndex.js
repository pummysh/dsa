let nums=[7,8,9,1,2,3,4,5,6];
let l=0;
let h=nums.length-1;
let ans=find(nums);

function find(arr){
    let l=0;
    let h=arr.length-1;
    
    while(l<h){
        let mid=Math.floor(l+(h-l)/2);
        if(arr[mid+1]<arr[mid]){
            return mid+1;
        }else if(arr[mid-1]>arr[mid]){
            return mid;
        }else if(arr[mid]>arr[h]){
            l=mid+1;
        }else{
            h=mid-1;
        }
    }
    return 0;
}
console.log(ans);
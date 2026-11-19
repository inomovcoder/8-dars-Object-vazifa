let count =0
let n = 379657894
while(n >0){
    let m = n%10
    if(m == 0 || m == 6 || m==9){
        count +=6
    }
    else if(m==1){
        count +=2 
    }    
    else if(m==2 || m==3 || m==5){
        count+=5
    }
    else if(m==4){
        count+=4
     } 
     else if(m==7){
        count+=3
     }
    else{
        count+= 7
    }
    n=Math.floor(n/10)
}

console.log(count)
import axios from "axios";

async function chock(){
    for(let i =0; i<100000; i+=10) {
        let arr = [];
        for(let j = i; j<i+10; j++) {

            const res = axios.get("https://pict.edu/");
            arr.push(res);
            console.log(j);
        }
        // const res = await Promise.all(arr);
        
    }

}

chock();
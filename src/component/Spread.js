function Spread(){
    let arr1 = [1,3,4,5,7,8,[10]];
    //let arr2 = [...arr1];//spread operator shallow copy
    //const x = JSON.stringify(arr1);
    const arr2 =JSON.parse(JSON.stringify(arr1));//spread operator deep copy
    arr2[1] = 10;

    console.log(arr1,arr2);

    return(

        <h1>This is spread component</h1>
    )
}
 export default Spread;
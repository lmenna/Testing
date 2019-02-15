
export function simpleTypes() {
    let myString: string;
    let myBool: boolean;
    let myNum: number;
    let myVar: any;

    myString = "Hello World";
    console.log("myString:", myString);
    myBool = true;
    console.log("myBool:", myBool);
    myNum = 3.14;
    console.log("myNum:", myNum);
    myVar = "Var as string";
    console.log("myVar type any:", myVar);    
    myVar = 123456;
    console.log("myVar type any is now a number:", myVar);
    myVar = "1" + 2;
    console.log("myVar now \"1\" + 2:", myVar);
   
}

import {BigNumber} from "bignumber.js";
import BN from "bn.js";

function aBigOne() {

  return(new BigNumber(100000000000000000000000000000000000000000000000000000));
}

function aBigOneBN() {

  return(new BN("100000000000000000000000000000000000000000000000000000", 10));
}

function addOneBN(aBN) {

  return( aBN.add(new BN("1", 10)) );
}

function addOne(aNum) {

  return( aNum.plus(new BigNumber(1)) );
}


export { aBigOne, addOne, aBigOneBN, addOneBN }

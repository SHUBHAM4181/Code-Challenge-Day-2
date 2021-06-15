//A man buys a cycle for Rs. a and sells it at a loss of b%. What is the selling price of the cycle?
// Write a Function to compute the roundof selling price.

// Write a Function to return compute the doundof selling price.
function find_SellingPrice(a,b){
    
        var a=((100-b)/100)*a;
        var sp=Math.round(a);
        return(sp);
    
    return null;
}
//Use SpecRunner to check the Test Cases.

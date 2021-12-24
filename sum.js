// function that returns the sum of 2 numbers
(request)=>{
    return request.pathVariable.firstElement + request.pathVariable.secondElement;
}

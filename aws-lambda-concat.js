exports.handler = async (request) => {
   return request.body.firstElement + request.body.secondElement;
};

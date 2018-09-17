// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const FaceValues = { "H":50,"Q":25,"D":10,"N":5,"P":1};
    var result = {};
    function getCount(money){
        var count = 0;
        while(true){
                if(currency-money<0){
                    break;
                }
                count++;
                currency -= money;
        }
        return count;
    }
    if(currency >= 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    let  H = getCount(FaceValues.H);
    if(H > 0 ){
        result['H'] = H;
    }
    let  Q = getCount(FaceValues.Q);
    if(Q > 0 ){
        result['Q'] = Q;
    }
    let  D = getCount(FaceValues.D);
    if(D > 0 ){
        result['D'] = D;
    }
    let  N = getCount(FaceValues.N);
    if(N > 0 ){
        result['N'] = N;
    }
    let  P = getCount(FaceValues.P);
    if(P > 0 ){
        result['P'] = P;
    }
    return result;
}
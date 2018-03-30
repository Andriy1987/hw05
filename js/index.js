const a = parseFloat(prompt ('type a'));
const b = parseFloat(prompt ('type b'));
const c = parseFloat(prompt ('type c'));

const result = solveQuad(a, b, c);
document.write (result);

function solveQuad (a, b, c) {
    const d = calcDisc(a, b, c);
    if (d>0){
       x1 = (-b + Math.sqrt(d))/2*a 'br';
       x2 = (-b - Math.sqrt(d))/2*a;
    return 'x1= ' + x1   + 'x2 = ' + x2; 
    }
        else if (d===0){ 
            x1 = -(b/2*a);
            return 'x1= ' + x1 }
            else { return 'There are no real roots'}
}
function calcDisc(a, b, c) {
    return b**2 - 4*a*c;
}
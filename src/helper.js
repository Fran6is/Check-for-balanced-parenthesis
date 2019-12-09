function isOpening (char)
{
    if(char === '{' || char === '(' || char === '[') 
        return true;
    else 
        return false;
}
function isClosing (char)
{
    if(char === '}' || char === ')' || char === ']') 
        return true;
    else 
        return false;
}

function isCompatible (opening, closing)
{
    if( (opening === '{' && closing === '}') || (opening === '(' && closing === ')') || (opening === '[' && closing === ']') )
       return true;
    else 
        return false;
}
function evaluateExpression (exp)
{
    const stack = [];

    for(let i = 0; i < exp.length; i++)
    {
        const parenthesis = exp[i];
        if(isOpening(parenthesis))
        {
            stack.push(parenthesis);
            console.log(parenthesis + "pushed to stack")
        }
        else if(isClosing(parenthesis))
        {
            if( (stack.length > 0) && isCompatible(stack.pop(), parenthesis) ) 
                continue;
            else
                return -1;
        }

    }

    return stack.length;
}

export default evaluateExpression;
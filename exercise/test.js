const Koa = require('koa');
const test = module.exports = new Koa() ; 

test.use(async function(ctx){
ctx.body = 'homework-3' ; 
switch(ctx.url){
    case '/hello' :
    ctx.body = '你好' ;
    break ;

    case '/name' :
    ctx.body = '莊奕軒' ;
    break ;

    case '/id' :
    ctx.body = '110510514' ;
    break ;

    default :
    ctx.body = 404
}
});

if (!module.parent) test.listen(3000) ; 
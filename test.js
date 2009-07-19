window.addEvent('domready', init);


var get = function(rsrc) 
{
  return new Request({
    method: 'get',
    url: rsrc+'.json'
  });
}.decorate(promise)


var addFn = function(a, b) 
{
  return a + b;
}.decorate(promise)


var fnA = function(v)
{
  var p = get('c');
  p.op(function(value) { return value.toUpperCase() + v; });
  return p;
}.decorate(promise)


var fnB = function(a, b)
{
  var p = get(b);
  return p.op(function(value) { return a + value; });
}.decorate(promise)


var show = function show(arg)
{
  console.log(arg);
}.decorate(promise)


function init()
{
  show(addFn(addFn(get('a'), get('b')), addFn(get('d'), fnA(get('f')))));
  show(fnB(fnB(fnB(fnB(fnB(get('a'), 'b'), 'c'), 'd'), 'e'), 'f'));
}
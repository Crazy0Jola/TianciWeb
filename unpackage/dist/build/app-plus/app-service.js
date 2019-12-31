var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'bg-white flex align-stretch'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$emit']],[[4],[[5],[1,'click']]]]]]]]]]])
Z([[7],[3,'showLeftIcon']])
Z([3,'flex align-center justify-center py-2 pl-3'])
Z([3,'icon'])
Z([[7],[3,'cover']])
Z([[4],[[5],[[5],[1,'flex-1 flex align-center justify-between pr-3 py-3 pl-3']],[[2,'?:'],[[7],[3,'border']],[1,'border-bottom'],[1,'']]]])
Z([[6],[[7],[3,'$slots']],[3,'default']])
Z([[7],[3,'showRight']])
Z([3,'flex align-center'])
Z([3,'right'])
Z([[7],[3,'showRightIcon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'w-100 flex align-center justify-between'])
Z([3,'height:90rpx;'])
Z([3,'flex align-center'])
Z([[7],[3,'showBack']])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z([3,''])
Z([3,'1'])
Z([[7],[3,'title']])
Z([[7],[3,'showRight']])
Z(z[2])
Z([[6],[[7],[3,'$slots']],[3,'right']])
Z([3,'right'])
Z(z[4])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'search']]]]]]]]])
Z([3,''])
Z([3,'2'])
Z(z[4])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'openExtend']]]]]]]]])
Z([3,''])
Z([3,'3'])
Z([[7],[3,'fixed']])
Z(z[10])
Z(z[4])
Z([3,'bg-dark'])
Z([1,205])
Z([1,320])
Z([3,'vue-ref'])
Z([3,'extend'])
Z([3,'right top'])
Z([3,'4'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'status']])
Z([3,'_div data-v-84cfad8e'])
Z([3,'z-index:9999;overflow:hidden;'])
Z([[7],[3,'mask']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[2,'?:'],[[7],[3,'_rotate']],[1,'rotate_loop'],[1,'']]]])
Z([[7],[3,'_rotate']])
Z([[2,'!'],[[7],[3,'_rotate']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'main-list oBorder'])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'_isShowPass']],[[2,'==='],[[7],[3,'type']],[1,'password']]],[[2,'!'],[[7],[3,'_isShowCode']]]])
Z([[2,'&&'],[[7],[3,'_isShowCode']],[[2,'!'],[[7],[3,'_isShowPass']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-2582c52f'])
Z([3,'moments'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[3])
Z(z[0])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^sendMessage']],[[4],[[5],[[4],[[5],[1,'send_comment']]]]]]]],[[4],[[5],[[5],[1,'^blur']],[[4],[[5],[[4],[[5],[1,'blur']]]]]]]]])
Z([[7],[3,'focus']])
Z([[7],[3,'input_placeholder']])
Z([3,'1'])
Z([[7],[3,'showLoadMore']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z(z[0])
Z([3,'page data-v-3fbd17cd'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z([3,'data-v-3fbd17cd'])
Z([1,true])
Z([1,false])
Z([3,'发表动态'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'main'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'phoneData']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'11'])
Z([3,'请输入手机号码'])
Z([3,'text'])
Z([[7],[3,'phoneData']])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'passData']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z(z[5])
Z([3,'请输入新密码'])
Z([3,'password'])
Z([[7],[3,'passData']])
Z([3,'2'])
Z(z[2])
Z(z[3])
Z(z[3])
Z([3,'vue-ref'])
Z([3,'获取重置码'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^setCode']],[[4],[[5],[[4],[[5],[1,'getVerCode']]]]]]]],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'verCode']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'runCode'])
Z([3,'4'])
Z([3,'验证码'])
Z([3,'30'])
Z([3,'number'])
Z([[7],[3,'verCode']])
Z([3,'3'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'startRePass']]]]]]]]])
Z([[7],[3,'isRotate']])
Z([3,'重置密码'])
Z(z[25])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'main'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'phoneData']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'11'])
Z([3,'手机号'])
Z([3,'text'])
Z([[7],[3,'phoneData']])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'passData']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z(z[5])
Z([3,'密码'])
Z([3,'password'])
Z([[7],[3,'passData']])
Z([3,'2'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'startLogin']]]]]]]]])
Z([[7],[3,'isRotate']])
Z([3,'登 录'])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'main'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'phoneData']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'11'])
Z([3,'手机号'])
Z([3,'text'])
Z([[7],[3,'phoneData']])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z(z[3])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^setCode']],[[4],[[5],[[4],[[5],[1,'getVerCode']]]]]]]],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'verCode']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'runCode'])
Z([3,'4'])
Z([3,'验证码'])
Z([3,'number'])
Z([[7],[3,'verCode']])
Z([3,'2'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'passData']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z(z[5])
Z([3,'登录密码'])
Z([3,'password'])
Z([[7],[3,'passData']])
Z([3,'3'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'name']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z(z[5])
Z([3,'姓名'])
Z(z[7])
Z([[7],[3,'name']])
Z(z[16])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'startReg']]]]]]]]])
Z([[7],[3,'isRotate']])
Z([3,'注 册'])
Z([3,'5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'bg-white'])
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[1,'right']]])
Z(z[2])
Z([3,''])
Z([3,'right'])
Z([[2,'+'],[[2,'+'],[1,'2'],[1,',']],[1,'1']])
Z(z[2])
Z([3,'__e'])
Z([3,'../../../static/images/demo/demo6.jpg'])
Z([3,'120'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'changeAvator']]]]]]]]])
Z([3,'楚绵'])
Z([3,'3'])
Z([[4],[[5],[[5],[1,'default']],[1,'right']]])
Z(z[2])
Z([3,'4'])
Z(z[2])
Z([3,'支付'])
Z([3,'5'])
Z([[4],[[5],[1,'icon']]])
Z(z[2])
Z([3,'6'])
Z(z[2])
Z([3,'收藏'])
Z([3,'7'])
Z(z[22])
Z(z[2])
Z([3,'相册'])
Z([3,'8'])
Z(z[22])
Z(z[2])
Z([3,'表情'])
Z([3,'9'])
Z(z[22])
Z(z[2])
Z([3,'10'])
Z(z[2])
Z([3,'设置'])
Z([3,'11'])
Z(z[22])
Z(z[2])
Z(z[10])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'exit']]]]]]]]])
Z([3,'退出登录'])
Z([3,'12'])
Z(z[22])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/free-ui/free-divider.wxml','./components/free-ui/free-icon-button.wxml','./components/free-ui/free-list-item.wxml','./components/free-ui/free-nav-bar.wxml','./components/free-ui/free-popup.wxml','./components/im-chat/chatinput.wxml','./components/watch-login/watch-button.wxml','./components/watch-login/watch-input.wxml','./pages/find/moments/moments.wxml','./pages/find/publish/publish.wxml','./pages/login/forget.wxml','./pages/login/login.wxml','./pages/login/register.wxml','./pages/tabbar/my/my.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oD=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,3,e,s,gg)){fE.wxVkey=1
var cF=_n('view')
_rz(z,cF,'class',4,e,s,gg)
var oH=_n('slot')
_rz(z,oH,'name',5,e,s,gg)
_(cF,oH)
var hG=_v()
_(cF,hG)
if(_oz(z,6,e,s,gg)){hG.wxVkey=1
}
hG.wxXCkey=1
_(fE,cF)
}
var cI=_n('view')
_rz(z,cI,'class',7,e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,8,e,s,gg)){oJ.wxVkey=1
var aL=_n('slot')
_(oJ,aL)
}
else{oJ.wxVkey=2
}
var lK=_v()
_(cI,lK)
if(_oz(z,9,e,s,gg)){lK.wxVkey=1
var tM=_n('view')
_rz(z,tM,'class',10,e,s,gg)
var bO=_n('slot')
_rz(z,bO,'name',11,e,s,gg)
_(tM,bO)
var eN=_v()
_(tM,eN)
if(_oz(z,12,e,s,gg)){eN.wxVkey=1
}
eN.wxXCkey=1
_(lK,tM)
}
oJ.wxXCkey=1
lK.wxXCkey=1
_(oD,cI)
fE.wxXCkey=1
_(r,oD)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var xQ=_n('view')
var cT=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var oV=_n('view')
_rz(z,oV,'class',2,e,s,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,3,e,s,gg)){cW.wxVkey=1
var lY=_mz(z,'free-icon-button',['bind:__l',4,'bind:click',1,'data-event-opts',2,'icon',3,'vueId',4],[],e,s,gg)
_(cW,lY)
}
var oX=_v()
_(oV,oX)
if(_oz(z,9,e,s,gg)){oX.wxVkey=1
}
cW.wxXCkey=1
cW.wxXCkey=3
oX.wxXCkey=1
_(cT,oV)
var hU=_v()
_(cT,hU)
if(_oz(z,10,e,s,gg)){hU.wxVkey=1
var aZ=_n('view')
_rz(z,aZ,'class',11,e,s,gg)
var t1=_v()
_(aZ,t1)
if(_oz(z,12,e,s,gg)){t1.wxVkey=1
var e2=_n('slot')
_rz(z,e2,'name',13,e,s,gg)
_(t1,e2)
}
else{t1.wxVkey=2
var b3=_mz(z,'free-icon-button',['bind:__l',14,'bind:click',1,'data-event-opts',2,'icon',3,'vueId',4],[],e,s,gg)
_(t1,b3)
var o4=_mz(z,'free-icon-button',['bind:__l',19,'bind:click',1,'data-event-opts',2,'icon',3,'vueId',4],[],e,s,gg)
_(t1,o4)
}
t1.wxXCkey=1
t1.wxXCkey=3
_(hU,aZ)
}
hU.wxXCkey=1
hU.wxXCkey=3
_(xQ,cT)
var oR=_v()
_(xQ,oR)
if(_oz(z,24,e,s,gg)){oR.wxVkey=1
}
var fS=_v()
_(xQ,fS)
if(_oz(z,25,e,s,gg)){fS.wxVkey=1
var x5=_mz(z,'free-popup',['bind:__l',26,'bodyBgColor',1,'bodyHeight',2,'bodyWidth',3,'class',4,'data-ref',5,'transformOrigin',6,'vueId',7,'vueSlots',8],[],e,s,gg)
_(fS,x5)
}
oR.wxXCkey=1
fS.wxXCkey=1
fS.wxXCkey=3
_(r,xQ)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var f7=_v()
_(r,f7)
if(_oz(z,0,e,s,gg)){f7.wxVkey=1
var c8=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var h9=_v()
_(c8,h9)
if(_oz(z,3,e,s,gg)){h9.wxVkey=1
}
var o0=_n('slot')
_(c8,o0)
h9.wxXCkey=1
_(f7,c8)
}
f7.wxXCkey=1
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var lCB=_n('view')
_rz(z,lCB,'class',0,e,s,gg)
var aDB=_v()
_(lCB,aDB)
if(_oz(z,1,e,s,gg)){aDB.wxVkey=1
}
var tEB=_v()
_(lCB,tEB)
if(_oz(z,2,e,s,gg)){tEB.wxVkey=1
}
aDB.wxXCkey=1
tEB.wxXCkey=1
_(r,lCB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var bGB=_n('view')
_rz(z,bGB,'class',0,e,s,gg)
var oHB=_v()
_(bGB,oHB)
if(_oz(z,1,e,s,gg)){oHB.wxVkey=1
}
var xIB=_v()
_(bGB,xIB)
if(_oz(z,2,e,s,gg)){xIB.wxVkey=1
}
oHB.wxXCkey=1
xIB.wxXCkey=1
_(r,bGB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var fKB=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var hMB=_mz(z,'chat-input',['bind:__l',2,'bind:blur',1,'bind:sendMessage',2,'class',3,'data-event-opts',4,'focus',5,'placeholder',6,'vueId',7],[],e,s,gg)
_(fKB,hMB)
var cLB=_v()
_(fKB,cLB)
if(_oz(z,10,e,s,gg)){cLB.wxVkey=1
}
cLB.wxXCkey=1
_(r,fKB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var cOB=_mz(z,'view',['bindtouchend',0,'bindtouchstart',1,'class',1,'data-event-opts',2],[],e,s,gg)
var oPB=_mz(z,'free-nav-bar',['bind:__l',4,'class',1,'showBack',2,'showRight',3,'title',4,'vueId',5],[],e,s,gg)
_(cOB,oPB)
_(r,cOB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var aRB=_n('view')
_rz(z,aRB,'class',0,e,s,gg)
var tSB=_n('view')
_rz(z,tSB,'class',1,e,s,gg)
var eTB=_mz(z,'w-input',['bind:__l',2,'bind:input',1,'data-event-opts',2,'maxlength',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(tSB,eTB)
var bUB=_mz(z,'w-input',['isShowPass',-1,'bind:__l',10,'bind:input',1,'data-event-opts',2,'maxlength',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(tSB,bUB)
var oVB=_mz(z,'w-input',['isShowCode',-1,'bind:__l',18,'bind:input',1,'bind:setCode',2,'class',3,'codeText',4,'data-event-opts',5,'data-ref',6,'maxlength',7,'placeholder',8,'setTime',9,'type',10,'value',11,'vueId',12],[],e,s,gg)
_(tSB,oVB)
_(aRB,tSB)
var xWB=_mz(z,'w-button',['bind:__l',31,'bindtap',1,'data-event-opts',2,'rotate',3,'text',4,'vueId',5],[],e,s,gg)
_(aRB,xWB)
_(r,aRB)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var fYB=_n('view')
_rz(z,fYB,'class',0,e,s,gg)
var cZB=_n('view')
_rz(z,cZB,'class',1,e,s,gg)
var h1B=_mz(z,'w-input',['bind:__l',2,'bind:input',1,'data-event-opts',2,'maxlength',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(cZB,h1B)
var o2B=_mz(z,'w-input',['bind:__l',10,'bind:input',1,'data-event-opts',2,'maxlength',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(cZB,o2B)
_(fYB,cZB)
var c3B=_mz(z,'w-button',['bind:__l',18,'bindtap',1,'data-event-opts',2,'rotate',3,'text',4,'vueId',5],[],e,s,gg)
_(fYB,c3B)
_(r,fYB)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var l5B=_n('view')
_rz(z,l5B,'class',0,e,s,gg)
var a6B=_n('view')
_rz(z,a6B,'class',1,e,s,gg)
var t7B=_mz(z,'w-input',['bind:__l',2,'bind:input',1,'data-event-opts',2,'maxlength',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(a6B,t7B)
var e8B=_mz(z,'w-input',['isShowCode',-1,'bind:__l',10,'bind:input',1,'bind:setCode',2,'class',3,'data-event-opts',4,'data-ref',5,'maxlength',6,'placeholder',7,'type',8,'value',9,'vueId',10],[],e,s,gg)
_(a6B,e8B)
var b9B=_mz(z,'w-input',['isShowPass',-1,'bind:__l',21,'bind:input',1,'data-event-opts',2,'maxlength',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(a6B,b9B)
var o0B=_mz(z,'w-input',['bind:__l',29,'bind:input',1,'data-event-opts',2,'maxlength',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(a6B,o0B)
_(l5B,a6B)
var xAC=_mz(z,'w-button',['bind:__l',37,'bindtap',1,'data-event-opts',2,'rotate',3,'text',4,'vueId',5],[],e,s,gg)
_(l5B,xAC)
_(r,l5B)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var fCC=_n('view')
_rz(z,fCC,'class',0,e,s,gg)
var cDC=_mz(z,'free-nav-bar',['bgColor',1,'bind:__l',1,'vueId',2,'vueSlots',3],[],e,s,gg)
var hEC=_mz(z,'free-icon-button',['bind:__l',5,'icon',1,'slot',2,'vueId',3],[],e,s,gg)
_(cDC,hEC)
_(fCC,cDC)
var oFC=_mz(z,'free-list-item',['showRight',-1,'bind:__l',9,'bind:click',1,'cover',2,'coverSize',3,'data-event-opts',4,'title',5,'vueId',6,'vueSlots',7],[],e,s,gg)
_(fCC,oFC)
var cGC=_mz(z,'free-divider',['bind:__l',17,'vueId',1],[],e,s,gg)
_(fCC,cGC)
var oHC=_mz(z,'free-list-item',['showRight',-1,'bind:__l',19,'title',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(fCC,oHC)
var lIC=_mz(z,'free-divider',['bind:__l',23,'vueId',1],[],e,s,gg)
_(fCC,lIC)
var aJC=_mz(z,'free-list-item',['showRight',-1,'bind:__l',25,'title',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(fCC,aJC)
var tKC=_mz(z,'free-list-item',['showRight',-1,'bind:__l',29,'title',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(fCC,tKC)
var eLC=_mz(z,'free-list-item',['showRight',-1,'bind:__l',33,'title',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(fCC,eLC)
var bMC=_mz(z,'free-divider',['bind:__l',37,'vueId',1],[],e,s,gg)
_(fCC,bMC)
var oNC=_mz(z,'free-list-item',['showRight',-1,'bind:__l',39,'title',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(fCC,oNC)
var xOC=_mz(z,'free-list-item',['showRight',-1,'bind:__l',43,'bind:click',1,'data-event-opts',2,'title',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(fCC,xOC)
_(r,fCC)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/tabbar/my/my","pages/find/moments/moments","pages/find/publish/publish","pages/login/login","pages/login/forget","pages/login/register"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"仿微信","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","titleNView":false,"scrollIndicator":"none"},"tabBar":{"color":"#000000","selectedColor":"#08C261","borderStyle":"black","backgroundColor":"#F7F7F7","list":[{"iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/index-select.png","pagePath":"pages/tabbar/index/index","text":"首页"},{"iconPath":"static/tabbar/mail.png","selectedIconPath":"static/tabbar/mail-select.png","pagePath":"pages/tabbar/mail/mail","text":"通讯录"},{"iconPath":"static/tabbar/find.png","selectedIconPath":"static/tabbar/find-select.png","pagePath":"pages/tabbar/find/find","text":"发现"},{"iconPath":"static/tabbar/my.png","selectedIconPath":"static/tabbar/my-select.png","pagePath":"pages/tabbar/my/my","text":"我的"}]},"nvue":{"pages":{"pages/tabbar/index/index.html":{"window":{"usingComponents":{}},"nvue":true},"pages/tabbar/mail/mail.html":{"window":{"usingComponents":{}},"nvue":true},"pages/tabbar/find/find.html":{"window":{"usingComponents":{}},"nvue":true},"pages/chat/chat/chat.html":{"window":{"usingComponents":{}},"nvue":true},"pages/chat/video/video.html":{"window":{"usingComponents":{}},"nvue":true},"pages/chat/chat-set/chat-set.html":{"window":{"usingComponents":{}},"nvue":true},"pages/mail/user-base/user-base.html":{"window":{"usingComponents":{}},"nvue":true},"pages/mail/user-remark-tag/user-remark-tag.html":{"window":{"usingComponents":{}},"nvue":true},"pages/mail/user-tag-set/user-tag-set.html":{"window":{"usingComponents":{}},"nvue":true},"pages/mail/user-moments-auth/user-moments-auth.html":{"window":{"usingComponents":{}},"nvue":true},"pages/mail/send-card/send-card.html":{"window":{"usingComponents":{}},"nvue":true},"pages/mail/mail/mail.html":{"window":{"usingComponents":{}},"nvue":true},"pages/mail/user-report/user-report.html":{"window":{"usingComponents":{}},"nvue":true}},"entryPagePath":"pages/tabbar/index/index"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"仿微信","compilerVersion":"2.4.6","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/free-ui/free-divider.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/free-ui/free-divider.wxml']=$gwx('./components/free-ui/free-divider.wxml');

__wxAppCode__['components/free-ui/free-icon-button.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/free-ui/free-icon-button.wxml']=$gwx('./components/free-ui/free-icon-button.wxml');

__wxAppCode__['components/free-ui/free-list-item.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/free-ui/free-list-item.wxml']=$gwx('./components/free-ui/free-list-item.wxml');

__wxAppCode__['components/free-ui/free-nav-bar.json']={"usingComponents":{"free-icon-button":"/components/free-ui/free-icon-button","free-popup":"/components/free-ui/free-popup"},"component":true};
__wxAppCode__['components/free-ui/free-nav-bar.wxml']=$gwx('./components/free-ui/free-nav-bar.wxml');

__wxAppCode__['components/free-ui/free-popup.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/free-ui/free-popup.wxml']=$gwx('./components/free-ui/free-popup.wxml');

__wxAppCode__['components/im-chat/chatinput.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/im-chat/chatinput.wxml']=$gwx('./components/im-chat/chatinput.wxml');

__wxAppCode__['components/watch-login/watch-button.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/watch-login/watch-button.wxml']=$gwx('./components/watch-login/watch-button.wxml');

__wxAppCode__['components/watch-login/watch-input.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/watch-login/watch-input.wxml']=$gwx('./components/watch-login/watch-input.wxml');

__wxAppCode__['pages/find/moments/moments.json']={"navigationBarTitleText":"发现","enablePullDownRefresh":true,"bounce":"none","titleNView":{"type":"transparent","buttons":[{"background":"rgba(255,255,255,0.2)","color":"#696969","type":"none","fontSrc":"/static/fonts/iconfont.ttf","text":""}]},"usingComponents":{"chat-input":"/components/im-chat/chatinput"}};
__wxAppCode__['pages/find/moments/moments.wxml']=$gwx('./pages/find/moments/moments.wxml');

__wxAppCode__['pages/find/publish/publish.json']={"navigationBarTitleText":"发表","usingComponents":{"free-nav-bar":"/components/free-ui/free-nav-bar"}};
__wxAppCode__['pages/find/publish/publish.wxml']=$gwx('./pages/find/publish/publish.wxml');

__wxAppCode__['pages/login/forget.json']={"usingComponents":{"w-input":"/components/watch-login/watch-input","w-button":"/components/watch-login/watch-button"}};
__wxAppCode__['pages/login/forget.wxml']=$gwx('./pages/login/forget.wxml');

__wxAppCode__['pages/login/login.json']={"usingComponents":{"w-input":"/components/watch-login/watch-input","w-button":"/components/watch-login/watch-button"}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/login/register.json']={"usingComponents":{"w-input":"/components/watch-login/watch-input","w-button":"/components/watch-login/watch-button"}};
__wxAppCode__['pages/login/register.wxml']=$gwx('./pages/login/register.wxml');

__wxAppCode__['pages/tabbar/my/my.json']={"usingComponents":{"free-nav-bar":"/components/free-ui/free-nav-bar","free-icon-button":"/components/free-ui/free-icon-button","free-list-item":"/components/free-ui/free-list-item","free-divider":"/components/free-ui/free-divider"}};
__wxAppCode__['pages/tabbar/my/my.wxml']=$gwx('./pages/tabbar/my/my.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0e96":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("66fd")),u=r(n("1649"));r(n("ba6b"));function r(t){return t&&t.__esModule?t:{default:t}}var i=new u.default({debug:!0}),c={globalData:{JIM:i},onLaunch:function(){var e,n="09970876f33e884a3624335c",u="NkSYvAH3yAw93dqdlto47G9A35xHv4Oa",r=(new Date).getTime();t.request({url:"http://117.83.152.39:8081/interconnect/appUser/getJMKey",header:{token:"e463192ddfad487682638189f64020b9","Content-Type":"application/json"},data:{timestamp:r},success:function(a){e=a.data.result,i.init({appkey:n,random_str:u,signature:e,timestamp:r,flag:1}).onSuccess(function(e){console.log(o("Init-success:"+JSON.stringify(e)," at App.vue:36")),t.$emit("JIMinit",{})}).onFail(function(t){console.log(o("Init-error:"+JSON.stringify(t)," at App.vue:39"))})}});var c=weex.requireModule("dom");c.addRule("fontFace",{fontFamily:"iconfont",src:"url('https://at.alicdn.com/t/font_1587665_h9th94dds3.ttf')"}),this.$store.commit("initRECORD"),console.log(o("App Launch"," at App.vue:52")),t.getSystemInfo({success:function(t){a.default.prototype.StatusBar=t.statusBarHeight,"android"==t.platform?a.default.prototype.CustomBar=t.statusBarHeight+50:a.default.prototype.CustomBar=t.statusBarHeight+45}})},onShow:function(){i.onDisconnect(function(){var e,n="09970876f33e884a3624335c",a="NkSYvAH3yAw93dqdlto47G9A35xHv4Oa",u=(new Date).getTime();t.request({url:"http://117.83.152.39:8081/interconnect/appUser/getJMKey",header:{token:"e463192ddfad487682638189f64020b9","Content-Type":"application/json"},data:{timestamp:u},success:function(r){console.log(o(r," at App.vue:97")),e=r.data.result,console.log(o(e," at App.vue:99")),i.init({appkey:n,random_str:a,signature:e,timestamp:u,flag:1}).onSuccess(function(e){console.log(o("Init-success:"+JSON.stringify(e)," at App.vue:107")),t.$emit("JIMinit",{})}).onFail(function(t){console.log(o("Init-error:"+JSON.stringify(t)," at App.vue:110"))})}})}),console.log(o("App Show"," at App.vue:115"))},onHide:function(){console.log(o("App Hide"," at App.vue:118"))}};e.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},2076:function(t,e,n){"use strict";n.r(e);var o=n("0e96"),a=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=a.a},b5b1:function(t,e,n){},f267:function(t,e,n){"use strict";(function(t){n("68ca"),n("921b");var e=u(n("66fd")),o=u(n("f429")),a=u(n("a57d"));function u(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.prototype.$store=a.default,e.default.config.productionTip=!1,o.default.mpType="app";var c=new e.default(r({store:a.default},o.default));t(c).$mount()}).call(this,n("6e42")["createApp"])},f429:function(t,e,n){"use strict";n.r(e);var o=n("2076");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("f727");var u,r,i=n("2877"),c=Object(i["a"])(o["default"],u,r,!1,null,null,null);e["default"]=c.exports},f727:function(t,e,n){"use strict";var o=n("b5b1"),a=n.n(o);a.a}},[["f267","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, a = t[0], c = t[1], p = t[2], f = 0, l = []; f < a.length; f++) {
      o = a[f], i[o] && l.push(i[o][0]), i[o] = 0;
    }

    for (r in c) {
      Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    }

    s && s(t);

    while (l.length) {
      l.shift()();
    }

    return u.push.apply(u, p || []), n();
  }

  function n() {
    for (var e, t = 0; t < u.length; t++) {
      for (var n = u[t], r = !0, o = 1; o < n.length; o++) {
        var a = n[o];
        0 !== i[a] && (r = !1);
      }

      r && (u.splice(t--, 1), e = c(c.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      u = [];

  function a(e) {
    return c.p + "" + e + ".js";
  }

  function c(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports;
  }

  c.e = function (e) {
    var t = [],
        n = {
      "components/im-chat/chatinput": 1,
      "components/watch-login/watch-button": 1,
      "components/watch-login/watch-input": 1,
      "components/free-ui/free-popup": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "components/free-ui/free-divider": "components/free-ui/free-divider",
        "components/free-ui/free-icon-button": "components/free-ui/free-icon-button",
        "components/free-ui/free-list-item": "components/free-ui/free-list-item",
        "components/free-ui/free-nav-bar": "components/free-ui/free-nav-bar",
        "components/im-chat/chatinput": "components/im-chat/chatinput",
        "components/watch-login/watch-button": "components/watch-login/watch-button",
        "components/watch-login/watch-input": "components/watch-login/watch-input",
        "components/free-ui/free-popup": "components/free-ui/free-popup"
      }[e] || e) + ".wxss", i = c.p + r, u = document.getElementsByTagName("link"), a = 0; a < u.length; a++) {
        var p = u[a],
            f = p.getAttribute("data-href") || p.getAttribute("href");
        if ("stylesheet" === p.rel && (f === r || f === i)) return t();
      }

      var l = document.getElementsByTagName("style");

      for (a = 0; a < l.length; a++) {
        p = l[a], f = p.getAttribute("data-href");
        if (f === r || f === i) return t();
      }

      var s = document.createElement("link");
      s.rel = "stylesheet", s.type = "text/css", s.onload = t, s.onerror = function (t) {
        var r = t && t.target && t.target.src || i,
            u = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        u.request = r, delete o[e], s.parentNode.removeChild(s), n(u);
      }, s.href = i;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(s);
    }).then(function () {
      o[e] = 0;
    }));
    var r = i[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var u = new Promise(function (t, n) {
        r = i[e] = [t, n];
      });
      t.push(r[2] = u);
      var p,
          f = document.createElement("script");
      f.charset = "utf-8", f.timeout = 120, c.nc && f.setAttribute("nonce", c.nc), f.src = a(e), p = function p(t) {
        f.onerror = f.onload = null, clearTimeout(l);
        var n = i[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                u = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            u.type = r, u.request = o, n[1](u);
          }

          i[e] = void 0;
        }
      };
      var l = setTimeout(function () {
        p({
          type: "timeout",
          target: f
        });
      }, 12e4);
      f.onerror = f.onload = p, document.head.appendChild(f);
    }
    return Promise.all(t);
  }, c.m = e, c.c = r, c.d = function (e, t, n) {
    c.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, c.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, c.t = function (e, t) {
    if (1 & t && (e = c(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (c.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      c.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, c.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return c.d(t, "a", t), t;
  }, c.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, c.p = "/", c.oe = function (e) {
    throw console.error(e), e;
  };
  var p = global["webpackJsonp"] = global["webpackJsonp"] || [],
      f = p.push.bind(p);
  p.push = t, p = p.slice();

  for (var l = 0; l < p.length; l++) {
    t(p[l]);
  }

  var s = f;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(o){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),i="";if(o.length>1){var s=o.pop();i=o.join("---COMMA---"),0===s.indexOf(" at ")?i+=s:i+="---COMMA---"+s}else i=o[0];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},"10fd":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/tabbar/my/my":{},"pages/find/moments/moments":{navigationBarTitleText:"发现",enablePullDownRefresh:!0,bounce:"none",titleNView:{type:"transparent",buttons:[{background:"rgba(255,255,255,0.2)",color:"#696969",type:"none",fontSrc:"/static/fonts/iconfont.ttf",text:""}]}},"pages/find/publish/publish":{navigationBarTitleText:"发表"},"pages/login/login":{},"pages/login/forget":{},"pages/login/register":{}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"仿微信",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8",titleNView:!1,scrollIndicator:"none"}};e.default=r},1649:function(t,e,n){"use strict";(function(e){!function(e,n){t.exports=n()}(window,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=17)}([function(t,e,n){(function(r){function o(){try{return e.storage.debug}catch(t){}if(void 0!==r&&"env"in r)return r.env.DEBUG}(e=t.exports=n(25)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},e.formatArgs=function(){var t=arguments,n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),!n)return t;var r="color: "+this.color;t=[t[0],r,"color: inherit"].concat(Array.prototype.slice.call(t,1));var o=0,i=0;return t[0].replace(/%[a-z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,r),t},e.save=function(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}},e.load=o,e.useColors=function(){return"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31},e.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(t){}}(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},e.enable(o())}).call(this,n(24))},function(t,e,n){function r(t){if(t)return function(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}(t)}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,o=0;o<n.length;o++)if((r=n[o])===e||r.fn===e){n.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n)for(var r=0,o=(n=n.slice(0)).length;r<o;++r)n[r].apply(this,e);return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,n){t.exports=n(31)},function(t,e,n){function r(){}function o(t){var n="",r=!1;return n+=t.type,e.BINARY_EVENT!=t.type&&e.BINARY_ACK!=t.type||(n+=t.attachments,n+="-"),t.nsp&&"/"!=t.nsp&&(r=!0,n+=t.nsp),null!=t.id&&(r&&(n+=",",r=!1),n+=t.id),null!=t.data&&(r&&(n+=","),n+=JSON.stringify(t.data)),u("encoded %j as %s",t,n),n}function i(){this.reconstructor=null}function s(t){var n={},r=0;if(n.type=Number(t.charAt(0)),null==e.types[n.type])return c();if(e.BINARY_EVENT==n.type||e.BINARY_ACK==n.type){for(var o="";"-"!=t.charAt(++r)&&(o+=t.charAt(r),r!=t.length););if(o!=Number(o)||"-"!=t.charAt(r))throw new Error("Illegal attachments");n.attachments=Number(o)}if("/"==t.charAt(r+1))for(n.nsp="";++r;){if(","==(s=t.charAt(r)))break;if(n.nsp+=s,r==t.length)break}else n.nsp="/";var i=t.charAt(r+1);if(""!==i&&Number(i)==i){for(n.id="";++r;){var s;if(null==(s=t.charAt(r))||Number(s)!=s){--r;break}if(n.id+=t.charAt(r),r==t.length)break}n.id=Number(n.id)}return t.charAt(++r)&&(n=function(t,e){try{t.data=JSON.parse(e)}catch(t){return c()}return t}(n,t.substr(r))),u("decoded %s as %j",t,n),n}function a(t){this.reconPack=t,this.buffers=[]}function c(t){return{type:e.ERROR,data:"parser error"}}var u=n(0)("socket.io-parser"),p=n(27),f=n(28),h=n(8);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=r,e.Decoder=i,r.prototype.encode=function(t,n){u("encoding packet %j",t),e.BINARY_EVENT==t.type||e.BINARY_ACK==t.type?function(t,e){f.removeBlobs(t,function(t){var n=f.deconstructPacket(t),r=o(n.packet),i=n.buffers;i.unshift(r),e(i)})}(t,n):n([o(t)])},p(i.prototype),i.prototype.add=function(t){var n;if("string"==typeof t)n=s(t),e.BINARY_EVENT==n.type||e.BINARY_ACK==n.type?(this.reconstructor=new a(n),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",n)):this.emit("decoded",n);else{if(!h(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");(n=this.reconstructor.takeBinaryData(t))&&(this.reconstructor=null,this.emit("decoded",n))}},i.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},a.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length==this.reconPack.attachments){var e=f.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},a.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports={SDK_VERSION:"2.6.0",WSS_ADDRESS:"wss://ws.im.jiguang.cn",UPLOAD_FILE:"https://sdk.im.jiguang.cn/resource",ALLOW_MSG_TYPE:["text","image","file","location","custom"],LOGIN_OUT_EVENT:[1,2],FROM_PLATFORM:"x",ACK_TIMEOUT:5e3,RESP_TIMEOUT:3e4,RETRY_TIMES:5,SYNC_INTERVAL:15e4,RECEIPT_REPORT_INTERVAL:2e3,RECEIPT_REPORT_MAX_SIZE:50,EVENT_KEY:"eve-k-",CONVERSATION_KEY:"conversations-",SYNC_TYPE_OPEN:1,SYNC_TYPE_CLOSE:0,FRIEND_INVITE:1,FRIEND_INVITED:2,PLAT_CHANNEL:"w",EVENTS:{ACK:"ack",INIT:"c_init",LOGIN:"login",REGISTER:"register",GET_USER_INFO:"get_across_user_info",GET_ACROSS_USER_INFO:"get_across_user_info",S_SINGLE_TEXT:"s_across_single_text",S_SINGLE_TEXT_:"s_single_text",MSG_SYNC:"msg_sync",MSG_RECV:"msg_recv",MSG_RECV_V2:"msg_recv_v2",SEND_GROUP_MSG:"send_group_msg",CREATE_GROUP:"create_group",GET_GROUPS_LIST:"get_groups_list",GET_GROUP_INFO:"get_group_info",ADD_GROUP_MEMBER:"add_group_member",ADD_ACROSS_GROUP_MEMBER:"add_across_group_member",DEL_GROUP_MEMBER:"del_group_member",DEL_ACROSS_GROUP_MEMBER:"del_across_group_member",GET_GROUP_MEMBERS:"get_group_members",UPDATE_GROUP_INFO:"update_group_info",EXIT_GROUP:"exit_group",EVENT_NOTIFICATION:"event_notification",GET_CONVERSATIONS:"get_conversations",GET_UPLOAD_TOKEN:"get_upload_token",NO_DISTURB:"no_disturb",ADD_MSG_NO_DISTURB_SINGLE:"add_msg_no_disturb_single",DELETE_MSG_NO_DISTURB_SINGLE:"delete_msg_no_disturb_single",ADD_MSG_NO_DISTURB_GROUP:"add_msg_no_disturb_group",DELETE_MSG_NO_DISTURB_GROUP:"delete_msg_no_disturb_group",ADD_MSG_NO_DISTURB_GLOBAL:"add_msg_no_disturb_global",DELETE_MSG_NO_DISTURB_GLOBAL:"delete_msg_no_disturb_global",DISCONNECT:"disconnect",GET_BLACK_LIST:"get_black_list",ADD_BLACK_LIST:"add_black_list",DEL_BLACK_LIST:"del_black_list",UPDATE_SELF_INFO:"update_user_inf",UPDATE_SELF_PWD:"update_user_pwd",ADD_MSG_SHIELD_GROUP:"add_msg_shield_group",DEL_MSG_SHIELD_GROUP:"del_msg_shield_group",ADD_FRIEND:"add_friend",DEL_FRIEND:"del_friend",UPDATE_FRIEND_MEMO:"update_friend_memo",GET_FRIEND_LIST:"get_friend_list",SYNC_CHECK:"sync_check",SYNC_CONVERSATION:"sync_conversation",SYNC_CONVERSATION_ACK:"sync_conversation_ack",MSG_RETRACT:"msg_retract",GET_RESOURCE:"get_resource",LIST_SHIELD_GROUP:"list_shield_group",SYNC_EVENT_CHECK:"sync_event_check",SYNC_EVENT:"sync_event",SYNC_EVENT_ACK:"sync_event_ack",RECEIPT_REPORT:"receipt_report",SYNC_RECEIPT_ACK:"sync_receipt_ack",SYNC_RECEIPT:"sync_receipt",RECEIPT_CHANGE:"receipt_change",UNREAD_GROUP_COUNT:"unread_group_count",UNREAD_SINGLE_COUNT:"unread_single_count",MSG_UNREAD_LIST:"msg_unread_list",TRANS_MSG_SINGLE:"trans_msg_single",TRANS_MSG_GROUP:"trans_msg_group",TRANS_MSG_PLATFORM:"trans_msg_platform",TRANS_MSG_REC:"trans_msg_rec",ADMIN_ADD_GROUP_MEMBER:"admin_add_group_member",APPLY_JOIN_GROUP:"apply_join_group",ROOM_LIST:"room_list",ROOM_LIST_SELF:"room_list_self",JOIN_ROOM:"join_room",EXIT_ROOM:"exit_room",ROOM_INFO:"room_info",SEND_ROOM_MSG:"send_room_msg",ROOM_MSG_SYNC:"room_msg_sync",GROUP_MEM_SILENCE:"group_mem_silence",ROOM_MSG_SYNC_HIS:"room_msg_sync_his",DISSOLVE_GROUP:"dissolve_group",ADD_GROUP_KEEPER:"add_group_keeper",DEL_GROUP_KEEPER:"del_group_keeper",CHANGE_GROUP_ADMIN:"change_group_admin",PUBLIC_GROUP_LIST:"public_group_list"}}},function(t,e){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");-1!=o&&-1!=i&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=n.exec(t||""),a={},c=14;c--;)a[r[c]]=s[c]||"";return-1!=o&&-1!=i&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},function(t,e,n){(function(e){t.exports=function(t){return e.Buffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer}}).call(this,n(4))},function(t,e,n){function r(t,e){return this instanceof r?(t&&"object"==typeof t&&(e=t,t=void 0),(e=e||{}).path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(!1!==e.reconnection),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||2e3),this.reconnectionDelayMax(e.reconnectionDelayMax||2e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new h({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?3e3:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[],this.encoder=new a.Encoder,this.decoder=new a.Decoder,this.autoConnect=!1!==e.autoConnect,void(this.autoConnect&&this.open())):new r(t,e)}var o=n(29),i=n(14),s=n(1),a=n(3),c=n(15),u=n(16),p=n(0)("socket.io-client:manager"),f=n(13),h=n(38),l=Object.prototype.hasOwnProperty;t.exports=r,r.prototype.emitAll=function(){for(var t in this.emit.apply(this,arguments),this.nsps)l.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},r.prototype.updateSocketIds=function(){for(var t in this.nsps)l.call(this.nsps,t)&&(this.nsps[t].id=this.engine.id)},s(r.prototype),r.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},r.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},r.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},r.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},r.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},r.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},r.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},r.prototype.open=r.prototype.connect=function(t,e){if(p("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;p("opening %s",this.uri),this.engine=o(this.uri,this.opts);var n=this.engine,r=this;this.readyState="opening",this.skipReconnect=!1;var i=c(n,"open",function(){r.onopen(),t&&t()}),s=c(n,"error",function(e){if(p("connect_error"),r.cleanup(),r.readyState="closed",r.emitAll("connect_error",e),t){var n=new Error("Connection error");n.data=e,t(n)}else r.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;p("connect attempt will timeout after %d",a);var u=setTimeout(function(){p("connect attempt timed out after %d",a),i.destroy(),n.close(),n.emit("error","timeout"),r.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(u)}})}return this.subs.push(i),this.subs.push(s),this},r.prototype.onopen=function(){p("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(c(t,"data",u(this,"ondata"))),this.subs.push(c(t,"ping",u(this,"onping"))),this.subs.push(c(t,"pong",u(this,"onpong"))),this.subs.push(c(t,"error",u(this,"onerror"))),this.subs.push(c(t,"close",u(this,"onclose"))),this.subs.push(c(this.decoder,"decoded",u(this,"ondecoded")))},r.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},r.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},r.prototype.ondata=function(t){this.decoder.add(t)},r.prototype.ondecoded=function(t){this.emit("packet",t)},r.prototype.onerror=function(t){p("error",t),this.emitAll("error",t)},r.prototype.socket=function(t,e){function n(){~f(o.connecting,r)||o.connecting.push(r)}var r=this.nsps[t];if(!r){r=new i(this,t,e),this.nsps[t]=r;var o=this;r.on("connecting",n),r.on("connect",function(){r.id=o.engine.id}),this.autoConnect&&n()}return r},r.prototype.destroy=function(t){var e=f(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},r.prototype.packet=function(t){p("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(n){for(var r=0;r<n.length;r++)e.engine.write(n[r],t.options);e.encoding=!1,e.processPacketQueue()}))},r.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},r.prototype.cleanup=function(){p("cleanup");for(var t=this.subs.length,e=0;e<t;e++)this.subs.shift().destroy();this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},r.prototype.close=r.prototype.disconnect=function(){p("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},r.prototype.onclose=function(t){p("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},r.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)p("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();p("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var n=setTimeout(function(){t.skipReconnect||(p("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(p("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(p("reconnect success"),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(n)}})}},r.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,n){function r(t){t&&t.forceBase64&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,o.call(this,t)}var o=n(11),i=n(2),s=n(12),a=n(33),c=n(34),u=n(0)("engine.io-client:websocket");t.exports=r,a(r,o),r.prototype.name="wx",r.prototype.supportsBinary=!0,r.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e={agent:this.agent,perMessageDeflate:this.perMessageDeflate};e.pfx=this.pfx,e.key=this.key,e.passphrase=this.passphrase,e.cert=this.cert,e.ca=this.ca,e.ciphers=this.ciphers,e.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(e.headers=this.extraHeaders),this.localAddress&&(e.localAddress=this.localAddress),this.isOk=!1,this.ws=wx,this.ws.connectSocket({url:t}),void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},r.prototype.addEventListeners=function(){var t=this;this.ws.onSocketOpen(function(){t.onOpen(),t.isOk=!0}),this.ws.onSocketClose(function(){t.onClose(),t.isOk=!1}),this.ws.onSocketMessage(function(e){t.onData(e.data)}),this.ws.onSocketError(function(e){t.onError("websocket error",e)})},r.prototype.write=function(t){var e=this;this.writable=!1;for(var n=t.length,r=0,o=n;r<o;r++)!function(t){i.encodePacket(t,e.supportsBinary,function(t){try{e.ws.sendSocketMessage({data:t})}catch(t){u("websocket closed before onclose event")}--n||(e.emit("flush"),setTimeout(function(){e.writable=!0,e.emit("drain")},0))})}(t[r])},r.prototype.onClose=function(){o.prototype.onClose.call(this)},r.prototype.doClose=function(){void 0!==this.ws&&this.ws.closeSocket()},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",n="";return this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(n=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||(t.b64=1),(t=s.encode(t)).length&&(t="?"+t),e+"://"+(-1!==this.hostname.indexOf(":")?"["+this.hostname+"]":this.hostname)+n+this.path+t},r.prototype.check=function(){return!this.isOk}},function(t,e,n){function r(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=n(2),i=n(1);t.exports=r,i(r.prototype),r.prototype.onError=function(t,e){var n=new Error(t);return n.type="TransportError",n.description=e,this.emit("error",n),this},r.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},r.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},r.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},r.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},r.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},r.prototype.onPacket=function(t){this.emit("packet",t)},r.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e){e.encode=function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e},e.decode=function(t){for(var e={},n=t.split("&"),r=0,o=n.length;r<o;r++){var i=n[r].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}},function(t,e,n){function r(t,e,n){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,n&&n.query&&(this.query=n.query),this.io.autoConnect&&this.open()}var o=n(3),i=n(1),s=n(36),a=n(15),c=n(16),u=n(0)("socket.io-client:socket"),p=n(37);t.exports=r;var f={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},h=i.prototype.emit;i(r.prototype),r.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[a(t,"open",c(this,"onopen")),a(t,"packet",c(this,"onpacket")),a(t,"close",c(this,"onclose"))]}},r.prototype.open=r.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},r.prototype.send=function(){var t=s(arguments);return t.unshift("message"),this.emit.apply(this,t),this},r.prototype.emit=function(t){if(f.hasOwnProperty(t))return h.apply(this,arguments),this;var e=s(arguments),n=o.EVENT,r={type:n,data:e,options:{}};return r.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(u("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),r.id=this.ids++),this.connected?this.packet(r):this.sendBuffer.push(r),delete this.flags,this},r.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},r.prototype.onopen=function(){u("transport is open - connecting"),"/"!==this.nsp&&(this.query?this.packet({type:o.CONNECT,query:this.query}):this.packet({type:o.CONNECT}))},r.prototype.onclose=function(t){u("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},r.prototype.onpacket=function(t){if(t.nsp===this.nsp)switch(t.type){case o.CONNECT:this.onconnect();break;case o.EVENT:case o.BINARY_EVENT:this.onevent(t);break;case o.ACK:case o.BINARY_ACK:this.onack(t);break;case o.DISCONNECT:this.ondisconnect();break;case o.ERROR:this.emit("error",t.data)}},r.prototype.onevent=function(t){var e=t.data||[];u("emitting event %j",e),null!=t.id&&(u("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?h.apply(this,e):this.receiveBuffer.push(e)},r.prototype.ack=function(t){var e=this,n=!1;return function(){if(!n){n=!0;var r=s(arguments);u("sending ack %j",r);var i=p(r)?o.BINARY_ACK:o.ACK;e.packet({type:i,id:t,data:r})}}},r.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e?(u("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):u("bad ack %s",t.id)},r.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},r.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)h.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},r.prototype.ondisconnect=function(){u("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},r.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},r.prototype.close=r.prototype.disconnect=function(){return this.connected&&(u("performing disconnect (%s)",this.nsp),this.packet({type:o.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},r.prototype.compress=function(t){return this.flags=this.flags||{},this.flags.compress=t,this}},function(t,e){t.exports=function(t,e,n){return t.on(e,n),{destroy:function(){t.removeListener(e,n)}}}},function(t,e){var n=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var r=n.call(arguments,2);return function(){return e.apply(t,r.concat(n.call(arguments)))}}},function(t,e,n){t.exports=n(18)},function(t,e,n){var r=n(19);t.exports=r},function(t,n,r){var o=r(20),i=r(21),s=r(5),a=r(39),c=r(40),u=r(41),p=r(42)(),f=r(43),h=function(t){var e=t||{};this.opts={address:e.address?e.address:s.WSS_ADDRESS,debug:!!e.debug},this.channel=new i(this.opts),this.syncTask=0,this.msgReceipTask=0};h.prototype.init=function(t){var e=this;return e.autoDiscon=!0,t.flag!==s.SYNC_TYPE_OPEN&&t.flag!==s.SYNC_TYPE_CLOSE||(e.channel.sync_type=t.flag),t.fromPlatForm=s.FROM_PLATFORM,this.channel.init(this.channel.opts),new a(this.channel).setEvent(s.EVENTS.INIT).setData(t).send().addHook(function(n,r){e.current_appkey=t.appkey,r&&r(n)})},h.prototype.loginOut=function(){if(this.current_user){this.autoDiscon=!1,this.channel.client.close();var t=this.channel.dataCache;for(var e in t)t[e].cleanAckTimeout(),t[e].cleanRespTimeout();this.current_user=null,this.current_appkey=null}},h.prototype.login=function(t){this.__checkInit(),t.is_md5||(t.password=p(t.password)),t.version=s.SDK_VERSION;var e=this,n=new a(this.channel).setEvent(s.EVENTS.LOGIN).setData(t).addHook(function(n,r){e.current_user=t.username,f.StorageUtils.removeItems(e.current_user),e.channel.sync_key=0,e.channel.sync_event_key=0,e.channel.msg_receipt_key=0,e.channel.ses_key=s.SESSION_KEY+e.current_appkey+"-"+e.current_user,e.channel.conversations_key=s.CONVERSATION_KEY+e.current_appkey+"-"+e.current_user,e.channel.event_key=s.EVENT_KEY+e.current_appkey+"-"+e.current_user,e._syncCheckTask(),e._receiptReportTask(),e._initConversation(),e.lastMsgs={},e.channel.client.removeListener(s.EVENTS.LOGIN),e._addEventListen(),e.firstLogin=!1,r&&r(n)});return setTimeout(function(){n.send()},500),n},h.prototype._initConversation=function(){var t=this,e=f.StorageUtils.getItem(t.channel.conversations_key);null!==e&&""!==e||(e=JSON.stringify({}),f.StorageUtils.addItem(t.channel.conversations_key,e)),t.conversations=JSON.parse(e)},h.prototype._receiptReportTask=function(){var t=this;t.report=[],t.msgReceipTask=setInterval(function(){t._receiptReport()},s.RECEIPT_REPORT_INTERVAL)},h.prototype._syncCheckTask=function(){var t=this,e=f.StorageUtils.getItem(t.channel.event_key);null!=e&&(t.channel.sync_event_key=e),t._syncCheck({sync_key:t.channel.sync_key,sync_type:t.channel.sync_type,sync_event_key:t.channel.sync_event_key,msg_receipt_key:t.channel.msg_receipt_key}).onSuccess(function(e){e&&0===e.code&&(t.channel.sync_key=e.sync_key,t.channel.sync_type=e.sync_type,t.channel.sync_event_key=e.sync_event_key,t.channel.msg_receipt_key=e.msg_receipt_key,f.StorageUtils.addItem(t.channel.event_key,e.sync_event_key))}),t.syncTask=setInterval(function(){t._syncCheck({sync_key:t.channel.sync_key,sync_type:t.channel.sync_type,sync_event_key:t.channel.sync_event_key,msg_receipt_key:t.channel.msg_receipt_key}).onSuccess(function(e){e&&0===e.code&&(t.channel.sync_key=e.sync_key,t.channel.sync_type=e.sync_type,t.channel.sync_event_key=e.sync_event_key,t.channel.msg_receipt_key=e.msg_receipt_key,f.StorageUtils.addItem(t.channel.event_key,e.sync_event_key))})},s.SYNC_INTERVAL)},h.prototype._syncCheck=function(t){return new a(this.channel).setEvent(s.EVENTS.SYNC_CHECK).setData(t).send()},h.prototype.register=function(t){return this.__checkInit(),t.is_md5||(t.password=p(t.password)),new a(this.channel).setEvent(s.EVENTS.REGISTER).setData(t).send()},h.prototype.getUserInfo=function(t){return this.__checkLogin(),f.StringUtils.isBlack(t.appkey)&&(t.appkey=this.current_appkey),new a(this.channel).setEvent(s.EVENTS.GET_ACROSS_USER_INFO).setData(t).send()},h.prototype.updateSelfInfo=function(t){return this.__checkLogin(),f.StringUtils.isBlack(t.avatar)||delete t.avatar,new a(this.channel).setEvent(s.EVENTS.UPDATE_SELF_INFO).setData(t).send()},h.prototype.updateSelfAvatar=function(t){this.__checkLogin();var e=new a(this.channel).setEvent(s.EVENTS.UPDATE_SELF_INFO);return this.__uploadFile({appkey:this.current_appkey,username:this.current_user,file:t.avatar,type:"image"},function(t,n){return t?t.is_timeout?e.timeout&&e.timeout(t.data):e.fail&&e.fail(t.data):void e.setData({avatar:n.media_id}).send()}),e},h.prototype.updateSelfPwd=function(t){return this.__checkLogin(),t.is_md5||(t.old_pwd=p(t.old_pwd),t.new_pwd=p(t.new_pwd)),new a(this.channel).setEvent(s.EVENTS.UPDATE_SELF_PWD).setData(t).send()},h.prototype.getConversation=function(){var t=this;return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.GET_CONVERSATIONS).setData({}).send().onUserInfoGet(function(e,n){t[e]=n}).addHook(function(e,n){e.conversations.forEach(function(e){var n;3===e.type?(t[e.key]=e.utime,delete e.utime,n=e.appkey+e.username):(n=e.key,e.gid=e.key),t.conversations[n]?(t.conversations[n].extras?e.extras=t.conversations[n].extras:e.extras={},e.unread_msg_count=t.conversations[n].unread_msg_count):(e.extras={},e.unread_msg_count=0,t.conversations[n]={},t.conversations[n].extras={},t.conversations[n].unread_msg_count=0,t.conversations[n].msg_time=[])}),f.StorageUtils.addItem(t.channel.conversations_key,JSON.stringify(t.conversations)),n&&n(e)})},h.prototype.resetUnreadCount=function(t){this.__checkLogin();var e,n=this;t.gid?e=String(t.gid):(t.appkey||(t.appkey=n.current_appkey),e=t.appkey+t.username),n.conversations[e]=void 0===n.conversations[e]?{}:n.conversations[e],t.gid?n._updateGroupUnreadCount({gid:t.gid}):n._updateSingleUnreadCount({appkey:t.appkey,username:t.username}),n.conversations[e].unread_msg_count=0,n.conversations[e].msg_time=[];var r=(new Date).getTime();n.lastMsgs[e]&&(r=n.lastMsgs[e].last_msg_time),n.conversations[e].recent_time=r,n.current_conversation=e,f.StorageUtils.addItem(n.channel.conversations_key,JSON.stringify(n.conversations))},h.prototype.getUnreadMsgCnt=function(t){this.__checkLogin();var e,n=this;return t.gid?e=String(t.gid):(t.appkey||(t.appkey=n.current_appkey),e=t.appkey+t.username),n.conversations[e]||(n.conversations[e]={}),n.conversations[e]=void 0===n.conversations[e]?{}:n.conversations[e],n.conversations[e].unread_msg_count?n.conversations[e].unread_msg_count:0},h.prototype.msgRetract=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.MSG_RETRACT).setData(t).send()},h.prototype.sendSingleMsg=function(t){return this.__checkLogin(),this.__sendMsg({type:"single",target_id:t.target_username,target_name:t.target_nickname,content:t.content,extras:t.extras,msg_body:t.msg_body,appkey:t.appkey,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},h.prototype.sendGroupMsg=function(t){return this.__checkLogin(),this.__sendMsg({type:"group",target_id:t.target_gid,target_name:t.target_gname,content:t.content,extras:t.extras,msg_body:t.msg_body,at_list:t.at_list,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},h.prototype.sendSinglePic=function(t){return this.__checkLogin(),this.__sendPic({type:"single",target_id:t.target_username,target_name:t.target_nickname,file:t.image,msg_body:t.msg_body,extras:t.extras,appkey:t.appkey,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},h.prototype.sendGroupPic=function(t){return this.__checkLogin(),this.__sendPic({type:"group",target_id:t.target_gid,target_name:t.target_gname,file:t.image,msg_body:t.msg_body,extras:t.extras,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},h.prototype.sendSingleFile=function(t){return this.__sendVideoOrFile({type:"single",target_id:t.target_username,target_name:t.target_nickname,file:t.file,msg_body:t.msg_body,extras:t.extras,appkey:t.appkey,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt},"file")},h.prototype.sendGroupFile=function(t){return this.__sendVideoOrFile({type:"group",target_id:t.target_gid,target_name:t.target_gname,file:t.file,msg_body:t.msg_body,extras:t.extras,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt},"file")},h.prototype.sendSingleVedio=function(t){return this.__sendVideoOrFile({type:"single",target_id:t.target_username,target_name:t.target_nickname,file:t.file,msg_body:t.msg_body,extras:t.extras,appkey:t.appkey,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt},"video")},h.prototype.sendGroupVedio=function(t){return this.__sendVideoOrFile({type:"group",target_id:t.target_gid,target_name:t.target_gname,file:t.file,msg_body:t.msg_body,extras:t.extras,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt},"video")},h.prototype.sendSingleLocation=function(t){return this.__checkLogin(),this.__sendLocation({type:"single",target_id:t.target_username,target_name:t.target_nickname,latitude:t.latitude,longitude:t.longitude,scale:t.scale,label:t.label,msg_body:t.msg_body,extras:t.extras,appkey:t.appkey,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},h.prototype.sendGroupLocation=function(t){return this.__checkLogin(),this.__sendLocation({type:"group",target_id:t.target_gid,target_name:t.target_gname,latitude:t.latitude,longitude:t.longitude,scale:t.scale,label:t.label,msg_body:t.msg_body,extras:t.extras,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},h.prototype.sendSingleCustom=function(t){return this.__checkLogin(),this.__sendCustom({type:"single",target_id:t.target_username,target_name:t.target_nickname,custom:t.custom,extras:t.extras,msg_body:t.msg_body,appkey:t.appkey,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},h.prototype.sendGroupCustom=function(t){return this.__checkLogin(),this.__sendCustom({type:"group",target_id:t.target_gid,target_name:t.target_gname,custom:t.custom,msg_body:t.msg_body,extras:t.extras,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},h.prototype.createGroup=function(t){this.__checkLogin();var e=new a(this.channel).setEvent(s.EVENTS.CREATE_GROUP);return t.avatar?this.__uploadFile({appkey:this.current_appkey,username:this.current_user,file:t.avatar,type:"image"},function(n,r){return n?n.is_timeout?e.timeout&&e.timeout(n.data):e.fail&&e.fail(n.data):(delete t.avatar,t.media_id=r.media_id,void e.setData(t).send())}):e.setData(t).send(),e},h.prototype.exitGroup=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.EXIT_GROUP).setData(t).send()},h.prototype.getGroups=function(){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.GET_GROUPS_LIST).setData({}).send().addHook(function(t,e){t.group_list.forEach(function(t){t.group_type=t.flag,delete t.flag}),e&&e(t)})},h.prototype.getGroupInfo=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.GET_GROUP_INFO).setData(t).send().addHook(function(t,e){t.group_info.group_type=t.group_info.flag,delete t.group_info.flag,e&&e(t)})},h.prototype.updateGroupInfo=function(t){this.__checkLogin();var e=new a(this.channel).setEvent(s.EVENTS.UPDATE_GROUP_INFO);return t.avatar?this.__uploadFile({appkey:this.current_appkey,username:this.current_user,file:t.avatar,type:"image"},function(n,r){return n?n.is_timeout?e.timeout&&e.timeout(n.data):e.fail&&e.fail(n.data):(delete t.avatar,t.media_id=r.media_id,void e.setData(t).send())}):e.setData(t).send(),e},h.prototype.getGroupMembers=function(t){var e=this;return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.GET_GROUP_MEMBERS).setData(t).send().onUserInfoGet(function(t,n){e[t]=n})},h.prototype.addGroupMembers=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.ADD_ACROSS_GROUP_MEMBER).setData(t).send()},h.prototype.delGroupMembers=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.DEL_ACROSS_GROUP_MEMBER).setData(t).send()},h.prototype.getNoDisturb=function(){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.NO_DISTURB).setData({version:0}).send().addHook(function(t,e){t.no_disturb.groups.forEach(function(t){t.group_type=t.flag,delete t.flag}),e&&e(t)})},h.prototype.addSingleNoDisturb=function(t){return this.__checkLogin(),t.version=0,new a(this.channel).setEvent(s.EVENTS.ADD_MSG_NO_DISTURB_SINGLE).setData(t).send()},h.prototype.delSingleNoDisturb=function(t){return this.__checkLogin(),t.version=0,new a(this.channel).setEvent(s.EVENTS.DELETE_MSG_NO_DISTURB_SINGLE).setData(t).send()},h.prototype.addGroupNoDisturb=function(t){return this.__checkLogin(),t.version=0,new a(this.channel).setEvent(s.EVENTS.ADD_MSG_NO_DISTURB_GROUP).setData(t).send()},h.prototype.delGroupNoDisturb=function(t){return this.__checkLogin(),t.version=0,new a(this.channel).setEvent(s.EVENTS.DELETE_MSG_NO_DISTURB_GROUP).setData(t).send()},h.prototype.addGlobalNoDisturb=function(){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.ADD_MSG_NO_DISTURB_GLOBAL).setData({version:0}).send()},h.prototype.delGlobalNoDisturb=function(){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.DELETE_MSG_NO_DISTURB_GLOBAL).setData({version:0}).send()},h.prototype.getBlacks=function(){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.GET_BLACK_LIST).setData({version:0}).send()},h.prototype.addSingleBlacks=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.ADD_BLACK_LIST).setData(t).send()},h.prototype.delSingleBlacks=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.DEL_BLACK_LIST).setData(t).send()},h.prototype.getFriendList=function(){var t=this;return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.GET_FRIEND_LIST).setData({}).send().onUserInfoGet(function(e,n){t[e]=n})},h.prototype.addFriend=function(t){return this.__checkLogin(),t.from_type=s.FRIEND_INVITE,new a(this.channel).setEvent(s.EVENTS.ADD_FRIEND).setData(t).send()},h.prototype.acceptFriend=function(t){return this.__checkLogin(),t.why="yes",t.from_type=s.FRIEND_INVITED,new a(this.channel).setEvent(s.EVENTS.ADD_FRIEND).setData(t).send()},h.prototype.declineFriend=function(t){return this.__checkLogin(),t.why&&""!=t.why.trim()||(t.why="no"),t.from_type=s.FRIEND_INVITED,new a(this.channel).setEvent(s.EVENTS.ADD_FRIEND).setData(t).send()},h.prototype.delFriend=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.DEL_FRIEND).setData(t).send()},h.prototype.updateFriendMemo=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.UPDATE_FRIEND_MEMO).setData(t).send()},h.prototype.addGroupShield=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.ADD_MSG_SHIELD_GROUP).setData(t).send()},h.prototype.delGroupShield=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.DEL_MSG_SHIELD_GROUP).setData(t).send()},h.prototype.groupShieldList=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.LIST_SHIELD_GROUP).setData(t).send().addHook(function(t,e){t.groups.forEach(function(t){t.group_type=t.flag,delete t.flag}),e&&e(t)})},h.prototype.getResource=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.GET_RESOURCE).setData(t).send()},h.prototype._updateGroupUnreadCount=function(t){this.__checkLogin(),t.type=4,new a(this.channel).setEvent(s.EVENTS.UNREAD_GROUP_COUNT).setData(t).send()},h.prototype._updateSingleUnreadCount=function(t){this.__checkLogin(),t.type=3,new a(this.channel).setEvent(s.EVENTS.UNREAD_SINGLE_COUNT).setData(t).send()},h.prototype.msgUnreadList=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.MSG_UNREAD_LIST).setData(t).send()},h.prototype.addGroupReceiptReport=function(t){this.__checkLogin();var n=this;if(t.msg_ids instanceof Array&&0!==t.msg_ids.length){t.key=t.gid,t.type=4;var r=new c(t);return n.report.push(r),setTimeout(function(){n._checkReportSize()>=s.RECEIPT_REPORT_MAX_SIZE&&n._receiptReport()},50),r}console.error(e("msg_ids is not Array type or msg_ids size=0"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"))},h.prototype.addSingleReceiptReport=function(t){this.__checkLogin();var n=this;if(t.msg_ids instanceof Array&&0!==t.msg_ids.length){t.appkey||(t.appkey=n.current_appkey),t.type=3,t.key=t.appkey+t.username;var r=new c(t);return n.report.push(r),setTimeout(function(){n._checkReportSize()>=s.RECEIPT_REPORT_MAX_SIZE&&n._receiptReport()},50),r}console.error(e("msg_ids is not Array type or msg_ids size=0"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"))},h.prototype._checkReportSize=function(){var t=0;return this.report.forEach(function(e){t+=e.args.msg_ids.length}),t},h.prototype.transSingleMsg=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.TRANS_MSG_SINGLE).setData(t).send()},h.prototype.transGroupMsg=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.TRANS_MSG_GROUP).setData(t).send()},h.prototype.transPlatMsg=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.TRANS_MSG_PLATFORM).setData(t).send()},h.prototype.updateConversation=function(t){this.__checkLogin();var e,n=this;t.appkey||(t.appkey=n.current_appkey),t.gid?e=t.gid:t.username&&(e=t.appkey+t.username),e&&t.extras&&(n.conversations[e]||(n.conversations[e]={}),n.conversations[e].extras=t.extras),f.StorageUtils.addItem(n.channel.conversations_key,JSON.stringify(n.conversations))},h.prototype.addGroupMemberResp=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.ADMIN_ADD_GROUP_MEMBER).setData(t).send()},h.prototype.joinGroup=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.APPLY_JOIN_GROUP).setData(t).send()},h.prototype.getAppkeyChatrooms=function(t){return this.__checkLogin(),!t&&(t={}),new a(this.channel).setEvent(s.EVENTS.ROOM_LIST).setData(t).send().addHook(function(t,e){t.result.rooms.forEach(function(t){f.Cache.rooms[t.id]=t}),e&&e(t)})},h.prototype.getSelfChatrooms=function(){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.ROOM_LIST_SELF).setData({}).send().addHook(function(t,e){t.chat_rooms.forEach(function(t){f.Cache.rooms[t.id]=t}),e&&e(t)})},h.prototype.getChatroomInfo=function(t){this.__checkLogin();var e=new a(this.channel);return f.Cache.rooms[t.id]?setTimeout(function(){var n={code:0,message:"success"};n.info=f.Cache.rooms[t.id],e.cleanRespTimeout(),e.success&&e.success(n)},100):e.setEvent(s.EVENTS.ROOM_INFO).setData(t).send().addHook(function(t,e){f.Cache.rooms[t.info.id]=t.info,e&&e(t)}),e},h.prototype.enterChatroom=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.JOIN_ROOM).setData(t).send()},h.prototype.exitChatroom=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.EXIT_ROOM).setData(t).send()},h.prototype.sendChatroomMsg=function(t){return this.__checkLogin(),t.target_rname||(t.target_rname=void 0===f.Cache.rooms[t.target_rid]?"":f.Cache.rooms[t.target_rid].name),this.__sendMsg({type:"chatroom",target_id:t.target_rid,target_name:t.target_rname,content:t.content,extras:t.extras,msg_body:t.msg_body})},h.prototype.sendChatroomPic=function(t){return this.__checkLogin(),t.target_rname||(t.target_rname=void 0===f.Cache.rooms[t.target_rid]?"":f.Cache.rooms[t.target_rid].name),this.__sendPic({type:"chatroom",target_id:t.target_rid,target_name:t.target_rname,file:t.image,extras:t.extras,msg_body:t.msg_body})},h.prototype.sendChatroomFile=function(t){return this.__checkLogin(),t.target_rname||(t.target_rname=void 0===f.Cache.rooms[t.target_rid]?"":f.Cache.rooms[t.target_rid].name),this.__sendVideoOrFile({type:"chatroom",target_id:t.target_rid,target_name:t.target_rname,file:t.file,extras:t.extras,msg_body:t.msg_body},"file")},h.prototype.sendChatroomVideo=function(t){return this.__checkLogin(),t.target_rname||(t.target_rname=void 0===f.Cache.rooms[t.target_rid]?"":f.Cache.rooms[t.target_rid].name),this.__sendVideoOrFile({type:"chatroom",target_id:t.target_rid,target_name:t.target_rname,file:t.file,msg_body:t.msg_body,extras:t.extras},"video")},h.prototype.sendChatroomCustom=function(t){return this.__checkLogin(),t.target_rname||(t.target_rname=void 0===f.Cache.rooms[t.target_rid]?"":f.Cache.rooms[t.target_rid].name),this.__sendCustom({type:"chatroom",target_id:t.target_rid,target_name:t.target_rname,custom:t.custom,extras:t.extras,msg_body:t.msg_body})},h.prototype.sendChatroomLocation=function(t){return this.__checkLogin(),t.target_rname||(t.target_rname=void 0===f.Cache.rooms[t.target_rid]?"":f.Cache.rooms[t.target_rid].name),this.__sendLocation({type:"chatroom",target_id:t.target_rid,target_name:t.target_rname,latitude:t.latitude,longitude:t.longitude,scale:t.scale,label:t.label,extras:t.extras,msg_body:t.msg_body})},h.prototype.addGroupMemSilence=function(t){return this.__checkLogin(),t.keep_silence=!0,new a(this.channel).setEvent(s.EVENTS.GROUP_MEM_SILENCE).setData(t).send()},h.prototype.delGroupMemSilence=function(t){return this.__checkLogin(),t.keep_silence=!1,new a(this.channel).setEvent(s.EVENTS.GROUP_MEM_SILENCE).setData(t).send()},h.prototype.dissolveGroup=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.DISSOLVE_GROUP).setData(t).send()},h.prototype.addGroupKeeper=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.ADD_GROUP_KEEPER).setData(t).send()},h.prototype.delGroupKeeper=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.DEL_GROUP_KEEPER).setData(t).send()},h.prototype.changeGroupAdmin=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.CHANGE_GROUP_ADMIN).setData(t).send()},h.prototype.getAppkeyPublicGroups=function(t){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.PUBLIC_GROUP_LIST).setData(t).send().addHook(function(t,e){t.result.groups.forEach(function(t){t.group_type=t.flag,delete t.flag}),e&&e(t)})},h.prototype.isInit=function(){return!!this.current_appkey},h.prototype.isLogin=function(){return!!this.current_user},h.prototype.isConnect=function(){return!!this.channel.client&&!!this.channel.client.connected},h.prototype._addEventListen=function(){var t=this;t.channel.client.on(s.EVENTS.MSG_SYNC,function(e){t._onMsgReceive(e)}),t.channel.client.on(s.EVENTS.EVENT_NOTIFICATION,function(e){t._onEventNotification(e)}),t.channel.client.on(s.EVENTS.SYNC_CONVERSATION,function(e){t._onSyncConversation(e)}),t.channel.client.on(s.EVENTS.SYNC_EVENT,function(e){t._onSyncEvent(e)}),t.channel.client.on(s.EVENTS.SYNC_RECEIPT,function(e){t._onSyncMsgReceipt(e)}),t.channel.client.on(s.EVENTS.RECEIPT_CHANGE,function(e){t._onMsgReceiptChange(e)}),t.channel.client.on(s.EVENTS.TRANS_MSG_REC,function(e){t._onTransMsgRec(e)}),t.channel.client.on(s.EVENTS.ROOM_MSG_SYNC,function(e){t._onRoomMsg(e)}),t.channel.client.on(s.EVENTS.ROOM_MSG_SYNC_HIS,function(e){t._onSyncRoomMsg(e)}),t.channel.client.on("disconnect",function(){t._onDisconnect()})},h.prototype.onRoomMsg=function(t){this._onRoomMsgFn=t},h.prototype._onRoomMsg=function(t){this._onRoomMsgFn&&this._onRoomMsgFn(t)},h.prototype._onSyncRoomMsg=function(t){var e=this;t.messages.forEach(function(n){f.Cache.rooms[n.room_id]||e.getChatroomInfo({id:t.room_id}),n.msgs&&n.msgs.forEach(function(t){e._onRoomMsgFn&&e._onRoomMsgFn(t)})})},h.prototype.onMsgReceive=function(t){this._onMsgReceiveFn=t},h.prototype._onMsgReceive=function(t){var e=this;Array.prototype.push.apply([],t.messages.map(function(t){return{msg_id:t.msg_id,msg_type:t.msg_type,from_uid:t.from_uid,from_gid:t.from_gid}})),t.messages.forEach(function(t){if(t.content.sui_mtime&&e[t.from_uid]&&t.content.sui_mtime>new Date(e[t.from_uid]).getTime()/1e3){e[t.from_uid]=1e3*t.content.sui_mtime;var n={};n.from_username=t.content.from_id,n.from_appkey=t.content.from_appkey,n.mtime=t.content.sui_mtime,delete t.content.sui_mtime,e._updateInfoEventFun&&e._updateInfoEventFun(n)}var r;3===t.msg_type?(t.key=t.from_uid,t.from_username=t.content.from_id,t.from_appkey=t.content.from_appkey,r=t.from_appkey+t.from_username):(t.key=t.from_gid,r=String(t.from_gid)),0===t.msg_level?t.msg_level="normal":1===t.msg_level&&(t.msg_level="across");var o=!1;t.from_appkey===e.current_appkey&&t.from_username===e.current_user&&(o=!0,r=(void 0===t.content.target_appkey||""===t.content.target_appkey?t.content.from_appkey:t.content.target_appkey)+t.content.target_id),e.lastMsgs[r]={last_msg_time:t.ctime_ms},e.conversations[r]||(e.conversations[r]={},e.conversations[r].extras={},e.conversations[r].unread_msg_count=0,e.conversations[r].msg_time=[]),e.current_conversation===r||o?(e.conversations[r].recent_time=t.ctime_ms,e.conversations[r].unread_msg_count=0,e.conversations[r].msg_time=[]):(e.conversations[r].unread_msg_count=e.conversations[r].unread_msg_count+1,e.conversations[r].msg_time.push(t.ctime_ms)),new a(e.channel).setEvent(s.EVENTS.MSG_RECV_V2).setData({msg_id:t.msg_id,msg_type:t.msg_type,from_uid:t.from_uid,from_gid:t.from_gid}).send()}),f.StorageUtils.addItem(e.channel.conversations_key,JSON.stringify(e.conversations)),this._onMsgReceiveFn&&this._onMsgReceiveFn(t)},h.prototype.onEventNotification=function(t){this._onEventNotificationFn=t},h.prototype._onEventNotification=function(t){var e=this;if(200!==t.event_type){var n=e.__eventDateFilter(t);if(56===t.event_type&&10==t.extra?(n.by_self=!1,delete n.extra):56===t.event_type&&59==t.extra&&(n.by_self=!0,delete n.extra),1===t.event_type){var r={event_id:t.event_id,event_type:t.event_type,from_uid:t.from_uid,gid:t.gid};new a(e.channel).setEvent(s.EVENTS.EVENT_NOTIFICATION).setData(r).send()}e._onEventNotificationFn&&e._onEventNotificationFn(n),-1!=s.LOGIN_OUT_EVENT.indexOf(t.event_type)&&e.loginOut()}else 3===t.description.type?e._dealMutlReadEvent(t.description.type,t.ctime_ms,t.description.appkey,t.description.username):e._dealMutlReadEvent(t.description.type,t.ctime_ms,t.description.gid)},h.prototype.onSyncConversation=function(t){this._onSyncConversationFn=t},h.prototype._onSyncConversation=function(t){var e=this;e.channel.sync_key=t.sync_key,t.messages&&(t.messages.forEach(function(t){var n,r=0;n=3===t.msg_type?t.from_appkey+t.from_username:String(t.from_gid);var o=t.msgs[t.msgs.length-1].ctime_ms;if(e.current_conversation===n)e.conversations[n]=void 0===e.conversations[n]?{}:e.conversations[n],e.conversations[n].unread_msg_count=r,e.conversations[n].recent_time=o,e.conversations[n].msg_time=[];else if(e.conversations[n]&&e.conversations[n].recent_time){var i=e.conversations[n].recent_time;t.msgs.forEach(function(t){t.ctime_ms<=i||t.content.from_appkey===e.current_appkey&&t.content.from_id===e.current_user?(r=0,e.conversations[n].msg_time=[]):(r++,e.conversations[n].msg_time.push(t.ctime_ms))}),e.channel.sync_type===s.SYNC_TYPE_OPEN?e.conversations[n].unread_msg_count=r:e.conversations[n].unread_msg_count+=r}else r=t.unsync_count,e.conversations[n]=void 0===e.conversations[n]?{}:e.conversations[n],e.conversations[n].unread_msg_count=r,t.msgs.length-1-r<0?e.conversations[n].recent_time=-1:e.conversations[n].recent_time=t.msgs[t.msgs.length-1-r].ctime_ms,e.conversations[n].msg_time=[];e.lastMsgs[n]={last_msg_time:o},delete t.unsync_count,t.unread_msg_count=r}),f.StorageUtils.addItem(e.channel.conversations_key,JSON.stringify(e.conversations)),e._onSyncConversationFn&&t.messages.length>0&&e._onSyncConversationFn(t.messages));var n={sync_key:e.channel.sync_key};new a(e.channel).setEvent(s.EVENTS.SYNC_CONVERSATION_ACK).setData(n).send()},h.prototype.onSyncEvent=function(t){this._onSyncEventFn=t},h.prototype._onSyncEvent=function(t){var e=this;e.channel.sync_event_key=t.sync_key,f.StorageUtils.addItem(e.channel.event_key,t.sync_key);var n={sync_key:e.channel.sync_event_key};new a(e.channel).setEvent(s.EVENTS.SYNC_EVENT_ACK).setData(n).send(),setTimeout(function(){if(e._onSyncEventFn&&t.events&&t.events.length>0){var n=[];t.events.forEach(function(r){if(200===r.event_type)3===r.description.type?e._dealMutlReadEvent(r.description.type,r.ctime_ms,r.description.appkey,r.description.username):e._dealMutlReadEvent(r.description.type,r.ctime_ms,r.description.gid);else{var o=e.__eventDateFilter(r);56===t.event_type&&10==t.extra?(delete o.extra,o.by_self=!1):56===t.event_type&&59==t.extra&&(delete o.extra,o.by_self=!0),n.push(o)}}),e._onSyncEventFn(n)}},1700)},h.prototype.onSyncMsgReceipt=function(t){this._onSyncMsgReceiptFn=t},h.prototype._onSyncMsgReceipt=function(t){var e=this;if(e.channel.msg_receipt_key=t.sync_key,e._onSyncMsgReceiptFn&&t.receipts&&t.receipts.length>0){var n={},r=[];t.receipts.forEach(function(t){var e=t.gid;if(3===t.type&&(e=t.appkey+t.username),n[e]){var o=Number(n[e]);Array.prototype.push.apply(r[o].receipt_msgs,t.receipt_msgs)}else t.receipt_msgs.length>0&&(n[e]=String(r.length),r.push(t))}),setTimeout(function(){e._onSyncMsgReceiptFn&&r.length>0&&e._onSyncMsgReceiptFn(r)},1500)}var o={sync_key:e.channel.msg_receipt_key};new a(e.channel).setEvent(s.EVENTS.SYNC_RECEIPT_ACK).setData(o).send()},h.prototype.onMsgReceiptChange=function(t){this._onMsgReceiptChangeFn=t},h.prototype._onMsgReceiptChange=function(t){this._onMsgReceiptChangeFn&&this._onMsgReceiptChangeFn(t)},h.prototype.onUserInfUpdate=function(t){this._updateInfoEventFun=t},h.prototype.onMutiUnreadMsgUpdate=function(t){this._conversationUpdateFun=t},h.prototype.onTransMsgRec=function(t){this._onTransMsgRecFn=t},h.prototype._onTransMsgRec=function(t){this._onTransMsgRecFn&&this._onTransMsgRecFn(t)},h.prototype.onDisconnect=function(t){this._onDisconnectFn=t},h.prototype._onDisconnect=function(){var t=this;clearTimeout(t.syncTask),clearTimeout(t.msgReceipTask),t.autoDiscon&&(t.current_appkey=null,t.current_user=null,t._onDisconnectFn&&t._onDisconnectFn())},h.prototype._dealMutlReadEvent=function(t,e,n,r){var o,i=this,s={};if(s.type=t,3===t?(o=n+r,s.username=r,s.appkey=n):(o=String(n),s.gid=n),i.conversations[o]=void 0===i.conversations[o]?{msg_time:[],unread_msg_count:0}:i.conversations[o],i.conversations[o].recent_time=e,i.current_conversation===o)i.conversations[o].unread_msg_count=0,i.conversations[o].msg_time=[];else{var a=i.conversations[o].unread_msg_count,c=i.conversations[o].msg_time,u=[],p=0;c.forEach(function(t){t>e&&(p++,u.push(t))}),i.conversations[o].msg_time=u,p<a&&(i.conversations[o].unread_msg_count=p,s.unreadCount=p,f.StorageUtils.addItem(i.channel.conversations_key,JSON.stringify(i.conversations)),i._conversationUpdateFun&&i._conversationUpdateFun(s))}},h.prototype._receiptReport=function(){var t=this;if(t.report.length>0){var e={},n=[];t.report.forEach(function(t){if(e[t.args.key]){var r=Number(e[t.args.key]);Array.prototype.push.apply(n[r].result.msg_ids,t.args.msg_ids),n[r].msg_reports.push(t)}else e[t.args.key]=String(n.length),n.push({result:t.args,msg_reports:[t]})}),t.report=[];for(var r=0;r<n.length;r++)n[r].result.msg_ids=f.ArrayUtils.delRepeatItem(n[r].result.msg_ids),delete n[r].result.key,t._msgReceipt(n[r])}},h.prototype._msgReceipt=function(t){new a(this.channel).setEvent(s.EVENTS.RECEIPT_REPORT).setData({sessions:[t.result]}).send().onSuccess(function(e){t.msg_reports.forEach(function(t){t.success&&t.success(e,t.args.msg_ids)})}).onFail(function(e){t.msg_reports.forEach(function(t){t.fail&&t.fail(e,t.args.msg_ids)})}).onAck(function(e){t.msg_reports.forEach(function(t){t.ack&&t.ack(e,t.args.msg_ids)})}).onTimeout(function(e){t.msg_reports.forEach(function(t){t.timeout&&t.timeout(e,t.args.msg_ids)})})},h.prototype.__eventDateFilter=function(t){var e={};return e.event_id=t.event_id,e.event_type=t.event_type,e.from_username=t.from_username,e.gid=t.gid,e.to_usernames=t.to_usernames,e.ctime=t.ctime,e.extra=t.extra,e.return_code=t.return_code,e.from_appkey=t.from_appkey,e.msg_ids=t.msg_ids,e.from_gid=t.from_gid,e.msgid_list=t.msgid_list,e.to_groups=t.to_groups,e.new_owner=t.new_owner,e.group_name=t.group_name,e.ctime_ms=t.ctime_ms,e.media_id=t.media_id,e.from_nickname=t.from_nickname,e.from_eventid=t.from_eventid,100===t.event_type&&7===t.extra?e.description=JSON.parse(t.description):e.description=t.description,55===t.event_type&&0===t.from_gid?e.type=0:55===t.event_type&&0!=t.from_gid&&(e.type=1),e},h.prototype.__checkConnect=function(){if(!this.channel.client.connected)throw new Error("wss socket not connect")},h.prototype.__checkInit=function(){if(!this.current_appkey)throw new Error("必须执行init操作后能执行此动作")},h.prototype.__checkLogin=function(){if(!this.current_user)throw new Error("必须执行login操作后能执行此动作")},h.prototype.__getUploadToken=function(){return this.__checkLogin(),new a(this.channel).setEvent(s.EVENTS.GET_UPLOAD_TOKEN).setData({}).send()},h.prototype.__uploadFile0=function(t,n){wx.uploadFile({url:s.UPLOAD_FILE+"?type="+t.type,filePath:t.file,name:"file",header:{"X-App-Key":t.appkey,Authorization:"Basic "+o.btoa(t.username+":"+t.token),"jm-channel":s.PLAT_CHANNEL},success:function(t){if(200==t.statusCode)n(null,JSON.parse(t.data));else try{var e=JSON.parse(t.data);n(898061===e.error.code?{code:880210,message:"file size exceed limit"}:e)}catch(t){n({code:880210,message:"file size exceed the limit"})}},fail:function(t){console.error(e(JSON.parse(t)," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"))}})},h.prototype.__uploadFile=function(t,e){var n=this;n.__getUploadToken().onSuccess(function(r){n.__uploadFile0({type:t.type,file:t.file,appkey:t.appkey,username:t.username,token:r.uptoken},e)}).onFail(function(t){e({data:t})}).onTimeout(function(t){e({is_timeout:!0,data:t})})},h.prototype.__sendMsg=function(t){return this.__checkLogin(),new a(this.channel).setEvent("single"===t.type?s.EVENTS.S_SINGLE_TEXT:"group"===t.type?s.EVENTS.SEND_GROUP_MSG:s.EVENTS.SEND_ROOM_MSG).setData(new u(this.current_user,this.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id,t.target_name).setText(t.content?t.content:t.msg_body.text,t.content?t.extras:t.msg_body.extras).setAtList(t.at_list).setNoOffline(!0===t.no_offline).setNoNotification(!0===t.no_notification).setCustomNotification(t.custom_notification).build()).send()},h.prototype.__sendPic=function(t){this.__checkLogin();var e=new a(this.channel).setEvent("single"===t.type?s.EVENTS.S_SINGLE_TEXT:"group"===t.type?s.EVENTS.SEND_GROUP_MSG:s.EVENTS.SEND_ROOM_MSG),n=this,r=new u(n.current_user,n.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id,t.target_name).setNoOffline(!0===t.no_offline).setNoNotification(!0===t.no_notification).setCustomNotification(t.custom_notification);return t.file?this.__uploadFile({appkey:n.current_appkey,username:n.current_user,file:t.file,type:"image"},function(n,o){return n?n.is_timeout?e.timeout&&e.timeout(n.data):e.fail&&e.fail(n.data):void e.setData(r.setImage(o,t.extras).build()).send()}):e.setData(r.setImage(t.msg_body,t.msg_body.extras).build()).send(),e},h.prototype.__sendVideoOrFile=function(t,e){this.__checkLogin();var n=new a(this.channel).setEvent("single"===t.type?s.EVENTS.S_SINGLE_TEXT:"group"===t.type?s.EVENTS.SEND_GROUP_MSG:s.EVENTS.SEND_ROOM_MSG),r=this,o=new u(r.current_user,r.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id,t.target_name).setNoOffline(!0===t.no_offline).setNoNotification(!0===t.no_notification).setCustomNotification(t.custom_notification);return t.file?this.__uploadFile({appkey:r.current_appkey,username:r.current_user,file:t.file,type:"file"},function(r,i){return r?r.is_timeout?n.timeout&&n.timeout(r.data):n.fail&&n.fail(r.data):("video"===e&&(!t.extras&&(t.extras={}),t.extras.video=i.media_id.slice(i.media_id.lastIndexOf(".")+1)),void n.setData(o.setFile(i,t.extras).build()).send())}):n.setData(o.setFile(t.msg_body,t.msg_body.extras).build()).send(),n},h.prototype.__sendVoice=function(t){this.__checkLogin();var e=new a(this.channel).setEvent("single"===t.type?s.EVENTS.S_SINGLE_TEXT:s.EVENTS.SEND_GROUP_MSG),n=this,r=new u(n.current_user,n.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id,t.target_name).setNoOffline(!0===t.no_offline).setNoNotification(!0===t.no_notification).setCustomNotification(t.custom_notification);return t.file?this.__uploadFile({appkey:n.current_appkey,username:n.current_user,file:t.file,type:"voice"},function(n,o){return n?n.is_timeout?e.timeout&&e.timeout(n.data):e.fail&&e.fail(n.data):void e.setData(r.setVoice(o,t.extras).build()).send()}):e.setData(r.setVoice(t.msg_body,t.msg_body.extras).build()).send(),e},h.prototype.__sendLocation=function(t){return this.__checkLogin(),new a(this.channel).setEvent("single"===t.type?s.EVENTS.S_SINGLE_TEXT:"group"===t.type?s.EVENTS.SEND_GROUP_MSG:s.EVENTS.SEND_ROOM_MSG).setData(new u(this.current_user,this.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id,t.target_name).setLocation(t.latitude?t:t.msg_body,t.latitude?t.extras:t.msg_body.extras).setNoOffline(!0===t.no_offline).setNoNotification(!0===t.no_notification).setCustomNotification(t.custom_notification).build()).send()},h.prototype.__sendCustom=function(t){return this.__checkLogin(),new a(this.channel).setEvent("single"===t.type?s.EVENTS.S_SINGLE_TEXT:"group"===t.type?s.EVENTS.SEND_GROUP_MSG:s.EVENTS.SEND_ROOM_MSG).setData(new u(this.current_user,this.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id,t.target_name).setCustom(t.custom?t.custom:t.msg_body,t.custom?t.extras:t.msg_body.extras).setCustom(t.custom).setNoOffline(!0===t.no_offline).setNoNotification(!0===t.no_notification).setCustomNotification(t.custom_notification).build()).send()},t.exports=h},function(t,e,n){!function(){function t(t){this.message=t}var n=e,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.prototype=new Error,t.prototype.name="InvalidCharacterError",n.btoa||(n.btoa=function(e){for(var n,o,i=String(e),s=0,a=r,c="";i.charAt(0|s)||(a="=",s%1);c+=a.charAt(63&n>>8-s%1*8)){if((o=i.charCodeAt(s+=.75))>255)throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");n=n<<8|o}return c}),n.atob||(n.atob=function(e){var n=String(e).replace(/=+$/,"");if(n.length%4==1)throw new t("'atob' failed: The string to be decoded is not correctly encoded.");for(var o,i,s=0,a=0,c="";i=n.charAt(a++);~i&&(o=s%4?64*o+i:i,s++%4)?c+=String.fromCharCode(255&o>>(-2*s&6)):0)i=r.indexOf(i);return c})}()},function(t,n,r){var o=r(1),i=r(22),s=r(5),a=function(t){this.opts=t};a.prototype.init=function(t){this.opts=t,this.dataCache={},this.memStore={},this.sync_key=0,this.sync_type=0,null!=this.client&&this.client.close(),this.client=i(this.opts.address,{transports:["websocket","polling"]});var e=this,n=o.prototype.emit,r=this.client.onevent;this.client.onevent=function(t){var o=t.data||[];r.call(e.client,t),n.apply(e.client,["*"].concat(o))},this.client.on("*",function(t,n){e.onReceive(t,n)})},a.prototype.onReceive=function(t,n){if(this.opts.debug&&console.log(e("---<- event:%s, data:%s",t,JSON.stringify(n)," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1")),t!==s.EVENTS.EVENT_NOTIFICATION&&t!==s.EVENTS.MSG_SYNC&&t!==s.EVENTS.SYNC_CONVERSATION&&t!==s.EVENTS.SYNC_EVENT&&t!==s.EVENTS.SYNC_RECEIPT&&t!==s.EVENTS.RECEIPT_CHANGE&&t!==s.ROOM_MSG_SYNC&&t!==s.ROOM_MSG_SYNC_HIS){var r=this.dataCache[n.rid];delete n.rid,r&&(0===n.code&&t===s.EVENTS.GET_GROUP_MEMBERS?n.member_list.forEach(function(t){r.userInfoGet&&r.userInfoGet(t.uid,t.mtime),delete t.uid,delete t.mtime}):0===n.code&&t===s.EVENTS.GET_CONVERSATIONS?n.conversations.forEach(function(t){3===t.type&&(r.userInfoGet&&r.userInfoGet(t.key,t.utime),delete t.utime)}):0===n.code&&t===s.EVENTS.GET_FRIEND_LIST?n.friend_list.forEach(function(t){r.userInfoGet&&r.userInfoGet(t.uid,1e3*t.mtime),delete t.uid}):0===n.code&&t===s.EVENTS.GET_BLACK_LIST&&n.black_list.forEach(function(t){delete t.uid}),t===s.EVENTS.ACK?(r.ack&&r.ack({rid:n.rid,data:r.data}),r.cleanAckTimeout()):(r.cleanRespTimeout(),delete this.dataCache[r.rid],n.code&&0!==n.code?r.fail&&r.fail(n):t!=s.EVENTS.S_SINGLE_TEXT_&&t!=s.EVENTS.SEND_GROUP_MSG&&t!=s.EVENTS.SEND_ROOM_MSG?r.hook?r.hook(n,r.success):r.success&&r.success(n):(r.data.msg_id=n.msg_id,t===s.EVENTS.S_SINGLE_TEXT_&&(n.target_username=r.data.content.target_id,n.appkey=r.data.appkey),r.success&&r.success(n,r.data),r.innerCall&&r.innerCall(n.msg_id))))}},a.prototype.generateRid=function(){for(var t=Math.floor(-2147483646*Math.random()+2147483647);this.dataCache[t];)t=Math.floor(-2147483646*Math.random()+2147483647);return t},a.prototype.send=function(t,n){this.opts.debug&&console.log(e("---\x3e- event:%s, data:%s",t,JSON.stringify(n)," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1")),this.client.emit(t,n)},t.exports=a},function(t,e,n){function r(t,e){"object"==typeof t&&(e=t,t=void 0),e=e||{};var n,r=o(t),i=r.source,u=r.id,p=r.path,f=c[u]&&p in c[u].nsps;return e.forceNew||e["force new connection"]||!1===e.multiplex||f?(a("ignoring socket cache for %s",i),n=s(i,e)):(c[u]||(a("new io instance for %s",i),c[u]=s(i,e)),n=c[u]),r.query&&!e.query?e.query=r.query:e&&"object"==typeof e.query&&(e.query=function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")}(e.query)),n.socket(r.path,e)}var o=n(23),i=n(3),s=n(9),a=n(0)("socket.io-client");t.exports=e=r;var c=e.managers={};e.protocol=i.protocol,e.connect=r,e.Manager=n(9),e.Socket=n(14)},function(t,e,n){var r=n(6),o=n(0)("socket.io-client:url");t.exports=function(t,e){var n=t;null==t&&(t=e.protocol+"//"+e.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?e.protocol+t:e.host+t),/^(https?|wss?):\/\//.test(t)||(o("protocol-less url %s",t),t=void 0!==e?e.protocol+"//"+t:"https://"+t),o("parse %s",t),n=r(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";var i=-1!==n.host.indexOf(":")?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+i+":"+n.port,n.href=n.protocol+"://"+i+(e&&e.port===n.port?"":":"+n.port),n}},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(){d&&h&&(d=!1,h.length?l=h.concat(l):_=-1,l.length&&s())}function s(){if(!d){var t=o(i);d=!0;for(var e=l.length;e;){for(h=l,l=[];++_<e;)h&&h[_].run();_=-1,e=l.length}h=null,d=!1,function(t){if(p===clearTimeout)return clearTimeout(t);if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{p(t)}catch(e){try{return p.call(null,t)}catch(e){return p.call(this,t)}}}(t)}}function a(t,e){this.fun=t,this.array=e}function c(){}var u,p,f=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{p="function"==typeof clearTimeout?clearTimeout:r}catch(t){p=r}}();var h,l=[],d=!1,_=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new a(t,e)),1!==l.length||d||o(s)},a.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,n){function r(){return e.colors[s++%e.colors.length]}function o(t){function n(){}function o(){var t=o,n=+new Date,s=n-(i||n);t.diff=s,t.prev=i,t.curr=n,i=n,null==t.useColors&&(t.useColors=e.useColors()),null==t.color&&t.useColors&&(t.color=r());for(var a=new Array(arguments.length),c=0;c<a.length;c++)a[c]=arguments[c];a[0]=e.coerce(a[0]),"string"!=typeof a[0]&&(a=["%o"].concat(a));var u=0;a[0]=a[0].replace(/%([a-z%])/g,function(n,r){if("%%"===n)return n;u++;var o=e.formatters[r];if("function"==typeof o){var i=a[u];n=o.call(t,i),a.splice(u,1),u--}return n}),a=e.formatArgs.apply(t,a),(o.log||e.log||console.log.bind(console)).apply(t,a)}n.enabled=!1,o.enabled=!0;var s=e.enabled(t)?o:n;return s.namespace=t,s}(e=t.exports=o.debug=o).coerce=function(t){return t instanceof Error?t.stack||t.message:t},e.disable=function(){e.enable("")},e.enable=function(t){e.save(t);for(var n=(t||"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(t=n[o].replace(/[\\^$+?.()|[\]{}]/g,"\\$&").replace(/\*/g,".*?"))[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))},e.enabled=function(t){var n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1},e.humanize=n(26),e.names=[],e.skips=[],e.formatters={};var i,s=0},function(t,e){function n(t){return r(t,a,"day")||r(t,s,"hour")||r(t,i,"minute")||r(t,o,"second")||t+" ms"}function r(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}var o=1e3,i=60*o,s=60*i,a=24*s,c=365.25*a;t.exports=function(t,e){e=e||{};var r=typeof t;if("string"===r&&t.length>0)return function(t){if(!((t=String(t)).length>1e4)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]);switch((e[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*c;case"days":case"day":case"d":return n*a;case"hours":case"hour":case"hrs":case"hr":case"h":return n*s;case"minutes":case"minute":case"mins":case"min":case"m":return n*i;case"seconds":case"second":case"secs":case"sec":case"s":return n*o;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}(t);if("number"===r&&!1===isNaN(t))return e.long?n(t):function(t){return t>=a?Math.round(t/a)+"d":t>=s?Math.round(t/s)+"h":t>=i?Math.round(t/i)+"m":t>=o?Math.round(t/o)+"s":t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e){function n(t){if(t)return function(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}(t)}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){r.off(t,n),e.apply(this,arguments)}var r=this;return this._callbacks=this._callbacks||{},n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks[t];if(!n)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var r,o=0;o<n.length;o++)if((r=n[o])===e||r.fn===e){n.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks[t];if(n)for(var r=0,o=(n=n.slice(0)).length;r<o;++r)n[r].apply(this,e);return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,n){(function(t){var r=n(7),o=n(8);e.deconstructPacket=function(t){var e=[],n=t.data,i=t;return i.data=function t(n){if(!n)return n;if(o(n)){var i={_placeholder:!0,num:e.length};return e.push(n),i}if(r(n)){for(var s=new Array(n.length),a=0;a<n.length;a++)s[a]=t(n[a]);return s}if("object"==typeof n&&!(n instanceof Date)){for(var c in s={},n)s[c]=t(n[c]);return s}return n}(n),i.attachments=e.length,{packet:i,buffers:e}},e.reconstructPacket=function(t,e){return t.data=function t(n){if(n&&n._placeholder)return e[n.num];if(r(n)){for(var o=0;o<n.length;o++)n[o]=t(n[o]);return n}if(n&&"object"==typeof n){for(var i in n)n[i]=t(n[i]);return n}return n}(t.data),t.attachments=void 0,t},e.removeBlobs=function(e,n){var i=0,s=e;(function e(a,c,u){if(!a)return a;if(t.Blob&&a instanceof Blob||t.File&&a instanceof File){i++;var p=new FileReader;p.onload=function(){u?u[c]=this.result:s=this.result,--i||n(s)},p.readAsArrayBuffer(a)}else if(r(a))for(var f=0;f<a.length;f++)e(a[f],f,a);else if(a&&"object"==typeof a&&!o(a))for(var h in a)e(a[h],h,a)})(s),i||n(s)}}).call(this,n(4))},function(t,e,n){t.exports=n(30),t.exports.parser=n(2)},function(t,e,n){function r(t,e){return this instanceof r?(e=e||{},t&&"object"==typeof t&&(e=t,t=null),t?(t=u(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=u(e.host).host),this.secure=!0,this.port="443",this.agent=e.agent||!1,this.hostname=e.hostname,this.port=e.port,this.query=e.query||{},"string"==typeof this.query&&(this.query=f.decode(this.query)),this.upgrade=!1!==e.upgrade,this.path=(e.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!e.forceJSONP,this.jsonp=!1!==e.jsonp,this.forceBase64=!!e.forceBase64,this.enablesXDR=!!e.enablesXDR,this.timestampParam=e.timestampParam||"t",this.timestampRequests=e.timestampRequests,this.transports=e.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=e.policyPort||843,this.rememberUpgrade=e.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=e.onlyBinaryUpgrades,this.perMessageDeflate=!1!==e.perMessageDeflate&&(e.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=e.pfx||null,this.key=e.key||null,this.passphrase=e.passphrase||null,this.cert=e.cert||null,this.ca=e.ca||null,this.ciphers=e.ciphers||null,this.rejectUnauthorized=void 0===e.rejectUnauthorized?null:e.rejectUnauthorized,this.forceNode=!!e.forceNode,this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,void this.open()):new r(t,e)}var o=n(10),i=n(1),s=n(0)("engine.io-client:socket"),a=n(13),c=n(2),u=n(6),p=n(35),f=n(12);t.exports=r,r.priorWebsocketSuccess=!1,i(r.prototype),r.protocol=c.protocol,r.Socket=r,r.Transport=n(11),r.transports=n(10),r.parser=n(2),r.prototype.createTransport=function(t){s('creating transport "%s"',t);var e=function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}(this.query);return e.EIO=c.protocol,e.transport=t,this.id&&(e.sid=this.id),new o({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:e,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders,forceNode:this.forceNode,localAddress:this.localAddress})},r.prototype.open=function(){var t="websocket";this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},r.prototype.setTransport=function(t){s("setting transport %s",t.name);var e=this;this.transport&&(s("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},r.prototype.probe=function(t){function e(){if(h.onlyBinaryUpgrades){var e=!this.supportsBinary&&h.transport.supportsBinary;f=f||e}f||(s('probe transport "%s" opened',t),p.send([{type:"ping",data:"probe"}]),p.once("packet",function(e){if(!f)if("pong"===e.type&&"probe"===e.data){if(s('probe transport "%s" pong',t),h.upgrading=!0,h.emit("upgrading",p),!p)return;r.priorWebsocketSuccess="websocket"===p.name,s('pausing current transport "%s"',h.transport.name),h.transport.pause(function(){f||"closed"!==h.readyState&&(s("changing transport and sending upgrade packet"),u(),h.setTransport(p),p.send([{type:"upgrade"}]),h.emit("upgrade",p),p=null,h.upgrading=!1,h.flush())})}else{s('probe transport "%s" failed',t);var n=new Error("probe error");n.transport=p.name,h.emit("upgradeError",n)}}))}function n(){f||(f=!0,u(),p.close(),p=null)}function o(e){var r=new Error("probe error: "+e);r.transport=p.name,n(),s('probe transport "%s" failed because of error: %s',t,e),h.emit("upgradeError",r)}function i(){o("transport closed")}function a(){o("socket closed")}function c(t){p&&t.name!==p.name&&(s('"%s" works - aborting "%s"',t.name,p.name),n())}function u(){p.removeListener("open",e),p.removeListener("error",o),p.removeListener("close",i),h.removeListener("close",a),h.removeListener("upgrading",c)}s('probing transport "%s"',t);var p=this.createTransport(t,{probe:1}),f=!1,h=this;r.priorWebsocketSuccess=!1,p.once("open",e),p.once("error",o),p.once("close",i),this.once("close",a),this.once("upgrading",c),p.open()},r.prototype.onOpen=function(){if(this.readyState="open",r.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){s("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},r.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(s('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(p(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}else s('packet received with socket readyState "%s"',this.readyState)},r.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},r.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},r.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){s("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},r.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},r.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},r.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(s("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},r.prototype.write=r.prototype.send=function(t,e,n){return this.sendPacket("message",t,e,n),this},r.prototype.sendPacket=function(t,e,n,r){if("function"==typeof e&&(r=e,e=void 0),"function"==typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){(n=n||{}).compress=!1!==n.compress;var o={type:t,data:e,options:n};this.emit("packetCreate",o),this.writeBuffer.push(o),r&&this.once("flush",r),this.flush()}},r.prototype.close=function(){function t(){r.onClose("forced close"),s("socket closing - telling transport to close"),r.transport.close()}function e(){r.removeListener("upgrade",e),r.removeListener("upgradeError",e),t()}function n(){r.once("upgrade",e),r.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var r=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?n():t()}):this.upgrading?n():t()}return this},r.prototype.onError=function(t){s("socket error %j",t),r.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},r.prototype.onClose=function(t,e){"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(s('socket close with reason: "%s"',t),clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),this.writeBuffer=[],this.prevBufferLen=0)},r.prototype.filterUpgrades=function(t){for(var e=[],n=0,r=t.length;n<r;n++)~a(this.transports,t[n])&&e.push(t[n]);return e}},function(t,e,n){var r=n(32);e.protocol=3;var o=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},i=r(o),s={type:"error",data:"parser error"};e.encodePacket=function(t,e,n,r){"function"==typeof n&&(r=n,n=null);var i=o[t.type];return void 0!==t.data&&(i+=String(t.data)),r(""+i)},e.decodePacket=function(t,e,n){if(void 0===t)return s;if("string"==typeof t){var r=t.charAt(0);return Number(r)==r&&i[r]?t.length>1?{type:i[r],data:t.substring(1)}:{type:i[r]}:s}}},function(t,e){t.exports=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty;for(var r in t)n.call(t,r)&&e.push(r);return e}},function(t,e){t.exports=function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){function r(t){var e="";do{e=s[t%a]+e,t=Math.floor(t/a)}while(t>0);return e}function o(){var t=r(+new Date);return t!==i?(u=0,i=t):t+"."+r(u++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},u=0,p=0;p<a;p++)c[s[p]]=p;o.encode=r,o.decode=function(t){var e=0;for(p=0;p<t.length;p++)e=e*a+c[t.charAt(p)];return e},t.exports=o},function(t,e){var n=/^\s+/,r=/\s+$/;t.exports=function(t){return"string"==typeof t&&t?(t=t.replace(n,"").replace(r,""),JSON.parse(t)):null}},function(t,e){t.exports=function(t,e){for(var n=[],r=(e=e||0)||0;r<t.length;r++)n[r-e]=t[r];return n}},function(t,e,n){(function(e){var r=n(7);t.exports=function(t){return function t(n){if(!n)return!1;if(e.Buffer&&e.Buffer.isBuffer&&e.Buffer.isBuffer(n)||e.ArrayBuffer&&n instanceof ArrayBuffer||e.Blob&&n instanceof Blob||e.File&&n instanceof File)return!0;if(r(n)){for(var o=0;o<n.length;o++)if(t(n[o]))return!0}else if(n&&"object"==typeof n)for(var i in n.toJSON&&"function"==typeof n.toJSON&&(n=n.toJSON()),n)if(Object.prototype.hasOwnProperty.call(n,i)&&t(n[i]))return!0;return!1}(t)}}).call(this,n(4))},function(t,e){function n(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=n,n.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},n.prototype.reset=function(){this.attempts=0},n.prototype.setMin=function(t){this.ms=t},n.prototype.setMax=function(t){this.max=t},n.prototype.setJitter=function(t){this.jitter=t}},function(t,n,r){var o=r(5),i=function(t){this.channel=t,this.rid=this.channel.generateRid(),this.times=1};i.prototype.setEvent=function(t){return this.event=t,this},i.prototype.setData=function(t){return this.data=t,this},i.prototype.onSuccess=function(t){return"function"==typeof t&&(this.success=t),this},i.prototype.onFail=function(t){return"function"==typeof t&&(this.fail=t),this},i.prototype.onTimeout=function(t){if("function"==typeof t){this.timeout=t;var e=this;this.respTimeoutTaskId=setTimeout(function(){e.respTimeoutTask()},o.RESP_TIMEOUT)}return this},i.prototype.onAck=function(t){return"function"==typeof t&&(this.ack=t),this},i.prototype.onInnerCall=function(t){return"function"==typeof t&&(this.innerCall=t),this},i.prototype.onUserInfoGet=function(t){return"function"==typeof t&&(this.userInfoGet=t),this},i.prototype.addHook=function(t){return"function"==typeof t&&(this.hook=t),this},i.prototype.ackTimeoutTask=function(){if(this.times<o.RETRY_TIMES){this.channel.send(this.event,this._data),this.times++;var t=this;this.ackTimeoutTaskId=setTimeout(function(){t.ackTimeoutTask()},o.ACK_TIMEOUT)}else this.timeout&&this.timeout({rid:this.rid,data:this.data,response_timeout:!1}),delete this.channel.dataCache[this.rid];return this},i.prototype.respTimeoutTask=function(){if(this.times<o.RETRY_TIMES){this.channel.send(this.event,this._data),this.times++;var t=this;this.respTimeoutTaskId=setTimeout(function(){t.respTimeoutTask()},o.RESP_TIMEOUT)}else this.timeout&&this.timeout({rid:this.rid,data:this.data,response_timeout:!0}),delete this.channel.dataCache[this.rid];return this},i.prototype.cleanAckTimeout=function(){return this.ackTimeoutTaskId&&clearTimeout(this.ackTimeoutTaskId),this},i.prototype.cleanRespTimeout=function(){return this.respTimeoutTaskId&&clearTimeout(this.respTimeoutTaskId),this},i.prototype.send=function(){if(this.event&&this.data){var t=this;return this.ackTimeoutTaskId=setTimeout(function(){t.ackTimeoutTask()},o.ACK_TIMEOUT),this._data=JSON.parse(JSON.stringify(this.data)),this._data.rid=this.rid,this.channel.send(this.event,this._data),this.channel.dataCache[this.rid]=this,this}console.error(e("发send fail，event and data can not empty"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"))},t.exports=i},function(t,e,n){var r=function(t){this.args=t};r.prototype.onSuccess=function(t){return"function"==typeof t&&(this.success=t),this},r.prototype.onFail=function(t){return"function"==typeof t&&(this.fail=t),this},r.prototype.onTimeout=function(t){return"function"==typeof t&&(this.timeout=t),this},r.prototype.onAck=function(t){return"function"==typeof t&&(this.ack=t),this},t.exports=r},function(t,n,r){var o=function(t,e){this.current_user=t,this.current_appkey=e,this.version=1,this.from_platform="web"};o.prototype.setNeedReceipt=function(t){return this.need_receipt=t,this},o.prototype.setNoOffline=function(t){return this.no_offline=t,this},o.prototype.setNoNotification=function(t){return this.no_notification=t,this},o.prototype.setType=function(t){return this.type=t,this},o.prototype.setAtList=function(t){return this.at_list=t,this},o.prototype.setAppkey=function(t){return t&&(this.appkey=t),this},o.prototype.setTarget=function(t,e){return this.target_id=t.toString(),this.target_name=e,this},o.prototype.setFromName=function(t){return this.from_name=t,this},o.prototype.setText=function(t,e){return this.msg_type="text",this.msg_body={text:t},e&&(this.msg_body.extras=e),this},o.prototype.setImage=function(t,e){return this.msg_type="image",this.msg_body={media_id:t.media_id,media_crc32:t.media_crc32,width:t.width,height:t.height,format:t.format,fsize:t.fsize},e&&(this.msg_body.extras=e),this},o.prototype.setFile=function(t,e){return this.msg_type="file",this.msg_body={media_id:t.media_id,media_crc32:t.media_crc32,hash:t.hash,fsize:t.fsize,fname:t.fname},e&&(this.msg_body.extras=e),this},o.prototype.setVoice=function(t,e){return this.msg_type="voice",this.msg_body={media_id:t.media_id,media_crc32:t.media_crc32,hash:t.hash,fsize:t.fsize,duration:t.duration,format:t.format},e&&(this.msg_body.extras=e),this},o.prototype.setCustomNotification=function(t){return t&&(this.custom_notification=t),this},o.prototype.setLocation=function(t,e){return this.msg_type="location",this.msg_body={latitude:t.latitude,longitude:t.longitude,scale:t.scale,label:t.label},e&&(this.msg_body.extras=e),this},o.prototype.setCustom=function(t){return this.msg_type="custom",this.msg_body=t,this},o.prototype.build=function(){var t=this.current_user;if("single"!=this.type&&"group"!=this.type&&"across_single"!=this.type&&"chatroom"!=this.type)return console.log(e("type must be single or group or chatroom"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"));if(!this.target_id)return console.error(e("target_id must not null"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"));if("text"==this.msg_type){if(!this.msg_body.text&&this.at_list&&"single"!=this.type)this.msg_body.text=" ";else if(!this.msg_body.text&&!this.at_list)return console.error(e("未设置文本消息内容"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"))}else if("custom"==this.msg_type){if(!this.msg_body)return console.error(e("custom对象不能为空"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"))}else if("image"==this.msg_type){if(!this.msg_body.media_id)return console.error(e("未设置image消息media_id字段"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"));if(!this.msg_body.media_crc32)return console.error(e("未设置image消息media_crc32字段"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"));if(!this.msg_body.width)return console.error(e("未设置image消息width字段"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"));if(!this.msg_body.height)return console.error(e("未设置image消息height字段"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"))}else if("file"==this.msg_type){if(!this.msg_body.media_id)return console.error(e("未设置file消息media_id字段"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"));if(!this.msg_body.media_crc32)return console.error(e("未设置file消息media_crc32字段"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"));if(!this.msg_body.fsize)return console.error(e("未设置file消息fsize字段"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"));if(!this.msg_body.fname)return console.error(e("未设置file消息fname字段"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"))}else if("location"==this.msg_type){if(!this.msg_body.latitude)return console.error(e("未设置location消息latitude字段"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"));if(!this.msg_body.longitude)return console.error(e("未设置location消息longitude字段"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"));if(!this.msg_body.scale)return console.error(e("未设置location消息scale字段"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"));if(!this.msg_body.label)return console.error(e("未设置location消息label字段"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"))}else{if("voice"!=this.msg_type)return console.error(e("请设置合法的msg_type"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"));if(!this.msg_body.media_id)return console.error(e("未设置voice消息media_id字段"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"));if(!this.msg_body.media_crc32)return console.error(e("未设置voice消息media_crc32字段"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"))}var n={version:this.version,target_type:this.type,from_platform:this.from_platform,target_id:this.target_id,target_name:this.target_name,from_id:t,from_name:this.from_name,create_time:(new Date).getTime(),msg_type:this.msg_type,msg_body:this.msg_body};this.appkey&&(n.target_appkey=this.appkey,n.from_appkey=this.current_appkey);var r={content:n};if(r.no_offline=this.no_offline,r.no_notification=this.no_notification,r.custom_notification=this.custom_notification,r.target_name=n.target_name,r.need_receipt=this.need_receipt,"single"==n.target_type)r.target_name=n.target_id;else if(r.target_gid=n.target_id,this.at_list&&this.at_list instanceof Array)r.users=this.at_list;else if(this.at_list&&!(this.at_list instanceof Array))return console.error(e("参数值不合法，at_list必须为数组类型"," at js_sdk\\jmessage-wxapplet-sdk-1.4.2.min.js:1"));return this.appkey?r.appkey=this.appkey:r.appkey=this.current_appkey,r},t.exports=o},function(t,e,n){t.exports=function(){function t(t,e){var n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function e(e,n,r,o,i,s){return t(function(t,e){return t<<e|t>>>32-e}(t(t(n,e),t(o,s)),i),r)}function n(t,n,r,o,i,s,a){return e(n&r|~n&o,t,n,i,s,a)}function r(t,n,r,o,i,s,a){return e(n&o|r&~o,t,n,i,s,a)}function o(t,n,r,o,i,s,a){return e(n^r^o,t,n,i,s,a)}function i(t,n,r,o,i,s,a){return e(r^(n|~o),t,n,i,s,a)}function s(e,s){e[s>>5]|=128<<s%32,e[14+(s+64>>>9<<4)]=s;var a,c,u,p,f,h=1732584193,l=-271733879,d=-1732584194,_=271733878;for(a=0;a<e.length;a+=16)c=h,u=l,p=d,f=_,h=n(h,l,d,_,e[a],7,-680876936),_=n(_,h,l,d,e[a+1],12,-389564586),d=n(d,_,h,l,e[a+2],17,606105819),l=n(l,d,_,h,e[a+3],22,-1044525330),h=n(h,l,d,_,e[a+4],7,-176418897),_=n(_,h,l,d,e[a+5],12,1200080426),d=n(d,_,h,l,e[a+6],17,-1473231341),l=n(l,d,_,h,e[a+7],22,-45705983),h=n(h,l,d,_,e[a+8],7,1770035416),_=n(_,h,l,d,e[a+9],12,-1958414417),d=n(d,_,h,l,e[a+10],17,-42063),l=n(l,d,_,h,e[a+11],22,-1990404162),h=n(h,l,d,_,e[a+12],7,1804603682),_=n(_,h,l,d,e[a+13],12,-40341101),d=n(d,_,h,l,e[a+14],17,-1502002290),h=r(h,l=n(l,d,_,h,e[a+15],22,1236535329),d,_,e[a+1],5,-165796510),_=r(_,h,l,d,e[a+6],9,-1069501632),d=r(d,_,h,l,e[a+11],14,643717713),l=r(l,d,_,h,e[a],20,-373897302),h=r(h,l,d,_,e[a+5],5,-701558691),_=r(_,h,l,d,e[a+10],9,38016083),d=r(d,_,h,l,e[a+15],14,-660478335),l=r(l,d,_,h,e[a+4],20,-405537848),h=r(h,l,d,_,e[a+9],5,568446438),_=r(_,h,l,d,e[a+14],9,-1019803690),d=r(d,_,h,l,e[a+3],14,-187363961),l=r(l,d,_,h,e[a+8],20,1163531501),h=r(h,l,d,_,e[a+13],5,-1444681467),_=r(_,h,l,d,e[a+2],9,-51403784),d=r(d,_,h,l,e[a+7],14,1735328473),h=o(h,l=r(l,d,_,h,e[a+12],20,-1926607734),d,_,e[a+5],4,-378558),_=o(_,h,l,d,e[a+8],11,-2022574463),d=o(d,_,h,l,e[a+11],16,1839030562),l=o(l,d,_,h,e[a+14],23,-35309556),h=o(h,l,d,_,e[a+1],4,-1530992060),_=o(_,h,l,d,e[a+4],11,1272893353),d=o(d,_,h,l,e[a+7],16,-155497632),l=o(l,d,_,h,e[a+10],23,-1094730640),h=o(h,l,d,_,e[a+13],4,681279174),_=o(_,h,l,d,e[a],11,-358537222),d=o(d,_,h,l,e[a+3],16,-722521979),l=o(l,d,_,h,e[a+6],23,76029189),h=o(h,l,d,_,e[a+9],4,-640364487),_=o(_,h,l,d,e[a+12],11,-421815835),d=o(d,_,h,l,e[a+15],16,530742520),h=i(h,l=o(l,d,_,h,e[a+2],23,-995338651),d,_,e[a],6,-198630844),_=i(_,h,l,d,e[a+7],10,1126891415),d=i(d,_,h,l,e[a+14],15,-1416354905),l=i(l,d,_,h,e[a+5],21,-57434055),h=i(h,l,d,_,e[a+12],6,1700485571),_=i(_,h,l,d,e[a+3],10,-1894986606),d=i(d,_,h,l,e[a+10],15,-1051523),l=i(l,d,_,h,e[a+1],21,-2054922799),h=i(h,l,d,_,e[a+8],6,1873313359),_=i(_,h,l,d,e[a+15],10,-30611744),d=i(d,_,h,l,e[a+6],15,-1560198380),l=i(l,d,_,h,e[a+13],21,1309151649),h=i(h,l,d,_,e[a+4],6,-145523070),_=i(_,h,l,d,e[a+11],10,-1120210379),d=i(d,_,h,l,e[a+2],15,718787259),l=i(l,d,_,h,e[a+9],21,-343485551),h=t(h,c),l=t(l,u),d=t(d,p),_=t(_,f);return[h,l,d,_]}function a(t){var e,n="";for(e=0;e<32*t.length;e+=8)n+=String.fromCharCode(t[e>>5]>>>e%32&255);return n}function c(t){var e,n=[];for(n[(t.length>>2)-1]=void 0,e=0;e<n.length;e+=1)n[e]=0;for(e=0;e<8*t.length;e+=8)n[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return n}function u(t){var e,n,r="0123456789abcdef",o="";for(n=0;n<t.length;n+=1)e=t.charCodeAt(n),o+=r.charAt(e>>>4&15)+r.charAt(15&e);return o}function p(t){return unescape(encodeURIComponent(t))}function f(t){return function(t){return a(s(c(t),8*t.length))}(p(t))}function h(t,e){return function(t,e){var n,r,o=c(t),i=[],u=[];for(i[15]=u[15]=void 0,o.length>16&&(o=s(o,8*t.length)),n=0;n<16;n+=1)i[n]=909522486^o[n],u[n]=1549556828^o[n];return r=s(i.concat(c(e)),512+8*e.length),a(s(u.concat(r),640))}(p(t),p(e))}return function(t,e,n){return e?n?h(e,t):function(t,e){return u(h(t,e))}(e,t):n?f(t):function(t){return u(f(t))}(t)}}},function(t,e,n){var r={isBlack:function(t){return!(t&&"string"==typeof t&&t.length>0)}},o={addItem:function(t,e){wx.setStorage({key:t.toString(),data:e})},removeItems:function(t){wx.getStorageInfo({success:function(e){var n=e.keys,r=[];n.forEach(function(e){try{wx.getStorageSync(e)===t&&r.push(e)}catch(t){}}),r.forEach(function(t){wx.removeStorage({key:t,success:function(t){}})})}})},getItem:function(t){return wx.getStorageSync(t)}},i={delRepeatItem:function(t){var e=[];return t.forEach(function(t){-1===e.indexOf(t)&&null!=t&&e.push(t)}),e}},s={rooms:{}};t.exports={StringUtils:r,StorageUtils:o,ArrayUtils:i,Cache:s}}])})}).call(this,n("0de9")["default"])},1771:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={userData:""},o={set_UserData:function(t,e){t.userData=e}},i={setUserData:function(t,e){var n=t.commit;n("set_UserData",e)}},s={getUserData:function(t){return t.userData}},a={state:r,mutations:o,actions:i,getters:s};e.default=a},"18ed":function(t,e,n){"use strict";(function(t){function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){s(t,e,n[e])})}return t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){function e(){r(this,e),s(this,"config",{baseUrl:"",header:{"Content-Type":"application/json;charset=UTF-8"},method:"GET",dataType:"json",responseType:"text",success:function(){},fail:function(){},complete:function(){}}),s(this,"interceptor",{request:function(t){t&&(e.requestBeforeFun=t)},response:function(t){t&&(e.requestComFun=t)}})}return i(e,[{key:"setConfig",value:function(t){this.config=t(this.config)}},{key:"request",value:function(){var r=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.baseUrl=o.baseUrl||this.config.baseUrl,o.dataType=o.dataType||this.config.dataType,o.url=e.posUrl(o.url)?o.url:o.baseUrl+o.url,o.data=o.data||{},o.header=o.header||this.config.header,o.method=o.method||this.config.method,new Promise(function(i,s){var a=!0,c=null;o.complete=function(t){var n=t.statusCode;t.config=c,t=e.requestComFun(t),200===n?i(t):s(t)};var u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",e={errMsg:t,config:p};s(e),a=!1},p=n({},r.config,o);c=n({},p,e.requestBeforeFun(p,u)),a&&t.request(c)})}},{key:"get",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.url=t,n.data=e,n.method="GET",this.request(n)}},{key:"post",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.url=t,n.data=e,n.method="POST",this.request(n)}}],[{key:"posUrl",value:function(t){return/(http|https):\/\/([\w.]+\/?)\S*/.test(t)}},{key:"requestBeforeFun",value:function(t){return t}},{key:"requestComFun",value:function(t){return t}}]),e}();e.default=a}).call(this,n("6e42")["default"])},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,s,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var p=u.render;u.render=function(t,e){return c.call(e),p(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return A}),n.d(e,"mapState",function(){return R}),n.d(e,"mapMutations",function(){return x}),n.d(e,"mapGetters",function(){return D}),n.d(e,"mapActions",function(){return C}),n.d(e,"createNamespacedHelpers",function(){return I});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},o="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){o.emit("vuex:mutation",t,e)}))}function s(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function a(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}var u=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},u.prototype.addChild=function(t,e){this._children[t]=e},u.prototype.removeChild=function(t){delete this._children[t]},u.prototype.getChild=function(t){return this._children[t]},u.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},u.prototype.forEachChild=function(t){s(this._children,t)},u.prototype.forEachGetter=function(t){this._rawModule.getters&&s(this._rawModule.getters,t)},u.prototype.forEachAction=function(t){this._rawModule.actions&&s(this._rawModule.actions,t)},u.prototype.forEachMutation=function(t){this._rawModule.mutations&&s(this._rawModule.mutations,t)},Object.defineProperties(u.prototype,p);var f=function(t){this.register([],t,!1)};function h(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;h(t.concat(r),e.getChild(r),n.modules[r])}}f.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},f.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},f.prototype.update=function(t){h([],this.root,t)},f.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new u(e,n);if(0===t.length)this.root=o;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],o)}e.modules&&s(e.modules,function(e,o){r.register(t.concat(o),e,n)})},f.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var l;var d=function(t){var e=this;void 0===t&&(t={}),!l&&"undefined"!==typeof window&&window.Vue&&A(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var o=t.state;void 0===o&&(o={}),"function"===typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new f(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new l;var s=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(t,e){return c.call(s,t,e)},this.commit=function(t,e,n){return u.call(s,t,e,n)},this.strict=r,v(this,o,[],this._modules.root),m(this,o),n.forEach(function(t){return t(e)}),l.config.devtools&&i(this)},_={state:{configurable:!0}};function y(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function g(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;v(t,n,[],t._modules.root,!0),m(t,n,e)}function m(t,e,n){var r=t._vm;t.getters={};var o=t._wrappedGetters,i={};s(o,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var a=l.config.silent;l.config.silent=!0,t._vm=new l({data:{$$state:e},computed:i}),l.config.silent=a,t.strict&&O(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),l.nextTick(function(){return r.$destroy()}))}function v(t,e,n,r,o){var i=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s]=r),!i&&!o){var a=T(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){l.set(a,c,r.state)})}var u=r.context=E(t,s,n);r.forEachMutation(function(e,n){var r=s+n;k(t,r,e,u)}),r.forEachAction(function(e,n){var r=e.root?n:s+n,o=e.handler||e;S(t,r,o,u)}),r.forEachGetter(function(e,n){var r=s+n;w(t,r,e,u)}),r.forEachChild(function(r,i){v(t,e,n.concat(i),r,o)})}function E(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=N(n,r,o),s=i.payload,a=i.options,c=i.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:r?t.commit:function(n,r,o){var i=N(n,r,o),s=i.payload,a=i.options,c=i.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return b(t,e)}},state:{get:function(){return T(t.state,n)}}}),o}function b(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function k(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push(function(e){n.call(t,r.state,e)})}function S(t,e,n,r){var o=t._actions[e]||(t._actions[e]=[]);o.push(function(e,o){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return c(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):i})}function w(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function O(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function T(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function N(t,e,n){return a(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function A(t){l&&t===l||(l=t,r(l))}_.state.get=function(){return this._vm._data.$$state},_.state.set=function(t){0},d.prototype.commit=function(t,e,n){var r=this,o=N(t,e,n),i=o.type,s=o.payload,a=(o.options,{type:i,payload:s}),c=this._mutations[i];c&&(this._withCommit(function(){c.forEach(function(t){t(s)})}),this._subscribers.forEach(function(t){return t(a,r.state)}))},d.prototype.dispatch=function(t,e){var n=this,r=N(t,e),o=r.type,i=r.payload,s={type:o,payload:i},a=this._actions[o];if(a)return this._actionSubscribers.forEach(function(t){return t(s,n.state)}),a.length>1?Promise.all(a.map(function(t){return t(i)})):a[0](i)},d.prototype.subscribe=function(t){return y(t,this._subscribers)},d.prototype.subscribeAction=function(t){return y(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),v(this,this.state,t,this._modules.get(t),n.preserveState),m(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=T(e.state,t.slice(0,-1));l.delete(n,t[t.length-1])}),g(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),g(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,_);var R=M(function(t,e){var n={};return j(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=P(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),x=M(function(t,e){var n={};return j(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=P(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),D=M(function(t,e){var n={};return j(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||P(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),C=M(function(t,e){var n={};return j(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=P(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),I=function(t){return{mapState:R.bind(null,t),mapGetters:D.bind(null,t),mapMutations:x.bind(null,t),mapActions:C.bind(null,t)}};function j(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function M(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function P(t,e,n){var r=t._modulesNamespaceMap[n];return r}var L={Store:d,install:A,version:"3.0.1",mapState:R,mapMutations:x,mapGetters:D,mapActions:C,createNamespacedHelpers:I};e["default"]=L},"330f":function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.http=void 0;s(n("66fd"));var o=s(n("a57d")),i=s(n("18ed"));function s(t){return t&&t.__esModule?t:{default:t}}var a=new i.default;e.http=a,a.setConfig(function(t){return t.baseUrl="http://117.83.152.39:8081/interconnect/",t.header={"Content-Type":"application/json;charset=UTF-8"},t}),a.interceptor.request(function(e,n){return t.showToast({icon:"loading"}),console.log(r("用户数据",o.default.getters.getUserData," at service\\request\\index.js:27")),e.header.isLogin||""!=o.default.getters.getUserData?("weixin"==e.header.service&&(console.log(r("更换微信请求地址"," at service\\request\\index.js:37")),e.url="https://api.weixin.qq.com/sns/"),console.log(r(e," at service\\request\\index.js:45")),console.log(r("请求前拦截"," at service\\request\\index.js:46")),e):(t.reLaunch({url:"/pages/login/login.vue"}),!1)}),a.interceptor.response(function(e){return t.hideToast(),console.log(r("请求后拦截"," at service\\request\\index.js:51")),e})}).call(this,n("6e42")["default"],n("0de9")["default"])},"3c35":function(t,e){(function(e){t.exports=e}).call(this,{})},4362:function(t,e,n){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"5d35":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=[{post_id:"1",uid:1,username:"龙葵",header_image:"../../static/moments/test/header03.jpg",content:{text:"内裤上百条，晒不干一条；衣服晾不干，亲人泪两行",images:["../../static/moments/test/test2.jpg"]},islike:0,like:[{uid:2,username:"小李子,"},{uid:3,username:"小张子"}],comments:{total:2,comment:[{uid:2,username:"小爱",content:"加个微信吧!基金基金基金基金基金基金基金基金基金基金基金基金基金基金基金基金基金基金"},{uid:3,username:"小虎",content:"一起出去好吗?"}]},timestamp:"5分钟前"},{post_id:2,uid:1,username:"菁英公寓-打造属于你的私密空间 小吴",header_image:"../../static/moments/test/header04.jpg",content:{text:"租房:东环朝南\n\r2室大衣柜\n\r燃气热水器\n\r5楼采光充足\n\r随时入住",images:["../../static/moments/test/pig-01.jpg","../../static/moments/test/pig-02.jpg","../../static/moments/test/pig-03.jpg","../../static/moments/test/pig-04.jpg","../../static/moments/test/pig-05.jpg","../../static/moments/test/pig-06.jpg","../../static/moments/test/pig-07.jpg","../../static/moments/test/pig-08.jpg","../../static/moments/test/pig-09.jpg"]},islike:0,like:[{uid:2,username:"小王子,"},{uid:3,username:"张大大"}],comments:{total:2,comment:[{uid:2,username:"小虎",content:"吃错药了!"},{uid:3,username:"小狼",content:"霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍!"}]},timestamp:"1小时前"},{post_id:2,uid:1,username:"BSK 必胜客新苏  小乐",header_image:"../../static/moments/test/header05.jpg",content:{text:"美食花样多，诱人如北北；迎来小宇宙，幸福两行泪[喵喵]这可是小必的心声啊～",images:["../../static/moments/test/header01.jpg","../../static/moments/test/header01.jpg","../../static/moments/test/header01.jpg","../../static/moments/test/header01.jpg"]},islike:0,like:[{uid:2,username:"小王子,"},{uid:3,username:"张大大"}],comments:{total:2,comment:[{uid:2,username:"小虎",content:"吃错药了!"},{uid:3,username:"小狼",content:"霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍霍!"}]},timestamp:"7小时前"}];e.default=r},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function s(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function p(t){return"[object Object]"===u.call(t)}function f(t){return"[object RegExp]"===u.call(t)}function h(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function l(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||p(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function _(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var g=y("key,ref,slot,slot-scope,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var v=Object.prototype.hasOwnProperty;function E(t,e){return v.call(t,e)}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var k=/-(\w)/g,S=b(function(t){return t.replace(k,function(t,e){return e?e.toUpperCase():""})}),w=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),O=/\B([A-Z])/g,T=b(function(t){return t.replace(O,"-$1").toLowerCase()});function N(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function A(t,e){return t.bind(e)}var R=Function.prototype.bind?A:N;function x(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function D(t,e){for(var n in e)t[n]=e[n];return t}function C(t){for(var e={},n=0;n<t.length;n++)t[n]&&D(e,t[n]);return e}function I(t,e,n){}var j=function(t,e,n){return!1},M=function(t){return t};function P(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return P(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every(function(n){return P(t[n],e[n])})}catch(u){return!1}}function L(t,e){for(var n=0;n<t.length;n++)if(P(t[n],e))return n;return-1}function $(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var U=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],G={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:j,isReservedAttr:j,isUnknownElement:j,getTagNamespace:I,parsePlatformTagName:M,mustUseProp:j,async:!0,_lifecycleHooks:V},B=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function F(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function q(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=new RegExp("[^"+B.source+".$_\\d]");function z(t){if(!H.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var Y,J="__proto__"in{},K="undefined"!==typeof window,W="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=W&&WXEnvironment.platform.toLowerCase(),Z=K&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===X),nt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(K)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(eo){}var ot=function(){return void 0===Y&&(Y=!K&&!W&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),Y},it=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function st(t){return"function"===typeof t&&/native code/.test(t.toString())}var at,ct="undefined"!==typeof Symbol&&st(Symbol)&&"undefined"!==typeof Reflect&&st(Reflect.ownKeys);at="undefined"!==typeof Set&&st(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=I,pt=0,ft=function(){this.id=pt++,this.subs=[]};function ht(t){ft.SharedObject.targetStack.push(t),ft.SharedObject.target=t}function lt(){ft.SharedObject.targetStack.pop(),ft.SharedObject.target=ft.SharedObject.targetStack[ft.SharedObject.targetStack.length-1]}ft.prototype.addSub=function(t){this.subs.push(t)},ft.prototype.removeSub=function(t){m(this.subs,t)},ft.prototype.depend=function(){ft.SharedObject.target&&ft.SharedObject.target.addDep(this)},ft.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ft.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ft.SharedObject.target=null,ft.SharedObject.targetStack=[];var dt=function(t,e,n,r,o,i,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},_t={child:{configurable:!0}};_t.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,_t);var yt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function gt(t){return new dt(void 0,void 0,void 0,String(t))}function mt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var vt=Array.prototype,Et=Object.create(vt),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=vt[t];q(Et,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&s.observeArray(o),s.dep.notify(),i})});var kt=Object.getOwnPropertyNames(Et),St=!0;function wt(t){St=t}var Ot=function(t){this.value=t,this.dep=new ft,this.vmCount=0,q(t,"__ob__",this),Array.isArray(t)?(J?t.push!==t.__proto__.push?Nt(t,Et,kt):Tt(t,Et):Nt(t,Et,kt),this.observeArray(t)):this.walk(t)};function Tt(t,e){t.__proto__=e}function Nt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];q(t,i,e[i])}}function At(t,e){var n;if(c(t)&&!(t instanceof dt))return E(t,"__ob__")&&t.__ob__ instanceof Ot?n=t.__ob__:St&&!ot()&&(Array.isArray(t)||p(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Ot(t)),e&&n&&n.vmCount++,n}function Rt(t,e,n,r,o){var i=new ft,s=Object.getOwnPropertyDescriptor(t,e);if(!s||!1!==s.configurable){var a=s&&s.get,c=s&&s.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!o&&At(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return ft.SharedObject.target&&(i.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Ct(e))),e},set:function(e){var r=a?a.call(t):n;e===r||e!==e&&r!==r||a&&!c||(c?c.call(t,e):n=e,u=!o&&At(e),i.notify())}})}}function xt(t,e,n){if(Array.isArray(t)&&h(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Rt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Dt(t,e){if(Array.isArray(t)&&h(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||E(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ct(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ct(e)}Ot.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Rt(t,e[n])},Ot.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)At(t[e])};var It=G.optionMergeStrategies;function jt(t,e){if(!e)return t;for(var n,r,o,i=ct?Reflect.ownKeys(e):Object.keys(e),s=0;s<i.length;s++)n=i[s],"__ob__"!==n&&(r=t[n],o=e[n],E(t,n)?r!==o&&p(r)&&p(o)&&jt(r,o):xt(t,n,o));return t}function Mt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?jt(r,o):o}:e?t?function(){return jt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Pt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Lt(n):n}function Lt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function $t(t,e,n,r){var o=Object.create(t||null);return e?D(o,e):o}It.data=function(t,e,n){return n?Mt(t,e,n):e&&"function"!==typeof e?t:Mt(t,e)},V.forEach(function(t){It[t]=Pt}),U.forEach(function(t){It[t+"s"]=$t}),It.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in D(o,t),e){var s=o[i],a=e[i];s&&!Array.isArray(s)&&(s=[s]),o[i]=s?s.concat(a):Array.isArray(a)?a:[a]}return o},It.props=It.methods=It.inject=It.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return D(o,t),e&&D(o,e),o},It.provide=Mt;var Ut=function(t,e){return void 0===e?t:e};function Vt(t,e){var n=t.props;if(n){var r,o,i,s={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=S(o),s[i]={type:null})}else if(p(n))for(var a in n)o=n[a],i=S(a),s[i]=p(o)?o:{type:o};else 0;t.props=s}}function Gt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(p(n))for(var i in n){var s=n[i];r[i]=p(s)?D({from:i},s):{from:s}}else 0}}function Bt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Ft(t,e,n){if("function"===typeof e&&(e=e.options),Vt(e,n),Gt(e,n),Bt(e),!e._base&&(e.extends&&(t=Ft(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=Ft(t,e.mixins[r],n);var i,s={};for(i in t)a(i);for(i in e)E(t,i)||a(i);function a(r){var o=It[r]||Ut;s[r]=o(t[r],e[r],n,r)}return s}function qt(t,e,n,r){if("string"===typeof n){var o=t[e];if(E(o,n))return o[n];var i=S(n);if(E(o,i))return o[i];var s=w(i);if(E(o,s))return o[s];var a=o[n]||o[i]||o[s];return a}}function Ht(t,e,n,r){var o=e[t],i=!E(n,t),s=n[t],a=Kt(Boolean,o.type);if(a>-1)if(i&&!E(o,"default"))s=!1;else if(""===s||s===T(t)){var c=Kt(String,o.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=zt(r,o,t);var u=St;wt(!0),At(s),wt(u)}return s}function zt(t,e,n){if(E(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Yt(e.type)?r.call(t):r}}function Yt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Jt(t,e){return Yt(t)===Yt(e)}function Kt(t,e){if(!Array.isArray(e))return Jt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Jt(e[n],t))return n;return-1}function Wt(t,e,n){ht();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var s=!1===o[i].call(r,t,e,n);if(s)return}catch(eo){Zt(eo,r,"errorCaptured hook")}}}Zt(t,e,n)}finally{lt()}}function Xt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&l(i)&&!i._handled&&(i.catch(function(t){return Wt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(eo){Wt(eo,r,o)}return i}function Zt(t,e,n){if(G.errorHandler)try{return G.errorHandler.call(null,t,e,n)}catch(eo){eo!==t&&Qt(eo,null,"config.errorHandler")}Qt(t,e,n)}function Qt(t,e,n){if(!K&&!W||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&st(Promise)){var oe=Promise.resolve();te=function(){oe.then(re),et&&setTimeout(I)}}else if(Q||"undefined"===typeof MutationObserver||!st(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&st(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ie=1,se=new MutationObserver(re),ae=document.createTextNode(String(ie));se.observe(ae,{characterData:!0}),te=function(){ie=(ie+1)%2,ae.data=String(ie)}}function ce(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(eo){Wt(eo,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ue=new at;function pe(t){fe(t,ue),ue.clear()}function fe(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!c(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)fe(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)fe(t[r[n]],e)}}}var he=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function le(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Xt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Xt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,o,s,a){var c,u,p,f;for(c in t)u=t[c],p=e[c],f=he(c),r(u)||(r(p)?(r(u.fns)&&(u=t[c]=le(u,a)),i(f.once)&&(u=t[c]=s(f.name,u,f.capture)),n(f.name,u,f.capture,f.passive,f.params)):u!==p&&(p.fns=u,t[c]=p));for(c in e)r(t[c])&&(f=he(c),o(f.name,e[c],f.capture))}function _e(t,e,n){var i=e.options.props;if(!r(i)){var s={},a=t.attrs,c=t.props;if(o(a)||o(c))for(var u in i){var p=T(u);ye(s,c,u,p,!0)||ye(s,a,u,p,!1)}return s}}function ye(t,e,n,r,i){if(o(e)){if(E(e,n))return t[n]=e[n],i||delete e[n],!0;if(E(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ge(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function me(t){return a(t)?[gt(t)]:Array.isArray(t)?Ee(t):void 0}function ve(t){return o(t)&&o(t.text)&&s(t.isComment)}function Ee(t,e){var n,s,c,u,p=[];for(n=0;n<t.length;n++)s=t[n],r(s)||"boolean"===typeof s||(c=p.length-1,u=p[c],Array.isArray(s)?s.length>0&&(s=Ee(s,(e||"")+"_"+n),ve(s[0])&&ve(u)&&(p[c]=gt(u.text+s[0].text),s.shift()),p.push.apply(p,s)):a(s)?ve(u)?p[c]=gt(u.text+s):""!==s&&p.push(gt(s)):ve(s)&&ve(u)?p[c]=gt(u.text+s.text):(i(t._isVList)&&o(s.tag)&&r(s.key)&&o(e)&&(s.key="__vlist"+e+"_"+n+"__"),p.push(s)));return p}function be(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function ke(t){var e=Se(t.$options.inject,t);e&&(wt(!1),Object.keys(e).forEach(function(n){Rt(t,n,e[n])}),wt(!0))}function Se(t,e){if(t){for(var n=Object.create(null),r=ct?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var s=t[i].from,a=e;while(a){if(a._provided&&E(a._provided,s)){n[i]=a._provided[s];break}a=a.$parent}if(!a)if("default"in t[i]){var c=t[i].default;n[i]="function"===typeof c?c.call(e):c}else 0}}return n}}function we(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],s=i.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,i.context!==e&&i.fnContext!==e||!s||null==s.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(i):(n.default||(n.default=[])).push(i);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===i.tag?c.push.apply(c,i.children||[]):c.push(i)}}for(var u in n)n[u].every(Oe)&&delete n[u];return n}function Oe(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Te(t,e,r){var o,i=Object.keys(e).length>0,s=t?!!t.$stable:!i,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(s&&r&&r!==n&&a===r.$key&&!i&&!r.$hasNormal)return r;for(var c in o={},t)t[c]&&"$"!==c[0]&&(o[c]=Ne(e,c,t[c]))}else o={};for(var u in e)u in o||(o[u]=Ae(e,u));return t&&Object.isExtensible(t)&&(t._normalized=o),q(o,"$stable",s),q(o,"$key",a),q(o,"$hasNormal",i),o}function Ne(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:me(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Ae(t,e){return function(){return t[e]}}function Re(t,e){var n,r,i,s,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(ct&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),p=u.next();while(!p.done)n.push(e(p.value,n.length)),p=u.next()}else for(s=Object.keys(t),n=new Array(s.length),r=0,i=s.length;r<i;r++)a=s[r],n[r]=e(t[a],a,r);return o(n)||(n=[]),n._isVList=!0,n}function xe(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=D(D({},r),n)),o=i(n)||e):o=this.$slots[t]||e;var s=n&&n.slot;return s?this.$createElement("template",{slot:s},o):o}function De(t){return qt(this.$options,"filters",t,!0)||M}function Ce(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ie(t,e,n,r,o){var i=G.keyCodes[e]||n;return o&&r&&!G.keyCodes[e]?Ce(o,r):i?Ce(i,t):r?T(r)!==e:void 0}function je(t,e,n,r,o){if(n)if(c(n)){var i;Array.isArray(n)&&(n=C(n));var s=function(s){if("class"===s||"style"===s||g(s))i=t;else{var a=t.attrs&&t.attrs.type;i=r||G.mustUseProp(e,a,s)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=S(s),u=T(s);if(!(c in i)&&!(u in i)&&(i[s]=n[s],o)){var p=t.on||(t.on={});p["update:"+s]=function(t){n[s]=t}}};for(var a in n)s(a)}else;return t}function Me(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Le(r,"__static__"+t,!1),r)}function Pe(t,e,n){return Le(t,"__once__"+e+(n?"_"+n:""),!0),t}function Le(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&$e(t[r],e+"_"+r,n);else $e(t,e,n)}function $e(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ue(t,e){if(e)if(p(e)){var n=t.on=t.on?D({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function Ve(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?Ve(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function Ge(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Be(t,e){return"string"===typeof t?e+t:t}function Fe(t){t._o=Pe,t._n=_,t._s=d,t._l=Re,t._t=xe,t._q=P,t._i=L,t._m=Me,t._f=De,t._k=Ie,t._b=je,t._v=gt,t._e=yt,t._u=Ve,t._g=Ue,t._d=Ge,t._p=Be}function qe(t,e,r,o,s){var a,c=this,u=s.options;E(o,"_uid")?(a=Object.create(o),a._original=o):(a=o,o=o._original);var p=i(u._compiled),f=!p;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=Se(u.inject,o),this.slots=function(){return c.$slots||Te(t.scopedSlots,c.$slots=we(r,o)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Te(t.scopedSlots,this.slots())}}),p&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Te(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var i=rn(a,t,e,n,r,f);return i&&!Array.isArray(i)&&(i.fnScopeId=u._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return rn(a,t,e,n,r,f)}}function He(t,e,r,i,s){var a=t.options,c={},u=a.props;if(o(u))for(var p in u)c[p]=Ht(p,u,e||n);else o(r.attrs)&&Ye(c,r.attrs),o(r.props)&&Ye(c,r.props);var f=new qe(r,c,s,i,t),h=a.render.call(null,f._c,f);if(h instanceof dt)return ze(h,r,f.parent,a,f);if(Array.isArray(h)){for(var l=me(h)||[],d=new Array(l.length),_=0;_<l.length;_++)d[_]=ze(l[_],r,f.parent,a,f);return d}}function ze(t,e,n,r,o){var i=mt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function Ye(t,e){for(var n in e)t[S(n)]=e[n]}Fe(qe.prototype);var Je={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Je.prepatch(n,n)}else{var r=t.componentInstance=Xe(t,Sn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Nn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Dn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Fn(n):Rn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?xn(e,!0):e.$destroy())}},Ke=Object.keys(Je);function We(t,e,n,s,a){if(!r(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var p;if(r(t.cid)&&(p=t,t=dn(p,u),void 0===t))return ln(p,e,n,s,a);e=e||{},hr(t),o(e.model)&&tn(t.options,e);var f=_e(e,t,a);if(i(t.options.functional))return He(t,f,e,n,s);var h=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var l=e.slot;e={},l&&(e.slot=l)}Ze(e);var d=t.options.name||a,_=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:f,listeners:h,tag:a,children:s},p);return _}}}function Xe(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Ke.length;n++){var r=Ke[n],o=e[r],i=Je[r];o===i||o&&o._merged||(e[r]=o?Qe(i,o):i)}}function Qe(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),s=i[r],a=e.model.callback;o(s)?(Array.isArray(s)?-1===s.indexOf(a):s!==a)&&(i[r]=[a].concat(s)):i[r]=a}var en=1,nn=2;function rn(t,e,n,r,o,s){return(Array.isArray(n)||a(n))&&(o=r,r=n,n=void 0),i(s)&&(o=nn),on(t,e,n,r,o)}function on(t,e,n,r,i){if(o(n)&&o(n.__ob__))return yt();if(o(n)&&o(n.is)&&(e=n.is),!e)return yt();var s,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===nn?r=me(r):i===en&&(r=ge(r)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||G.getTagNamespace(e),s=G.isReservedTag(e)?new dt(G.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(c=qt(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):We(c,n,t,r,e)):s=We(e,n,t,r);return Array.isArray(s)?s:o(s)?(o(a)&&sn(s,a),o(n)&&an(n),s):yt()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var s=0,a=t.children.length;s<a;s++){var c=t.children[s];o(c.tag)&&(r(c.ns)||i(n)&&"svg"!==c.tag)&&sn(c,e,n)}}function an(t){c(t.style)&&pe(t.style),c(t.class)&&pe(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=we(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return rn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return rn(t,e,n,r,o,!0)};var i=r&&r.data;Rt(t,"$attrs",i&&i.attrs||n,null,!0),Rt(t,"$listeners",e._parentListeners||n,null,!0)}var un,pn=null;function fn(t){Fe(t.prototype),t.prototype.$nextTick=function(t){return ce(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=Te(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{pn=e,t=r.call(e._renderProxy,e.$createElement)}catch(eo){Wt(eo,e,"render"),t=e._vnode}finally{pn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=yt()),t.parent=o,t}}function hn(t,e){return(t.__esModule||ct&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function ln(t,e,n,r,o){var i=yt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function dn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=pn;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var s=t.owners=[n],a=!0,u=null,p=null;n.$on("hook:destroyed",function(){return m(s,n)});var f=function(t){for(var e=0,n=s.length;e<n;e++)s[e].$forceUpdate();t&&(s.length=0,null!==u&&(clearTimeout(u),u=null),null!==p&&(clearTimeout(p),p=null))},h=$(function(n){t.resolved=hn(n,e),a?s.length=0:f(!0)}),d=$(function(e){o(t.errorComp)&&(t.error=!0,f(!0))}),_=t(h,d);return c(_)&&(l(_)?r(t.resolved)&&_.then(h,d):l(_.component)&&(_.component.then(h,d),o(_.error)&&(t.errorComp=hn(_.error,e)),o(_.loading)&&(t.loadingComp=hn(_.loading,e),0===_.delay?t.loading=!0:u=setTimeout(function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,f(!1))},_.delay||200)),o(_.timeout)&&(p=setTimeout(function(){p=null,r(t.resolved)&&d(null)},_.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function _n(t){return t.isComment&&t.asyncFactory}function yn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||_n(n)))return n}}function gn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&bn(t,e)}function mn(t,e){un.$on(t,e)}function vn(t,e){un.$off(t,e)}function En(t,e){var n=un;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function bn(t,e,n){un=t,de(e,n||{},mn,vn,En,t),un=void 0}function kn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,s=n._events[t];if(!s)return n;if(!e)return n._events[t]=null,n;var a=s.length;while(a--)if(i=s[a],i===e||i.fn===e){s.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?x(n):n;for(var r=x(arguments,1),o='event handler for "'+t+'"',i=0,s=n.length;i<s;i++)Xt(n[i],e,r,e,o)}return e}}var Sn=null;function wn(t){var e=Sn;return Sn=t,function(){Sn=e}}function On(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Tn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=wn(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Dn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Dn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Nn(t,e,r,o,i){var s=o.data.scopedSlots,a=t.$scopedSlots,c=!!(s&&!s.$stable||a!==n&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key),u=!!(i||t.$options._renderChildren||c);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){wt(!1);for(var p=t._props,f=t.$options._propKeys||[],h=0;h<f.length;h++){var l=f[h],d=t.$options.props;p[l]=Ht(l,d,e,t)}wt(!0),t.$options.propsData=e}r=r||n;var _=t.$options._parentListeners;t.$options._parentListeners=r,bn(t,r,_),u&&(t.$slots=we(i,o.context),t.$forceUpdate())}function An(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Rn(t,e){if(e){if(t._directInactive=!1,An(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Rn(t.$children[n]);Dn(t,"activated")}}function xn(t,e){if((!e||(t._directInactive=!0,!An(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)xn(t.$children[n]);Dn(t,"deactivated")}}function Dn(t,e){ht();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Xt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),lt()}var Cn=[],In=[],jn={},Mn=!1,Pn=!1,Ln=0;function $n(){Ln=Cn.length=In.length=0,jn={},Mn=Pn=!1}var Un=Date.now;if(K&&!Q){var Vn=window.performance;Vn&&"function"===typeof Vn.now&&Un()>document.createEvent("Event").timeStamp&&(Un=function(){return Vn.now()})}function Gn(){var t,e;for(Un(),Pn=!0,Cn.sort(function(t,e){return t.id-e.id}),Ln=0;Ln<Cn.length;Ln++)t=Cn[Ln],t.before&&t.before(),e=t.id,jn[e]=null,t.run();var n=In.slice(),r=Cn.slice();$n(),qn(n),Bn(r),it&&G.devtools&&it.emit("flush")}function Bn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Dn(r,"updated")}}function Fn(t){t._inactive=!1,In.push(t)}function qn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Rn(t[e],!0)}function Hn(t){var e=t.id;if(null==jn[e]){if(jn[e]=!0,Pn){var n=Cn.length-1;while(n>Ln&&Cn[n].id>t.id)n--;Cn.splice(n+1,0,t)}else Cn.push(t);Mn||(Mn=!0,ce(Gn))}}var zn=0,Yn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++zn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new at,this.newDepIds=new at,this.expression="","function"===typeof e?this.getter=e:(this.getter=z(e),this.getter||(this.getter=I)),this.value=this.lazy?void 0:this.get()};Yn.prototype.get=function(){var t;ht(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(eo){if(!this.user)throw eo;Wt(eo,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&pe(t),lt(),this.cleanupDeps()}return t},Yn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Yn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Yn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Hn(this)},Yn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(eo){Wt(eo,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Yn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Yn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Yn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Jn={enumerable:!0,configurable:!0,get:I,set:I};function Kn(t,e,n){Jn.get=function(){return this[e][n]},Jn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Jn)}function Wn(t){t._watchers=[];var e=t.$options;e.props&&Xn(t,e.props),e.methods&&ir(t,e.methods),e.data?Zn(t):At(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&sr(t,e.watch)}function Xn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||wt(!1);var s=function(i){o.push(i);var s=Ht(i,e,n,t);Rt(r,i,s),i in t||Kn(t,"_props",i)};for(var a in e)s(a);wt(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?Qn(e,t):e||{},p(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&E(r,i)||F(i)||Kn(t,"_data",i)}At(e,!0)}function Qn(t,e){ht();try{return t.call(e,e)}catch(eo){return Wt(eo,e,"data()"),{}}finally{lt()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],s="function"===typeof i?i:i.get;0,r||(n[o]=new Yn(t,s||I,I,tr)),o in t||nr(t,o,i)}}function nr(t,e,n){var r=!ot();"function"===typeof n?(Jn.get=r?rr(e):or(n),Jn.set=I):(Jn.get=n.get?r&&!1!==n.cache?rr(e):or(n.get):I,Jn.set=n.set||I),Object.defineProperty(t,e,Jn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ft.SharedObject.target&&e.depend(),e.value}}function or(t){return function(){return t.call(this,this)}}function ir(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?I:R(e[n],t)}function sr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)ar(t,n,r[o]);else ar(t,n,r)}}function ar(t,e,n,r){return p(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function cr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=xt,t.prototype.$delete=Dt,t.prototype.$watch=function(t,e,n){var r=this;if(p(e))return ar(r,t,e,n);n=n||{},n.user=!0;var o=new Yn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Wt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var ur=0;function pr(t){t.prototype._init=function(t){var e=this;e._uid=ur++,e._isVue=!0,t&&t._isComponent?fr(e,t):e.$options=Ft(hr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,On(e),gn(e),cn(e),Dn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&ke(e),Wn(e),"mp-toutiao"!==e.mpHost&&be(e),"mp-toutiao"!==e.mpHost&&Dn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function fr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function hr(t){var e=t.options;if(t.super){var n=hr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=lr(t);o&&D(t.extendOptions,o),e=t.options=Ft(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function lr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function dr(t){this._init(t)}function _r(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=x(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function yr(t){t.mixin=function(t){return this.options=Ft(this.options,t),this}}function gr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var s=function(t){this._init(t)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=e++,s.options=Ft(n.options,t),s["super"]=n,s.options.props&&mr(s),s.options.computed&&vr(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,U.forEach(function(t){s[t]=n[t]}),i&&(s.options.components[i]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=D({},s.options),o[r]=s,s}}function mr(t){var e=t.options.props;for(var n in e)Kn(t.prototype,"_props",n)}function vr(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function Er(t){U.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&p(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function br(t){return t&&(t.Ctor.options.name||t.tag)}function kr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function Sr(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var s=n[i];if(s){var a=br(s.componentOptions);a&&!e(a)&&wr(n,i,r,o)}}}function wr(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,m(n,e)}pr(dr),cr(dr),kn(dr),Tn(dr),fn(dr);var Or=[String,RegExp,Array],Tr={name:"keep-alive",abstract:!0,props:{include:Or,exclude:Or,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)wr(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Sr(t,function(t){return kr(e,t)})}),this.$watch("exclude",function(e){Sr(t,function(t){return!kr(e,t)})})},render:function(){var t=this.$slots.default,e=yn(t),n=e&&e.componentOptions;if(n){var r=br(n),o=this,i=o.include,s=o.exclude;if(i&&(!r||!kr(i,r))||s&&r&&kr(s,r))return e;var a=this,c=a.cache,u=a.keys,p=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[p]?(e.componentInstance=c[p].componentInstance,m(u,p),u.push(p)):(c[p]=e,u.push(p),this.max&&u.length>parseInt(this.max)&&wr(c,u[0],u,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Nr={KeepAlive:Tr};function Ar(t){var e={get:function(){return G}};Object.defineProperty(t,"config",e),t.util={warn:ut,extend:D,mergeOptions:Ft,defineReactive:Rt},t.set=xt,t.delete=Dt,t.nextTick=ce,t.observable=function(t){return At(t),t},t.options=Object.create(null),U.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,D(t.options.components,Nr),_r(t),yr(t),gr(t),Er(t)}Ar(dr),Object.defineProperty(dr.prototype,"$isServer",{get:ot}),Object.defineProperty(dr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dr,"FunctionalRenderContext",{value:qe}),dr.version="2.6.10";var Rr="[object Array]",xr="[object Object]";function Dr(t,e){var n={};return Cr(t,e),Ir(t,e,"",n),n}function Cr(t,e){if(t!==e){var n=Mr(t),r=Mr(e);if(n==xr&&r==xr){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:Cr(i,e[o])}}else n==Rr&&r==Rr&&t.length>=e.length&&e.forEach(function(e,n){Cr(t[n],e)})}}function Ir(t,e,n,r){if(t!==e){var o=Mr(t),i=Mr(e);if(o==xr)if(i!=xr||Object.keys(t).length<Object.keys(e).length)jr(r,n,t);else{var s=function(o){var i=t[o],s=e[o],a=Mr(i),c=Mr(s);if(a!=Rr&&a!=xr)i!=e[o]&&jr(r,(""==n?"":n+".")+o,i);else if(a==Rr)c!=Rr?jr(r,(""==n?"":n+".")+o,i):i.length<s.length?jr(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Ir(t,s[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(a==xr)if(c!=xr||Object.keys(i).length<Object.keys(s).length)jr(r,(""==n?"":n+".")+o,i);else for(var u in i)Ir(i[u],s[u],(""==n?"":n+".")+o+"."+u,r)};for(var a in t)s(a)}else o==Rr?i!=Rr?jr(r,n,t):t.length<e.length?jr(r,n,t):t.forEach(function(t,o){Ir(t,e[o],n+"["+o+"]",r)}):jr(r,n,t)}}function jr(t,e,n){t[e]=n}function Mr(t){return Object.prototype.toString.call(t)}function Pr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Lr(t){return Cn.find(function(e){return t._watcher===e})}function $r(t,e){if(!t.__next_tick_pending&&!Lr(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ce(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(eo){Wt(eo,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Ur(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Vr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=Ur(this)}catch(a){console.error(a)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var s=Dr(o,i);Object.keys(s).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(s)),this.__next_tick_pending=!0,r.setData(s,function(){n.__next_tick_pending=!1,Pr(n)})):Pr(this)}};function Gr(){}function Br(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Gr),t.$options.render||(t.$options.render=Gr),"mp-toutiao"!==t.mpHost&&Dn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Yn(t,r,I,{before:function(){t._isMounted&&!t._isDestroyed&&Dn(t,"beforeUpdate")}},!0),n=!1,t}function Fr(t,e){return o(t)||o(e)?qr(t,Hr(e)):""}function qr(t,e){return t?e?t+" "+e:t:e||""}function Hr(t){return Array.isArray(t)?zr(t):c(t)?Yr(t):"string"===typeof t?t:""}function zr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=Hr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Yr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Jr=b(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Kr(t){return Array.isArray(t)?C(t):"string"===typeof t?Jr(t):t}var Wr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Xr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Xr(t[r],n.slice(1).join("."))}function Zr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:x(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return $r(this,t)},Wr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=be,t.prototype.__init_injections=ke,t.prototype.__call_hook=function(t,e){var n=this;ht();var r,o=n.$options[t],i=t+" hook";if(o)for(var s=0,a=o.length;s<a;s++)r=Xt(o[s],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t),lt(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return p(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Xr(e||this,t)},t.prototype.__get_class=function(t,e){return Fr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Kr(t),r=e?D(e,n):n;return Object.keys(r).map(function(t){return T(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,o,i,s;if(Array.isArray(t)){for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);return n}if(c(t)){for(i=Object.keys(t),n=Object.create(null),r=0,o=i.length;r<o;r++)s=i[r],n[s]=e(t[s],s,r);return n}return[]}}var Qr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function to(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Qr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;Qr.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=Qr}dr.prototype.__patch__=Vr,dr.prototype.$mount=function(t,e){return Br(this,t,e)},to(dr),Zr(dr),e["default"]=dr}.call(this,n("c8ba"))},"68ca":function(t,e,n){},"6c01":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__B7D51E8"};e.default=r},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=we,e.createPage=Se,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return c(t)||a(t,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done);r=!0)if(n.push(s.value),e&&n.length===e)break}catch(c){o=!0,i=c}finally{try{r||null==a["return"]||a["return"]()}finally{if(o)throw i}}return n}function c(t){if(Array.isArray(t))return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){return l(t)||h(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,_=Object.prototype.hasOwnProperty;function y(t){return"function"===typeof t}function g(t){return"string"===typeof t}function m(t){return"[object Object]"===d.call(t)}function v(t,e){return _.call(t,e)}function E(){}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var k=/-(\w)/g,S=b(function(t){return t.replace(k,function(t,e){return e?e.toUpperCase():""})}),w=["invoke","success","fail","complete","returnValue"],O={},T={};function N(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?A(n):n}function A(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function R(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function x(t,e){Object.keys(e).forEach(function(n){-1!==w.indexOf(n)&&y(e[n])&&(t[n]=N(t[n],e[n]))})}function D(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==w.indexOf(n)&&y(e[n])&&R(t[n],e[n])})}function C(t,e){"string"===typeof t&&m(e)?x(T[t]||(T[t]={}),e):m(t)&&x(O,t)}function I(t,e){"string"===typeof t?m(e)?D(T[t],e):delete T[t]:m(t)&&D(O,t)}function j(t){return function(e){return t(e)||e}}function M(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function P(t,e){for(var n=!1,r=0;r<t.length;r++){var o=t[r];if(n)n=Promise.then(j(o));else{var i=o(e);if(M(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function L(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){P(t[n],e).then(function(t){return y(r)&&r(t)||t})}}}),e}function $(t,e){var n=[];Array.isArray(O.returnValue)&&n.push.apply(n,p(O.returnValue));var r=T[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,p(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function U(t){var e=Object.create(null);Object.keys(O).forEach(function(t){"returnValue"!==t&&(e[t]=O[t].slice())});var n=T[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function V(t,e,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var s=U(t);if(s&&Object.keys(s).length){if(Array.isArray(s.invoke)){var a=P(s.invoke,n);return a.then(function(t){return e.apply(void 0,[L(s,t)].concat(o))})}return e.apply(void 0,[L(s,n)].concat(o))}return e.apply(void 0,[n].concat(o))}var G={returnValue:function(t){return M(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},B=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,F=/^create|Manager$/,q=/^on/;function H(t){return F.test(t)}function z(t){return B.test(t)}function Y(t){return q.test(t)&&"onPush"!==t}function J(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function K(t){return!(H(t)||z(t)||Y(t))}function W(t,e){return K(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return y(n.success)||y(n.fail)||y(n.complete)?$(t,V.apply(void 0,[t,e,n].concat(o))):$(t,J(new Promise(function(r,i){V.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var X=1e-4,Z=750,Q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Q="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Z*(e||tt);return n<0&&(n=-n),n=Math.floor(n+X),0===n?1!==et&&Q?.5:1:t<0?-n:n}var ot={promiseInterceptor:G},it=Object.freeze({upx2px:rt,interceptors:ot,addInterceptor:C,removeInterceptor:I}),st={},at=[],ct=[],ut=["success","fail","cancel","complete"];function pt(t,e,n){return function(r){return e(ht(t,r,n))}}function ft(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m(e)){var i=!0===o?e:{};for(var s in y(n)&&(n=n(e,i)||{}),e)if(v(n,s)){var a=n[s];y(a)&&(a=a(e[s],e,i)),a?g(a)?i[a]=e[s]:m(a)&&(i[a.name?a.name:s]=a.value):console.warn("app-plus ".concat(t,"暂不支持").concat(s))}else-1!==ut.indexOf(s)?i[s]=pt(t,e[s],r):o||(i[s]=e[s]);return i}return y(e)&&(e=pt(t,e,r)),e}function ht(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return y(st.returnValue)&&(e=st.returnValue(t,e)),ft(t,e,n,{},r)}function lt(t,e){if(v(st,t)){var n=st[t];return n?function(e,r){var o=n;y(n)&&(o=n(e)),e=ft(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var s=wx[o.name||t].apply(wx,i);return z(t)?ht(t,s,o.returnValue,H(t)):s}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),_t=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function yt(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};y(n)&&n(o),y(r)&&r(o)}}_t.forEach(function(t){dt[t]=yt(t)});var gt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function mt(t,e,n){return t[e].apply(t,n)}function vt(){return mt(gt(),"$on",Array.prototype.slice.call(arguments))}function Et(){return mt(gt(),"$off",Array.prototype.slice.call(arguments))}function bt(){return mt(gt(),"$once",Array.prototype.slice.call(arguments))}function kt(){return mt(gt(),"$emit",Array.prototype.slice.call(arguments))}var St=Object.freeze({$on:vt,$off:Et,$once:bt,$emit:kt});function wt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function Ot(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;wt("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),o=t.show,i=t.hide,s=t.close,a=function(){r.setStyle({mask:n})},c=function(){r.setStyle({mask:"none"})};t.show=function(){a();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){c();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){c(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return s.apply(t,r)}}}function Tt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Ot(e),e}var Nt=Object.freeze({getSubNVueById:Tt,requireNativePlugin:wt}),At=Page,Rt=Component,xt=/:/g,Dt=b(function(t){return S(t.replace(xt,"-"))});function Ct(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[Dt(n)].concat(o))}}}function It(t,e){var n=e[t];e[t]=n?function(){Ct(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Ct(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return It("onLoad",t),At(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return It("created",t),Rt(t)};var jt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Mt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){v(n,e)&&(t[e]=n[e])})}function Pt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,y(e))return!!y(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(y(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Pt(t,e)}):void 0}function Lt(t,e,n){e.forEach(function(e){Pt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function $t(t,e){var n;return e=e.default||e,y(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Ut(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Vt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Gt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return m(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||v(n,t)||(n[t]=r[t])}),n}var Bt=[String,Number,Boolean,Object,Array,null];function Ft(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function qt(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var s=[];return Array.isArray(n)&&n.forEach(function(t){s.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),m(r)&&r.props&&s.push(e({properties:zt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){m(t)&&t.props&&s.push(e({properties:zt(t.props,!0)}))}),s}function Ht(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function zt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Ft(t)}}):m(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(m(r)){var o=r["default"];y(o)&&(o=o()),r.type=Ht(e,r.type),n[e]={type:-1!==Bt.indexOf(r.type)?r.type:null,value:o,observer:Ft(e)}}else{var i=Ht(e,r);n[e]={type:-1!==Bt.indexOf(i)?i:null,observer:Ft(e)}}}),n}function Yt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=E,t.preventDefault=E,t.target=t.target||{},v(t,"detail")||(t.detail={}),m(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Jt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],s=e[3],a=r?t.__get_value(r,n):n;Number.isInteger(a)?n=o:i?Array.isArray(a)?n=a.find(function(e){return t.__get_value(i,e)===o}):m(a)?n=Object.keys(a).find(function(e){return t.__get_value(i,a[e])===o}):console.error("v-for 暂不支持循环数据：",a):n=a[o],s&&(n=t.__get_value(s,n))}}),n}function Kt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Jt(t,e)}),r}function Wt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Xt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,s=!1;if(o&&(s=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return s?[e]:e.detail.__args__||e.detail;var a=Kt(t,r,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!s?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(Wt(t)):"string"===typeof t&&v(a,t)?c.push(a[t]):c.push(t)}),c}var Zt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Yt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=t.type,i=[];return r.forEach(function(n){var r=n[0],s=n[1],a=r.charAt(0)===Qt;r=a?r.slice(1):r;var c=r.charAt(0)===Zt;r=c?r.slice(1):r,s&&te(o,r)&&s.forEach(function(n){var r=n[0];if(r){var o=e.$vm;if(o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent),"$emit"===r)return void o.$emit.apply(o,Xt(e.$vm,t,n[1],n[2],a,r));var s=o[r];if(!y(s))throw new Error(" _vm.".concat(r," is not a function"));if(c){if(s.once)return;s.once=!0}i.push(s.apply(o,Xt(e.$vm,t,n[1],n[2],a,r)))}})}),"input"===o&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,o=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=u({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),Mt(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};i.globalData=t.$options.globalData||{};var s=t.$options.methods;return s&&Object.keys(s).forEach(function(t){i[t]=s[t]}),Lt(i,ne),i}var oe=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ie(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=ie(n[o],e),r)return r}function se(t){return Behavior(t)}function ae(){return!!this.route}function ce(t){this.triggerEvent("__l",t)}function ue(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function pe(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=ie(this.$vm,r)),e||(e=this.$vm),o.parent=e}function fe(t){return re(t,{mocks:oe,initRefs:ue})}var he=["onUniNViewMessage"];function le(t){var e=fe(t);return Lt(e,he),e}function de(t){return App(le(t)),t}function _e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,s=$t(r.default,t),a=i(s,2),c=a[0],u=a[1],p={multipleSlots:!0,addGlobalClass:!0},f={options:p,data:Gt(u,r.default.prototype),behaviors:qt(u,se),properties:zt(u.props,!1,u.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Vt(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),Ut(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:pe,__e:ee}};return Array.isArray(u.wxsCallMethods)&&u.wxsCallMethods.forEach(function(t){f.methods[t]=function(e){return this.$vm[t](e)}}),n?f:[f,c]}function ye(t){return _e(t,{isPage:ae,initRelation:ce})}function ge(t){var e=ye(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var me=["onShow","onHide","onUnload"];function ve(t,e){e.isPage,e.initRelation;var n=ge(t);return Lt(n.methods,me,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function Ee(t){return ve(t,{isPage:ae,initRelation:ce})}me.push.apply(me,jt);var be=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function ke(t){var e=Ee(t);return Lt(e.methods,be),e}function Se(t){return Component(ke(t))}function we(t){return Component(ge(t))}at.forEach(function(t){st[t]=!1}),ct.forEach(function(t){var e=st[t]&&st[t].name?st[t].name:t;wx.canIUse(e)||(st[t]=!1)});var Oe={};Object.keys(it).forEach(function(t){Oe[t]=it[t]}),Object.keys(St).forEach(function(t){Oe[t]=St[t]}),Object.keys(Nt).forEach(function(t){Oe[t]=W(t,Nt[t])}),Object.keys(wx).forEach(function(t){(v(wx,t)||v(st,t))&&(Oe[t]=W(t,lt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Oe,t.UniEmitter=St),wx.createApp=de,wx.createPage=Se,wx.createComponent=we;var Te=Oe,Ne=Te;e.default=Ne}).call(this,n("c8ba"))},"780a":function(t,e,n){"use strict";function r(t){var e={880001:"未知错误码",880002:"参数不合法",880003:"非法内容格式",880004:"非法内容格式",880005:"文件不存在",880006:"注册之前先退出",880007:"被限制注册",880008:"msg_id 非法",880101:"appkey 不存在",880102:"签名错误",880103:"用户不存在",880104:"密码错误",880106:"签名过期",880107:"已经是登录状态",880109:"重复登录操作",880110:"多通道错误，更新sdk版本",880111:"用户被禁用",880203:"目标用户不存在",880204:"目标群组不存在",880205:"用户不在群组",880206:"消息大小超过限制",880207:"用户被对方拉黑",880208:"消息包含敏感词汇",880209:"发送速度超过限制",880210:"文件大小超过限制",880212:"禁言中",880402:"没有创建群组的权限",880403:"群数量到达上限",880404:"群名字超过长度限制，创建失败",880405:"群描述长度超过限制",880602:"目标为空",880604:"没权限添加群成员",880606:"成员列表中有用户没有被添加到群组的权限",880607:"重复添加",880608:"数量超过限制",880609:"成员列表中存在成员的群组数量超过限制",880610:"用户已经在群里面",880611:"群类型不支持该操作",880612:"已经处理",880614:"无权限操作",880704:"用户没有删除群成员的权限",880705:"成员列表中存在成员用户没权限删除",880903:"成员列表中有成员不能被添加，添加失败",880904:"重复添加",881101:"该成员已处于免打扰状态",881102:"该成员不处于免打扰状态",881105:"该群组已处于免打扰状态",881106:"该群组不处于免打扰状态",881107:"已经设置免打扰",881108:"没有设置免打扰",881203:"已经设置了屏蔽",881204:"群未设置屏蔽",881302:"已经是好友",881303:"非好友关系",881304:"非法备注",881305:"添加好友失败：邀请事件无效",881401:"超出撤回时间",881402:"请求撤回方不是消息发送方",881403:"消息不存在",881404:"已经撤回",881501:"用户不在聊天室",881502:"用户被禁止发消息",881503:"聊天室不存在",881504:"消息长度超出限制",881507:"用户已经在聊天室",881508:"超过聊天室人数限制",881509:"消息格式错误",881602:"目标用户未登录",881604:"消息长度超出限制",881701:"用户不是群管理员",882001:"系统内部错误",882002:"视操作而定",882003:"参数不合法",882004:"无效授权",882005:"系统繁忙，稍后重试"};return e[t]}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_id:"@dcloudio/uni-stat@2.0.0-v3-24020191018001",_inBundle:!1,_integrity:"sha512-nYBm5pRrYzrj2dKMqucWSF2PwInUMnn3MLHM/ik3gnLUEKSW61rzcY1RPlUwaH7c+Snm6N+bAJzmj3GvlrlVXA==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"^2.0.0-alpha-24420191128001",saveSpec:null,fetchSpec:"^2.0.0-alpha-24420191128001"},_requiredBy:["/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-v3-24020191018001.tgz",_shasum:"6ef04326cc0b945726413eebe442ab8f47c7536c",_spec:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"197e8df53cc9d4c3f6eb722b918ccf51672b5cfe",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-v3-24020191018001"}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?o(t):e}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}var f=e.version,h="https://tongji.dcloud.io/uni/stat",l="https://tongji.dcloud.io/uni/stat.gif",d=1800,_=300,y=10,g="__DC_STAT_UUID",m="__DC_UUID_VALUE";function v(){var e="";if("n"===S()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(g)}catch(n){e=m}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(g,e)}catch(n){t.setStorageSync(g,m)}}return e}var E=function(t){var e=Object.keys(t),n=e.sort(),r={},o="";for(var i in n)r[n[i]]=t[n[i]],o+=n[i]+"="+t[n[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}},b=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},k=function(){return parseInt((new Date).getTime()/1e3)},S=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},w=function(){var e="";return"wx"!==S()&&"qq"!==S()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},O=function(){return"n"===S()?plus.runtime.version:""},T=function(){var t=S(),e="";return"n"===t&&(e=plus.runtime.channel),e},N=function(e){var n=S(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},A="First__Visit__Time",R="Last__Visit__Time",x=function(){var e=t.getStorageSync(A),n=0;return e?n=e:(n=k(),t.setStorageSync(A,n),t.removeStorageSync(R)),n},D=function(){var e=t.getStorageSync(R),n=0;return n=e||"",t.setStorageSync(R,k()),n},C="__page__residence__time",I=0,j=0,M=function(){return I=k(),"n"===S()&&t.setStorageSync(C,k()),I},P=function(){return j=k(),"n"===S()&&(I=t.getStorageSync(C)),j-I},L="Total__Visit__Count",$=function(){var e=t.getStorageSync(L),n=1;return e&&(n=e,n++),t.setStorageSync(L,n),n},U=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},V=0,G=0,B=function(){var t=(new Date).getTime();return V=t,G=0,t},F=function(){var t=(new Date).getTime();return G=t,t},q=function(t){var e=0;if(0!==V&&(e=G-V),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>_;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>d;return{residenceTime:e,overtime:r}}return{residenceTime:e}},H=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===S()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},z=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,o=t._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===S()?r.$mp&&r.$mp.page.is+i:r.$scope&&r.$scope.route+i||r.$mp&&r.$mp.page.route+i},Y=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},J=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=n("10fd").default,W=n("6c01").default||n("6c01"),X=t.getSystemInfoSync(),Z=function(){function e(){c(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:v(),ut:S(),mpn:w(),ak:W.appid,usv:f,v:O(),ch:T(),cn:"",pn:"",ct:"",t:k(),tt:"",p:"android"===X.platform?"a":"i",brand:X.brand||"",md:X.model,sv:X.system.replace(/(Android|iOS)\s/,""),mpsdk:X.SDKVersion||"",mpv:X.version||"",lang:X.language,pr:X.pixelRatio,ww:X.windowWidth,wh:X.windowHeight,sw:X.screenWidth,sh:X.screenHeight}}return p(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){F();var t=q("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,F();var n=q();B();var r=z(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=z(this),e=H();if(this._navigationBarTitle.config=K&&K.pages[e]&&K.pages[e].titleNView&&K.pages[e].titleNView.titleText||K&&K.pages[e]&&K.pages[e].navigationBarTitleText||"",this.__licationShow)return B(),this.__licationShow=!1,void(this._lastPageRoute=t);F(),this._lastPageRoute=t;var n=q("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}B()}},{key:"_pageHide",value:function(){if(!this.__licationHide){F();var t=q("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=k(),this.statData.sc=N(t.scene),this.statData.fvts=x(),this.statData.lvts=D(),this.statData.tvc=$(),"n"===S()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:k(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:k(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,o=void 0===r?"":r,i=this._lastPageRoute,s={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:n,e_v:"object"===typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:k(),p:this.statData.p};this.request(s)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;W.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,o=k(),i=this._navigationBarTitle;e.ttn=i.page,e.ttpj=i.config,e.ttc=i.report;var s=this._reportingRequestData;if("n"===S()&&(s=t.getStorageSync("__UNI__STAT__DATA")||{}),s[e.lt]||(s[e.lt]=[]),s[e.lt].push(e),"n"===S()&&t.setStorageSync("__UNI__STAT__DATA",s),!(P()<y)||n){var a=this._reportingRequestData;"n"===S()&&(a=t.getStorageSync("__UNI__STAT__DATA")),M();var c=[],u=[],p=[],h=function(t){var e=a[t];e.forEach(function(e){var n=b(e);0===t?c.push(n):3===t?p.push(n):u.push(n)})};for(var l in a)h(l);c.push.apply(c,u.concat(p));var d={usv:f,t:o,requests:JSON.stringify(c)};this._reportingRequestData={},"n"===S()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==S()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:h,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=E(U(t)).options;e.src=l+"?"+n}},{key:"sendEvent",value:function(t,e){J(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Q=function(e){function n(){var e;return c(this,n),e=r(this,i(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return s(n,e),p(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),p(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,M(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,Y(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,Y(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:k(),p:this.statData.p};this.request(n)}}]),n}(Z),tt=Q.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"===typeof t,p=e.regeneratorRuntime;if(p)u&&(t.exports=p);else{p=e.regeneratorRuntime=u?t.exports:{},p.wrap=E;var f="suspendedStart",h="suspendedYield",l="executing",d="completed",_={},y={};y[s]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(C([])));m&&m!==r&&o.call(m,s)&&(y=m);var v=w.prototype=k.prototype=Object.create(y);S.prototype=v.constructor=w,w.constructor=S,w[c]=S.displayName="GeneratorFunction",p.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},p.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(v),t},p.awrap=function(t){return{__await:t}},O(T.prototype),T.prototype[a]=function(){return this},p.AsyncIterator=T,p.async=function(t,e,n,r){var o=new T(E(t,e,n,r));return p.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(v),v[c]="Generator",v[s]=function(){return this},v.toString=function(){return"[object Generator]"},p.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},p.values=C,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return a.type="throw",a.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var c=o.call(s,"catchLoc"),u=o.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,_):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),_}}}function E(t,e,n,r){var o=e&&e.prototype instanceof k?e:k,i=Object.create(o.prototype),s=new D(r||[]);return i._invoke=N(t,n,s),i}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function k(){}function S(){}function w(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function T(t){function e(n,r,i,s){var a=b(t[n],t,r);if("throw"!==a.type){var c=a.arg,u=c.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,s)},function(t){e("throw",t,i,s)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,s)})}s(a.arg)}var n;function r(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=r}function N(t,e,n){var r=f;return function(o,i){if(r===l)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return I()}n.method=o,n.arg=i;while(1){var s=n.delegate;if(s){var a=A(s,n);if(a){if(a===_)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=l;var c=b(t,e,n);if("normal"===c.type){if(r=n.done?d:h,c.arg===_)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}function A(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,A(t,e),"throw"===e.method))return _;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return _}var o=b(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,_;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,_):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,_)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function C(t){if(t){var e=t[s];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:I}}function I(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(t,e,n){t.exports=n("bbdd")},a57d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("66fd")),o=a(n("2f62")),i=a(n("f31e")),s=a(n("1771"));function a(t){return t&&t.__esModule?t:{default:t}}r.default.use(o.default);var c=new o.default.Store({modules:{audio:i.default,login:s.default}});e.default=c},ba6b:function(module,exports,__webpack_require__){"use strict";(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */!function(){function t(t){if(t)d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d,this.buffer8=l;else if(a){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var r="input is invalid type",e="object"==typeof window,i=e?window:{};i.JS_MD5_NO_WINDOW&&(e=!1);var s=!e&&"object"==typeof self,h=!i.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;h?i=global:s&&(i=self);var f=!i.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,o=__webpack_require__("3c35"),a=!i.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,n="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],y=[0,8,16,24],c=["hex","array","digest","buffer","arrayBuffer","base64"],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d=[],l;if(a){var A=new ArrayBuffer(68);l=new Uint8Array(A),d=new Uint32Array(A)}!i.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!a||!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var b=function(e){return function(n){return new t(!0).update(n)[e]()}},v=function(){var e=b("hex");h&&(e=w(e)),e.create=function(){return new t},e.update=function(t){return e.create().update(t)};for(var n=0;n<c.length;++n){var r=c[n];e[r]=b(r)}return e},w=function w(t){var e=eval("require('crypto')"),i=eval("require('buffer').Buffer"),s=function(n){if("string"==typeof n)return e.createHash("md5").update(n,"utf8").digest("hex");if(null===n||void 0===n)throw r;return n.constructor===ArrayBuffer&&(n=new Uint8Array(n)),Array.isArray(n)||ArrayBuffer.isView(n)||n.constructor===i?e.createHash("md5").update(new i(n)).digest("hex"):t(n)};return s};t.prototype.update=function(t){if(!this.finalized){var e,n=typeof t;if("string"!==n){if("object"!==n)throw r;if(null===t)throw r;if(a&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||a&&ArrayBuffer.isView(t)))throw r;e=!0}for(var o,i,s=0,c=t.length,u=this.blocks,p=this.buffer8;s<c;){if(this.hashed&&(this.hashed=!1,u[0]=u[16],u[16]=u[1]=u[2]=u[3]=u[4]=u[5]=u[6]=u[7]=u[8]=u[9]=u[10]=u[11]=u[12]=u[13]=u[14]=u[15]=0),e)if(a)for(i=this.start;s<c&&i<64;++s)p[i++]=t[s];else for(i=this.start;s<c&&i<64;++s)u[i>>2]|=t[s]<<y[3&i++];else if(a)for(i=this.start;s<c&&i<64;++s)(o=t.charCodeAt(s))<128?p[i++]=o:o<2048?(p[i++]=192|o>>6,p[i++]=128|63&o):o<55296||o>=57344?(p[i++]=224|o>>12,p[i++]=128|o>>6&63,p[i++]=128|63&o):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++s)),p[i++]=240|o>>18,p[i++]=128|o>>12&63,p[i++]=128|o>>6&63,p[i++]=128|63&o);else for(i=this.start;s<c&&i<64;++s)(o=t.charCodeAt(s))<128?u[i>>2]|=o<<y[3&i++]:o<2048?(u[i>>2]|=(192|o>>6)<<y[3&i++],u[i>>2]|=(128|63&o)<<y[3&i++]):o<55296||o>=57344?(u[i>>2]|=(224|o>>12)<<y[3&i++],u[i>>2]|=(128|o>>6&63)<<y[3&i++],u[i>>2]|=(128|63&o)<<y[3&i++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++s)),u[i>>2]|=(240|o>>18)<<y[3&i++],u[i>>2]|=(128|o>>12&63)<<y[3&i++],u[i>>2]|=(128|o>>6&63)<<y[3&i++],u[i>>2]|=(128|63&o)<<y[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=u[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},t.prototype.hash=function(){var t,e,n,r,o,i,s=this.blocks;this.first?e=((e=((t=((t=s[0]-680876937)<<7|t>>>25)-271733879<<0)^(n=((n=(-271733879^(r=((r=(-1732584194^2004318071&t)+s[1]-117830708)<<12|r>>>20)+t<<0)&(-271733879^t))+s[2]-1126478375)<<17|n>>>15)+r<<0)&(r^t))+s[3]-1316259209)<<22|e>>>10)+n<<0:(t=this.h0,e=this.h1,n=this.h2,e=((e+=((t=((t+=((r=this.h3)^e&(n^r))+s[0]-680876936)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+s[1]-389564586)<<12|r>>>20)+t<<0)&(t^e))+s[2]+606105819)<<17|n>>>15)+r<<0)&(r^t))+s[3]-1044525330)<<22|e>>>10)+n<<0),e=((e+=((t=((t+=(r^e&(n^r))+s[4]-176418897)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+s[5]+1200080426)<<12|r>>>20)+t<<0)&(t^e))+s[6]-1473231341)<<17|n>>>15)+r<<0)&(r^t))+s[7]-45705983)<<22|e>>>10)+n<<0,e=((e+=((t=((t+=(r^e&(n^r))+s[8]+1770035416)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+s[9]-1958414417)<<12|r>>>20)+t<<0)&(t^e))+s[10]-42063)<<17|n>>>15)+r<<0)&(r^t))+s[11]-1990404162)<<22|e>>>10)+n<<0,e=((e+=((t=((t+=(r^e&(n^r))+s[12]+1804603682)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+s[13]-40341101)<<12|r>>>20)+t<<0)&(t^e))+s[14]-1502002290)<<17|n>>>15)+r<<0)&(r^t))+s[15]+1236535329)<<22|e>>>10)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+s[1]-165796510)<<5|t>>>27)+e<<0)^e))+s[6]-1069501632)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+s[11]+643717713)<<14|n>>>18)+r<<0)^r))+s[0]-373897302)<<20|e>>>12)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+s[5]-701558691)<<5|t>>>27)+e<<0)^e))+s[10]+38016083)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+s[15]-660478335)<<14|n>>>18)+r<<0)^r))+s[4]-405537848)<<20|e>>>12)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+s[9]+568446438)<<5|t>>>27)+e<<0)^e))+s[14]-1019803690)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+s[3]-187363961)<<14|n>>>18)+r<<0)^r))+s[8]+1163531501)<<20|e>>>12)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+s[13]-1444681467)<<5|t>>>27)+e<<0)^e))+s[2]-51403784)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+s[7]+1735328473)<<14|n>>>18)+r<<0)^r))+s[12]-1926607734)<<20|e>>>12)+n<<0,e=((e+=((i=(r=((r+=((o=e^n)^(t=((t+=(o^r)+s[5]-378558)<<4|t>>>28)+e<<0))+s[8]-2022574463)<<11|r>>>21)+t<<0)^t)^(n=((n+=(i^e)+s[11]+1839030562)<<16|n>>>16)+r<<0))+s[14]-35309556)<<23|e>>>9)+n<<0,e=((e+=((i=(r=((r+=((o=e^n)^(t=((t+=(o^r)+s[1]-1530992060)<<4|t>>>28)+e<<0))+s[4]+1272893353)<<11|r>>>21)+t<<0)^t)^(n=((n+=(i^e)+s[7]-155497632)<<16|n>>>16)+r<<0))+s[10]-1094730640)<<23|e>>>9)+n<<0,e=((e+=((i=(r=((r+=((o=e^n)^(t=((t+=(o^r)+s[13]+681279174)<<4|t>>>28)+e<<0))+s[0]-358537222)<<11|r>>>21)+t<<0)^t)^(n=((n+=(i^e)+s[3]-722521979)<<16|n>>>16)+r<<0))+s[6]+76029189)<<23|e>>>9)+n<<0,e=((e+=((i=(r=((r+=((o=e^n)^(t=((t+=(o^r)+s[9]-640364487)<<4|t>>>28)+e<<0))+s[12]-421815835)<<11|r>>>21)+t<<0)^t)^(n=((n+=(i^e)+s[15]+530742520)<<16|n>>>16)+r<<0))+s[2]-995338651)<<23|e>>>9)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+s[0]-198630844)<<6|t>>>26)+e<<0)|~n))+s[7]+1126891415)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+s[14]-1416354905)<<15|n>>>17)+r<<0)|~t))+s[5]-57434055)<<21|e>>>11)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+s[12]+1700485571)<<6|t>>>26)+e<<0)|~n))+s[3]-1894986606)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+s[10]-1051523)<<15|n>>>17)+r<<0)|~t))+s[1]-2054922799)<<21|e>>>11)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+s[8]+1873313359)<<6|t>>>26)+e<<0)|~n))+s[15]-30611744)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+s[6]-1560198380)<<15|n>>>17)+r<<0)|~t))+s[13]+1309151649)<<21|e>>>11)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+s[4]-145523070)<<6|t>>>26)+e<<0)|~n))+s[11]-1120210379)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+s[2]+718787259)<<15|n>>>17)+r<<0)|~t))+s[9]-343485551)<<21|e>>>11)+n<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=n-1732584194<<0,this.h3=r+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0)},t.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,o=this.h3;return n[t>>4&15]+n[15&t]+n[t>>12&15]+n[t>>8&15]+n[t>>20&15]+n[t>>16&15]+n[t>>28&15]+n[t>>24&15]+n[e>>4&15]+n[15&e]+n[e>>12&15]+n[e>>8&15]+n[e>>20&15]+n[e>>16&15]+n[e>>28&15]+n[e>>24&15]+n[r>>4&15]+n[15&r]+n[r>>12&15]+n[r>>8&15]+n[r>>20&15]+n[r>>16&15]+n[r>>28&15]+n[r>>24&15]+n[o>>4&15]+n[15&o]+n[o>>12&15]+n[o>>8&15]+n[o>>20&15]+n[o>>16&15]+n[o>>28&15]+n[o>>24&15]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,r=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.base64=function(){for(var t,e,n,r="",o=this.array(),i=0;i<15;)t=o[i++],e=o[i++],n=o[i++],r+=p[t>>>2]+p[63&(t<<4|e>>>4)]+p[63&(e<<2|n>>>6)]+p[63&n];return t=o[i],r+(p[t>>>2]+p[t<<4&63]+"==")};var _=v();f?module.exports=_:(i.md5=_,o&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return _}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(s){r.regeneratorRuntime=void 0}},c4d2:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,r,o,i,s){try{var a=t[i](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var s=t.apply(e,n);function a(t){i(s,r,o,a,c,"next",t)}function c(t){i(s,r,o,a,c,"throw",t)}a(void 0)})}}var a=[],c=500;function u(t,e){return p.apply(this,arguments)}function p(){return p=s(r.default.mark(function t(e,n){var o,i;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:o=0;case 1:if(!(o<e.length)){t.next=9;break}return t.next=4,f(e[o]);case 4:i=t.sent,a.push(i);case 6:o++,t.next=1;break;case 9:n&&n(a),a=[];case 11:case"end":return t.stop()}},t,this)})),p.apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return h=s(r.default.mark(function t(e){var n,o;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.slice(-4),"Android"!=plus.os.name){t.next=4;break}if(~n.indexOf("jpg")||~n.indexOf("png")||~n.indexOf("jpeg")){t.next=4;break}return t.abrupt("return",e);case 4:return t.next=6,l(e);case 6:if(o=t.sent,!(o.width<c)){t.next=9;break}return t.abrupt("return",e);case 9:return t.abrupt("return",new Promise(function(t,n){plus.zip.compressImage({src:e,dst:e,overwrite:!0,quality:100,width:c+"px"},function(e){t(e.target)},function(t){n(t)})}));case 10:case"end":return t.stop()}},t,this)})),h.apply(this,arguments)}function l(e){return new Promise(function(n,r){t.getImageInfo({src:e,success:function(t){n(t)}})})}var d={compress:u};e.default=d}).call(this,n("6e42")["default"])},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return r.exec(t).slice(1)};function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return e=n(i(e.split("/"),function(t){return!!t}),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===s(t,-1);return t=n(i(t.split("/"),function(t){return!!t}),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),i=r(n.split("/")),s=Math.min(o.length,i.length),a=s,c=0;c<s;c++)if(o[c]!==i[c]){a=c;break}var u=[];for(c=a;c<o.length;c++)u.push("..");return u=u.concat(i.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=o(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},e.basename=function(t,e){var n=o(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return o(t)[3]};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},f31e:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={state:{events:[],RECORD:null,RecordTime:0,RECORDTIMER:null,sendVoice:null},mutations:{initRECORD:function(e){e.RECORD=t.getRecorderManager(),e.RECORD.onStart(function(){e.RecordTime=0,e.RECORDTIMER=setInterval(function(){e.RecordTime++},1e3)}),e.RECORD.onStop(function(t){e.RECORDTIMER&&(clearInterval(e.RECORDTIMER),e.RECORDTIMER=null),"function"===typeof e.sendVoice&&e.sendVoice(t.tempFilePath)})},regSendVoiceEvent:function(t,e){t.sendVoice=e},regEvent:function(t,e){t.events.push(e)},doEvent:function(t,e){t.events.forEach(function(t){t(e)})},removeEvent:function(t,e){var n=t.events.findIndex(function(t){return t===e});-1!==n&&t.events.splice(n,1)}},actions:{audioOn:function(t,e){var n=t.commit;n("regEvent",e)},audioEmit:function(t,e){var n=t.commit;n("doEvent",e)},audioOff:function(t,e){var n=t.commit;n("removeEvent",e)}}};e.default=n}).call(this,n("6e42")["default"])},fd1f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getisLogin=o,e.getLogin=i,e.wexinLogin=s;var r=n("330f");function o(){var t={},e={},n=r.http.post("appLogin/login",t,e);return n}function i(){var t={},e={header:{isLogin:!0}},n=r.http.post("appLogin/login",t,e);return n}function s(t,e,n){var o={appid:t,secret:e,js_code:n,grant_type:"authorization_code"},i={header:{isLogin:!0,service:"weixin"}},s=r.http.get("jscode2session",o,i);return s}}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/free-ui/free-divider';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/free-ui/free-divider.js';

define('components/free-ui/free-divider.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/free-ui/free-divider"], {
  "0e6c": function e6c(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return a;
    });
  },
  "1c22": function c22(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("0e6c"),
        a = e("baa1");

    for (var r in a) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(r);
    }

    var c = e("2877"),
        f = Object(c["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = f.exports;
  },
  ad92: function ad92(n, t, e) {},
  baa1: function baa1(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("ad92"),
        a = e.n(u);

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    t["default"] = a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/free-ui/free-divider-create-component', {
  'components/free-ui/free-divider-create-component': function componentsFreeUiFreeDividerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1c22"));
  }
}, [['components/free-ui/free-divider-create-component']]]);
});
require('components/free-ui/free-divider.js');
__wxRoute = 'components/free-ui/free-icon-button';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/free-ui/free-icon-button.js';

define('components/free-ui/free-icon-button.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/free-ui/free-icon-button"], {
  3872: function _(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      props: {
        icon: {
          type: String,
          default: ""
        }
      }
    };
    n.default = u;
  },
  "4ef0": function ef0(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return r;
    });
  },
  "824d": function d(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("3872"),
        r = e.n(u);

    for (var f in u) {
      "default" !== f && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(f);
    }

    n["default"] = r.a;
  },
  "8bce": function bce(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("4ef0"),
        r = e("824d");

    for (var f in r) {
      "default" !== f && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(f);
    }

    var o = e("2877"),
        a = Object(o["a"])(r["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = a.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/free-ui/free-icon-button-create-component', {
  'components/free-ui/free-icon-button-create-component': function componentsFreeUiFreeIconButtonCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8bce"));
  }
}, [['components/free-ui/free-icon-button-create-component']]]);
});
require('components/free-ui/free-icon-button.js');
__wxRoute = 'components/free-ui/free-list-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/free-ui/free-list-item.js';

define('components/free-ui/free-list-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/free-ui/free-list-item"], {
  3107: function _(e, t, n) {
    "use strict";

    n.r(t);
    var o = n("36f2"),
        r = n.n(o);

    for (var u in o) {
      "default" !== u && function (e) {
        n.d(t, e, function () {
          return o[e];
        });
      }(u);
    }

    t["default"] = r.a;
  },
  "36f2": function f2(e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var o = {
      props: {
        border: {
          type: Boolean,
          default: !0
        },
        cover: {
          type: String,
          default: ""
        },
        coverSize: {
          type: [String, Number],
          default: 75
        },
        title: {
          type: String,
          default: ""
        },
        showRight: {
          type: Boolean,
          default: !1
        },
        showLeftIcon: {
          type: Boolean,
          default: !0
        },
        showRightIcon: {
          type: Boolean,
          default: !0
        }
      },
      computed: {
        coverStyle: function coverStyle() {
          return "width: ".concat(this.coverSize, "rpx;height: ").concat(this.coverSize, "rpx;");
        }
      }
    };
    t.default = o;
  },
  a8ee: function a8ee(e, t, n) {
    "use strict";

    n.r(t);
    var o = n("ff54"),
        r = n("3107");

    for (var u in r) {
      "default" !== u && function (e) {
        n.d(t, e, function () {
          return r[e];
        });
      }(u);
    }

    var a = n("2877"),
        f = Object(a["a"])(r["default"], o["a"], o["b"], !1, null, null, null);
    t["default"] = f.exports;
  },
  ff54: function ff54(e, t, n) {
    "use strict";

    var o = function o() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        r = [];

    n.d(t, "a", function () {
      return o;
    }), n.d(t, "b", function () {
      return r;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/free-ui/free-list-item-create-component', {
  'components/free-ui/free-list-item-create-component': function componentsFreeUiFreeListItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a8ee"));
  }
}, [['components/free-ui/free-list-item-create-component']]]);
});
require('components/free-ui/free-list-item.js');
__wxRoute = 'components/free-ui/free-nav-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/free-ui/free-nav-bar.js';

define('components/free-ui/free-nav-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/free-ui/free-nav-bar"], {
  "5f0b": function f0b(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("c2d7"),
        o = n.n(u);

    for (var a in u) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(a);
    }

    e["default"] = o.a;
  },
  c2d7: function c2d7(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;

      var u = function u() {
        return n.e("components/free-ui/free-icon-button").then(n.bind(null, "8bce"));
      },
          o = function o() {
        return n.e("components/free-ui/free-popup").then(n.bind(null, "29d6"));
      },
          a = {
        props: {
          showBack: {
            type: Boolean,
            default: !1
          },
          title: {
            type: [String, Boolean],
            default: !1
          },
          fixed: {
            type: Boolean,
            default: !0
          },
          noreadnum: {
            type: Number,
            default: 0
          },
          bgColor: {
            type: String,
            default: "bg-nav"
          },
          showRight: {
            type: Boolean,
            default: !0
          }
        },
        components: {
          freeIconButton: u,
          freePopup: o
        },
        data: function data() {
          return {
            statusBarHeight: 0,
            navBarHeight: 0,
            menus: [{
              name: "发起群聊",
              event: "",
              icon: ""
            }, {
              name: "添加好友",
              event: "",
              icon: ""
            }]
          };
        },
        mounted: function mounted() {
          this.navBarHeight = this.statusBarHeight + t.upx2px(90);
        },
        computed: {
          fixedStyle: function fixedStyle() {
            return "height:".concat(this.navBarHeight, "px");
          },
          getTitle: function getTitle() {
            this.noreadnum > 0 && this.noreadnum;
            return this.title;
          },
          getClass: function getClass() {
            var t = this.fixed ? "fixed-top" : "";
            return "".concat(t, " ").concat(this.bgColor);
          }
        },
        methods: {
          openExtend: function openExtend() {
            this.$refs.extend.show(t.upx2px(415), t.upx2px(150));
          },
          back: function back() {
            t.navigateBack({
              delta: 1
            });
          }
        }
      };

      e.default = a;
    }).call(this, n("6e42")["default"]);
  },
  c328: function c328(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("cf1f"),
        o = n("5f0b");

    for (var a in o) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(a);
    }

    var i = n("2877"),
        r = Object(i["a"])(o["default"], u["a"], u["b"], !1, null, null, null);
    e["default"] = r.exports;
  },
  cf1f: function cf1f(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        o = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return o;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/free-ui/free-nav-bar-create-component', {
  'components/free-ui/free-nav-bar-create-component': function componentsFreeUiFreeNavBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("c328"));
  }
}, [['components/free-ui/free-nav-bar-create-component']]]);
});
require('components/free-ui/free-nav-bar.js');
__wxRoute = 'components/free-ui/free-popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/free-ui/free-popup.js';

define('components/free-ui/free-popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/free-ui/free-popup"], {
  "0bf9": function bf9(t, e, o) {},
  "14c3": function c3(t, e, o) {
    "use strict";

    var n = o("0bf9"),
        a = o.n(n);
    a.a;
  },
  "29d6": function d6(t, e, o) {
    "use strict";

    o.r(e);
    var n = o("40c4"),
        a = o("3a63");

    for (var i in a) {
      "default" !== i && function (t) {
        o.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    o("14c3");
    var r = o("2877"),
        u = Object(r["a"])(a["default"], n["a"], n["b"], !1, null, "84cfad8e", null);
    e["default"] = u.exports;
  },
  "3a63": function a63(t, e, o) {
    "use strict";

    o.r(e);
    var n = o("60d7"),
        a = o.n(n);

    for (var i in n) {
      "default" !== i && function (t) {
        o.d(e, t, function () {
          return n[t];
        });
      }(i);
    }

    e["default"] = a.a;
  },
  "40c4": function c4(t, e, o) {
    "use strict";

    var n = function n() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    o.d(e, "a", function () {
      return n;
    }), o.d(e, "b", function () {
      return a;
    });
  },
  "60d7": function d7(t, e, o) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = {
        props: {
          maskColor: {
            type: Boolean,
            default: !1
          },
          mask: {
            type: Boolean,
            default: !0
          },
          center: {
            type: Boolean,
            default: !1
          },
          bottom: {
            type: Boolean,
            default: !1
          },
          bodyWidth: {
            type: Number,
            default: 0
          },
          bodyHeight: {
            type: Number,
            default: 0
          },
          bodyBgColor: {
            type: String,
            default: "bg-white"
          },
          transformOrigin: {
            type: String,
            default: "left top"
          },
          tabbarHeight: {
            type: Number,
            default: 0
          }
        },
        data: function data() {
          return {
            status: !1,
            x: -1,
            y: 1,
            maxX: 0,
            maxY: 0
          };
        },
        mounted: function mounted() {
          try {
            var e = t.getSystemInfoSync();
            this.maxX = e.windowWidth - t.upx2px(this.bodyWidth), this.maxY = e.windowHeight - t.upx2px(this.bodyHeight) - t.upx2px(this.tabbarHeight);
          } catch (o) {}
        },
        computed: {
          getMaskColor: function getMaskColor() {
            var t = this.maskColor ? .5 : 0;
            return "background-color: rgba(0,0,0,".concat(t, ");");
          },
          getBodyClass: function getBodyClass() {
            if (this.center) return "left-0 right-0 bottom-0 top-0 flex align-center justify-center";
            var t = this.bottom ? "left-0 right-0 bottom-0" : "rounded border";
            return "".concat(this.bodyBgColor, " ").concat(t);
          },
          getBodyStyle: function getBodyStyle() {
            var t = this.x > -1 ? "left:".concat(this.x, "px;") : "",
                e = this.y > -1 ? "top:".concat(this.y, "px;") : "";
            return t + e;
          }
        },
        methods: {
          show: function show() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
            this.status || (this.x = t > this.maxX ? this.maxX : t, this.y = e > this.maxY ? this.maxY : e, this.status = !0);
          },
          hide: function hide() {
            this.$emit("hide"), this.status = !1;
          }
        }
      };
      e.default = o;
    }).call(this, o("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/free-ui/free-popup-create-component', {
  'components/free-ui/free-popup-create-component': function componentsFreeUiFreePopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("29d6"));
  }
}, [['components/free-ui/free-popup-create-component']]]);
});
require('components/free-ui/free-popup.js');
__wxRoute = 'components/im-chat/chatinput';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/im-chat/chatinput.js';

define('components/im-chat/chatinput.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/im-chat/chatinput"], {
  "075f": function f(t, e, n) {},
  6795: function _(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("c8ac"),
        a = n("b163");

    for (var i in a) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    n("aeae");
    var c = n("2877"),
        o = Object(c["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    e["default"] = o.exports;
  },
  aeae: function aeae(t, e, n) {
    "use strict";

    var u = n("075f"),
        a = n.n(u);
    a.a;
  },
  b163: function b163(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("d281"),
        a = n.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(i);
    }

    e["default"] = a.a;
  },
  c8ac: function c8ac(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return a;
    });
  },
  d281: function d281(t, e, n) {
    "use strict";

    (function (t, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var u = {
        name: "chat-input",
        data: function data() {
          return {
            inputValue: ""
          };
        },
        props: {
          placeholder: {
            type: String,
            required: !0
          },
          focus: {
            type: Boolean,
            required: !0
          }
        },
        methods: {
          blur: function blur() {
            this.$emit("blur");
          },
          startRecognize: function startRecognize() {
            var e = {},
                n = this;
            e.engine = "iFly", n.inputValue = "", plus.speech.startRecognize(e, function (e) {
              console.log(t(e, " at components\\im-chat\\chatinput.vue:44")), n.inputValue += e;
            }, function (e) {
              console.log(t("语音识别失败：" + e.message, " at components\\im-chat\\chatinput.vue:47"));
            });
          },
          sendMessge: function sendMessge() {
            if (this.inputValue) {
              var t = this;
              this.$emit("send-message", {
                type: "text",
                content: t.inputValue
              }), t.inputValue = "";
            } else n.showModal({
              content: "还没有输入内容哦!",
              showCancel: !1
            });
          }
        }
      };
      e.default = u;
    }).call(this, n("0de9")["default"], n("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/im-chat/chatinput-create-component', {
  'components/im-chat/chatinput-create-component': function componentsImChatChatinputCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("6795"));
  }
}, [['components/im-chat/chatinput-create-component']]]);
});
require('components/im-chat/chatinput.js');
__wxRoute = 'components/watch-login/watch-button';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/watch-login/watch-button.js';

define('components/watch-login/watch-button.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/watch-login/watch-button"], {
  2392: function _(t, n, e) {
    "use strict";

    var r = e("261e"),
        u = e.n(r);
    u.a;
  },
  "261e": function e(t, n, _e) {},
  "3e55": function e55(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("c8fb"),
        u = e.n(r);

    for (var a in r) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(a);
    }

    n["default"] = u.a;
  },
  8014: function _(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("d6e5"),
        u = e("3e55");

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    e("2392");
    var o = e("2877"),
        i = Object(o["a"])(u["default"], r["a"], r["b"], !1, null, null, null);
    n["default"] = i.exports;
  },
  c8fb: function c8fb(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var r = {
      props: {
        text: String,
        rotate: {
          type: [Boolean, String],
          default: !1
        },
        bgColor: {
          type: String,
          default: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.6))"
        },
        fontColor: {
          type: String,
          default: "#FFFFFF"
        }
      },
      computed: {
        _rotate: function _rotate() {
          return "false" !== String(this.rotate);
        }
      }
    };
    n.default = r;
  },
  d6e5: function d6e5(t, n, e) {
    "use strict";

    var r = function r() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return r;
    }), e.d(n, "b", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/watch-login/watch-button-create-component', {
  'components/watch-login/watch-button-create-component': function componentsWatchLoginWatchButtonCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8014"));
  }
}, [['components/watch-login/watch-button-create-component']]]);
});
require('components/watch-login/watch-button.js');
__wxRoute = 'components/watch-login/watch-input';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/watch-login/watch-input.js';

define('components/watch-login/watch-input.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/watch-login/watch-input"], {
  "1baa": function baa(t, e, n) {
    "use strict";

    var i;
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var s = {
      data: function data() {
        return {
          showPassword: !1,
          second: 0,
          isRunCode: !1
        };
      },
      props: {
        type: String,
        value: String,
        placeholder: String,
        maxlength: {
          type: [Number, String],
          default: 20
        },
        isShowPass: {
          type: [Boolean, String],
          default: !1
        },
        isShowCode: {
          type: [Boolean, String],
          default: !1
        },
        codeText: {
          type: String,
          default: "获取验证码"
        },
        setTime: {
          type: [Number, String],
          default: 60
        }
      },
      model: {
        prop: "value",
        event: "input"
      },
      mounted: function mounted() {
        var t = this;
        this, this.$on("runCode", function (e) {
          t.runCode(e);
        }), clearInterval(i);
      },
      methods: {
        showPass: function showPass() {
          this.showPassword = !this.showPassword;
        },
        onInput: function onInput(t) {
          this.$emit("input", t.target.value);
        },
        setCode: function setCode() {
          if (this.isRunCode) return !1;
          this.$emit("setCode");
        },
        runCode: function runCode(t) {
          if ("0" == String(t)) return this.second = 0, clearInterval(i), this.isRunCode = !1, !1;
          if (this.isRunCode) return !1;
          this.isRunCode = !0, this.second = this._setTime;
          var e = this;
          i = setInterval(function () {
            e.second--, 0 == e.second && (e.isRunCode = !1, clearInterval(i));
          }, 1e3);
        }
      },
      computed: {
        _type: function _type() {
          var t = this.type;
          return "password" == t ? "text" : t;
        },
        _isShowPass: function _isShowPass() {
          return "false" !== String(this.isShowPass);
        },
        _isShowCode: function _isShowCode() {
          return "false" !== String(this.isShowCode);
        },
        _setTime: function _setTime() {
          var t = Number(this.setTime);
          return t > 0 ? t : 60;
        },
        getVerCodeSecond: function getVerCodeSecond() {
          return this.second <= 0 ? this.codeText : this.second < 10 ? "0" + this.second : this.second;
        }
      }
    };
    e.default = s;
  },
  2161: function _(t, e, n) {
    "use strict";

    var i = n("fd4e"),
        s = n.n(i);
    s.a;
  },
  "2ee8": function ee8(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("1baa"),
        s = n.n(i);

    for (var o in i) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(o);
    }

    e["default"] = s.a;
  },
  c0e4: function c0e4(t, e, n) {
    "use strict";

    var i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        s = [];

    n.d(e, "a", function () {
      return i;
    }), n.d(e, "b", function () {
      return s;
    });
  },
  ee00: function ee00(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("c0e4"),
        s = n("2ee8");

    for (var o in s) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return s[t];
        });
      }(o);
    }

    n("2161");
    var r = n("2877"),
        u = Object(r["a"])(s["default"], i["a"], i["b"], !1, null, null, null);
    e["default"] = u.exports;
  },
  fd4e: function fd4e(t, e, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/watch-login/watch-input-create-component', {
  'components/watch-login/watch-input-create-component': function componentsWatchLoginWatchInputCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ee00"));
  }
}, [['components/watch-login/watch-input-create-component']]]);
});
require('components/watch-login/watch-input.js');

__wxRoute = 'pages/tabbar/my/my';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabbar/my/my.js';

define('pages/tabbar/my/my.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/my/my"],{"3ac1":function(e,n,t){"use strict";var u=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"a",function(){return u}),t.d(n,"b",function(){return r})},"4f5d":function(e,n,t){"use strict";t.r(n);var u=t("b8f6"),r=t.n(u);for(var a in u)"default"!==a&&function(e){t.d(n,e,function(){return u[e]})}(a);n["default"]=r.a},"7c78":function(e,n,t){"use strict";(function(e){t("68ca"),t("921b");u(t("66fd"));var n=u(t("c27a"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},b8f6:function(e,n,t){"use strict";(function(e,u){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){return t.e("components/free-ui/free-nav-bar").then(t.bind(null,"c328"))},a=function(){return t.e("components/free-ui/free-icon-button").then(t.bind(null,"8bce"))},o=function(){return t.e("components/free-ui/free-list-item").then(t.bind(null,"a8ee"))},c=function(){return t.e("components/free-ui/free-divider").then(t.bind(null,"1c22"))},i=getApp().globalData.JIM,f={components:{freeNavBar:r,freeIconButton:a,freeListItem:o,freeDivider:c},data:function(){return{}},onShow:function(){},methods:{exit:function(){i.loginOut(),this.$store.dispatch("setUserData","");try{e.clearStorage()}catch(n){}e.reLaunch({url:"../../login/login"})},changeAvator:function(){e.chooseImage({count:1,success:function(e){i.updateSelfAvatar({avatar:e.tempFilePaths[0]}).onSuccess(function(e){console.log(u("success:"+JSON.stringify(e)," at pages\\tabbar\\my\\my.vue:84"))}).onFail(function(e){console.log(u("error:"+JSON.stringify(e)," at pages\\tabbar\\my\\my.vue:87"))})}})}}};n.default=f}).call(this,t("6e42")["default"],t("0de9")["default"])},c27a:function(e,n,t){"use strict";t.r(n);var u=t("3ac1"),r=t("4f5d");for(var a in r)"default"!==a&&function(e){t.d(n,e,function(){return r[e]})}(a);var o=t("2877"),c=Object(o["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=c.exports}},[["7c78","common/runtime","common/vendor"]]]);
});
require('pages/tabbar/my/my.js');
__wxRoute = 'pages/find/moments/moments';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/find/moments/moments.js';

define('pages/find/moments/moments.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/find/moments/moments"],{"2ba9":function(t,n,e){},"4d89":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},s=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return s})},5190:function(t,n,e){"use strict";var i=e("2ba9"),s=e.n(i);s.a},"5fba":function(t,n,e){"use strict";(function(t){e("68ca"),e("921b");i(e("66fd"));var n=i(e("b4da"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"7abb":function(t,n,e){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=o(e("5d35"));function o(t){return t&&t.__esModule?t:{default:t}}var u=function(){return e.e("components/im-chat/chatinput").then(e.bind(null,"6795"))},a={components:{chatInput:u},data:function(){return{posts:s.default,user_id:4,username:"Liuxy",index:"",comment_index:"",input_placeholder:"评论",focus:!1,is_reply:!1,showInput:!1,screenHeight:"",platform:"",windowHeight:"",loadMoreText:"加载中...",showLoadMore:!1}},mounted:function(){t.getStorage({key:"posts",success:function(t){console.log(i(t.data," at pages\\find\\moments\\moments.vue:95")),this.posts=t.data}})},onLoad:function(){var n=this;t.getSystemInfo({success:function(t){n.screenHeight=t.screenHeight,n.platform=t.platform}}),t.startPullDownRefresh()},onShow:function(){var n=this;t.onWindowResize(function(t){"ios"===n.platform?(n.windowHeight=t.size.windowHeight,n.adjust()):n.screenHeight-t.size.windowHeight>60&&n.windowHeight<=t.size.windowHeight&&(n.windowHeight=t.size.windowHeight,n.adjust())})},onHide:function(){t.offWindowResize()},onUnload:function(){this.max=0,this.data=[],this.loadMoreText="加载更多",this.showLoadMore=!1},onReachBottom:function(){var t=this;console.log(i("onReachBottom"," at pages\\find\\moments\\moments.vue:133")),this.showLoadMore=!0,setTimeout(function(){t.posts.length<20?t.posts=t.posts.concat(t.posts):t.loadMoreText="暂无更多"},1e3)},onPullDownRefresh:function(){console.log(i("onPullDownRefresh"," at pages\\find\\moments\\moments.vue:145")),setTimeout(function(){t.stopPullDownRefresh()},1e3)},onNavigationBarButtonTap:function(t){0==t.index&&this.navigateTo("../publish/publish")},computed:{},methods:{test:function(){this.navigateTo("../test/test")},navigateTo:function(n){t.navigateTo({url:n})},like:function(t){0===this.posts[t].islike?(this.posts[t].islike=1,this.posts[t].like.push({uid:this.user_id,username:","+this.username})):(this.posts[t].islike=0,this.posts[t].like.splice(this.posts[t].like.indexOf({uid:this.user_id,username:","+this.username}),1))},comment:function(t){this.showInput=!0,this.focus=!0,this.index=t},adjust:function(){},reply:function(t,n){this.is_reply=!0,this.showInput=!0;var e=this.posts[t].comments.comment[n].username;this.input_placeholder="回复"+e,this.index=t,this.comment_index=n,this.focus=!0},blur:function(){this.init_input()},send_comment:function(t){if(this.is_reply)var n=this.posts[this.index].comments.comment[this.comment_index].username,e="回复"+n+":"+t.content;else e=t.content;this.posts[this.index].comments.total+=1,this.posts[this.index].comments.comment.push({uid:this.user_id,username:this.username,content:e}),this.init_input()},init_input:function(){this.showInput=!1,this.focus=!1,this.input_placeholder="评论",this.is_reply=!1},previewImage:function(n,e){var i=n[e];t.previewImage({current:i,urls:n})},goPublish:function(){t.navigateTo({url:"./publish/publish",success:function(t){},fail:function(){},complete:function(){}})}}};n.default=a}).call(this,e("6e42")["default"],e("0de9")["default"])},"86d9":function(t,n,e){"use strict";e.r(n);var i=e("7abb"),s=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=s.a},b4da:function(t,n,e){"use strict";e.r(n);var i=e("4d89"),s=e("86d9");for(var o in s)"default"!==o&&function(t){e.d(n,t,function(){return s[t]})}(o);e("5190");var u=e("2877"),a=Object(u["a"])(s["default"],i["a"],i["b"],!1,null,"2582c52f",null);n["default"]=a.exports}},[["5fba","common/runtime","common/vendor"]]]);
});
require('pages/find/moments/moments.js');
__wxRoute = 'pages/find/publish/publish';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/find/publish/publish.js';

define('pages/find/publish/publish.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/find/publish/publish"],{"31ea":function(e,t,n){"use strict";n.r(t);var i=n("a8e7"),a=n("3dce");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);n("e6a2");var u=n("2877"),o=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,"3fbd17cd",null);t["default"]=o.exports},"3dce":function(e,t,n){"use strict";n.r(t);var i=n("af04"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=a.a},"83f4":function(e,t,n){},a8e7:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},af04:function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n("a34a")),s=u(n("c4d2"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,i,a,s,u){try{var o=e[s](u),c=o.value}catch(r){return void n(r)}o.done?t(c):Promise.resolve(c).then(i,a)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(i,a){var s=e.apply(t,n);function u(e){o(s,i,a,u,c,"next",e)}function c(e){o(s,i,a,u,c,"throw",e)}u(void 0)})}}var r=function(){return n.e("components/free-ui/free-nav-bar").then(n.bind(null,"c328"))},f=[["camera"],["album"],["camera","album"]],l=[["compressed"],["original"],["compressed","original"]],d={components:{freeNavBar:r},data:function(){return{input_content:"",imageList:[],sourceTypeIndex:2,sourceType:["拍照","相册","拍照或相册"],sizeTypeIndex:2,sizeType:["压缩","原图","压缩或原图"],countIndex:8,count:[1,2,3,4,5,6,7,8,9],startX:0,movedX:0,endX:0}},onUnload:function(){this.imageList=[],this.sourceTypeIndex=2,this.sourceType=["拍照","相册","拍照或相册"],this.sizeTypeIndex=2,this.sizeType=["压缩","原图","压缩或原图"],this.countIndex=8},methods:{publish:function(){var t=c(a.default.mark(function t(){var n,s,u,o,c;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.input_content){t.next=3;break}return e.showModal({content:"内容不能为空",showCancel:!1}),t.abrupt("return");case 3:return e.showLoading({title:"发布中"}),t.next=6,this.getLocation();case 6:for(n=t.sent,s=[],u=0,o=this.imageList.length;u<o;u++)c={name:"image-"+u,uri:this.imageList[u]},s.push(c);e.uploadFile({url:"moment/moments",files:s,filePath:"",name:"",formData:{user_id:"1",text:this.input_content,longitude:n.longitude,latitude:n.latitude},success:function(t){e.hideLoading(),e.showToast({icon:"success",title:"发布成功"}),e.navigateBack({delta:1})},fail:function(t){console.log(i("e: "+JSON.stringify(t)," at pages\\find\\publish\\publish.vue:126")),e.hideLoading(),e.showToast({icon:"none",title:"发布失败,请检查网络"})}});case 10:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),getLocation:function(){return new Promise(function(t,n){e.getLocation({type:"wgs84",success:function(e){t(e)},fail:function(e){n(e)}})})},close:function(e){this.imageList.splice(e,1)},chooseImage:function(){var t=c(a.default.mark(function t(){var n,u=this;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(9!==this.imageList.length){t.next=7;break}return t.next=3,this.isFullImg();case 3:if(n=t.sent,console.log(i("是否继续?",n," at pages\\find\\publish\\publish.vue:156")),n){t.next=7;break}return t.abrupt("return");case 7:e.chooseImage({sourceType:f[this.sourceTypeIndex],sizeType:l[this.sizeTypeIndex],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(e){var t=function(e){u.imageList=u.imageList.concat(e)};s.default.compress(e.tempFilePaths,t)}});case 8:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),isFullImg:function(){var t=this;return new Promise(function(n){e.showModal({content:"已经有9张图片了,是否清空现有图片？",success:function(e){e.confirm?(t.imageList=[],n(!0)):n(!1)},fail:function(){n(!1)}})})},previewImage:function(t){var n=t.target.dataset.src;e.previewImage({current:n,urls:this.imageList})},touchStart:function(e){this.startX=e.mp.changedTouches[0].pageX},touchEnd:function(t){this.endX=t.mp.changedTouches[0].pageX,this.endX-this.startX>200&&e.navigateBack()}}};t.default=d}).call(this,n("6e42")["default"],n("0de9")["default"])},c56c:function(e,t,n){"use strict";(function(e){n("68ca"),n("921b");i(n("66fd"));var t=i(n("31ea"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},e6a2:function(e,t,n){"use strict";var i=n("83f4"),a=n.n(i);a.a}},[["c56c","common/runtime","common/vendor"]]]);
});
require('pages/find/publish/publish.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"358a":function(A,n,t){"use strict";t.r(n);var e=t("6d38"),r=t.n(e);for(var o in e)"default"!==o&&function(A){t.d(n,A,function(){return e[A]})}(o);n["default"]=r.a},"6d38":function(A,n,t){"use strict";(function(A,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r,o=a(t("780a"));a(t("1649")),a(t("ba6b")),t("fd1f");function a(A){return A&&A.__esModule?A:{default:A}}var g=function(){return t.e("components/watch-login/watch-input").then(t.bind(null,"ee00"))},i=function(){return t.e("components/watch-login/watch-button").then(t.bind(null,"8014"))},s=getApp().globalData.JIM,d={data:function(){return{logoImage:"data:image/png;base64,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2GMaO3asXnvtNe6VAI6Ab+ME/kvPnj01ZcoUzZ07V9dccw3jIQalpKTopptu0pIlSzRu3Dh16NDBOgnwHc5AAJJKly6tq666SgMHDlTVqlWtc+Aj/7lXYt26dXruuec0YcIEua5rnQWY4wwEYtoJJ5ygAQMGaMmSJfrb3/7GeMAR1atXTy+88IIWLlyo3r17Ky6Ot0/ENn4CEJMSExM1cOBALV26VA899JCqVKlinYSAOOWUU/Tcc89p8eLF6tOnD99jgpjFgEBMSUhI0A033KAlS5boL3/5Cw9+wnGrWbOmBg8erMWLF//8CG0gljAgEDN69OihRYsW6ZFHHmE4IGJq1KihF154QTNmzFDz5s2tc4CoYUAg9Nq0aaMZM2bon//8p2rUqGGdg5A644wzNGHCBL399tuqX7++dQ7gOQYEQqtu3boaO3asxowZozPOOMM6BzHi/PPP15w5czR06FClpqZa5wCeYUAgdJKSkvToo4/q448/VuvWra1zEKMuu+wyLVy4UDfddBM3WiKUGBAIld69e2vx4sXq16+fEhJ4zAlsJSUl6YEHHtCcOXPUokUL6xwgohgQCIX09HRNmzZNzz33nCpXrmydA/xK3bp19e6772r48OE6+eSTrXOAiGBAINBOOOEEPfbYY5o7d64aNWpknQP8rs6dO2vZsmW66aabrFOAEmNAILDOO+88zZ8/X9dff711ClAsDzzwgKZNm6Y6depYpwDHjQGBwElKStLgwYM1ceJEVa9e3ToHOC6NGjXSxx9/rFtvvZWbLBFIDAgESuvWrbVw4UL16dPHOgUosdKlS+uee+7RRx99pNNOO806BygWBgQCoWzZsnruuec0duxYPluP0GnYsKFmz56tQYMGWacAx4wBAd8788wzNWfOHPXu3ds6BfDUfffdp9GjRys5Odk6BTgqBgR8y3EcDRo0SB9++CGPoEbMuOCCC/Txxx+rYcOG1inA72JAwJcqV66sCRMm6L777uOBUIg51atX14cffqhrr73WOgU4IgYEfKddu3aaP3++mjVrZp0CmCldurSeeOIJvfLKKypbtqx1DvA/GBDwlRtvvFGjRo3SiSeeaJ0C+MIll1yijz76SDVr1rROAX6FAQFfiIuL0z//+U89+OCDiovjX0vgl+rWrauZM2fq/PPPt04BfsY7NcxVqFBB77//vnr06GGdAvhWuXLlNGbMGP35z3+2TgEkMSBg7NRTT9XMmTPVtGlT6xTA9xzH0R133KG33npLSUlJ1jmIcQwImGnTpo2mTZumatWqWacAgdK2bVvNmDFDp5xyinUKYhgDAiYuu+wyHpgDlMApp5yiKVOmqEmTJtYpiFEMCETd/fffr6FDh/IFQkAJVaxYUe+99546d+5snYIYxIBA1CQkJOjVV1/VzTffbJ0ChEaZMmU0bNgw3XTTTdYpiDEMCERF+fLlNXHiRHXq1Mk6BQgdx3H0wAMP6Nlnn7VOQQxhQMBzVapU0dSpU7lWC3jsiiuu0GuvvcblQUQFAwKeqlGjhqZMmaI6depYpwAx4aKLLtKYMWNUpkwZ6xSEHAMCnqldu7Y+/PBDVa9e3ToFiCmZmZl69913lZiYaJ2CEGNAwBMNGjTQlClTdNJJJ1mnADHpnHPO0YQJE1SuXDnrFIQUAwIRd/bZZ2vSpEmqVKmSdQoQ0xo1aqQPPvhAFSpUsE5BCDEgEFFnnnmm3n33Xf7UA/hEenq6Jk6cyDfcIuIYEIiYBg0aaPz48Vx3BXwmPT1d7733Hk9+RUQ5Xr1wWlqa69Vrw3/S09M1YcIELlsY2rZtmzZu3KgNGzZo06ZNWrFihRYvXmzalJGRobPPPlu1atXSqaeeqjp16qhq1aqmTbFs2bJl6tmzpwoKCqxTEEVZWVme/K5nQKDEatSooalTpyolJcU6JWYUFRXpq6++0qJFi7R48WItWrRI+/bts846JuXLl1fz5s3VokULtWjRQg0bNlRcHCdDo2Xx4sW6/PLLdfDgQesURAkDAr5UvXp1TZw4USeffLJ1Suh9+eWXWrhwoRYtWqRFixYpLy/POikifjkoWrVqpYYNG1onhd7s2bPVp08f6wxECQMCvlOpUiV98MEHfKWwR7KysjR58mQtWLBAn3zyifbu3WudFBUVKlRQRkaGMjMz1aVLFz4K7JHJkyerf//+1hmIAgYEfKVMmTKaNGmSzjrrLOuUUPnqq6/00Ucfadq0afrqq6+sc3yhUaNG6tChgy6++GI1aNDAOidUXnzxRT366KPWGfAYAwK+Mnr0aF1wwQXWGaHw/fffa/z48Xr77be1efNm6xxfq1Onji6//HL16NGDy2YR8qc//Uljx461zoCHGBDwjYceekgDBgywzgi0/Px8TZ48WW+//bY++eQT65xAyszM1JVXXqkOHTrw0eES6tOnj2bPnm2dAY8wIOALffr00eDBg60zAqmoqEgLFy7U2LFj9cEHH+jAgQPWSaFQtmxZXXLJJbr88svVrFkz65xAys/PV6dOnbR69WrrFHiAAQFz7du316hRo6wzAmf37t0aMWKERo8erezsbOucUKtZs6auvvpq/fGPf1TZsmWtcwJlx44duuiii7Rt2zbrFEQYAwKmTj31VM2YMYNTxcWQk5OjV155Ra+++ioP7omyChUqqH///urXrx+PVS+GL774Qp07d9ahQ4esUxBBDAiYSU5O1vTp0/m45jHKycnR888/rzfeeEP79++3zolpJ554ogYMGKB+/frxGOdjNGbMGN1+++3WGYggBgTMjBo1Su3bt7fO8L1du3bppZde0ogRIzjj4DPly5fXjTfeqBtuuEFJSUnWOb535513avTo0dYZiBAGBEzcdtttuuuuu6wzfG3Pnj16+eWXNXz4cOXn51vn4HdUqFBBAwcO1HXXXcfluN9x6NAhdezYkWeRhAQDAlHXqlUrjRs3To7j2b8mgXb48GG99tprevrpp5Wbm2udg2KoUqWK7r//fl122WX8+30EWVlZatOmjX788UfrFJQQAwJRVaNGDc2aNYsb0I5gzpw5uu+++7Rx40brFJRAkyZN9MQTT/BE1SNYvHixunfvbp2BEvJqQPAVePhNw4cPZzz8hh9++EHXXHONrrjiCsZDCCxfvlwdOnTQn//8Z+3Zs8c6x3cyMjI0aNAg6wz4FAMC/+Ovf/2rGjVqZJ3hK67r6rXXXlPLli01ffp06xxE2FtvvaVWrVpp8uTJ1im+c9ddd+mMM86wzoAPcQkDv9KmTRuNGTPGOsNXNm3apBtvvFErVqywTkEUXHjhhRoyZIhSUlKsU3xj06ZNatu2LZ8uCiguYcBz1apV08svv2yd4SsvvviimjdvzniIITNmzFCrVq00YcIE6xTfqFWrlh555BHrDPgMZyAgSYqLi9OUKVPUuHFj6xRf2Lx5s/r376+VK1dap8DQhRdeqH/84x+qWLGidYov9O3bVzNnzrTOQDFxBgKeuv322xkPPxk2bJhat27NeIBmzJihzMxMTZ061TrFF4YOHaoqVapYZ8AnOAMB1atXT7Nnz1ZCQoJ1iqndu3erf//+WrBggXUKfOiqq67SY489pjJlylinmJo5c6b69u1rnYFi4AwEPPPiiy/G/HhYsWKF2rZty3jAEY0ePVqdOnXSli1brFNMtW/fXpdddpl1BnyAARHjbrjhhpj/iNbw4cPVpUsXvmobR/X111+rbdu2mjVrlnWKqb/97W98SgVcwohlqampWrx4ccx+J8ChQ4c0cOBATZo0yToFAXTPPffo1ltvtc4ww6WM4OASBiJu6NChMTse9uzZox49ejAecNyefPJJDRo0SIWFhdYpJriUAQZEjOrRo4cyMzOtM0x8//336tSpk5YsWWKdgoAbP368evXqFbNfpvb444/rpJNOss6AEQZEDEpKStJDDz1knWHiP9998O2331qnICQWLVqkzp0764cffrBOibpy5crp/vvvt86AEQZEDLrnnntUuXJl64yomzVrlrp168aXJiHi1q5dqz/84Q9as2aNdUrU9e7dm+/OiVEMiBhTp04d/fGPf7TOiLoxY8boqquu0sGDB61TEFI7d+5Ux44dtXjxYuuUqHv22WetE2CAARFjnnvuOcXHx1tnRNUzzzyj22+/3ToDMSA/P1/du3fXtGnTrFOi6vTTT9e1115rnYEoY0DEkMsuu0xNmza1zoiqxx57TIMHD7bOQIy5/vrr9dFHH1lnRNVf/vIXvjMkxjAgYkTZsmX18MMPW2dE1eOPP64XXnjBOgMxqKioSNdee62mTJlinRI1ycnJ3FAZYxgQMWLQoEEx9eS4xx57TEOHDrXOQIzr379/TJ2JuPzyy1WnTh3rDEQJAyIGpKSkaMCAAdYZUTN06FDOPMAXioqKdP3118fMjZVxcXF68MEHrTMQJQyIGHDHHXfohBNOsM6IismTJ+vxxx+3zgB+VlhYqL59++qbb76xTomKDh066KyzzrLOQBQwIEKuevXqMfO8+gULFsTUmRYER15ennr27BkzD5t65JFHrBMQBQyIkLv33ntj4mObq1at0jXXXKOioiLrFOA35eTkqHfv3tq7d691iueaNWumtm3bWmfAYwyIEEtPT1f37t2tMzy3fft29e7dW/n5+dYpwO9at26drrnmmpj4Aq4HHnjAOgEeY0CEWCx8pGr//v264oortHPnTusU4Jh88skn+vOf/2yd4bnTTjtNnTp1ss6AhxgQIZWenq4LL7zQOsNTRUVF6tevn1atWmWdAhTL2LFj9dJLL1lneI4nwIYbAyKk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ZWRkqE+fPtYZAI5i8uTJatmypYYMGaIDBw785j+zdetWzZo1K8pl8AoDIiQmTpyonJwc6wxPPPzww6patap1BoCjOHDggJ566illZmb+5kfMR4wYYVAFrzAgQmT48OHWCZ5ITk7WP//5T+sMAMdo8+bNuv7663XZZZfp22+/lfTvcfHWW28ZlyGS4r164eTk5Ie9em38ttWrV+v6669XqVKlrFMirkaNGtq7d6+WL19unQLgGG3evFn/+te/lJ+fr82bN2vKlCnWSTFp3759f/XidfkURsg88sgjof3448GDB9WuXTtt2LDBOgUAAoNPYeCYvPDCCzp8+LB1hidKly6tYcOGKSEhwToFAGIeAyJksrOzNWnSJOsMz5x++ul69NFHrTMAIOYxIEJo6NCh1gmeuvbaa9W1a1frDACIaQyIEFq9erVmzpxpneGpIUOGqGHDhtYZABCzGBAh9eSTT1oneOqEE07QyJEjlZycbJ0CHJdzzjlHM2bM0Nlnn22dAhwXBkRIff3115o2bZp1hqeqV6+ukSNHWmcAxVarVi2NGjVKZ5xxhj788EO98MILqlKlinUWUCwMiBAbPHiwXDfcn6Zt2bKlXn75ZesM4JglJSXprbfeUsWKFX/+e927d9eiRYt088038ykjBAYPkgqxHTt26LTTTlN6erp1iqcaNGigMmXKaP78+dYpwO9yHEdvv/22zjrrrP/5/5UuXVqtW7dWjx499M0332jz5s0GhQgjrx4kxRmIkHv66aetE6Ji0KBBuuaaa6wzgN/11FNPKSMj43f/mVq1amn8+PEaPXq0atasGaUyoPg4AxFyOTk5qlevnho0aGCd4rn27dvrm2++0bp166xTgP9x9913q3///sf8z9epU0c33HCDSpUqpWXLloX2AXHwHo+yxnE75ZRTtGjRIuuMqOndu7fmzZtnnQH87KabbtIDDzxw3P/9bdu26W9/+5vee++9CFYhVvAoaxy3jRs3atiwYdYZUTNy5Eg1atTIOgOQJF155ZUlGg+SdPLJJ+uFF17QxIkTdeqpp0aoDCgZzkDEiKSkJC1dulQVKlSwTomKH3/8UZdcconWrl1rnYIY1qVLF73yyitynMi91R4+fFgjR47Uk08+qby8vIi9LsKLMxAokby8PD3xxBPWGVFz4okn6t133w39J1DgX926ddOwYcMiOh4kKSEhQf369dOnn36qK664IqKvDRQHZyBiiOM4mjNnTkz9Ut2zZ4969OihVatWWacghvTu3VtDhgyJ+Hj4LV9//bVuu+02ffnll54fC8HEGQiUmOu6uvvuu60zoqpChQp6//33dc4551inIEb069dPzz33XFTGgyQ1bNhQH330kYYMGaJKlSpF5ZiAxICIOZ988knoH3H938qVK6d33nnnqJ+/B0rqvvvuM/m6ecdxdPnll2vx4sW64YYbFBfHWzu8xyWMGFS9enUtWbLEOsPEgAEDNHHiROsMhNDf//53XX311dYZkqT169frnnvu0cKFC61T4ANeXcLgQVIxaO/evTpw4IBat25tnRJ1nTt3VmFhoT755BPrFIREYmKi3nzzTV1yySXWKT+rVKmSevXqpfr162vp0qXat2+fdRIM8SApRFR8fLzmzJmjunXrWqeYeP/99zVw4EAVFhZapyDAqlatqrFjx6pevXrWKUdUUFCgoUOH6oUXXtDBgwetc2CAmygRUYWFhbrtttusM8x07dpV48eP/9U3IgLFcc4552jWrFm+Hg/Sv8+Q3HXXXVq4cKE6duxonYMQYUDEsKVLl+qtt96yzjDTvHlzzZw5Mya+JwSR1bNnT33wwQeBGqDVq1fXiBEj9Pbbb+uUU06xzkEIcAkjxpUrV06LFy9WSkqKdYqZgoICDRgwQNOnT7dOgc+VLl1aTz75ZOAf4HTo0CENHz5cgwcPVkFBgXUOPMZNlPDEwYMHtX379pg+tVmqVCl169ZNRUVF3FyJI6pdu7bGjx+vtm3bWqeUWHx8vJo2baorrrhCO3fu5EFrIcdNlPDUqFGj1L59e+sMc4sWLdKNN96o7du3W6fARzp16qTnn39eZcuWtU7xxPLly3XHHXfom2++sU6BB7iJEp66+eabtW3bNusMcy1atND8+fPVq1cv6xT4QGJiop5++mm9+uqroR0PktSkSRPNnj1bf//732PmC/dQcpyBwM+aNWumCRMmRO0RvH43a9Ys3XLLLdq1a5d1Cgyce+65evnll1WtWjXrlKjavXu3nnrqKb3++utyXd7Gw4AzEPDcp59+qn/84x/WGb5xwQUXaP78+erWrZt1CqKoTJkyevTRRzVp0qSYGw+SVLFiRT3xxBP6+OOP1bhxY+sc+BhnIPA/Jk+erHPPPdc6w1dmzZqlP//5z8rOzrZOgYcaN26sF198kY85/sLEiRM1YMAA6wyUAGcgEDX9+/fn0bf/5YILLtC8efMC//E9/Lby5ctr8ODB+vDDDxkP/4VLeDgSzkDgN11wwQUaPXq0dYYvccd6uPTp00f33XcfX4X9G5YtW6YuXbpwL0TA8RwIRNXGjRtVqlQpNW/e3DrFd6pWraq+ffuqatWqWrZsGQ/iCagGDRrojTfe0DXXXKPExETrHN/ZuXOnunbtqvz8fOsUlBDPgYCJN998U+3atbPO8K29e/fqqaee0ogRI6xTcIxOPfVU3Xnnnbr00kutU3ytS5cuWrp0qXUGIsCrMxAMCPyu5ORkzZgxQ7Vr17ZO8bUtW7bo2Wef1bhx4/iGT5869dRTddddd6lz586Ki+P2r99z7733auTIkdYZiBAGBMykp6dr2rRpnOY9Bps2bdLgwYM1fvx46xT8JD09XXfeeac6d+5snRII48aN06233mqdgQhiQMBUx44dOU1fDBs2bNArr7yiUaNGWafErEaNGum2225Thw4drFMC48svv1SXLl104MAB6xREEAMC5u666y7ddttt1hmBsnPnTv3rX//SyJEjtXv3buucmNCiRQvdeuutat26tXVKoGRlZalDhw58D0wIMSDgC8OHD+dU8HF6/fXXNXLkSK1evdo6JZS6du2qG264QU2aNLFOCZy8vDx16tRJa9assU6BBxgQ8IVSpUpp0qRJPOK2BD7//HO99dZbevfdd5WXl2edE2gNGjRQnz591L17d57jcJwOHz6s7t27a8mSJdYp8AgDAr5RqVIlTZ8+PSa/JyCS9u/fr4kTJ2rChAmaO3eudU5gVKhQQV27dtWVV16pM8880zon8AYNGsRNvyHHgICv1K1bVx999FGov+I4mnbt2qVp06Zp0qRJmj9/voqKiqyTfKVChQrq3LmzunTpohYtWighIcE6KRSeeuopDRkyxDoDHmNAwHfat2/Ppww88OOPP2r27NmaOnWq5s+frz179lgnmahRo4Zat26tSy+9VJmZmdY5oTNmzBjdfvvt1hmIAgYEfOmKK67Qs88+a50RasuXL9e8efM0b948LV682DrHM+np6WratKmaN2+uzMxMpaamWieF1scff6wrr7zSOgNRwoCAb1199dX6+9//bp0RM5YtW6bPPvtMy5Yt0yeffKKcnBzrpONy5plnqmnT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",phoneData:"",passData:"",isRotate:!1}},components:{wInput:g,wButton:i},mounted:function(){r=this},methods:{login:function(n,t){s.login({username:n,password:t}).onSuccess(function(o){console.log(A("success:"+JSON.stringify(o)," at pages\\login\\login.vue:77")),s.onMsgReceive(function(n){console.log(A("msg_receive:"+JSON.stringify(n)," at pages\\login\\login.vue:79"));for(var t=0;t<n.messages.length;t++){var r,o=n.messages[t].content,a=n.messages[t].from_username;if("text"==o.msg_type&&(r=o.msg_body.text),"image"==o.msg_type&&(r="[图片]"),"file"==o.msg_type){var g=o.msg_body.media_id;"mp3"==g.substring(g.length-3)&&(r="[语音]")}s.updateConversation({username:a,extras:{del:!1,latest_msg:r}});var i=e.getStorageSync(a);i&&(i.push(o),e.setStorageSync(a,i))}n=JSON.stringify(n),console.log(A("msg_receive:"+n," at pages\\login\\login.vue:108")),e.$emit("get_msg",{})}),s.onEventNotification(function(n){console.log(A("event_receive: "+JSON.stringify(n)," at pages\\login\\login.vue:114"))}),s.onSyncConversation(function(n){console.log(A("zzzzzzzzz"+JSON.stringify(n)," at pages\\login\\login.vue:118"));for(var t=0;t<n.length;t++){var r,o=n[t].msgs[n[t].msgs.length-1].content,a=n[t].from_username;if("text"==o.msg_type&&(r=o.msg_body.text),"image"==o.msg_type&&(r="[图片]"),"file"==o.msg_type){var g=content.msg_body.media_id;"mp3"==g.substring(g.length-3)&&(r="[语音]")}s.updateConversation({username:a,extras:{del:!1,latest_msg:r}});var i=e.getStorageSync(a);if(i){for(var d=0;d<n[t].msgs.length;d++)i.push(n[t].msgs[d].content);e.setStorageSync(a,i)}}}),s.onUserInfUpdate(function(n){console.log(A("onUserInfUpdate : "+JSON.stringify(n)," at pages\\login\\login.vue:152"))}),s.onSyncEvent(function(n){console.log(A("onSyncEvent : "+JSON.stringify(n)," at pages\\login\\login.vue:156"))}),s.onMsgReceiptChange(function(n){console.log(A("onMsgReceiptChange : "+JSON.stringify(n)," at pages\\login\\login.vue:160"))}),s.onSyncMsgReceipt(function(n){console.log(A("onSyncMsgReceipt : "+JSON.stringify(n)," at pages\\login\\login.vue:164"))}),s.onMutiUnreadMsgUpdate(function(n){console.log(A("onConversationUpdate : "+JSON.stringify(n)," at pages\\login\\login.vue:168"))}),s.onTransMsgRec(function(n){console.log(A("onTransMsgRec : "+JSON.stringify(n)," at pages\\login\\login.vue:172"))}),s.onRoomMsg(function(n){console.log(A("onRoomMsg  : "+JSON.stringify(n)," at pages\\login\\login.vue:176"))});var a={username:n,password:t};r.$store.dispatch("setUserData",a);try{e.setStorageSync("setUserData",a)}catch(g){}r.isRotate=!1,e.showToast({icon:"success",title:"登录成功!"}),e.switchTab({url:"../tabbar/index/index"})}).onFail(function(n){console.log(A("error:"+JSON.stringify(n)," at pages\\login\\login.vue:200")),e.showToast({icon:"none",position:"bottom",title:(0,o.default)(n.code)}),r.isRotate=!1}).onTimeout(function(n){console.log(A("timeout:"+JSON.stringify(n)," at pages\\login\\login.vue:208")),e.showToast({icon:"none",position:"bottom",title:"登录超时！"}),r.isRotate=!1})},startLogin:function(){if(this.isRotate)return!1;if(""!=this.phoneData)if(""!=this.passData)if(r.isRotate=!0,s.isInit())r.login(r.phoneData,r.passData);else{var n,t="09970876f33e884a3624335c",o="NkSYvAH3yAw93dqdlto47G9A35xHv4Oa",a=(new Date).getTime();e.request({url:"http://117.83.152.39:8081/interconnect/appUser/getJMKey",header:{token:"e463192ddfad487682638189f64020b9","Content-Type":"application/json"},data:{timestamp:a},success:function(e){n=e.data.result,s.init({appkey:t,random_str:o,signature:n,timestamp:a,flag:1}).onSuccess(function(n){console.log(A("Init-success:"+JSON.stringify(n)," at pages\\login\\login.vue:268")),r.login(r.phoneData,r.passData)}).onFail(function(n){console.log(A("Init-error:"+JSON.stringify(n)," at pages\\login\\login.vue:271"))})}})}else e.showToast({icon:"none",position:"bottom",title:"密码不能为空"});else e.showToast({icon:"none",position:"bottom",title:"手机号不能为空"})}}};n.default=d}).call(this,t("0de9")["default"],t("6e42")["default"])},a8d6:function(A,n,t){"use strict";var e=function(){var A=this,n=A.$createElement;A._self._c},r=[];t.d(n,"a",function(){return e}),t.d(n,"b",function(){return r})},aabf:function(A,n,t){"use strict";t.r(n);var e=t("a8d6"),r=t("358a");for(var o in r)"default"!==o&&function(A){t.d(n,A,function(){return r[A]})}(o);t("b7e4");var a=t("2877"),g=Object(a["a"])(r["default"],e["a"],e["b"],!1,null,null,null);n["default"]=g.exports},b7e4:function(A,n,t){"use strict";var e=t("f8d2"),r=t.n(e);r.a},e261:function(A,n,t){"use strict";(function(A){t("68ca"),t("921b");e(t("66fd"));var n=e(t("aabf"));function e(A){return A&&A.__esModule?A:{default:A}}A(n.default)}).call(this,t("6e42")["createPage"])},f8d2:function(A,n,t){}},[["e261","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/login/forget';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/forget.js';

define('pages/login/forget.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/forget"],{"04f8":function(t,n,o){"use strict";o.r(n);var e=o("0f66"),i=o("6d92");for(var a in i)"default"!==a&&function(t){o.d(n,t,function(){return i[t]})}(a);o("ac10");var u=o("2877"),s=Object(u["a"])(i["default"],e["a"],e["b"],!1,null,null,null);n["default"]=s.exports},"0f66":function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},i=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return i})},"5b9a":function(t,n,o){"use strict";(function(t,e){var i;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){return o.e("components/watch-login/watch-input").then(o.bind(null,"ee00"))},u=function(){return o.e("components/watch-login/watch-button").then(o.bind(null,"8014"))},s={data:function(){return{phoneData:"",passData:"",verCode:"",isRotate:!1}},components:{wInput:a,wButton:u},mounted:function(){i=this},methods:{getVerCode:function(){if(11!=i.phoneData.length)return t.showToast({icon:"none",position:"bottom",title:"手机号不正确"}),!1;console.log(e("获取验证码"," at pages\\login\\forget.vue:77")),this.$refs.runCode.$emit("runCode"),t.showToast({icon:"none",position:"bottom",title:"模拟倒计时触发"}),i.$refs.runCode.$emit("runCode",0),t.showToast({icon:"none",position:"bottom",title:"模拟倒计时终止"})},startRePass:function(){return!this.isRotate&&(11!=this.phoneData.length?(t.showToast({icon:"none",position:"bottom",title:"手机号不正确"}),!1):this.passData.length<6?(t.showToast({icon:"none",position:"bottom",title:"密码不正确"}),!1):4!=this.verCode.length?(t.showToast({icon:"none",position:"bottom",title:"验证码不正确"}),!1):(console.log(e("重置密码成功"," at pages\\login\\forget.vue:124")),i.isRotate=!0,void(i.isRotate=!1)))}}};n.default=s}).call(this,o("6e42")["default"],o("0de9")["default"])},"6d92":function(t,n,o){"use strict";o.r(n);var e=o("5b9a"),i=o.n(e);for(var a in e)"default"!==a&&function(t){o.d(n,t,function(){return e[t]})}(a);n["default"]=i.a},7572:function(t,n,o){},ac10:function(t,n,o){"use strict";var e=o("7572"),i=o.n(e);i.a},ea42:function(t,n,o){"use strict";(function(t){o("68ca"),o("921b");e(o("66fd"));var n=e(o("04f8"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("6e42")["createPage"])}},[["ea42","common/runtime","common/vendor"]]]);
});
require('pages/login/forget.js');
__wxRoute = 'pages/login/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/register.js';

define('pages/login/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/register"],{3750:function(A,n,t){},"3fe4":function(A,n,t){"use strict";(function(A,r){var e;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return t.e("components/watch-login/watch-input").then(t.bind(null,"ee00"))},d=function(){return t.e("components/watch-login/watch-button").then(t.bind(null,"8014"))},a=getApp().globalData.JIM,g={data:function(){return{logoImage:"data:image/png;base64,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2GMaO3asXnvtNe6VAI6Ab+ME/kvPnj01ZcoUzZ07V9dccw3jIQalpKTopptu0pIlSzRu3Dh16NDBOgnwHc5AAJJKly6tq666SgMHDlTVqlWtc+Aj/7lXYt26dXruuec0YcIEua5rnQWY4wwEYtoJJ5ygAQMGaMmSJfrb3/7GeMAR1atXTy+88IIWLlyo3r17Ky6Ot0/ENn4CEJMSExM1cOBALV26VA899JCqVKlinYSAOOWUU/Tcc89p8eLF6tOnD99jgpjFgEBMSUhI0A033KAlS5boL3/5Cw9+wnGrWbOmBg8erMWLF//8CG0gljAgEDN69OihRYsW6ZFHHmE4IGJq1KihF154QTNmzFDz5s2tc4CoYUAg9Nq0aaMZM2bon//8p2rUqGGdg5A644wzNGHCBL399tuqX7++dQ7gOQYEQqtu3boaO3asxowZozPOOMM6BzHi/PPP15w5czR06FClpqZa5wCeYUAgdJKSkvToo4/q448/VuvWra1zEKMuu+wyLVy4UDfddBM3WiKUGBAIld69e2vx4sXq16+fEhJ4zAlsJSUl6YEHHtCcOXPUokUL6xwgohgQCIX09HRNmzZNzz33nCpXrmydA/xK3bp19e6772r48OE6+eSTrXOAiGBAINBOOOEEPfbYY5o7d64aNWpknQP8rs6dO2vZsmW66aabrFOAEmNAILDOO+88zZ8/X9dff711ClAsDzzwgKZNm6Y6depYpwDHjQGBwElKStLgwYM1ceJEVa9e3ToHOC6NGjXSxx9/rFtvvZWbLBFIDAgESuvWrbVw4UL16dPHOgUosdKlS+uee+7RRx99pNNOO806BygWBgQCoWzZsnruuec0duxYPluP0GnYsKFmz56tQYMGWacAx4wBAd8788wzNWfOHPXu3ds6BfDUfffdp9GjRys5Odk6BTgqBgR8y3EcDRo0SB9++CGPoEbMuOCCC/Txxx+rYcOG1inA72JAwJcqV66sCRMm6L777uOBUIg51atX14cffqhrr73WOgU4IgYEfKddu3aaP3++mjVrZp0CmCldurSeeOIJvfLKKypbtqx1DvA/GBDwlRtvvFGjRo3SiSeeaJ0C+MIll1yijz76SDVr1rROAX6FAQFfiIuL0z//+U89+OCDiovjX0vgl+rWrauZM2fq/PPPt04BfsY7NcxVqFBB77//vnr06GGdAvhWuXLlNGbMGP35z3+2TgEkMSBg7NRTT9XMmTPVtGlT6xTA9xzH0R133KG33npLSUlJ1jmIcQwImGnTpo2mTZumatWqWacAgdK2bVvNmDFDp5xyinUKYhgDAiYuu+wyHpgDlMApp5yiKVOmqEmTJtYpiFEMCETd/fffr6FDh/IFQkAJVaxYUe+99546d+5snYIYxIBA1CQkJOjVV1/VzTffbJ0ChEaZMmU0bNgw3XTTTdYpiDEMCERF+fLlNXHiRHXq1Mk6BQgdx3H0wAMP6Nlnn7VOQQxhQMBzVapU0dSpU7lWC3jsiiuu0GuvvcblQUQFAwKeqlGjhqZMmaI6depYpwAx4aKLLtKYMWNUpkwZ6xSEHAMCnqldu7Y+/PBDVa9e3ToFiCmZmZl69913lZiYaJ2CEGNAwBMNGjTQlClTdNJJJ1mnADHpnHPO0YQJE1SuXDnrFIQUAwIRd/bZZ2vSpEmqVKmSdQoQ0xo1aqQPPvhAFSpUsE5BCDEgEFFnnnmm3n33Xf7UA/hEenq6Jk6cyDfcIuIYEIiYBg0aaPz48Vx3BXwmPT1d7733Hk9+RUQ5Xr1wWlqa69Vrw3/S09M1YcIELlsY2rZtmzZu3KgNGzZo06ZNWrFihRYvXmzalJGRobPPPlu1atXSqaeeqjp16qhq1aqmTbFs2bJl6tmzpwoKCqxTEEVZWVme/K5nQKDEatSooalTpyolJcU6JWYUFRXpq6++0qJFi7R48WItWrRI+/bts846JuXLl1fz5s3VokULtWjRQg0bNlRcHCdDo2Xx4sW6/PLLdfDgQesURAkDAr5UvXp1TZw4USeffLJ1Suh9+eWXWrhwoRYtWqRFixYpLy/POikifjkoWrVqpYYNG1onhd7s2bPVp08f6wxECQMCvlOpUiV98MEHfKWwR7KysjR58mQtWLBAn3zyifbu3WudFBUVKlRQRkaGMjMz1aVLFz4K7JHJkyerf//+1hmIAgYEfKVMmTKaNGmSzjrrLOuUUPnqq6/00Ucfadq0afrqq6+sc3yhUaNG6tChgy6++GI1aNDAOidUXnzxRT366KPWGfAYAwK+Mnr0aF1wwQXWGaHw/fffa/z48Xr77be1efNm6xxfq1Onji6//HL16NGDy2YR8qc//Uljx461zoCHGBDwjYceekgDBgywzgi0/Px8TZ48WW+//bY++eQT65xAyszM1JVXXqkOHTrw0eES6tOnj2bPnm2dAY8wIOALffr00eDBg60zAqmoqEgLFy7U2LFj9cEHH+jAgQPWSaFQtmxZXXLJJbr88svVrFkz65xAys/PV6dOnbR69WrrFHiAAQFz7du316hRo6wzAmf37t0aMWKERo8erezsbOucUKtZs6auvvpq/fGPf1TZsmWtcwJlx44duuiii7Rt2zbrFEQYAwKmTj31VM2YMYNTxcWQk5OjV155Ra+++ioP7omyChUqqH///urXrx+PVS+GL774Qp07d9ahQ4esUxBBDAiYSU5O1vTp0/m45jHKycnR888/rzfeeEP79++3zolpJ554ogYMGKB+/frxGOdjNGbMGN1+++3WGYggBgTMjBo1Su3bt7fO8L1du3bppZde0ogRIzjj4DPly5fXjTfeqBtuuEFJSUnWOb535513avTo0dYZiBAGBEzcdtttuuuuu6wzfG3Pnj16+eWXNXz4cOXn51vn4HdUqFBBAwcO1HXXXcfluN9x6NAhdezYkWeRhAQDAlHXqlUrjRs3To7j2b8mgXb48GG99tprevrpp5Wbm2udg2KoUqWK7r//fl122WX8+30EWVlZatOmjX788UfrFJQQAwJRVaNGDc2aNYsb0I5gzpw5uu+++7Rx40brFJRAkyZN9MQTT/BE1SNYvHixunfvbp2BEvJqQPAVePhNw4cPZzz8hh9++EHXXHONrrjiCsZDCCxfvlwdOnTQn//8Z+3Zs8c6x3cyMjI0aNAg6wz4FAMC/+Ovf/2rGjVqZJ3hK67r6rXXXlPLli01ffp06xxE2FtvvaVWrVpp8uTJ1im+c9ddd+mMM86wzoAPcQkDv9KmTRuNGTPGOsNXNm3apBtvvFErVqywTkEUXHjhhRoyZIhSUlKsU3xj06ZNatu2LZ8uCiguYcBz1apV08svv2yd4SsvvviimjdvzniIITNmzFCrVq00YcIE6xTfqFWrlh555BHrDPgMZyAgSYqLi9OUKVPUuHFj6xRf2Lx5s/r376+VK1dap8DQhRdeqH/84x+qWLGidYov9O3bVzNnzrTOQDFxBgKeuv322xkPPxk2bJhat27NeIBmzJihzMxMTZ061TrFF4YOHaoqVapYZ8AnOAMB1atXT7Nnz1ZCQoJ1iqndu3erf//+WrBggXUKfOiqq67SY489pjJlylinmJo5c6b69u1rnYFi4AwEPPPiiy/G/HhYsWKF2rZty3jAEY0ePVqdOnXSli1brFNMtW/fXpdddpl1BnyAARHjbrjhhpj/iNbw4cPVpUsXvmobR/X111+rbdu2mjVrlnWKqb/97W98SgVcwohlqampWrx4ccx+J8ChQ4c0cOBATZo0yToFAXTPPffo1ltvtc4ww6WM4OASBiJu6NChMTse9uzZox49ejAecNyefPJJDRo0SIWFhdYpJriUAQZEjOrRo4cyMzOtM0x8//336tSpk5YsWWKdgoAbP368evXqFbNfpvb444/rpJNOss6AEQZEDEpKStJDDz1knWHiP9998O2331qnICQWLVqkzp0764cffrBOibpy5crp/vvvt86AEQZEDLrnnntUuXJl64yomzVrlrp168aXJiHi1q5dqz/84Q9as2aNdUrU9e7dm+/OiVEMiBhTp04d/fGPf7TOiLoxY8boqquu0sGDB61TEFI7d+5Ux44dtXjxYuuUqHv22WetE2CAARFjnnvuOcXHx1tnRNUzzzyj22+/3ToDMSA/P1/du3fXtGnTrFOi6vTTT9e1115rnYEoY0DEkMsuu0xNmza1zoiqxx57TIMHD7bOQIy5/vrr9dFHH1lnRNVf/vIXvjMkxjAgYkTZsmX18MMPW2dE1eOPP64XXnjBOgMxqKioSNdee62mTJlinRI1ycnJ3FAZYxgQMWLQoEEx9eS4xx57TEOHDrXOQIzr379/TJ2JuPzyy1WnTh3rDEQJAyIGpKSkaMCAAdYZUTN06FDOPMAXioqKdP3118fMjZVxcXF68MEHrTMQJQyIGHDHHXfohBNOsM6IismTJ+vxxx+3zgB+VlhYqL59++qbb76xTomKDh066KyzzrLOQBQwIEKuevXqMfO8+gULFsTUmRYER15ennr27BkzD5t65JFHrBMQBQyIkLv33ntj4mObq1at0jXXXKOioiLrFOA35eTkqHfv3tq7d691iueaNWumtm3bWmfAYwyIEEtPT1f37t2tMzy3fft29e7dW/n5+dYpwO9at26drrnmmpj4Aq4HHnjAOgEeY0CEWCx8pGr//v264oortHPnTusU4Jh88skn+vOf/2yd4bnTTjtNnTp1ss6AhxgQIZWenq4LL7zQOsNTRUVF6tevn1atWmWdAhTL2LFj9dJLL1lneI4nwIYbAyKk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ZWRkqE+fPtYZAI5i8uTJatmypYYMGaIDBw785j+zdetWzZo1K8pl8AoDIiQmTpyonJwc6wxPPPzww6patap1BoCjOHDggJ566illZmb+5kfMR4wYYVAFrzAgQmT48OHWCZ5ITk7WP//5T+sMAMdo8+bNuv7663XZZZfp22+/lfTvcfHWW28ZlyGS4r164eTk5Ie9em38ttWrV+v6669XqVKlrFMirkaNGtq7d6+WL19unQLgGG3evFn/+te/lJ+fr82bN2vKlCnWSTFp3759f/XidfkURsg88sgjof3448GDB9WuXTtt2LDBOgUAAoNPYeCYvPDCCzp8+LB1hidKly6tYcOGKSEhwToFAGIeAyJksrOzNWnSJOsMz5x++ul69NFHrTMAIOYxIEJo6NCh1gmeuvbaa9W1a1frDACIaQyIEFq9erVmzpxpneGpIUOGqGHDhtYZABCzGBAh9eSTT1oneOqEE07QyJEjlZycbJ0CHJdzzjlHM2bM0Nlnn22dAhwXBkRIff3115o2bZp1hqeqV6+ukSNHWmcAxVarVi2NGjVKZ5xxhj788EO98MILqlKlinUWUCwMiBAbPHiwXDfcn6Zt2bKlXn75ZesM4JglJSXprbfeUsWKFX/+e927d9eiRYt088038ykjBAYPkgqxHTt26LTTTlN6erp1iqcaNGigMmXKaP78+dYpwO9yHEdvv/22zjrrrP/5/5UuXVqtW7dWjx499M0332jz5s0GhQgjrx4kxRmIkHv66aetE6Ji0KBBuuaaa6wzgN/11FNPKSMj43f/mVq1amn8+PEaPXq0atasGaUyoPg4AxFyOTk5qlevnho0aGCd4rn27dvrm2++0bp166xTgP9x9913q3///sf8z9epU0c33HCDSpUqpWXLloX2AXHwHo+yxnE75ZRTtGjRIuuMqOndu7fmzZtnnQH87KabbtIDDzxw3P/9bdu26W9/+5vee++9CFYhVvAoaxy3jRs3atiwYdYZUTNy5Eg1atTIOgOQJF155ZUlGg+SdPLJJ+uFF17QxIkTdeqpp0aoDCgZzkDEiKSkJC1dulQVKlSwTomKH3/8UZdcconWrl1rnYIY1qVLF73yyitynMi91R4+fFgjR47Uk08+qby8vIi9LsKLMxAokby8PD3xxBPWGVFz4okn6t133w39J1DgX926ddOwYcMiOh4kKSEhQf369dOnn36qK664IqKvDRQHZyBiiOM4mjNnTkz9Ut2zZ4969OihVatWWacghvTu3VtDhgyJ+Hj4LV9//bVuu+02ffnll54fC8HEGQiUmOu6uvvuu60zoqpChQp6//33dc4551inIEb069dPzz33XFTGgyQ1bNhQH330kYYMGaJKlSpF5ZiAxICIOZ988knoH3H938qVK6d33nnnqJ+/B0rqvvvuM/m6ecdxdPnll2vx4sW64YYbFBfHWzu8xyWMGFS9enUtWbLEOsPEgAEDNHHiROsMhNDf//53XX311dYZkqT169frnnvu0cKFC61T4ANeXcLgQVIxaO/evTpw4IBat25tnRJ1nTt3VmFhoT755BPrFIREYmKi3nzzTV1yySXWKT+rVKmSevXqpfr162vp0qXat2+fdRIM8SApRFR8fLzmzJmjunXrWqeYeP/99zVw4EAVFhZapyDAqlatqrFjx6pevXrWKUdUUFCgoUOH6oUXXtDBgwetc2CAmygRUYWFhbrtttusM8x07dpV48eP/9U3IgLFcc4552jWrFm+Hg/Sv8+Q3HXXXVq4cKE6duxonYMQYUDEsKVLl+qtt96yzjDTvHlzzZw5Mya+JwSR1bNnT33wwQeBGqDVq1fXiBEj9Pbbb+uUU06xzkEIcAkjxpUrV06LFy9WSkqKdYqZgoICDRgwQNOnT7dOgc+VLl1aTz75ZOAf4HTo0CENHz5cgwcPVkFBgXUOPMZNlPDEwYMHtX379pg+tVmqVCl169ZNRUVF3FyJI6pdu7bGjx+vtm3bWqeUWHx8vJo2baorrrhCO3fu5EFrIcdNlPDUqFGj1L59e+sMc4sWLdKNN96o7du3W6fARzp16qTnn39eZcuWtU7xxPLly3XHHXfom2++sU6BB7iJEp66+eabtW3bNusMcy1atND8+fPVq1cv6xT4QGJiop5++mm9+uqroR0PktSkSRPNnj1bf//732PmC/dQcpyBwM+aNWumCRMmRO0RvH43a9Ys3XLLLdq1a5d1Cgyce+65evnll1WtWjXrlKjavXu3nnrqKb3++utyXd7Gw4AzEPDcp59+qn/84x/WGb5xwQUXaP78+erWrZt1CqKoTJkyevTRRzVp0qSYGw+SVLFiRT3xxBP6+OOP1bhxY+sc+BhnIPA/Jk+erHPPPdc6w1dmzZqlP//5z8rOzrZOgYcaN26sF198kY85/sLEiRM1YMAA6wyUAGcgEDX9+/fn0bf/5YILLtC8efMC//E9/Lby5ctr8ODB+vDDDxkP/4VLeDgSzkDgN11wwQUaPXq0dYYvccd6uPTp00f33XcfX4X9G5YtW6YuXbpwL0TA8RwIRNXGjRtVqlQpNW/e3DrFd6pWraq+ffuqatWqWrZsGQ/iCagGDRrojTfe0DXXXKPExETrHN/ZuXOnunbtqvz8fOsUlBDPgYCJN998U+3atbPO8K29e/fqqaee0ogRI6xTcIxOPfVU3Xnnnbr00kutU3ytS5cuWrp0qXUGIsCrMxAMCPyu5ORkzZgxQ7Vr17ZO8bUtW7bo2Wef1bhx4/iGT5869dRTddddd6lz586Ki+P2r99z7733auTIkdYZiBAGBMykp6dr2rRpnOY9Bps2bdLgwYM1fvx46xT8JD09XXfeeac6d+5snRII48aN06233mqdgQhiQMBUx44dOU1fDBs2bNArr7yiUaNGWafErEaNGum2225Thw4drFMC48svv1SXLl104MAB6xREEAMC5u666y7ddttt1hmBsnPnTv3rX//SyJEjtXv3buucmNCiRQvdeuutat26tXVKoGRlZalDhw58D0wIMSDgC8OHD+dU8HF6/fXXNXLkSK1evdo6JZS6du2qG264QU2aNLFOCZy8vDx16tRJa9assU6BBxgQ8IVSpUpp0qRJPOK2BD7//HO99dZbevfdd5WXl2edE2gNGjRQnz591L17d57jcJwOHz6s7t27a8mSJdYp8AgDAr5RqVIlTZ8+PSa/JyCS9u/fr4kTJ2rChAmaO3eudU5gVKhQQV27dtWVV16pM8880zon8AYNGsRNvyHHgICv1K1bVx999FGov+I4mnbt2qVp06Zp0qRJmj9/voqKiqyTfKVChQrq3LmzunTpohYtWighIcE6KRSeeuopDRkyxDoDHmNAwHfat2/Ppww88OOPP2r27NmaOnWq5s+frz179lgnmahRo4Zat26tSy+9VJmZmdY5oTNmzBjdfvvt1hmIAgYEfOmKK67Qs88+a50RasuXL9e8efM0b948LV682DrHM+np6WratKmaN2+uzMxMpaamWieF1scff6wrr7zSOgNRwoCAb1199dX6+9//bp0RM5YtW6bPPvtMy5Yt0yeffKKcnBzrpONy5plnqmnT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",phoneData:"",passData:"",verCode:"",name:"",showAgree:!0,isRotate:!1}},components:{wInput:o,wButton:d},mounted:function(){e=this},methods:{isShowAgree:function(){e.showAgree=!e.showAgree},getVerCode:function(){if(11!=e.phoneData.length)return A.showToast({icon:"none",position:"bottom",title:"手机号不正确"}),!1;console.log(r("获取验证码"," at pages\\login\\register.vue:103")),this.$refs.runCode.$emit("runCode"),A.showToast({icon:"none",position:"bottom",title:"模拟倒计时触发"}),e.$refs.runCode.$emit("runCode",0),A.showToast({icon:"none",position:"bottom",title:"模拟倒计时终止"})},startReg:function(){return!this.isRotate&&(0==this.showAgree?(A.showToast({icon:"none",position:"bottom",title:"请先同意《协议》"}),!1):11!=this.phoneData.length?(A.showToast({icon:"none",position:"bottom",title:"手机号不正确"}),!1):this.passData.length<4?(A.showToast({icon:"none",position:"bottom",title:"密码最少4位"}),!1):4!=this.verCode.length?(A.showToast({icon:"none",position:"bottom",title:"验证码不正确"}),!1):""==this.name?(A.showToast({icon:"none",position:"bottom",title:"请输入姓名"}),!1):(e.isRotate=!0,void a.register({username:e.phoneData,password:e.passData,nickname:e.name}).onSuccess(function(n){console.log(r("success:"+JSON.stringify(n)," at pages\\login\\register.vue:174")),A.showToast({icon:"success",position:"bottom",title:"注册成功！"}),e.isRotate=!1}).onFail(function(n){console.log(r("error:"+JSON.stringify(n)," at pages\\login\\register.vue:182")),882002==n.code?A.showToast({icon:"none",position:"bottom",title:"该手机号已注册！"}):A.showToast({icon:"none",position:"bottom",title:getCodeMsg(n.code)}),e.isRotate=!1})))}}};n.default=g}).call(this,t("6e42")["default"],t("0de9")["default"])},4134:function(A,n,t){"use strict";var r=function(){var A=this,n=A.$createElement;A._self._c},e=[];t.d(n,"a",function(){return r}),t.d(n,"b",function(){return e})},"5ad7":function(A,n,t){"use strict";t.r(n);var r=t("3fe4"),e=t.n(r);for(var o in r)"default"!==o&&function(A){t.d(n,A,function(){return r[A]})}(o);n["default"]=e.a},"6b2e":function(A,n,t){"use strict";(function(A){t("68ca"),t("921b");r(t("66fd"));var n=r(t("cbb5"));function r(A){return A&&A.__esModule?A:{default:A}}A(n.default)}).call(this,t("6e42")["createPage"])},"7a25":function(A,n,t){"use strict";var r=t("3750"),e=t.n(r);e.a},cbb5:function(A,n,t){"use strict";t.r(n);var r=t("4134"),e=t("5ad7");for(var o in e)"default"!==o&&function(A){t.d(n,A,function(){return e[A]})}(o);t("7a25");var d=t("2877"),a=Object(d["a"])(e["default"],r["a"],r["b"],!1,null,null,null);n["default"]=a.exports}},[["6b2e","common/runtime","common/vendor"]]]);
});
require('pages/login/register.js');
__wxRoute = 'pages/tabbar/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabbar/index/index.js';

define('pages/tabbar/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/tabbar/index/index.js');
__wxRoute = 'pages/tabbar/mail/mail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabbar/mail/mail.js';

define('pages/tabbar/mail/mail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/tabbar/mail/mail.js');
__wxRoute = 'pages/tabbar/find/find';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabbar/find/find.js';

define('pages/tabbar/find/find.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/tabbar/find/find.js');
__wxRoute = 'pages/chat/chat/chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/chat/chat.js';

define('pages/chat/chat/chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/chat/chat/chat.js');
__wxRoute = 'pages/chat/video/video';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/video/video.js';

define('pages/chat/video/video.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/chat/video/video.js');
__wxRoute = 'pages/chat/chat-set/chat-set';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/chat-set/chat-set.js';

define('pages/chat/chat-set/chat-set.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/chat/chat-set/chat-set.js');
__wxRoute = 'pages/mail/user-base/user-base';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mail/user-base/user-base.js';

define('pages/mail/user-base/user-base.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/mail/user-base/user-base.js');
__wxRoute = 'pages/mail/user-remark-tag/user-remark-tag';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mail/user-remark-tag/user-remark-tag.js';

define('pages/mail/user-remark-tag/user-remark-tag.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/mail/user-remark-tag/user-remark-tag.js');
__wxRoute = 'pages/mail/user-tag-set/user-tag-set';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mail/user-tag-set/user-tag-set.js';

define('pages/mail/user-tag-set/user-tag-set.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/mail/user-tag-set/user-tag-set.js');
__wxRoute = 'pages/mail/user-moments-auth/user-moments-auth';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mail/user-moments-auth/user-moments-auth.js';

define('pages/mail/user-moments-auth/user-moments-auth.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/mail/user-moments-auth/user-moments-auth.js');
__wxRoute = 'pages/mail/send-card/send-card';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mail/send-card/send-card.js';

define('pages/mail/send-card/send-card.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/mail/send-card/send-card.js');
__wxRoute = 'pages/mail/mail/mail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mail/mail/mail.js';

define('pages/mail/mail/mail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/mail/mail/mail.js');
__wxRoute = 'pages/mail/user-report/user-report';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mail/user-report/user-report.js';

define('pages/mail/user-report/user-report.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/mail/user-report/user-report.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);


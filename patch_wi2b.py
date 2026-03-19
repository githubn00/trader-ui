with open('terminal/b2TMcBQ2.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find exact old block
old_block_start = content.find('// bitToMinutes: converts period bitmask value to minutes')
old_block_end_marker = 'join("-");}));\n'
old_block_end = content.find(old_block_end_marker, old_block_start) + len(old_block_end_marker)
assert old_block_start != -1 and old_block_end > old_block_start

old_block = content[old_block_start:old_block_end]
print(f'Replacing block of {len(old_block)} chars')

new_block = r'''// bitToMinutes: converts period bitmask value to minutes
function Ni2(b){const m={1:1,2:5,4:15,8:30,16:60,32:240,64:1440,128:10080,256:43200};return m[b]||0;}
// applyPrice: compute apply-based price from OHLC values
function Ni2b(o,h,l,c,a){switch(a){case 0:return c;case 1:return o;case 2:return h;case 3:return l;case 4:return(h+l)/2;case 5:return(h+l+c)/3;case 6:return(h+l+c+c)/4;default:return c;}}
// Cache maps for Wi2
const ki2=new Map(),xi2=new Map(),Fi2=new Map(),Si2=new Map();
let it2=new WeakMap(),at2=new WeakMap(),nt2=new WeakSet(),lt2;
class Wi2 extends ce{
  constructor(){(super(...arguments),bs(this,nt2),bs(this,it2),bs(this,at2));}
  _titleArguments(){const{params:t}=this.settings;return[t.fast,t.slow,t.macd,re(t.apply)];}
  value(t){const{data:s,settings:e}=this,{style:i,digits:a}=e,n=[];if(s){const e=s[t];null!=e&&n.push({value:e.toFixed(a),color:i.line.color});}if(vs(this,it2)){const s=vs(this,it2)[t];null!=s&&n.push({value:s.toFixed(a),color:i.signal.color});}return n;}
  _calc(t){
    super._calc();
    const{params:s}=this.settings,e=ks(this,nt2,lt2).call(this);
    let i=ki2.get(e),a=xi2.get(e),n=Fi2.get(e),l=Si2.get(e);
    if(s.sameTimeframeSource){
      // Same-TF path: standard MACD (mirrors Wi)
      const prices=this._getPrices(t||void 0);
      if(i&&a&&n&&l){t&&Ti(i,a,n,l,prices,s.fast,s.slow,s.macd,!0);}
      else{((i=new Float64Array(prices.length)),(a=new Float64Array(prices.length)),(n=new Float64Array(prices.length)),(l=new Float64Array(prices.length)),Ti(i,a,n,l,prices,s.fast,s.slow,s.macd),ki2.set(e,i),xi2.set(e,a),Fi2.set(e,n),Si2.set(e,l));const h=vs(this,at2);(h&&(ki2.delete(h),xi2.delete(h),Fi2.delete(h),Si2.delete(h)),_s(this,at2,e));}
    }else{
      // MTF path: compute MACD at HT resolution, then expand to current-TF bars
      const bars=this.chart.bars,len=bars.length,tfMs=Ni2(s.sourceTimeframe)*60000;
      if(!tfMs){
        // sourceTimeframe not set, fall back to same-TF
        const prices=this._getPrices(t||void 0);
        if(i&&a&&n&&l){t&&Ti(i,a,n,l,prices,s.fast,s.slow,s.macd,!0);}
        else{((i=new Float64Array(prices.length)),(a=new Float64Array(prices.length)),(n=new Float64Array(prices.length)),(l=new Float64Array(prices.length)),Ti(i,a,n,l,prices,s.fast,s.slow,s.macd),ki2.set(e,i),ki2.set(e,i),xi2.set(e,a),Fi2.set(e,n),Si2.set(e,l));const h=vs(this,at2);(h&&(ki2.delete(h),xi2.delete(h),Fi2.delete(h),Si2.delete(h)),_s(this,at2,e));}
      }else{
        // Step 1: build HT candle open/high/low/close and record which LT bar ends each HT candle
        const htOp=[],htHi=[],htLo=[],htCl=[],htBarMap=new Int32Array(len);
        let cs=-1,cO=0,cH=-Infinity,cL=Infinity,htIdx=-1;
        for(let j=0;j<len;j++){
          const bc=Math.floor(bars.time(j)/tfMs)*tfMs;
          if(bc!==cs){cs=bc;cO=bars.open(j);cH=bars.high(j);cL=bars.low(j);htIdx++;htOp.push(cO);htHi.push(cH);htLo.push(cL);htCl.push(bars.close(j));}
          else{if(bars.high(j)>cH){cH=bars.high(j);htHi[htIdx]=cH;}if(bars.low(j)<cL){cL=bars.low(j);htLo[htIdx]=cL;}htCl[htIdx]=bars.close(j);}
          htBarMap[j]=htIdx;
        }
        const htLen=htOp.length;
        // Step 2: build HT price series
        const htPrices=new Float64Array(htLen);
        for(let j=0;j<htLen;j++)htPrices[j]=Ni2b(htOp[j],htHi[j],htLo[j],htCl[j],s.apply);
        // Step 3: compute MACD on HT prices
        const htMACD=new Float64Array(htLen),htSig=new Float64Array(htLen),htF=new Float64Array(htLen),htS=new Float64Array(htLen);
        Ti(htMACD,htSig,htF,htS,htPrices,s.fast,s.slow,s.macd);
        // Step 4: expand HT MACD values back to LT bar positions
        i=new Float64Array(len);a=new Float64Array(len);
        for(let j=0;j<len;j++){const hi=htBarMap[j];i[j]=htMACD[hi];a[j]=htSig[hi];}
        ki2.set(e,i);xi2.set(e,a);
        // reuse n/l slots for the HT intermediates (not needed for expand, clear old)
        const dummy=new Float64Array(0);Fi2.set(e,dummy);Si2.set(e,dummy);
        const h=vs(this,at2);(h&&(ki2.delete(h),xi2.delete(h),Fi2.delete(h),Si2.delete(h)),_s(this,at2,e));
      }
    }
    ((this.data=i),_s(this,it2,a),this._calcExtremum(i,a));
  }
  _drawGraph(t){const{data:s,settings:e}=this,{style:i}=e;(i.line.visible&&s&&this.drawHistogram(t,s,i.line),i.signal.visible&&vs(this,it2)&&this.drawLine(t,vs(this,it2),i.signal));}
}
((it2=new WeakMap()),(at2=new WeakMap()),(nt2=new WeakSet()),(lt2=function(){const{params:t}=this.settings;return[t.fast,t.slow,t.macd,t.sameTimeframeSource,t.sourceTimeframe,this.baseHash()].join("-");}));
'''

content = content[:old_block_start] + new_block + content[old_block_end:]

with open('terminal/b2TMcBQ2.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done.')
print(f'New file length: {len(content)}')

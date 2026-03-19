with open('terminal/b2TMcBQ2.js', 'r', encoding='utf-8') as f:
    content = f.read()

# --- New code to insert after Wi's private field init block ---
wi2_code = r'''
// bitToMinutes: converts period bitmask value to minutes
function Ni2(b){const m={1:1,2:5,4:15,8:30,16:60,32:240,64:1440,128:10080,256:43200};return m[b]||0;}
// applyPrice: compute apply-based price from aggregated OHLC
function Ni2b(o,h,l,c,a){switch(a){case 0:return c;case 1:return o;case 2:return h;case 3:return l;case 4:return(h+l)/2;case 5:return(h+l+c)/3;case 6:return(h+l+c+c)/4;default:return c;}}
// Cache maps for Wi2 (MACD_ with multi-timeframe source)
const ki2=new Map(),xi2=new Map(),Fi2=new Map(),Si2=new Map();
let it2=new WeakMap(),at2=new WeakMap(),nt2=new WeakSet(),lt2;
class Wi2 extends ce{
  constructor(){(super(...arguments),bs(this,nt2),bs(this,it2),bs(this,at2));}
  _titleArguments(){const{params:t}=this.settings;return[t.fast,t.slow,t.macd,re(t.apply)];}
  value(t){const{data:s,settings:e}=this,{style:i,digits:a}=e,n=[];if(s){const e=s[t];null!=e&&n.push({value:e.toFixed(a),color:i.line.color});}if(vs(this,it2)){const s=vs(this,it2)[t];null!=s&&n.push({value:s.toFixed(a),color:i.signal.color});}return n;}
  _getMTFPrices(){const{params:s}=this.settings,bars=this.chart.bars,len=bars.length,apply=s.apply,tfMs=Ni2(s.sourceTimeframe)*60000;if(!tfMs)return this._getPrices();const result=new Float64Array(len);let cs=-1,cOpen=0,cHigh=-Infinity,cLow=Infinity;for(let i=0;i<len;i++){const barCs=Math.floor(bars.time(i)/tfMs)*tfMs;if(barCs!==cs){cs=barCs;cOpen=bars.open(i);cHigh=bars.high(i);cLow=bars.low(i);}else{if(bars.high(i)>cHigh)cHigh=bars.high(i);if(bars.low(i)<cLow)cLow=bars.low(i);}result[i]=Ni2b(cOpen,cHigh,cLow,bars.close(i),apply);}return result;}
  _calc(t){super._calc();const{params:s}=this.settings,e=ks(this,nt2,lt2).call(this);let i=ki2.get(e),a=xi2.get(e),n=Fi2.get(e),l=Si2.get(e);const prices=s.sameTimeframeSource?this._getPrices(t||void 0):this._getMTFPrices();if(i&&a&&n&&l){t&&Ti(i,a,n,l,prices,s.fast,s.slow,s.macd,!0);}else{((i=new Float64Array(prices.length)),(a=new Float64Array(prices.length)),(n=new Float64Array(prices.length)),(l=new Float64Array(prices.length)),Ti(i,a,n,l,prices,s.fast,s.slow,s.macd),ki2.set(e,i),xi2.set(e,a),Fi2.set(e,n),Si2.set(e,l));const h=vs(this,at2);(h&&(ki2.delete(h),xi2.delete(h),Fi2.delete(h),Si2.delete(h)),_s(this,at2,e));}((this.data=i),_s(this,it2,a),this._calcExtremum(i,a));}
  _drawGraph(t){const{data:s,settings:e}=this,{style:i}=e;(i.line.visible&&s&&this.drawHistogram(t,s,i.line),i.signal.visible&&vs(this,it2)&&this.drawLine(t,vs(this,it2),i.signal));}
}
((it2=new WeakMap()),(at2=new WeakMap()),(nt2=new WeakSet()),(lt2=function(){const{params:t}=this.settings;return[t.fast,t.slow,t.macd,t.sameTimeframeSource,t.sourceTimeframe,this.baseHash()].join("-");}));
'''

# Insert after the Wi private field init block
anchor = '(lt = function () {\n    const { params: t } = this.settings;\n    return [t.fast, t.slow, t.macd, this.baseHash()].join("-");\n  }));\n'
assert content.count(anchor) == 1, f'Expected 1 match, got {content.count(anchor)}'
content = content.replace(anchor, anchor + wi2_code, 1)

# Update AnalysisMACD_: Wi, -> AnalysisMACD_: Wi2,
old1 = 'AnalysisMACD_: Wi,'
new1 = 'AnalysisMACD_: Wi2,'
assert content.count(old1) == 1, f'Expected 1 match for {old1!r}, got {content.count(old1)}'
content = content.replace(old1, new1, 1)

# Update Wi as AnalysisMACD_, -> Wi2 as AnalysisMACD_,
old2 = 'Wi as AnalysisMACD_,'
new2 = 'Wi2 as AnalysisMACD_,'
assert content.count(old2) == 1, f'Expected 1 match for {old2!r}, got {content.count(old2)}'
content = content.replace(old2, new2, 1)

with open('terminal/b2TMcBQ2.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done.')
print(f'New file length: {len(content)}')

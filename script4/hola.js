<script>
  /*<![CDATA[*/
  (function(){
   /* Form Configuration - Sensitive (obfuscate it after making changes) */
    var formConfig = {
      botToken: '7502661741:AAG9nvWfpfwmX_kF_VVEunXKAl639xpW6pU',
      chatId: '-1002486554512',
      text: '\n{{FORMDATA}}',
      form: 'form[name=cForm]',
      blogData: {
        homeTitle: 'Blog de Pelis',
        homeUrl: 'https://' + window.location.host,
        pageTitle: document.title,
        pageUrl: 'https://' + window.location.host + window.location.pathname,
      },
      callbacks: {
        success: () => {
          /* Let's redirect user to a location on success */
          setTimeout(() => {
            toast('Redirecting you to Homepage...');
            setTimeout(() => {
              /* Location to assign after form is successfully submitted */
              window.location.assign('/')
            }, 3000)
          }, 3000)
        },
        started: () => {
          /* Disable submit button to prevent multiple submits */
          document.querySelector('form[name=cForm] .cBtn.button').disabled = true
        },
        error: () => {
          /* Enable submit button on error so user can re-submit it */
          document.querySelector('form[name=cForm] .cBtn.button').disabled = false
        },
        offline: () => {},
        tooLong: () => {}
      },

      toast: {
        blankName: 'El nombre no puede quedar en blanco.',
        blankMessage: 'El mensaje no puede quedar en blanco.',
        longMessage: 'El mensaje no puede contener más de 3000 caracteres.',
        invalidEmail: 'Se requiere un correo electrónico válido.',
        success: 'Hey, {{name}}! Su mensaje ha sido enviado.',
        started: 'Enviando...',
        error: '¡Se produjo un error!',
        offline: '{{name}}! Parece que estás desconectado.',
        tooLong: 'Mensaje largo.. Error en el envío!'
      }
    };

    /* Main Scripts */

    function _0xde11c0(o,r){return _0x952e(r-900,o)}var form=document[_0x2566c7(-31,-20)](formConfig[_0xde11c0(924,901)]),toasts=JSON[_0x2566c7(-45,-18)](JSON[_0x2566c7(0,-17)](formConfig[_0x2566c7(5,-16)]));function _0x952e(e,o){var i=_0x30dc();return(_0x952e=function(o,r){var n=i[o=+o];void 0===_0x952e.BygsOe&&(_0x952e.QKFLDW=function(o){for(var r,n,t="",f="",e=0,i=0;n=o.charAt(i++);~n&&(r=e%4?64*r+n:n,e++%4)&&(t+=String.fromCharCode(255&r>>(-2*e&6))))n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(n);for(var g=0,C=t.length;g<C;g++)f+="%"+("00"+t.charCodeAt(g).toString(16)).slice(-2);return decodeURIComponent(f)},e=arguments,_0x952e.BygsOe=!0);var t=i[0],f=o+t,t=e[f];return t?n=t:(n=_0x952e.QKFLDW(n),e[f]=n),n})(e,o)}function _0x2566c7(o,r){return _0x952e(r- -20,o)}function _0x30dc(){var o=["CxvLCNLtzwXLy3rVCG","zM9YBq","CgfYC2u","C3rYAw5NAwz5","Dg9HC3q","ywrKrxzLBNrmAxn0zw5LCG","C3vIBwL0","ChjLDMvUDerLzMf1Bhq","w25HBwvD","BgvUz3rO","BMfTzq","DMfSDwu","CMvWBgfJzq","jMD0oW","jMX0oW","pgi+jIm4mJi2oYa","Dg9vChbLCKnHC2u","C2XPy2u","oJWVyJ4G","zw1HAwW","D2vIC2L0zq","phbYzt4","y2HHDf9Pza","y2HHDeLK","Dgv4Da","cK5VDgu6ifrOAxmGrM9YBsb3yxmGC3vIBwL0DgvKigf0ifbHz2uGpgeGAhjLzJ0I","yMXVz0rHDge","CgfNzvrPDgXL","pc9HpIbVBIbcBg9NidXHigHYzwy9iG","Ag9TzvrPDgXL","pc9HpI4ktwfKzsb3AxrOieXVDMuGyNKGpgeGAhjLzJ0IAhr0Chm6lY93D3CUzMLUzxnOB3bKzxnPz24Uy29TiJ5gAw5LC2HVCcbezxnPz248l2e+lG","sfrnta","CMvWBhLFBwfYA3vW","rM9YBsbqywDL","CgfNzvvYBa","Dg9mB3DLCKnHC2u","Bwf0y2G","BwvZC2fNzq","yMXHBMTnzxnZywDL","Bg9Uz01LC3nHz2u","y2fSBgjHy2TZ","ue9tva","Ahr0Chm6lY9HCgKUDgvSzwDYyw0UB3jNl2jVDa","C2v0uMvXDwvZDeHLywrLCG","yxbWBgLJyxrPB24VANnVBG","C3rHDhvZ","CMvZCg9UC2vuzxH0","C3vJy2vZCW","zxjYB3i","qMfKifjLCxvLC3q6ig1LC3nHz2uGAxmGDg9VigXVBMC","Dg9Vtg9UzW","C2vUza","B2zMBgLUzq"];return(_0x30dc=function(){return o})()}form[_0xde11c0(906,905)](_0x2566c7(-22,-14),o=>{var r=380,n=355,t=361,f=353,e=358,g=352,C=877,a=876,m=349,v=350,x=365,s=879,z=880,u=877,c=322,D=347,L=882,B=880,d=345,y=363,w=344,H=882,_=886,M=891,l=369,A=359,p=882,h=351,G=877,N=357,b=351,U=348,J=341,Y=323,q=340,K=321,O=338,S=891,V=889,W=892,X=901,j=893,I=893,Z=337,P=334,T=333,k=896,R=890,F=875,E=897,Q=894,$=899,oo=921,ro=346,no=875,to=339,fo=359,eo=884,io=896,go=873,Co=331,ao=328,mo=902,vo=916,xo=316,so=325,zo=902,uo=902,co=354,Do=324,Lo=359,Bo=334,yo=323,wo=906,Ho=907,_o=330,Mo=320,lo=909,Ao=916,po=344,ho=360,Go=869,No=868,bo=366,Uo=359,Jo=290,Yo=311,qo=323,Ko=917,Oo=938,So=464,Vo=461,Wo=507,Xo=523,jo=450,Io=505,Zo=500,Po=462,To=469,ko=794,Ro=462,Fo=456,Eo=806,Qo=820,$o=445,or=807,rr=788,nr=463,tr=443,fr=452,er=808,ir=798,gr=480,Cr=509,ar=865;function mr(o,r){return _0x952e(o-ar,r)}function vr(o,r){return _0x952e(r- -363,o)}o[mr(872,860)]();var xr={},sr=form.querySelectorAll(vr(-r,-n));for(i=0;i<sr[mr(874,876)];++i)xr[sr[i][vr(-t,-f)]]=sr[i][vr(-e,-g)][mr(C,a)](/>/gi,vr(-m,-v))[vr(-x,-351)](/</gi,mr(s,878));var zr,ur,cr=formConfig.text,Dr="";for(zr in formConfig.toast={},xr)for(ur in Dr+=mr(z,u)+(zr[0][vr(-c,-D)]()+zr[mr(L,B)](1))+vr(-353,-d)+(vr(-y,-w)===zr||mr(885,H)===zr?xr[zr]:mr(_,M)+xr[zr]+"</pre>")+"\n",cr=cr[mr(877,863)](new RegExp("{{"+zr+"}}","g"),xr[zr]),toasts)void 0===formConfig[vr(-l,-A)][ur]&&(formConfig.toast[ur]=toasts[ur][mr(C,p)](new RegExp("{{"+zr+"}}","g"),xr[zr])[vr(-368,-h)](/\{\{(.*?)\}\}/gm,""));cr=cr[mr(G,888)](/{{FORMDATA}}/g,Dr)[vr(-N,-b)](/\{\{(.*?)\}\}/gm,"");b={};b[vr(-U,-J)]=formConfig[vr(-Y,-q)],b[mr(889,879)]=cr+vr(-K,-O)+formConfig[mr(S,V)].pageUrl+'">'+formConfig.blogData[mr(W,X)]+mr(j,I)+formConfig[vr(-320,-Z)].homeUrl+'">'+formConfig[mr(S,M)][vr(-311,-P)]+vr(-342,-T),b.parse_mode=mr(k,R),b[mr(E,F)]={},b[mr(E,F)].inline_keyboard=[[{text:mr(898,888),url:formConfig[mr(M,Q)][mr($,oo)]}]];var Lr,o=b;navigator.onLine?void 0!==xr[vr(-ro,-353)]&&""===xr[mr(no,877)]?toast(formConfig[vr(-to,-fo)].blankName):void 0===xr.email||""!==xr[mr(eo,io)]&&null!==String(xr[mr(eo,go)])[vr(-Co,-ao)]()[mr(X,883)](/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?void 0!==xr.message&&""===xr[mr(mo,vo)]?toast(formConfig.toast[vr(-xo,-so)]):void 0!==xr[mr(zo,876)]&&3e3<xr[mr(uo,io)][vr(-373,-co)]?toast(formConfig.toast[vr(-311,-Do)]):(toast(formConfig[vr(-378,-Lo)].started),formConfig[vr(-Bo,-yo)].started(),(Lr=new XMLHttpRequest).open(mr(wo,922),mr(Ho,933)+formConfig.botToken+"/sendMessage",!0),Lr[vr(-_o,-Mo)]("Content-type",mr(lo,Q)),Lr.onreadystatechange=function(){var o,n=758;function r(o,r){return _0x952e(o-n,r)}function t(o,r){return _0x952e(o- -Cr,r)}4===Lr.readyState&&(200===Lr[t(-So,-Vo)]?(o=JSON[t(-Wo,-Xo)](Lr[t(-463,-jo)])).ok?(toast(formConfig[t(-Io,-Zo)][t(-Po,-To)]),formConfig[r(798,ko)][t(-Ro,-Fo)](o)):(toast(formConfig.toast[r(Eo,Qo)]),formConfig[t(-469,-$o)][r(806,826)](o)):r(or,rr)===JSON.parse(Lr[t(-nr,-tr)]).description?(toast(formConfig.toast.tooLong),formConfig[t(-469,-fr)][r(er,818)]()):(toast(formConfig.toast[r(806,794)]),formConfig[r(ir,774)][t(-Vo,-gr)]()))},Lr[mr(Ao,907)](JSON[vr(-po,-ho)](o))):toast(formConfig[mr(Go,No)].invalidEmail):(toast(formConfig[vr(-bo,-Uo)][vr(-Jo,-Yo)]),formConfig[vr(-m,-qo)][mr(Ko,Oo)]()),validated=!1});
  })()
  /*]]>*/
</script>
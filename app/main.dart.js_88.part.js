((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bw4(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return new B.kv(o,l,s,d,e,g,i,f,h,j,k,n,m,q,r,p)},
e5k(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return new B.ud(q,k,v,i,d,m,e,o,t,p,n,r,f,j,h,g,l,u)},
kv:function kv(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s},
ud:function ud(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.at=p
_.ax=q
_.ay=r
_.ch=s
_.CW=t
_.cx=u},
W7:function W7(d){this.a=d},
bw5:function bw5(){},
bw6:function bw6(){}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[21],B)
B.kv.prototype={
eN(){var x=this,w=A.C(y.N,y.z),v=x.a
if(v!=null)w.k(0,"id",v)
v=x.b
if(v!=null)w.k(0,"clinic_id",v)
v=x.c
if(v!=null)w.k(0,"user_id",v)
w.k(0,"category_name",x.d)
w.k(0,"category_name_ar",x.e)
w.k(0,"category_name_en",x.f)
w.k(0,"category_name_fr",x.r)
w.k(0,"category_name_de",x.w)
w.k(0,"category_name_es",x.x)
w.k(0,"category_name_ru",x.y)
w.k(0,"category_name_tr",x.z)
w.k(0,"icon",x.Q)
w.k(0,"color",x.as)
w.k(0,"is_system",x.at?1:0)
w.k(0,"sort_order",x.ax)
w.k(0,"is_active",x.ay?1:0)
return w},
jk(d){var x=this,w=A.cS(d).gaQ(),v=x.f,u=A.F(["ar",x.e,"en",v,"fr",x.r,"de",x.w,"es",x.x,"ru",x.y,"tr",x.z],y.N,y.T).h(0,w)
if(u!=null&&u.length!==0)return u
if(v!=null&&v.length!==0)return v
return x.d},
gd8(){return this.a}}
B.ud.prototype={
a9D(){var x,w=this,v=A.C(y.N,y.z),u=w.a
if(u!=null)v.k(0,"id",u)
u=w.b
if(u!=null)v.k(0,"clinic_id",u)
u=w.c
if(u!=null)v.k(0,"user_id",u)
u=w.d
if(u!=null)v.k(0,"category_id",u)
u=w.e*100
v.k(0,"amount",C.m.lh(u)/100)
v.k(0,"currency_id",w.f)
x=w.r*100
v.k(0,"amount_base_currency",C.m.lh(x)/100)
v.k(0,"amount_cents",C.m.au(u))
v.k(0,"amount_base_cents",C.m.au(x))
v.k(0,"exchange_rate",w.w)
v.k(0,"payment_method_id",w.x)
v.k(0,"expense_date",w.y.ak())
v.k(0,"description",w.z)
v.k(0,"is_deleted",w.Q?1:0)
v.k(0,"updated_at",new A.a0(Date.now(),0,!1).aM().ak())
v.k(0,"attachment_path",w.at)
return v},
gd8(){return this.a},
ga5K(){return this.CW}}
B.W7.prototype={
grh(){var x=0,w=A.l(y.w),v,u=this,t
var $async$grh=A.h(function(d,e){if(d===1)return A.i(e,w)
for(;;)switch(x){case 0:x=3
return A.c(u.a.ger(),$async$grh)
case 3:t=e
v=t
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$grh,w)},
PD(d){return this.bl8(d)},
aLM(){return this.PD(!1)},
bl8(d){var x=0,w=A.l(y.A),v,u=this,t,s,r
var $async$PD=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(u.grh(),$async$PD)
case 3:t=f
r=J
x=4
return A.c(t.Xc("expense_categories","sort_order ASC",d?"(is_deleted IS NULL OR is_deleted = 0)":"is_active = 1 AND (is_deleted IS NULL OR is_deleted = 0)"),$async$PD)
case 4:s=r.b9(f,new B.bw5(),y.g)
s=A.J(s,s.$ti.j("aq.E"))
v=s
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$PD,w)},
ZG(d,e){return this.bqZ(d,e)},
bqZ(d,e){var x=0,w=A.l(y.H),v=this,u,t
var $async$ZG=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:x=2
return A.c(v.grh(),$async$ZG)
case 2:u=g
t=e?1:0
x=3
return A.c(u.fk("expense_categories",A.F(["is_active",t,"is_synced",0,"updated_at",new A.a0(Date.now(),0,!1).aM().ak()],y.N,y.X),"id = ? AND COALESCE(is_system, 0) = 1",[d]),$async$ZG)
case 3:A.oW()
return A.j(null,w)}})
return A.k($async$ZG,w)},
a7y(d){return this.cKA(d)},
cKA(d){var x=0,w=A.l(y.y),v,u=this,t,s
var $async$a7y=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:s=A
x=4
return A.c(u.grh(),$async$a7y)
case 4:x=3
return A.c(f.uF("expense_categories",A.b(["is_system"],y.s),1,"id = ?",[d]),$async$a7y)
case 3:t=s.px(f)
t=A.bb(t==null?null:J.v(t,"is_system"))
v=(t==null?0:t)===1
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$a7y,w)},
vD(d){return this.ctN(d)},
ctN(d){var x=0,w=A.l(y.N),v,u=this,t,s,r,q,p,o
var $async$vD=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(u.grh(),$async$vD)
case 3:t=f
s=new A.a0(Date.now(),0,!1).aM().ak()
r=d.eN()
q=A.z(r.h(0,"id"))
p=(q==null?null:q.length!==0)===!0?A.at(r.h(0,"id")):C.ao.hf()
r.k(0,"id",p)
r.k(0,"is_synced",0)
r.k(0,"is_deleted",0)
r.k(0,"updated_at",s)
r.k(0,"is_system",0)
q=$.aN().b
q===$&&A.e()
q=q.gaY().e.a
q=q==null?null:q.r
r.k(0,"user_id",q==null?null:q.a)
o=r
x=4
return A.c($.eD().fQ(),$async$vD)
case 4:o.k(0,"clinic_id",f)
x=5
return A.c(t.f7(0,"expense_categories",r),$async$vD)
case 5:A.oW()
v=p
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$vD,w)},
Pi(d){return this.cV_(d)},
cV_(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$Pi=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:r=d.a
if(r==null){x=1
break}x=3
return A.c(u.a7y(r),$async$Pi)
case 3:if(f){$.q.$1("\ud83d\udd12 [EXPENSE] refused update of system category "+r)
x=1
break}x=4
return A.c(u.grh(),$async$Pi)
case 4:t=f
s=d.eN()
s.k(0,"is_synced",0)
s.k(0,"updated_at",new A.a0(Date.now(),0,!1).aM().ak())
x=5
return A.c(t.fk("expense_categories",s,"id = ? AND COALESCE(is_system, 0) = 0",[r]),$async$Pi)
case 5:A.oW()
case 1:return A.j(v,w)}})
return A.k($async$Pi,w)},
Bo(d){return this.cSf(d)},
cSf(d){var x=0,w=A.l(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$Bo=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=2
return A.c(v.grh(),$async$Bo)
case 2:m=f
l=new A.a0(Date.now(),0,!1).aM().ak()
u=d.length,t=y.N,s=y.X,r=0
case 3:if(!(r<d.length)){x=5
break}q=d[r]
p=new A.ig()
p.kk("expense_categories",A.F(["sort_order",q.h(0,"sort_order"),"is_synced",0,"updated_at",l],t,s),null,"id = ?",[q.h(0,"id")])
o=p.a
o===$&&A.e()
n=p.b
A.eu(n)
if(m.gcF().ej$)A.ak(A.fi("error database_closed",null,null))
x=6
return A.c(A.jU(m.gcF(),m.gh_(),o,n),$async$Bo)
case 6:case 4:d.length===u||(0,A.Y)(d),++r
x=3
break
case 5:A.oW()
return A.j(null,w)}})
return A.k($async$Bo,w)},
PK(d,e,f){return this.blE(d,e,f)},
blD(d,e){return this.PK(null,d,e)},
blE(d,e,f){var x=0,w=A.l(y.R),v,u=this,t,s,r,q,p
var $async$PK=A.h(function(g,h){if(g===1)return A.i(h,w)
for(;;)switch(x){case 0:x=3
return A.c(u.grh(),$async$PK)
case 3:r=h
q=[]
q.push(e.ak().split("T")[0])
q.push(f.ak().split("T")[0]+"T23:59:59")
if(d!=null){q.push(d)
t="e.is_deleted = 0 AND e.expense_date >= ? AND e.expense_date <= ? AND e.category_id = ?"}else t="e.is_deleted = 0 AND e.expense_date >= ? AND e.expense_date <= ?"
p=J
x=4
return A.c(r.fz("      SELECT e.*,\n             c.category_name,\n             c.icon,\n             c.color,\n             cur.currency_code,\n             pm.payment_method_name\n      FROM expenses e\n      LEFT JOIN expense_categories c ON e.category_id = c.id\n      LEFT JOIN currencies cur ON e.currency_id = cur.id\n      LEFT JOIN payment_methods pm ON e.payment_method_id = pm.id\n      WHERE "+t+"\n      ORDER BY e.expense_date DESC, e.created_at DESC\n       \n    ",q),$async$PK)
case 4:s=p.b9(h,new B.bw6(),y._)
s=A.J(s,s.$ti.j("aq.E"))
v=s
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$PK,w)},
SL(d){return this.cdX(d)},
cdX(d){var x=0,w=A.l(y.T),v,u,t,s,r,q,p
var $async$SL=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:if(d==null||d.length===0){v=null
x=1
break}q=A
p=A
x=3
return A.c(A.Tn(),$async$SL)
case 3:u=q.lv(p.auc(f.ge7(),"expenses_attachments"))
if(!u.m1())u.amT(!0)
t=u.a
if(C.f.aC(d,t)){v=d
x=1
break}s=A.cF(d)
if(!s.m1()){v=d
x=1
break}r=A.lG(d,$.qf().a).D4(1)[1]
x=4
return A.c(s.u6(A.auc(t,C.ao.q3()+r)),$async$SL)
case 4:case 1:return A.j(v,w)}})
return A.k($async$SL,w)},
Mj(d){return this.ctY(d)},
ctY(d){var x=0,w=A.l(y.N),v,u=this,t,s,r,q,p
var $async$Mj=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(u.SL(d.at),$async$Mj)
case 3:r=f
q=d.a9D()
q.k(0,"attachment_path",r)
t=A.z(q.h(0,"id"))
s=(t==null?null:t.length!==0)===!0?A.at(q.h(0,"id")):C.ao.hf()
q.k(0,"id",s)
t=A.z(q.h(0,"user_id"))
t=t==null?null:t.length===0
if(t!==!1){t=$.aN().b
t===$&&A.e()
t=t.gaY().e.a
t=t==null?null:t.r
q.k(0,"user_id",t==null?null:t.a)}t=A.z(q.h(0,"clinic_id"))
t=t==null?null:t.length===0
x=t!==!1?4:5
break
case 4:p=q
x=6
return A.c($.eD().fQ(),$async$Mj)
case 6:p.k(0,"clinic_id",f)
case 5:q.k(0,"is_synced",0)
x=8
return A.c(u.grh(),$async$Mj)
case 8:x=7
return A.c(f.f7(0,"expenses",q),$async$Mj)
case 7:A.oW()
v=s
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$Mj,w)},
XT(d){return this.cV5(d)},
cV5(d){var x=0,w=A.l(y.H),v,u=this,t,s,r
var $async$XT=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:r=d.a
if(r==null){x=1
break}x=3
return A.c(u.SL(d.at),$async$XT)
case 3:t=f
s=d.a9D()
s.k(0,"attachment_path",t)
s.k(0,"is_synced",0)
x=5
return A.c(u.grh(),$async$XT)
case 5:x=4
return A.c(f.fk("expenses",s,"id = ?",[r]),$async$XT)
case 4:A.oW()
case 1:return A.j(v,w)}})
return A.k($async$XT,w)},
a6_(d){return this.cCG(d)},
cCG(d){var x=0,w=A.l(y.H),v=this
var $async$a6_=A.h(function(e,f){if(e===1)return A.i(f,w)
for(;;)switch(x){case 0:x=3
return A.c(v.grh(),$async$a6_)
case 3:x=2
return A.c(f.fk("expenses",A.F(["is_deleted",1,"is_synced",0,"updated_at",new A.a0(Date.now(),0,!1).aM().ak()],y.N,y.X),"id = ?",[d]),$async$a6_)
case 2:A.oW()
return A.j(null,w)}})
return A.k($async$a6_,w)},
PJ(d,e){return this.blC(d,e)},
blC(d,e){var x=0,w=A.l(y.P),v,u=this,t,s,r,q,p,o
var $async$PJ=A.h(function(f,g){if(f===1)return A.i(g,w)
for(;;)switch(x){case 0:x=3
return A.c(u.grh(),$async$PJ)
case 3:p=g
o=[]
o.push(d.ak().split("T")[0])
o.push(e.ak().split("T")[0]+"T23:59:59")
x=4
return A.c(p.fz("      SELECT COUNT(*) as Count, COALESCE(SUM(amount_base_cents), 0)/100.0 as Total\n      FROM expenses\n      WHERE is_deleted = 0  AND expense_date >= ? AND expense_date <= ?\n    ",o),$async$PJ)
case 4:t=g
x=5
return A.c(p.fz("      SELECT c.category_name, c.color, c.icon,\n             COUNT(*) as Count,\n             COALESCE(SUM(e.amount_base_cents), 0)/100.0 as Total\n      FROM expenses e\n      LEFT JOIN expense_categories c ON e.category_id = c.id\n      WHERE e.is_deleted = 0  AND expense_date >= ? AND expense_date <= ?\n      GROUP BY e.category_id\n      ORDER BY Total DESC\n    ",o),$async$PJ)
case 5:s=g
r=J.dg(t)
q=A.bu(J.v(r.ga_(t),"Total"))
if(q==null)q=null
if(q==null)q=0
r=A.bb(J.v(r.ga_(t),"Count"))
v=A.F(["total",q,"count",r==null?0:r,"byCategory",s],y.N,y.z)
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$PJ,w)}}
var z=a.updateTypes(["kv(a_<n,a3?>)","ud(a_<n,a3?>)"])
B.bw5.prototype={
$1(d){var x=A.z(d.h(0,"id")),w=A.z(d.h(0,"clinic_id")),v=A.z(d.h(0,"user_id")),u=A.at(d.h(0,"category_name")),t=A.z(d.h(0,"category_name_ar")),s=A.z(d.h(0,"category_name_en")),r=A.z(d.h(0,"category_name_fr")),q=A.z(d.h(0,"category_name_de")),p=A.z(d.h(0,"category_name_es")),o=A.z(d.h(0,"category_name_ru")),n=A.z(d.h(0,"category_name_tr")),m=A.z(d.h(0,"icon")),l=A.z(d.h(0,"color")),k=A.bb(d.h(0,"is_system")),j=A.bb(d.h(0,"sort_order"))
if(j==null)j=0
return B.bw4(u,t,q,s,p,r,o,n,w,l,m,x,A.bb(d.h(0,"is_active"))===1,k===1,j,v)},
$S:z+0}
B.bw6.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n="expense_date",m="updated_at",l=A.z(d.h(0,"id")),k=A.z(d.h(0,"clinic_id")),j=A.z(d.h(0,"user_id")),i=A.z(d.h(0,"category_id")),h=A.FY(d,"amount_cents","amount"),g=A.z(d.h(0,"currency_id"))
if(g==null)g="baffa78a-3637-5ffe-bb96-c91e74a454cc"
x=A.FY(d,"amount_base_cents","amount_base_currency")
w=A.bu(d.h(0,"exchange_rate"))
if(w==null)w=null
if(w==null)w=1
v=A.z(d.h(0,"payment_method_id"))
u=d.h(0,n)!=null?A.ei(A.at(d.h(0,n))):new A.a0(Date.now(),0,!1)
t=A.z(d.h(0,"description"))
s=A.bb(d.h(0,"is_deleted"))
r=d.h(0,m)!=null?A.ei(A.at(d.h(0,m))):null
q=A.z(d.h(0,"attachment_path"))
p=A.z(d.h(0,"category_name"))
o=A.z(d.h(0,"icon"))
return B.e5k(h,x,q,A.z(d.h(0,"color")),o,i,p,k,A.z(d.h(0,"currency_code")),g,t,w,u,l,s===1,r,v,A.z(d.h(0,"payment_method_name")),j)},
$S:z+1};(function inheritance(){var x=a.inheritMany
x(A.a3,[B.kv,B.ud,B.W7])
x(A.io,[B.bw5,B.bw6])})()
var y=(function rtii(){var x=A.am
return{w:x("aAn"),_:x("ud"),g:x("kv"),s:x("I<n>"),R:x("Q<ud>"),A:x("Q<kv>"),P:x("a_<n,@>"),N:x("n"),y:x("M"),z:x("@"),X:x("a3?"),T:x("n?"),H:x("~")}})()};
(a=>{a["E5/BhI97PL0ieGgtUiXtNKRdd24="]=a.current})($__dart_deferred_initializers__);
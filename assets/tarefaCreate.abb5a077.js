var l=Object.defineProperty;var h=(i,e,a)=>e in i?l(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a;var r=(i,e,a)=>(h(i,typeof e!="symbol"?e+"":e,a),a);import"./modulepreload-polyfill.c7c6310f.js";import{E as u}from"./entidadeBase.model.63a43782.js";import{T as m}from"./tarefa.repository.local-storage.f64652ed.js";var s=(i=>(i.Baixa="Baixa",i.Media="M\xE9dia",i.Alta="Alta",i))(s||{});class c extends u{constructor(a,t,o,d){super();r(this,"descricao");r(this,"dataCriacao");r(this,"dataConclusao");r(this,"prioridade");o&&(this.id=o),this.descricao=a,this.prioridade=t,d?this.dataCriacao=d:this.dataCriacao=new Date}}class p{constructor(e,a){r(this,"txtDescricao");r(this,"btnSalvar");r(this,"rdbPrioridade");r(this,"idSelecionado");if(this.repositorioTarefas=e,this.configurarElementos(),a){this.idSelecionado=a;const t=this.repositorioTarefas.selecionarPorId(this.idSelecionado);t&&this.preencherFormulario(t)}}gravarRegistros(){const e=this.montarObjetoTarefa();this.idSelecionado?this.repositorioTarefas.editar(this.idSelecionado,e):this.repositorioTarefas.inserir(e),this.redirecionarPaginaListagem()}montarObjetoTarefa(){const e=this.txtDescricao.value,a=this.obterPrioridadeSelecionada();let t;if(!this.idSelecionado)t=new c(e,a);else{let o=this.repositorioTarefas.selecionarPorId(this.idSelecionado);t=new c(e,a,n,o==null?void 0:o.dataCriacao)}return t}preencherFormulario(e){switch(this.txtDescricao.value=e.descricao,e.prioridade){case s.Baixa:this.rdbPrioridade=document.querySelector("input[value='Baixa']");break;case s.Media:this.rdbPrioridade=document.querySelector("input[value='M\xE9dia']");break;case s.Alta:this.rdbPrioridade=document.querySelector("input[value='Alta']");break}this.rdbPrioridade.checked=!0}redirecionarPaginaListagem(){window.location.href="tarefa.list.html"}obterPrioridadeSelecionada(){return this.rdbPrioridade=document.querySelector('input[type="radio"]:checked'),this.rdbPrioridade.value}configurarElementos(){this.txtDescricao=document.getElementById("txtDescricao"),this.btnSalvar=document.getElementById("btnSalvar"),this.btnSalvar.addEventListener("click",e=>{this.gravarRegistros()})}}const f=new URLSearchParams(window.location.search),n=f.get("id");new p(new m,n);
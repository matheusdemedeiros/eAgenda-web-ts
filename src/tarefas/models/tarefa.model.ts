import { EntidadeBase } from "../../shared/entidadeBase.model";
import { Prioridade } from "./prioridade.enum";

export class Tarefa extends EntidadeBase {
  public descricao: string;
  public dataCriacao: Date;
  public dataConclusao: Date;
  public prioridade: Prioridade;

  constructor(descricao: string, prioridade: Prioridade, id?:string, 
    dataCriacao?:Date) {
    super();
    if(id){
      this.id = id;
    }
    this.descricao = descricao;
    this.prioridade = prioridade;
    if(dataCriacao){
      this.dataCriacao = dataCriacao;
    }else{
      this.dataCriacao = new Date();
    }
  }
}

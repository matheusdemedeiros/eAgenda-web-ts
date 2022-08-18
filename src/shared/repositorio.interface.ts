import { EntidadeBase } from "./entidadeBase.model";


export interface IRepositorio<T extends EntidadeBase> {
  inserir(registro: T): void;

  selecionarTodos(): T[];

  selecionarPorId(id: string): T | undefined;

  excluir(id: string): void;

  editar(id: string, registro:T): void;
}

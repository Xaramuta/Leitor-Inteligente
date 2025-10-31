export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Licitador {
  orgao: string;
  endereco: string;
  contato: string;
  numeroProcesso: string;
}

export interface TenderSummary {
  objeto: string;
  tipoDisputa: string;
  datasPrincipais: string;
  requisitosHabilitacao: string;
  itensLicitados: string;
  dadosLicitador: Licitador;
}

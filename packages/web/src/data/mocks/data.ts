type User = {
  name?: string;
  email: string;
  password: string;
};

export const users: User[] = [
  { email: "carlos@gmail.com", password: "qwe123qwe" },
];

export const notes = [
  {
    id: 1,
    title: "Reunião de Equipe",
    content:
      "Discutir os objetivos do próximo trimestre e revisar o progresso atual.",
    date: "2023-06-15",
  },
  {
    id: 2,
    title: "Lista de Compras",
    content: "Leite, ovos, pão, frutas, vegetais, carne.",
    date: "2023-06-16",
  },
  {
    id: 3,
    title: "Ideias para o Projeto",
    content:
      "Implementar autenticação de usuários, adicionar funcionalidade de busca, melhorar o design da interface.",
    date: "2023-06-17",
  },
  {
    id: 4,
    title: "Metas Pessoais",
    content:
      "Ler um livro por mês, fazer exercícios 3 vezes por semana, aprender uma nova habilidade.",
    date: "2023-06-18",
  },
  {
    id: 5,
    title: "Receita de Bolo",
    content:
      "2 xícaras de farinha, 1 xícara de açúcar, 3 ovos, 1/2 xícara de óleo, 1 colher de fermento.",
    date: "2023-06-19",
  },
];

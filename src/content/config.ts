import { defineCollection, z } from 'astro:content';

// Categorias que separam claramente seletividade típica x condições médicas
const categoriaArtigo = z.enum([
  'seletividade',
  'texturas',
  'introducao-alimentar',
  'condicoes-medicas',
  'receitas-adaptadas',
]);

const artigos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    categoria: categoriaArtigo,
    tipo: z.enum(['seletividade-tipica', 'condicao-medica']), // separa as duas jornadas
    dataPublicacao: z.date(),
    autor: z.string().optional(),
    fontes: z.array(z.string()).default([]), // obrigatório referenciar fontes confiáveis
    imagemCapa: z.string().optional(),
  }),
});

const receitas = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    descricao: z.string(),
    textura: z.enum(['liquida', 'pastosa', 'picada-fina', 'picada-grossa', 'solidos']),
    alergias: z.array(
      z.enum(['leite', 'ovo', 'gluten', 'soja', 'amendoim', 'castanhas', 'peixe', 'nenhuma'])
    ).default([]),
    idadeMinMeses: z.number(),
    tempoPreparoMinutos: z.number(),
    porcoes: z.number().optional(),
    imagem: z.string().optional(),
    adaptadaPara: z.array(z.string()).default([]), // ex: ["disfagia", "refluxo"]
  }),
});

const glossario = defineCollection({
  type: 'content',
  schema: z.object({
    termo: z.string(),
    definicaoCurta: z.string(), // usada em tooltips/cards
    categoria: z.enum(['clinico', 'sensorial', 'nutricional']).optional(),
  }),
});

const depoimentos = defineCollection({
  type: 'content',
  schema: z.object({
    nomeExibicao: z.string(), // pode ser fictício/apelido por privacidade
    resumo: z.string(),
    tipo: z.enum(['seletividade-tipica', 'condicao-medica']),
    consentimentoObtido: z.boolean(), // trava de segurança: só publica com true
    dataPublicacao: z.date(),
  }),
});

export const collections = { artigos, receitas, glossario, depoimentos };

# Site de Nutrição Infantil

Site estático (Astro + Markdown) sobre nutrição infantil, voltado a pais de
crianças com seletividade alimentar ou condições médicas relacionadas à
alimentação.

## Como rodar (no GitHub Codespaces)

1. Suba este projeto para um repositório no GitHub (veja seção "Deploy" abaixo).
2. No repositório, clique em **Code → Codespaces → Create codespace on main**.
3. No terminal do Codespace:
   ```bash
   npm install
   npm run dev
   ```
4. O Codespace vai sugerir abrir a porta no navegador — clique para ver o site.

## Estrutura

- `src/content/artigos` — posts do blog (seletividade, condições médicas, etc.)
- `src/content/receitas` — receitas com frontmatter tipado (textura, alergia, idade)
- `src/content/glossario` — termos técnicos
- `src/content/depoimentos` — histórias de pais (⚠️ só publicar com `consentimentoObtido: true`)
- `src/pages` — rotas do site
- `src/layouts` — layouts base e de artigo (já inclui o Disclaimer)
- `src/components` — Header, Footer, Disclaimer

## Deploy (Cloudflare Pages)

1. Crie um repositório no GitHub e suba este código:
   ```bash
   git init
   git add .
   git commit -m "estrutura inicial do site"
   git branch -M main
   git remote add origin <URL_DO_SEU_REPO>
   git push -u origin main
   ```
2. No [dashboard da Cloudflare](https://dash.cloudflare.com) → **Pages** → **Create a project** → **Connect to Git**.
3. Selecione o repositório.
4. Configure:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Deploy. A cada `git push` na branch `main`, o site é atualizado automaticamente.

## Próximos passos sugeridos

- Adicionar mais artigos, receitas e termos do glossário.
- Criar a collection de depoimentos com formulário de consentimento.
- Definir nome/marca do site e atualizar `astro.config.mjs` (campo `site`) e o `Header.astro`.
- Se os filtros de receita ficarem limitados (muitos itens, buscas complexas), considerar migrar para o Cenário 2 (Next.js + Supabase/Neon).

# Diagnóstico GitHub Pages — 02/09/2026

A URL `https://gborges1441-tech.github.io/atelier-nova-salao/` retornou a página padrão **Page not found · GitHub Pages** tanto antes quanto após o primeiro push.

A configuração consultada no GitHub está como `build_type: legacy`, branch `main`, path `/`, status `building`. O repositório original tinha o `index.html` apenas em `client/index.html`; por isso o Pages não encontrava um `index.html` na raiz publicada.

Correção aplicada localmente: gerar build com `base: /atelier-nova-salao/`, copiar o conteúdo de `dist/public` para a raiz do branch `main`, adicionar `404.html`, `.nojekyll` e copiar os assets locais para `site-assets/`. O commit corrigido foi enviado com SHA `dc782ff049070494d36d7d7c1a6865a1f95e0c5d`. É necessário aguardar a propagação do build do Pages e validar novamente.

Após o primeiro build corrigido, a URL deixou de mostrar a página padrão do GitHub e passou a exibir o título `Atelier Nova — Hair · Nails · Ritual`, porém o app renderizou a página 404 interna. Isso confirma que o HTML já está sendo servido, mas o bundle publicado ainda era anterior à rota `/atelier-nova-salao/` ou o Pages ainda estava propagando o novo commit. O commit `a8100e1` contém a correção explícita das rotas `/atelier-nova-salao` e `/atelier-nova-salao/`; é necessário aguardar nova conclusão do build e testar novamente.

Após o commit `7057e13`, o GitHub Pages passou a servir o `index.html` correto (o título é `Atelier Nova — Hair · Nails · Ritual`), mas a interface ainda exibe `NotFound` do app. Como a landing page é one-page e não precisa de rotas internas, a próxima correção será renderizar `Home` diretamente no `App.tsx`, removendo qualquer dependência do matching do Wouter no GitHub Pages.

Mesmo após o commit `fa4f0d5`, a URL pública continuou renderizando a 404 interna. O título HTML permanece correto, então o problema está no conteúdo JS efetivamente servido pelo Pages — provavelmente cache/propagação do build legado ou o Pages não reconstruindo o branch como esperado. O bundle local atual já renderiza `Home` diretamente, sem Wouter. A próxima validação deve confirmar o SHA/arquivo JS entregue pelo GitHub e, se necessário, usar uma publicação dedicada em `gh-pages` ou reconfigurar a fonte do Pages para o artefato estático.

Diagnóstico visual da URL `https://gborges1441-tech.github.io/atelier-nova-salao/`: o CSS público carregou de `assets/index-C0uHc8G0.css`, as fontes estão com status `loaded`, o body usa Manrope e o `.hero-title` usa Cormorant Garamond com `108.8px` no viewport de teste (1280px de largura). Isso indica que o problema não é ausência de CSS; a correção deve reforçar estabilidade de escala entre navegadores com `html { font-size: 16px; -webkit-text-size-adjust: 100%; }`, além de manter a composição responsiva.

# Diagnóstico GitHub Pages — 02/09/2026

A URL `https://gborges1441-tech.github.io/atelier-nova-salao/` retornou a página padrão **Page not found · GitHub Pages** tanto antes quanto após o primeiro push.

A configuração consultada no GitHub está como `build_type: legacy`, branch `main`, path `/`, status `building`. O repositório original tinha o `index.html` apenas em `client/index.html`; por isso o Pages não encontrava um `index.html` na raiz publicada.

Correção aplicada localmente: gerar build com `base: /atelier-nova-salao/`, copiar o conteúdo de `dist/public` para a raiz do branch `main`, adicionar `404.html`, `.nojekyll` e copiar os assets locais para `site-assets/`. O commit corrigido foi enviado com SHA `dc782ff049070494d36d7d7c1a6865a1f95e0c5d`. É necessário aguardar a propagação do build do Pages e validar novamente.

Após o primeiro build corrigido, a URL deixou de mostrar a página padrão do GitHub e passou a exibir o título `Atelier Nova — Hair · Nails · Ritual`, porém o app renderizou a página 404 interna. Isso confirma que o HTML já está sendo servido, mas o bundle publicado ainda era anterior à rota `/atelier-nova-salao/` ou o Pages ainda estava propagando o novo commit. O commit `a8100e1` contém a correção explícita das rotas `/atelier-nova-salao` e `/atelier-nova-salao/`; é necessário aguardar nova conclusão do build e testar novamente.

# product-manual

RoboSense 公司产品手册（MkDocs Material），部署于 GitHub Pages。

## 本地预览

```bash
python -m venv .venv
source .venv/bin/activate
pip install mkdocs-material
mkdocs serve
```

浏览器打开终端提示的地址（含 `/product-manual/` 子路径）。

## 添加文档

1. 在 `docs/` 下新增 `.md` 文件
2. 在 `mkdocs.yml` 的 `nav` 中按平台分类登记（EM / M / E / R）
3. 在 `docs/index.md` 对应平台章节补充链接

## 从 PDF 导入后处理 HTML 表格

若 Markdown 中含 `<table>...</table>`，可在虚拟环境中运行：

```bash
source .venv/bin/activate
pip install beautifulsoup4 lxml   # 首次需要
python scripts/html_tables_to_markdown.py docs/你的文件.md
python scripts/fix_markdown_table_separators.py docs/你的文件.md
python scripts/ensure_blank_before_headings.py docs/你的文件.md
```

`Airy.md` 已使用原生 Markdown 表格；`AiryLite.md`、`BPearl_CN.md`、`Bpearl_v3_CN.md`、`E1_CN.md`、`E1R_CN.md`、`EM4_CN.md`、`EMX_CN.md` 已完成转换。

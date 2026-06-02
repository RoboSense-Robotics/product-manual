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

## 插入本地图片

图片放在 `docs/assets/<产品>/`（小写简称），与手册一并发布。示例：`docs/assets/m1p/`

| 目录 | 对应手册 |
| --- | --- |
| `docs/assets/m1p/` | `M1P_CN.md` |
| `docs/assets/<产品>/` | 其他产品同理 |

在 `docs/` 下的 Markdown 中引用（路径相对于该 `.md` 文件）：

```markdown
![图 1 MSOP 数据包示意图](assets/m1p/msop-packet.png)
```

表格单元格内：`![](assets/m1p/wire-harness.jpg)`。本地用 `mkdocs serve` 确认显示。

图下居中标题（需 `mkdocs.yml` 中 `md_in_html`，样式见 `docs/stylesheets/extra.css`）。在 `mkdocs serve` 预览，IDE 自带 Markdown 预览通常不支持：

```html
    <figure markdown>
      ![简述](assets/m1p/A-5.jpg)
      <figcaption>图 A-5：Wireshark 图标</figcaption>
    </figure>
```

（`figure` 块缩进 4 格，可挂在有序列表某一节下，避免步骤编号被打断。）

注意：不要用以 `/` 开头的绝对路径（GitHub Pages 在 `/product-manual/` 子路径下会 404）。MinerU CDN 外链可保留，新图或需长期维护的图建议放 `assets/`。

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

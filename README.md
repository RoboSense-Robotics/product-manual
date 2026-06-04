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

图片放在 `docs/assets/<产品>/`（小写简称），与手册一并发布。示例：`docs/assets/em4/`

| 目录 | 对应手册 |
| --- | --- |
| `docs/assets/em4/` | `EM4_CN.md` |
| `docs/assets/<产品>/` | 其他产品同理 |

在 `docs/` 下的 Markdown 中引用（路径相对于该 `.md` 文件）：

```markdown
![图 1 示意图](assets/em4/example.png)
```

表格单元格内：`![](assets/em4/wire-harness.jpg)`。本地用 `mkdocs serve` 确认显示。

**单独一行**的 `![](assets/...)` 会在页面中**水平居中**，默认最大宽度约 360px（见 `extra.css`）。

### 控制图片缩放

`mkdocs.yml` 已启用 `attr_list`，可在图片后加 **class** 或 **width**（须在 `mkdocs serve` 中预览）：

```markdown
![](assets/em4/end.jpg){: .manual-img--lg }
```

| class | 最大宽度（约） |
| --- | --- |
| `manual-img--sm` | 200px |
| `manual-img--md` | 360px（与默认单行图一致） |
| `manual-img--lg` | 560px |
| `manual-img--xl` | 720px（与 `figure` 内大图一致） |
| `manual-img--full` | 100% 正文宽 |

指定像素宽度（高度按比例缩放）：

```markdown
![](assets/em4/end.jpg){ width="480" }
```

图下居中标题（需 `mkdocs.yml` 中 `md_in_html`，样式见 `docs/stylesheets/extra.css`）。在 `mkdocs serve` 预览，IDE 自带 Markdown 预览通常不支持：

```html
    <figure markdown>
      ![简述](assets/em4/example.png)
      <figcaption>图 1：示意图</figcaption>
    </figure>
```

（`figure` 块缩进 4 格，可挂在有序列表某一节下，避免步骤编号被打断。）

注意：不要用以 `/` 开头的绝对路径（GitHub Pages 在 `/product-manual/` 子路径下会 404）。MinerU CDN 外链可保留，新图或需长期维护的图建议放 `assets/`。

## 表题 + 居中灰表头数据表

适用于 FOV、简要参数对照等**行数不多、列数 2～4 列**的表格，版式与 PDF 手册中的「表1、表2」一致：表题居中、表格整体居中、表头灰底加粗、单元格文字居中、带边框。

样式定义在 `docs/stylesheets/extra.css`（`manual-table-caption`、`manual-table-wrap`）。表格外层用 `<div markdown="1">` 包裹（依赖 `mkdocs.yml` 中的 `md_in_html`）。

**不要**在表格后写 `{: .manual-data-table }`：会被当成表格多出一行，页面上出现 `{:` 字样。

### 写法模板

```markdown
正文说明文字……

<p class="manual-table-caption">表1 EM4-T FOV</p>

<div class="manual-table-wrap" markdown="1">

| 规格 | 水平方向 | 垂直方向 |
| --- | --- | --- |
| 120° × 25° FOV | -60° ~ +60° | -12.5° ~ +12.5° |

</div>
```

要点：

- **表题**：`<p class="manual-table-caption">表X …</p>`
- **表格**：写在 `manual-table-wrap` 的 div 内，前后各空一行；`markdown="1"` 不可省略
- **预览**：须在 `mkdocs serve` 的浏览器中查看；IDE 自带 Markdown 预览**不会**应用 `extra.css`

### 参考示例

`docs/EM4_CN.md` → **2.3 FOV 分布** →「表1 EM4-T FOV」；**2.4 规格参数** →「表2 相关参数规格」（`manual-spec-grid-table` + `spec-footnotes`）。

### 与其它表格样式的区别

| 样式类 / 写法 | 适用场景 |
| --- | --- |
| `manual-table-wrap` | 表题 + 居中小表（本节） |
| `manual-spec-grid-table` | 规格参数分栏表（节标题 + 四列，见 EM4 **2.4 表2**） |
| `packet-def-table` | 协议字段、寄存器定义（多列、可 rowspan） |
| `product-protocol-table` | 产品协议一览（MSOP 合并行；见 EM4 **4.3 表7**，配合 `packet-def-table`） |
| `msop-data-table` | MSOP / point data 字段定义（双行表头可 `colspan`；见 EM4 **表8～表11**，配合 `packet-def-table`） |
| `compression-block-table` | 压缩块结构（12 列 `colspan`；见 EM4 **表12**，须外包 `manual-table-scroll-wrap` 防越界） |
| `difop-packet-table` | DIFOP 字段表（分组 `rowspan`；见 EM4 **表13、表14**，须外包 `manual-table-scroll-wrap`） |
| `fault-troubleshoot-table` | 故障排查两列表（见 EM4 **表15**） |
| `connector-pin-table` | 接插件引脚定义（标题行 + 型号 `rowspan`；见 EM4 **附录 A**） |
| `wire-harness-table` | 线束说明（含合并单元格，HTML 表格；见 EM4 **3.1.1 表4**） |

## 从 PDF 导入后处理 HTML 表格

若 Markdown 中含 `<table>...</table>`，可在虚拟环境中运行：

```bash
source .venv/bin/activate
pip install beautifulsoup4 lxml   # 首次需要
python scripts/html_tables_to_markdown.py docs/你的文件.md
python scripts/fix_markdown_table_separators.py docs/你的文件.md
python scripts/ensure_blank_before_headings.py docs/你的文件.md
```

`Airy.md` 已使用原生 Markdown 表格；`AiryLite.md`、`E1_CN.md`、`E1R_CN.md`、`EM4_CN.md`、`EMX_CN.md` 等已完成 HTML 表格转换。

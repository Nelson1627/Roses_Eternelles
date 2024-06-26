'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f1e4d53b.js');

const scTableCss = ":host{display:table;width:100%;height:100%;border-spacing:0;border-collapse:collapse;table-layout:fixed;font-family:var(--sc-font-sans);border-radius:var(--border-radius, var(--sc-border-radius-small))}:host([shadowed]){box-shadow:var(--sc-shadow-medium)}::slotted([slot=head]){border-bottom:1px solid var(--sc-table-border-bottom-color, var(--sc-color-gray-200))}";

const ScTable = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", { name: "head" }), index.h("slot", null), index.h("slot", { name: "footer" })));
  }
};
ScTable.style = scTableCss;

const scTableCellCss = ":host{display:table-cell;font-size:var(--sc-font-size-medium);padding:var(--sc-table-cell-spacing, var(--sc-spacing-small)) var(--sc-table-cell-spacing, var(--sc-spacing-large)) !important;vertical-align:middle}:host([slot=head]){background:var(--sc-table-cell-background-color, var(--sc-color-gray-50));font-size:var(--sc-font-size-x-small);padding:var(--sc-table-cell-spacing, var(--sc-spacing-small));text-transform:uppercase;font-weight:var(--sc-font-weight-semibold);letter-spacing:var(--sc-letter-spacing-loose);color:var(--sc-color-gray-500)}:host(:last-child){text-align:right}sc-table-cell{display:table-cell;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";

const ScTableScll = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
ScTableScll.style = scTableCellCss;

const scTableRowCss = ":host{display:table-row;border:1px solid var(--sc-table-row-border-bottom-color, var(--sc-color-gray-200))}:host([href]){cursor:pointer}:host([href]:hover){background:var(--sc-color-gray-50)}";

const ScTableRow = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.href = undefined;
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
ScTableRow.style = scTableRowCss;

exports.sc_table = ScTable;
exports.sc_table_cell = ScTableScll;
exports.sc_table_row = ScTableRow;

//# sourceMappingURL=sc-table_3.cjs.entry.js.map
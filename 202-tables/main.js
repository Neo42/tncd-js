console.log(table); // <table id="table"></table>
// table.rows
console.log(table.rows); // HTMLCollection(2) [tr, tr]
// table.rows[].cells[]
table.rows[0].cells[0].style.backgroundColor = '#fbe8d3';
// row.sectionRowIndex：在所在<thead>,<tbody>,<tfoot>中的行索引数
console.log(table.rows[1].sectionRowIndex); // 1
// row.rowIndex：整个表中的索引数
console.log(table.rows[1].rowIndex); // 1
// cell.cellIndex：在某一行中的格索引数
console.log(table.rows[1].cells[1].cellIndex); // 1

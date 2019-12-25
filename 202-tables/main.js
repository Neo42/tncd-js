console.log(table); // <table id="table"></table>
console.log(table.rows); // HTMLCollection(2) [tr, tr]
table.rows[0].cells[0].style.backgroundColor = '#fbe8d3';
console.log(table.rows[1].sectionRowIndex); // 1, 所选行在该区域中的行索引数
console.log(table.rows[1].rowIndex); // 1
console.log(table.rows[1].cells[1].cellIndex); // 1

'use strict';

let company = {
  // the same object, compressed for brevity
  sales: [{ name: 'John', salary: 15000 }, { name: 'Alice', salary: 12000 }],
  development: {
    sites: [{ name: 'Peter', salary: 20000 }, { name: 'Alex', salary: 18000 }],
    internals: [{ name: 'Jack', salary: 13000 }]
  }
};

function sumSalaries(organization) {
  // 先确定基准条件 (base case)
  if (Array.isArray(organization)) {
    return organization.reduce((sum, element) => sum + element.salary, 0);
  }
  // 递归条件
  let sum = 0;
  for (const subOrg of Object.values(organization)) {
    sum += sumSalaries(subOrg);
  }
  return sum;
}

console.log(sumSalaries(company)); // 78000

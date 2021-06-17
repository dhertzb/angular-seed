angular.module("ngTable").component("ngTable", {
  templateUrl: "components/ng-table/ng-table.template.html",
  controller: function TableController() {},
  bindings: {
    rows: "<",
    colums: "<",
  },
});

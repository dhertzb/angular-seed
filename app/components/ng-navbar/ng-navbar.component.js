angular.module("ngNavbar").component("ngNavbar", {
  templateUrl: "components/ng-navbar/ng-navbar.template.html",
  controller: function TableController() {
    this.columns = ["Name", "Age"];
    this.rows = [
      ["Deividy", "23"],
      ["Maria", "25"],
      ["Caroline", "26"],
      ["Laura", "26"],
      ["Emely", "56"],
      ["Inês", "65"],
    ];
  },
});

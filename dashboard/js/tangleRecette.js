function setUpTangle () {
    
    var element = document.getElementById("example");

    var tangle = new Tangle(element, {
        initialize: function () {
            this.person = 4;
            this.quantitePerPerson = 50;
        },
        update: function () {
            this.viandes = this.person * this.quantitePerPerson;
        }
    });
}
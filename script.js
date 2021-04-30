// fonction pour cacher le div à l'id #texte (avec la methode .hide) au clic sur le bouton à l'id #hiden (avec la methode .clic)
$(document).ready(function () {
    $("#hide").click(function () {
        $("#texte").hide();
    });
    $("#show").click(function () {
        $("#texte").show();
    });
});
// fonction pour cacher le div à l'id #texte (avec la methode .show) au clic sur le bouton à l'id #show (avec la methode .clic)

function TabClick(nTab) {
    Col = document.getElementsByName("Content");
    for (i = 0; i < document.getElementsByName("Content").length; i++) {
        document.getElementsByName("tabs")[i].className = "TabBorderBottom TabCommon TabOff";
        document.getElementsByName("Content")[i].style.display = "none";
    }
    document.getElementsByName("Content")[nTab].style.display = "flex";
    document.getElementsByName("tabs")[nTab].className = "TabCommon TabOn TabActiveBackground TabActiveBorderLeftRight";
}


// for — parcourt un bloc de code jusqu'à ce que le compteur atteigne un nombre spécifié.

// 
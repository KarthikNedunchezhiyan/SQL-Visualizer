class Table {
    constructor(tableID, descId) {
        this.tableReference = document.getElementById(tableID);
        this.descReference = document.getElementById(descId);
        this.hightLightClassName = "table-primary";
    }

    showDescription(desc) {
        this.descReference.innerHTML = desc;
    }

    _highlightTable(desc, apply = true) {
        this.showDescription(desc);
        if (apply) this.tableReference.classList.add(this.hightLightClassName);
        else this.tableReference.classList.remove(this.hightLightClassName);
    }
    highlightTable(desc) {
        this._highlightTable(desc);
    }

    removeHighlightTable(desc) {
        this._highlightTable(desc, false);
    }

    _highLightColumn(index, desc, apply = true) {
        this.showDescription(desc);
        const trList = this.tableReference.getElementsByTagName("tr");

        for (let i = 0; i < trList.length; ++i) {
            if (apply) trList[i].children[index].classList.add(this.hightLightClassName);
            else trList[i].children[index].classList.remove(this.hightLightClassName);
        }
    }

    highLightColumn(index, desc) {
        this._highLightColumn(index, desc);
    }

    removeHighlightColumn(index, desc) {
        this._highLightColumn(index, desc,false);
    }

    _highLightRow(index, desc, apply = true) {
        this.showDescription(desc);
        const trList = this.tableReference.getElementsByTagName("tr");

        if (apply) trList[index].classList.add(this.hightLightClassName);
        else trList[index].classList.remove(this.hightLightClassName);
    }

    highLightRow(index, desc) {
        this._highLightRow(index, desc);
    }

    removeHighlightRow(index, desc) {
        this._highLightRow(index, desc,false);
    }

    _highLightCoOrd(i, j, desc, apply = true) {
        this.showDescription(desc);
        const trList = this.tableReference.getElementsByTagName("tr");

        if (apply) trList[i].children[j].classList.add(this.hightLightClassName);
        else trList[i].children[j].classList.remove(this.hightLightClassName);
    }

    highLightCoOrd(i, j, desc) {
        this._highLightCoOrd(i, j, desc);
    }

    removeHighLightCoOrd(i, j, desc) {
        this._highLightCoOrd(i, j, desc,false);
    }
}
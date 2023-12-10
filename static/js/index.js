class Table {
    constructor(tableID, descId, data) {
        this.tableReference = document.getElementById(tableID);
        this.descReference = document.getElementById(descId);
        this.hightLightClassName = "table-primary";
        this.hightLightSuccessClassName = "table-success";

        // sanitize
        this.tableReference.innerHTML = "";
        this.descReference.innerHTML = "";
        // ***

        this.makeTable(data);
    }

    makeTable(data) {
        const thead = document.createElement("thead");
        const tr = document.createElement("tr");
        for (let i = 0; i < data.head.length; ++i) {
            const th = document.createElement("th");
            th.innerText = data.head[i];
            th.setAttribute("scope", "col");
            tr.appendChild(th);
        }
        thead.appendChild(tr);

        const tbody = document.createElement("tbody");

        for (let i = 0; i < data.rows.length; ++i) {
            const tr = document.createElement("tr");
            for (let j = 0; j < data.rows[i].length; ++j) {
                const td = document.createElement("td");
                td.innerText = data.rows[i][j];
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }

        this.tableReference.appendChild(thead);
        this.tableReference.appendChild(tbody);
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

    _highLightSuccessRow(index, desc, apply = true) {
        this.showDescription(desc);
        const trList = this.tableReference.getElementsByTagName("tr");

        if (apply) trList[index].classList.add(this.hightLightSuccessClassName);
        else trList[index].classList.remove(this.hightLightSuccessClassName);
    }

    highLightSuccessRow(index, desc) {
        this._highLightSuccessRow(index, desc);
    }

    removeHighLightSuccessRow(index, desc) {
        this._highLightSuccessRow(index, desc,false);
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
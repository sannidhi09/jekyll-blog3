fetch('https://raw.githubusercontent.com/sannidhi09/jekyll-dynamic-data-load/master/teams.yml')
    .then(response => response.text())
    .then(data => {
        var obj = jsyaml.load( data );
        console.log(obj);
        console.log(obj.length);

        var colums = ['name', 'apache_id', 'email', 'organization', 'roles'];

        var parent = document.getElementsByClassName('js-data-load')[0];

        var tbl = document.createElement("table");
        
        // Creating head tag
        var tblHead = document.createElement("thead");
        for(var i=0;i<1;i++){
            var row = document.createElement("tr");
            for(var j=0;j<colums.length;j++){
                var cell = document.createElement('th');
                var cellText = document.createTextNode(colums[j].charAt(0).toUpperCase() + colums[j].slice(1));
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            tblHead.appendChild(row);
        }
        tbl.appendChild(tblHead);

        //Creating table body
        var tblBody = document.createElement("tbody");
        for(var i=0;i<obj.length;i++){
            var row = document.createElement('tr');
            for(var j=0;j<colums.length;j++){
                var cell = document.createElement('td');
                var cellText = document.createTextNode(obj[i][colums[j]].replaceAll(' [at] ', '@').replaceAll(' [dot] ','.'));
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            tblBody.appendChild(row);
        }
        tbl.appendChild(tblBody);

        parent.appendChild(tbl);

        var tblBody = document.createElement("tbody");
    })
    .catch(function (err) {
	console.warn('Something went wrong.', err);
});
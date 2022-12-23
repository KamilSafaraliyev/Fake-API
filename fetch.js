let albumsElement = document.querySelector('.albums');
fetch('https://jsonplaceholder.typicode.com/albums')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (let i = 0; i < 100; i++) {
            const truser = document.createElement("tr");
            const tduserUserId = document.createElement("th");
            const tdId = document.createElement("th");
            const tdTitle = document.createElement("th");

            tduserUserId.innerHTML = data[i].userId;
            tdId.innerHTML = data[i].id;
            tdTitle.innerHTML = data[i].title;



            truser.append(tduserUserId, tdId, tdTitle, );
            albumsElement.appendChild(truser);
        }
    });
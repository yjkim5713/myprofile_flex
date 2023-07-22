fetch("http://localhost:3001/info")
            .then((response) => response.json())
            .then((json) => {
                console.log(json[0].name);
                document.querySelector(".name").innerHTML+=json[0].name;
                document.querySelector(".birth").innerHTML+=json[1].birth;
                document.querySelector(".stunum").innerHTML+=json[2].stunum;
                document.querySelector(".major").innerHTML+=json[3].major
                

            });






        
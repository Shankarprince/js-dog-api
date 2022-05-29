
const allBreeds = () => {

    document.querySelector(".content").innerHTML = ``;

    fetch("https://dog.ceo/api/breeds/list/all")
        .then((data) => data.json())
        .then(dt => dogBreeds(dt.message))
}

async function dogBreeds(data) {
    const breedList = await data;
    let dogArray = [];

    for (var index in breedList) {
        dogArray.push(index);
    }

    console.log(dogArray);

    for (var i = 0; i < dogArray.length; i++) {
        document.querySelector(".content").innerHTML +=
            `
                <div class="allbreeds">
                ${i + 1} - ${dogArray[i]}
                </div>
            `
    }
}

const randomImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((data) => data.json())
        .then(dt => {
            document.querySelector(".content").innerHTML =
                `
                <div class="div-random">
                <img class="img-random" src="${dt.message}" alt="random-dog"/>
                </div>
            `
        })
}

const breeds = () => {

    document.querySelector(".content").innerHTML = ``;

    fetch("https://dog.ceo/api/breed/hound/images")
        .then((data) => data.json())
        .then(dt => {

            let dogArray = dt.message;

            // dogArray length can be given in the loop as it will give all breeds pictures.
            
            for (let i = 0; i < 6; i++) {
                document.querySelector(".content").innerHTML +=
                    `
                    <div class="div-breed">
                    <img class="img-breed" src="${dogArray[i]}" alt="dog-breed-image" />
                    </div>
                `;
            }

        })
}

const search = () => {

    document.querySelector(".content").innerHTML = ``;

    document.querySelector(".content").innerHTML =
        `
        <div>
            <p class="desc">Default value is set as "african". you can change to see some random images. Use lowercase letters.</p>
            <p>https://dog.ceo/api/breed/<input class="input" type="text" value="african"></input>/images/random</p>
            <button onClick="fetchFunction()">Fetch</button>
        </div>
        `;

}


const fetchFunction = () => {

    document.querySelector(".content").innerHTML = ``;

    const input = document.getElementsByClassName("input");
    console.log(input[0].value);

    fetch(`https://dog.ceo/api/breed/${input[0].value}/images/random`)
        .then((data) => data.json())
        .then(dt => {
            document.querySelector(".new-content").innerHTML =
                `
                    <div class="div-search">
                        <img class="image-search" src="${dt.message}" alt="dog-image" />
                    </div>
                `;
        })
}
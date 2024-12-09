const Fishes = {
    salmon: {
        'img': './Gallery/SalmonFish.jpeg',
        'name': 'Salmon',
        'commonName': 'Chinook',
        'ph': '6.5 - 8.5',
        'temp': '10 - 14 &#176;C',
        'oxy': 'High'
    },
    catfish: {
        'img': './Gallery/catfish.jpeg',
        'name': 'Catfish',
        'commonName': 'Magur OR singhi OR ermai',
        'ph': '6.5 - 8.0',
        'temp': '20 - 30 &#176;C',
        'oxy': 'High'
    },
    tuna: {
        'img': './Gallery/Tuna.jpeg',
        'name': 'Tuna',
        'commonName': 'Chura',
        'ph': '6.5 - 8.0',
        'temp': '4 - 15 &#176;C',
        'oxy': '9 mg/L'
    }
}

function look_for_fish() {
    let a = document.getElementById('Search').value;
    a = a.toLowerCase();
    a = a.trim();
    let fishArr = Object.keys(Fishes);
    let ele = document.getElementById('Fish_result');
    if (fishArr.includes(a)) {
        ele.innerHTML = `<div class="fish_item fish__item" data-aos="zoom-in-up" data-aos-offset="50">
                            <div class="fish_img" style="background-color: var(--heading-color)">
                                <img src="${Fishes[a]['img']}" alt="" style="object-fit: contain">
                            </div>
                            <div class="fish_info">
                                <p class="fish_text" id="fishName"><b>Name: &emsp;</b>${Fishes[a]['name']}</p>
                                <p class="fish_text" id="commonName"><b>Common Name: &emsp;</b>${Fishes[a]['commonName']}</p>
                                <p class="fish_text" id="waterPH"><b>Water Ph.: &emsp;</b>${Fishes[a]['ph']}</p>
                                <p class="fish_text" id="temp"><b>Temperature: &emsp;</b>${Fishes[a]['temp']}</p>
                                <p class="fish_text" id="oxyLevel"><b>Oxygen Level: &emsp;</b>${Fishes[a]['oxy']}</p>
                            </div>
                            <div class="fish_card_line"></div>
                            <div class="fish_more_detail" id="HideOnClick">
                                <p>Show More</p>
                            </div>
                        </div>`
    }
    else if(a === "")
        ele.innerHTML = ``;
    
    else {
        ele.innerHTML = `<div class="notFound"><i class="uil uil-confused" style="font-size: 54px;"></i></div>
                        <p class="notFound" style="font-size: 36px;">Oops</p>
                        <p class="notFound" style="font-size: 22px;">No Such Fish Found</p>`
    }
    return true;
}
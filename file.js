const links = [
    {
        name: "Bau",
        linkImg: './img/bau.png'
    },
    {
        name: "Cua",
        linkImg: './img/cua.png'
    },
    {
        name: "Tom",
        linkImg: './img/tom.png'
    },
    {
        name: "Ga",
        linkImg: './img/ga.png'
    },
    {
        name: "Ca",
        linkImg: './img/ca.png'
    },
    {
        name: "Nai",
        linkImg: './img/nai.png'
    }
]

const btn = document.querySelector('.btn');
const block = document.querySelector('.block')

function render(i, j, k) {
    var html = `
    <div class="image1">
    <img src="${links[i].linkImg}" alt="" class="img1">
    </div>
    <div class="image2">
    <img src="${links[j].linkImg}" alt="" class="img2">
    </div>
        <div class="image3">
    <img src="${links[k].linkImg}" alt="" class="img3">
</div>
   `
    block.innerHTML = html;
}


btn.addEventListener('click', function() {
   var index1 = Math.floor(Math.random() * 6);
   var index2 = Math.floor(Math.random() * 6);
   var index3 = Math.floor(Math.random() * 6);
   render(index1, index2, index3);
})
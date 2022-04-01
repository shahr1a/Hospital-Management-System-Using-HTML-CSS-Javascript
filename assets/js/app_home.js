const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('.main');
const list = document.querySelectorAll('.list');
const link = document.querySelectorAll('.link');
const section = document.querySelectorAll('s');
const hlink = document.querySelectorAll('.h-link');

console.log(section);

console.log('not here');

hlink.forEach((ip, id) => {
    ip.addEventListener('click', () => loadLink(id));
})

function loadLink(id) {
    console.log('chop')
    section.forEach((s, ind) => {
        s.classList.remove('show');
        if(id === ind) {
            s.classList.add('show');
        }
    })
}


menuToggle.onclick = function() {
    console.log('here');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    if (navigation.classList.contains('active')) {
        main.style.left = "115px";
    } else {
        main.style.left = "0";
    }
}

// add active class in selected list item
// let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function() {
        let j = 0;
        while (j < list.length) {
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }
}

list.forEach((input, index) => {
    input.addEventListener('click', () => loadPage(index));
})

function loadPage(index) {
    console.log(index);
    link.forEach((item, index1) => {
        item.classList.remove('selected');
        item.style.display = 'none';
        // section.foreach (s => {
        //     section.style.display = 'none';
        // })
        if(index === index1) {
            item.style.display = item.classList.contains('top__nav') ? 'flex' : 'block';
            item.classList.add('selected');

            // if(index === 0) {
            //     section.forEach(s => {
            //         s.style.display = 'block';
            //     })
            // }
        }
        
    })
}



list[0].click();
const blogPosts = [
    {title: "Article Review", date: new Date(), summery: 'Something...' },
    {title: "Internet Artwork Ananlysis", date: new Date(), summery: 'Something...' },
    {title: "Technical Reflection", date: new Date(), summery: 'Something...' },
    {title: "Artistic Reflection", date: new Date(), summery: 'Something...' }
]

const menuItems = [
    {title: 'Home', link: '/'},
    {title: 'About', link: '/about'},
    {title: 'Blogs', link: '/Blogs', children: blogPosts},
    {title: 'Net Artwork', link: '/'},
]

const createMenuItems = (item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerText = item.title;
    a.href = item.link;
    li.appendChild(a);

    if(item.children && item.children.length){
        let ul = document.createElement('ul');
        
        for(let childItem of item.children){
            let childMenuItem = createMenuItems(childItem);
            ul.appendChild(childMenuItem);
        }

    li.appendChild(ul);
    }

    return li;
};

const initaliseMenue = () => {
    const nav = document.querySelector('nav');

    const ul = document.createElement('ul');

    for(let item of menuItems) {
        const li = createMenuItems(item);  
        ul.appendChild(li);
    }
    nav.appendChild(ul);
};

document.addEventListener('DOMContentLoaded', () => initaliseMenue());
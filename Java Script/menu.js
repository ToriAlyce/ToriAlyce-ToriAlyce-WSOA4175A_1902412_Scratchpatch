const blogPosts = [
    {title: "○  Blog Post 1", link: './blog_1.html', date: new Date(), summery: 'Something...' },
    {title: "○  Blog Post 2", link: './blog_2.html', date: new Date(), summery: 'Something...' },
    {title: "○  Blog Post 3", link: './blog_3.html', date: new Date(), summery: 'Something...' },
    {title: "○  Blog Post 4", link: './blog_4.html', date: new Date(), summery: 'Something...' }
]

const menuItems = [
    {title: 'Home', link: './home.html'},
    {title: 'About', link: './about.html'},
    {title: 'Blogs', link: './blogs.html', children: blogPosts},
    {title: 'Net Artwork', link: './netArt.html'},
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

function clickOne()
{
    alert("Hello");
    var canvas = document.getElementById('card');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}


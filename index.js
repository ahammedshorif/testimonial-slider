const tastimonials =[
    {
        name: "Jon Snow",
        photoUrl: "https://www.usmagazine.com/wp-content/uploads/2022/12/Everything-to-Know-About-the-Jon-Snow-Series-HBO-Is-Developing-With-Game-of-Thrones-Kit-Harington-125.jpg?crop=0px%2C111px%2C1331px%2C700px&resize=1200%2C630&quality=86&strip=all",
        text: "Game of thrones jon snow is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!"

    },

    {
        name: "Samay Raina",
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2O98tXVR9CGcniDUYWY6xugv--SoDB97WTIBQmQNOa_u7GJPVbIU7cwE-aSHbnVeteT0&usqp=CAU",
        text: "Samay Raina makes me more productive and gets the job done in a fraction of the time. I'm glad I found Samay Raina."

    }


]

const imgEl= document.querySelector('img');
const textEl= document.querySelector('.text');
const nameEl= document.querySelector("#username");

let i=0;

function updateTestimonial(){
    const {name,photoUrl,text} = tastimonials[i];
    imgEl.src=photoUrl;
    textEl.innerText=text;
    nameEl.innerText=name;
    i++;
    if(i== tastimonials.length){
        i=0;
    }

    setTimeout(()=>{
        updateTestimonial();
    },3000)
    
}

updateTestimonial();
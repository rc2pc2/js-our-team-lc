const teamList = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

const cardsContainerEl = document.getElementById('cards-container');

for (let index = 0; index < teamList.length; index++) {
    const element = teamList[index];
    cardsContainerEl.innerHTML += `
    <div class="col-4 mb-5">
        <article class="my_card">
            <img class="img-fluid card-image mb-3" src="./img/${element.image}" alt="${element.name}'s picture">
            <div class="card-description p-2">
                <h3 class='card-name mb-1'>
                    ${element.name}
                </h3>
                <p class='card-role mb-3'>
                    ${element.role}
                </p>
            </div>
        </article>
    </div>`;
}
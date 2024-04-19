let sportsClub = {
    name: "Спортивный клуб",
    sports: ["Футболл", "Баскетболл", "Теннис"],
    coaches: ["Георгий", "Алексей"],
    members: 45,
};

for (let key in sportsClub) {
    console.log(`${key}: ${sportsClub[key]}`);
}

if (sportsClub.sports.length > 3) {
    console.log("Этот клуб имеет большой разнообразие видов спорта");
} else {
    console.log("Он специализируется на небольшом колличестве видов спорта");
}
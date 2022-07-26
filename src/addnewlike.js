const addNewLike = async (itemId) => {
  const pokemonLikes = document.getElementById(`${itemId}_pokemonLikes`);
  const colorHeart = document.getElementById(`${itemId}_colorHeart`);
  pokemonLikes.classList.remove('border-5');
  colorHeart.classList.add('border-5');
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Rc80fbrNCFUatmtBrttJ/likes/', {
    method: 'POST',
    body: JSON.stringify({ item_id: itemId }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default addNewLike;

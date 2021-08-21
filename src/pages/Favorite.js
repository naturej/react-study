const Favorite = () => {
  const favorites = localStorage.getItem('favorites');
  return (
    <main>
      <h1>Favorite Page</h1>
      favorites : {favorites}
    </main>
  );
};
export default Favorite;

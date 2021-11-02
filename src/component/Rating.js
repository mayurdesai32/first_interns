export default function Rating() {
  let rating = 5;
  return (
    <>
      {[...Array(5)].map(() => (
        <>
          f<i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </>
      ))}
    </>
  );
}

export default function Expressions() {
  const subtext = "This is my subtext";
  const reactLogoURL = "logo192.png";

  const duplicate = (value: number) => value * 2;

  return (
    <>
      <h1>Expressions example</h1>

      <h2>{subtext.toUpperCase()}</h2>
      <p>The double of 4 is equal to {duplicate(4)}.</p>
      <img src={reactLogoURL} alt="React Logo" />
    </>
  );
}

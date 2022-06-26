const ArticleProps = (props) => {
  const { headline, paragraph } = props;

  return (
    <>
      <h3>{headline}</h3>
      <p>{paragraph}</p>
    </>
  );
};

export const Pomodoro = () => {
  console.log("Hello");

  return (
    <div className="pomodoro">
      <h2>Props Example</h2>
      <ArticleProps headline="Props is such wow" paragraph="Very Reusable" />
    </div>
  );
};
